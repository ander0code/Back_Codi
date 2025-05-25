import prisma from '../../../config/database.js';
import { v4 as uuidv4 } from 'uuid';
import { processImage } from './ocrService.js';
import type { ProductoRecibo, Recibo } from '../models/types.js';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { buscarProductoEnQdrant } from './qdrantService.js';
import { clasificarImpactoProducto } from '../utils/impactClassifier.js';
import { analizarTextoOCRConAgente } from '../utils/langchainAgent.js'; 
import { mapearCategoriaASupermercado } from '../utils/categoryMapper.js';

export const analyzeReceiptImage = async (
  buffer: Buffer
): Promise<{ productos: ProductoRecibo[]; texto: string }> => {
  try {
    console.log('🚀 ===== INICIANDO ANÁLISIS DE RECIBO =====');
    
    // 1. Guardar la imagen temporalmente
    const tempDir = os.tmpdir();
    const tempPath = path.join(tempDir, `recibo_${Date.now()}.jpg`);
    console.log('💾 Guardando imagen temporal en:', tempPath);
    await fs.writeFile(tempPath, buffer);

    // 2. Procesar imagen con OCR
    console.log('📖 ===== INICIANDO PROCESO OCR =====');
    const ocrResult = await processImage(tempPath);
    const extractedText = ocrResult.text;
    console.log('📝 OCR completado. Confianza:', ocrResult.confidence);
    console.log('📄 Texto extraído (primeros 500 chars):', extractedText.substring(0, 500));

    // 3. Eliminar imagen temporal
    await fs.unlink(tempPath);
    console.log('🗑️ Imagen temporal eliminada');

    // 4. Analizar con agente LangChain
    console.log('🤖 ===== INICIANDO ANÁLISIS IA =====');
    const resultadoIA = await analizarTextoOCRConAgente(extractedText);
    console.log('🤖 ===== FIN ANÁLISIS IA =====');
    
    const supermercadoDetectado = resultadoIA.supermercado;
    const productosOCR = resultadoIA.productos;
    
    console.log('🏪 ===== RESUMEN DETECCIÓN =====');
    console.log('🏪 Supermercado detectado:', supermercadoDetectado);
    console.log('📦 Productos extraídos:', productosOCR.length);
    console.log('📋 Lista de productos detectados:');
    productosOCR.forEach((p, i) => {
      console.log(`   ${i+1}. ${p.nombre} (${p.categoria}${p.subcategoria ? ` - ${p.subcategoria}` : ''})`);
    });

    // 5. Procesar productos con mapeo de categorías
    console.log('🔄 ===== PROCESANDO PRODUCTOS =====');
    const productosDetectados: ProductoRecibo[] = [];

    for (let i = 0; i < productosOCR.length; i++) {
      const producto = productosOCR[i];
      console.log(`\n🔄 ===== PROCESANDO PRODUCTO ${i+1}/${productosOCR.length} =====`);
      console.log(`📦 Nombre: ${producto.nombre}`);
      
      const peso = producto.nombre.length * 0.01 + 0.2;
      console.log(`⚖️ Peso estimado: ${peso.toFixed(2)} kg`);

      // Mapear categoría a la válida del supermercado
      console.log(`🗺️ Iniciando mapeo de categoría...`);
      const { categoria: categoriaFinal, subcategoria } = mapearCategoriaASupermercado(
        producto.categoria,
        supermercadoDetectado
      );

      console.log(`📍 Categoría final: ${categoriaFinal}${subcategoria ? ` (${subcategoria})` : ''}`);

      // Buscar en Qdrant con categoría mapeada
      console.log(`🔍 ===== BÚSQUEDA EN QDRANT =====`);
      console.log(`🔍 Buscando: "${producto.nombre}" en supermercado: "${supermercadoDetectado}"`);
      
      const datosQdrant = await buscarProductoEnQdrant(producto.nombre, supermercadoDetectado);
      
      let co2Estimado = 0;
      let clasificacion: { nivel: 'bajo' | 'medio' | 'alto'; esEco: boolean } = { nivel: 'medio', esEco: false };

      if (datosQdrant && datosQdrant.co2e_estimado !== undefined) {
        co2Estimado = datosQdrant.co2e_estimado;
        console.log(`✅ ===== PRODUCTO ENCONTRADO EN QDRANT =====`);
        console.log(`💨 CO2 desde Qdrant: ${co2Estimado}`);
        console.log(`📊 Categoría Qdrant: ${datosQdrant.categoria}`);
        console.log(`🌍 Huella categoría: ${datosQdrant.huella_categoria}`);
        
        const co2PorKg = co2Estimado / peso;
        console.log(`📊 CO2 por kg: ${co2PorKg.toFixed(2)}`);
        
        clasificacion = clasificarImpactoProducto(
          supermercadoDetectado,
          categoriaFinal,
          co2PorKg
        );
        console.log(`🎯 Clasificación: Nivel=${clasificacion.nivel}, EcoAmigable=${clasificacion.esEco}`);
      } else {
        console.log(`⚠️ ===== PRODUCTO NO ENCONTRADO EN QDRANT =====`);
        console.log(`🔄 Aplicando fallback con categoría: ${categoriaFinal}`);
        
        // Fallback: calcular CO2 estimado basado en categoría
        co2Estimado = calcularCO2Fallback(categoriaFinal, peso);
        console.log(`💨 CO2 fallback calculado: ${co2Estimado}`);
        
        clasificacion = clasificarImpactoProducto(
          supermercadoDetectado,
          categoriaFinal,
          co2Estimado / peso
        );
        console.log(`🎯 Clasificación fallback: Nivel=${clasificacion.nivel}, EcoAmigable=${clasificacion.esEco}`);
      }

      const productoFinal = {
        id: 0,
        nombre_detectado: producto.nombre,
        productos: producto.nombre,
        cantidad: producto.cantidad,
        peso_estimado_kg: parseFloat(peso.toFixed(2)),
        co2e_estimado: parseFloat(co2Estimado.toFixed(2)),
        categoria_id: null,
        impacto: clasificacion.nivel,
        eco_amigable: clasificacion.esEco,
      };

      console.log(`✅ Producto procesado:`, {
        nombre: productoFinal.nombre_detectado,
        peso: productoFinal.peso_estimado_kg,
        co2: productoFinal.co2e_estimado,
        impacto: productoFinal.impacto,
        eco: productoFinal.eco_amigable
      });

      productosDetectados.push(productoFinal);
      console.log(`✅ ===== FIN PROCESAMIENTO PRODUCTO ${i+1} =====\n`);
    }

    console.log('🎉 ===== RESUMEN FINAL =====');
    console.log(`📦 Total productos procesados: ${productosDetectados.length}`);
    const productosConCO2 = productosDetectados.filter(p => p.co2e_estimado > 0);
    console.log(`💨 Productos con CO2 > 0: ${productosConCO2.length}`);
    const co2Total = productosDetectados.reduce((sum, p) => sum + (p.co2e_estimado || 0), 0);
    console.log(`🌍 CO2 total estimado: ${co2Total.toFixed(2)} kg`);
    const productosEco = productosDetectados.filter(p => p.eco_amigable);
    console.log(`♻️ Productos eco-amigables: ${productosEco.length}`);

    return {
      productos: productosDetectados,
      texto: extractedText,
    };
  } catch (error) {
    console.error('❌ ===== ERROR EN ANÁLISIS DE RECIBO =====');
    console.error('❌ Error:', error);
    console.error('❌ Stack:', error.stack);
    throw new Error('No se pudo analizar la imagen del recibo');
  }
};

// Función fallback para calcular CO2 cuando no se encuentra en Qdrant
const calcularCO2Fallback = (categoria: string, peso: number): number => {
  // Valores promedio de CO2 por categoría (kg CO2e/kg)
  const co2PorCategoria: Record<string, number> = {
    // Tottus
    'Congelados': 2.0,
    'Desayunos y Panadería': 1.5,
    'Despensa': 1.2,
    'Dulces y Snacks': 5.0,
    'Huevos': 4.0,
    'Jamón': 6.0,
    'Lácteos y Frescos': 2.5,
    'Aguas y Jugos': 0.3,
    'Cervezas': 1.0,
    'Espumantes y Vinos': 1.5,
    'Licores': 2.5,
    // Metro
    'Aves y Huevos': 2.5,
    'Carnes': 20.0,
    'Aves y Pescados': 2.0,
    'Desayuno': 1.5,
    'Embutidos y Fiambres': 6.0,
    'Frutas y Verduras': 1.0,
    'La Quesería': 10.0,
    'Leches': 1.5,
    'Mantequillas y Margarinas': 5.0,
    'Yogures': 1.6,
    // Otros supermercados - valores por defecto
    'Abarrotes': 1.5,
    'Bebidas': 0.8,
    'Limpieza': 1.0,
    'Cuidado Personal': 2.0
  };

  const co2Base = co2PorCategoria[categoria] || 1.5; // Valor por defecto
  return co2Base * peso;
};

/**
 * Guarda un recibo analizado en la base de datos
 * @param usuarioId ID del usuario
 * @param fuente Fuente del recibo (ej. 'upload', 'scan', etc.)
 * @param textoOriginal Texto original del recibo
 * @param productos Productos detectados
 * @returns Recibo creado
 */
export const saveReceipt = async (
  usuarioId: string, 
  fuente: string, 
  textoOriginal: string, 
  productos: ProductoRecibo[]
): Promise<Recibo> => {
  try {
    // Calcular CO2e total
    const co2eTotal = productos.reduce((total, producto) => {
      return total + (producto.co2e_estimado || 0);
    }, 0);

    const totalCO2 = productos.reduce((acc, p) => acc + (p.co2e_estimado || 0), 0);
    const totalProductos = productos.length;
    const productosEco = productos.filter(p => p.eco_amigable).length;
    const porcentajeEco = totalProductos ? productosEco / totalProductos : 0;

    let nivelRecibo: 'verde' | 'regular' | 'rojo' = 'rojo';
    if (porcentajeEco >= 0.7 && totalCO2 < 8) {
      nivelRecibo = 'verde';
    } else if (porcentajeEco >= 0.4 && totalCO2 < 15) {
      nivelRecibo = 'regular';
    }


    
    // Determinar si es un recibo verde
    const co2ePromedio = co2eTotal / (productos.length || 1);
    const esReciboVerde = co2ePromedio < 0.5; // Umbral a ajustar
    
    // Calcular puntuación de impacto
    const puntuacionImpacto = calcularPuntuacionImpacto(co2eTotal, productos.length);
    
    // Determinar evaluación cualitativa
    const evaluacionHuella = determinarEvaluacionHuella(co2eTotal);
      // Crear recibo en la base de datos
    const recibo = await prisma.recibos.create({
      data: {
        id: uuidv4(),
        usuario_id: usuarioId,
        fuente: fuente,
        texto_original: textoOriginal,
        fecha_recibo: new Date(),
        co2e_total: co2eTotal,
        es_recibo_verde: esReciboVerde,
        puntuacion_impacto: puntuacionImpacto,
        evaluacion_huella: evaluacionHuella,
        productos_recibo: {
          create: productos.map(producto => ({
            nombre_detectado: producto.nombre_detectado,
            productos: producto.productos,
            cantidad: producto.cantidad,
            peso_estimado_kg: producto.peso_estimado_kg,
            co2e_estimado: producto.co2e_estimado
          }))
        }
      },
      include: {
        productos_recibo: true
      }
    });
    
    return recibo as Recibo;
  } catch (error) {
    console.error('Error al guardar recibo:', error);
    throw new Error('No se pudo guardar el recibo');
  }
};

/**
 * Obtiene todos los recibos de un usuario
 * @param usuarioId ID del usuario
 * @returns Lista de recibos
 */
export const getRecibosByUsuarioId = async (usuarioId: string): Promise<Recibo[]> => {
  try {
    const recibos = await prisma.recibos.findMany({
      where: { usuario_id: usuarioId },
      include: {
        productos_recibo: true
      },
      orderBy: {
        fecha_recibo: 'desc'
      }
    });
    
    return recibos as Recibo[];
  } catch (error) {
    console.error('Error al obtener recibos:', error);
    throw new Error('No se pudieron obtener los recibos');
  }
};

/**
 * Obtiene un recibo por su ID
 * @param reciboId ID del recibo
 * @returns Datos del recibo
 */
export const getReciboById = async (reciboId: string): Promise<Recibo | null> => {
  try {
    const recibo = await prisma.recibos.findUnique({
      where: { id: reciboId },
      include: {
        productos_recibo: true
      }
    });
    
    return recibo as Recibo | null;
  } catch (error) {
    console.error(`Error al obtener recibo con ID ${reciboId}:`, error);
    throw new Error('No se pudo obtener el recibo');
  }
};

/**
 * Calcula la puntuación de impacto del recibo
 * @param co2eTotal CO2e total del recibo
 * @param cantidadProductos Cantidad de productos en el recibo
 * @returns Puntuación de 0 a 100
 */
const calcularPuntuacionImpacto = (co2eTotal: number, cantidadProductos: number): number => {
  if (cantidadProductos === 0) return 0;
  
  const co2ePromedioPorProducto = co2eTotal / cantidadProductos;
  
  // Establecer límites para la escala
  const limiteBajo = 0.2; // Muy bueno
  const limiteAlto = 2.0; // Muy malo
  
  // Calcular puntuación inversa (menor CO2e = mayor puntuación)
  if (co2ePromedioPorProducto <= limiteBajo) {
    return 100;
  } else if (co2ePromedioPorProducto >= limiteAlto) {
    return 0;
  } else {
    // Escala lineal entre los límites
    return Math.round(100 - ((co2ePromedioPorProducto - limiteBajo) / (limiteAlto - limiteBajo)) * 100);
  }
};

/**
 * Determina la evaluación cualitativa de la huella
 * @param co2eTotal CO2e total del recibo
 * @returns Descripción de la huella
 */
const determinarEvaluacionHuella = (co2eTotal: number): string => {
  if (co2eTotal < 1) {
    return 'Excelente';
  } else if (co2eTotal < 3) {
    return 'Buena';
  } else if (co2eTotal < 6) {
    return 'Regular';
  } else if (co2eTotal < 10) {
    return 'Alta';
  } else {
    return 'Muy alta';
  }
};

/**
 * Obtiene alternativas sostenibles para productos
 * @param productos Lista de productos
 * @returns Lista de alternativas
 */
export const getAlternativasSostenibles = async (productos: ProductoRecibo[]) => {
  // Aquí podrías implementar lógica para sugerir alternativas más sostenibles
  // Por ahora, devolvemos sugerencias fijas
  return productos.map(producto => ({
    producto_original: producto.nombre_detectado,
    alternativa_sugerida: `Versión sostenible de ${producto.nombre_detectado}`,
    reduccion_co2_estimada: producto.co2e_estimado ? producto.co2e_estimado * 0.3 : 0.1
  }));
};

/**
 * Obtiene estadísticas de impacto ambiental del usuario
 * @param usuarioId ID del usuario
 * @returns Datos de impacto
 */
export const getImpactoUsuario = async (usuarioId: string) => {
  try {
    // Obtener todos los recibos del usuario
    const recibos = await prisma.recibos.findMany({
      where: { usuario_id: usuarioId },
      orderBy: {
        fecha_recibo: 'desc'
      }
    });
      // Calcular CO2 acumulado
    const co2Acumulado = recibos.reduce((total: number, recibo: any) => {
      return total + (recibo.co2e_total || 0);
    }, 0);
      // Obtener cantidad de recibos verdes
    const recibosVerdes = recibos.filter((recibo: any) => recibo.es_recibo_verde).length;
    
    // Obtener el último recibo
    const ultimoRecibo = recibos.length > 0 ? recibos[0] : null;
    
    return {
      co2_acumulado: co2Acumulado,
      recibos_verdes: recibosVerdes,
      ultimo_recibo: ultimoRecibo
    };
  } catch (error) {
    console.error('Error al obtener impacto del usuario:', error);
    throw new Error('No se pudo obtener el impacto ambiental');
  }
};