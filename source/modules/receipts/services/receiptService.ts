import prisma from '../../../config/database.js';
import { v4 as uuidv4 } from 'uuid';
import { processImage } from './ocrService.js';
import type { ProductoRecibo, Recibo, Alternativa } from '../models/types.js';

/**
 * Analiza una imagen de recibo para detectar productos
 * @param imagePath Ruta de la imagen
 * @returns Lista de productos detectados
 */
export const analyzeReceiptImage = async (imagePath: string): Promise<ProductoRecibo[]> => {
  try {
    // En un entorno real, usaríamos OCR para extraer texto
    // const ocrResult = await processImage(imagePath);
    // const extractedText = ocrResult.text;
    
    // Simulamos la detección de productos sin depender de categorías
    const productosDetectados: ProductoRecibo[] = [
      {
        id: 0,
        nombre_detectado: 'Producto A',
        productos: 'Ejemplo de producto',
        cantidad: 1,
        peso_estimado_kg: 0.5,
        co2e_estimado: 0.25
      },
      {
        id: 0,
        nombre_detectado: 'Producto B',
        productos: 'Ejemplo de producto',
        cantidad: 2,
        peso_estimado_kg: 0.3,
        co2e_estimado: 0.15
      },
      {
        id: 0,
        nombre_detectado: 'Producto C',
        productos: 'Ejemplo de producto',
        cantidad: 1,
        peso_estimado_kg: 0.8,
        co2e_estimado: 0.4
      }
    ];
    
    return productosDetectados;
  } catch (error) {
    console.error('Error al analizar imagen de recibo:', error);
    throw new Error('No se pudo analizar la imagen del recibo');
  }
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
export const getAlternativasSostenibles = async (productos: ProductoRecibo[]): Promise<Alternativa[]> => {
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