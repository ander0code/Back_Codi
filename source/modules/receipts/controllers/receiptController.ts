import type { Request, Response } from 'express';
import * as receiptService from '../services/receiptService.js';
import { buscarProductoEnQdrant } from '../services/qdrantService.js';

/**
 * Función para detectar el supermercado basado en el nombre del archivo o datos
 */
const detectSupermercado = (filename: string): string => {
  const nombreArchivo = filename.toLowerCase();
  
  if (nombreArchivo.includes('wong')) return 'wong';
  if (nombreArchivo.includes('vivanda')) return 'vivanda';
  if (nombreArchivo.includes('tottus')) return 'tottus';
  if (nombreArchivo.includes('plazavea') || nombreArchivo.includes('plaza')) return 'plazavea';
  if (nombreArchivo.includes('metro')) return 'metro';
  if (nombreArchivo.includes('flora')) return 'flora_y_fauna';
  
  // Valor por defecto
  return 'wong';
};

/**
 * Controlador para la página de inicio/dashboard
 */
export const getDashboard = async (req: Request, res: Response): Promise<void> => {
  try {
    // Obtener el ID del usuario desde el token JWT
    const usuarioId = req.user?.id;
    
    if (!usuarioId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }
    
    // Obtener estadísticas del usuario
    const impactoUsuario = await receiptService.getImpactoUsuario(usuarioId);
    
    res.status(200).json({
      message: 'Dashboard principal',
      co2_acumulado: impactoUsuario.co2_acumulado,
      recibos_verdes: impactoUsuario.recibos_verdes,
      ultima_factura: impactoUsuario.ultimo_recibo
    });
  } catch (error) {
    console.error('Error al obtener datos del dashboard:', error);
    res.status(500).json({ error: 'Error al obtener datos del dashboard' });
  }
};

/**
 * Controlador para subir y analizar un recibo
 */
export const uploadReceipt = async (req: Request, res: Response): Promise<void> => {
  try {
    const receiptFile = req.file;

    if (!receiptFile) {
      res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
      return;
    }    // Obtener el ID del usuario desde el token JWT autenticado
    const usuarioId = req.user?.id;
    
    if (!usuarioId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }
    
    console.log('🔄 Iniciando procesamiento de recibo...');
    console.log('👤 Usuario autenticado:', usuarioId);
    console.log('📄 Archivo:', receiptFile.originalname, 'Tamaño:', receiptFile.size);
    
    // Procesar imagen con OCR y obtener productos detectados
    const { productos, texto } = await receiptService.analyzeReceiptImage(receiptFile.buffer);

    console.log('📦 Productos detectados desde OCR:', productos.length);
    
    // Detectar supermercado desde el texto extraído del OCR
    const supermercadoDetectado = receiptService.detectSupermercado(texto);
    console.log('🏪 Supermercado detectado:', supermercadoDetectado);

    // Enriquecer productos con datos de Qdrant
    const productosEnriquecidos = await Promise.all(
      productos.map(async (producto) => {
        console.log(`🔍 Buscando en Qdrant: "${producto.nombre_detectado}"`);
        
        const datosQdrant = await buscarProductoEnQdrant(
          producto.nombre_detectado,
          supermercadoDetectado
        );

        if (datosQdrant) {
          console.log(`✅ Datos encontrados en Qdrant para "${producto.nombre_detectado}":`, datosQdrant);
          return {
            ...producto,
            co2e_estimado: datosQdrant.co2e_estimado,
            categoria: datosQdrant.categoria,
            huella_categoria: datosQdrant.huella_categoria,
            encontrado_en_qdrant: true
          };
        } else {
          console.log(`❌ No se encontraron datos en Qdrant para "${producto.nombre_detectado}"`);
          return {
            ...producto,
            co2e_estimado: 0.5, // Valor por defecto
            categoria: 'Sin categoría',
            huella_categoria: 0,
            encontrado_en_qdrant: false
          };
        }
      })
    );

    const impactoCO2 = productosEnriquecidos.reduce((total, producto) => {
      return total + (producto.co2e_estimado || 0);
    }, 0);

    const co2ePromedio = impactoCO2 / (productosEnriquecidos.length || 1);
    const esReciboVerde = co2ePromedio < 0.5;
    
    console.log('🌱 Evaluación del recibo:');
    console.log('💨 CO2 total:', impactoCO2.toFixed(2), 'kg');
    console.log('📊 CO2 promedio por producto:', co2ePromedio.toFixed(2), 'kg');
    console.log('♻️ Es recibo verde:', esReciboVerde ? 'SÍ' : 'NO');

    // Obtener alternativas sostenibles
    const alternativasSugeridas = await receiptService.getAlternativasSostenibles(productosEnriquecidos);

    // Guardar recibo en la base de datos
    const reciboGuardado = await receiptService.saveReceipt(
      usuarioId,
      supermercadoDetectado,
      texto,
      productosEnriquecidos
    );

    console.log('💾 Recibo guardado con ID:', reciboGuardado.id);

    // Formatear productos para respuesta
    const productosFormateados = productosEnriquecidos.map(producto => ({
      nombre: producto.nombre_detectado,
      cantidad: producto.cantidad || 1,
      peso_kg: parseFloat((producto.peso_estimado_kg || 0).toFixed(2)),
      co2_estimado: parseFloat((producto.co2e_estimado || 0).toFixed(2)),
      categoria: producto.categoria,
      encontrado_en_qdrant: producto.encontrado_en_qdrant || false
    }));

    // Calcular estadísticas del recibo
    const totalProductos = productosEnriquecidos.length;
    const productosConDatos = productosEnriquecidos.filter(p => p.encontrado_en_qdrant).length;
    const porcentajeCobertura = totalProductos > 0 ? Math.round((productosConDatos / totalProductos) * 100) : 0;

    res.status(201).json({
      success: true,
      message: 'Recibo analizado exitosamente',
      data: {
        recibo_id: reciboGuardado.id,
        supermercado: supermercadoDetectado,
        archivo: {
          nombre: receiptFile.originalname,
          tamaño_kb: Math.round(receiptFile.size / 1024),
          tipo: receiptFile.mimetype
        },
        analisis: {
          total_productos: totalProductos,
          productos_encontrados_qdrant: productosConDatos,
          porcentaje_cobertura: porcentajeCobertura,
          impacto_co2_total: parseFloat(impactoCO2.toFixed(2)),
          promedio_co2_por_producto: parseFloat(co2ePromedio.toFixed(2)),
          es_recibo_verde: esReciboVerde,
          puntos_verdes_obtenidos: esReciboVerde ? 10 : 0
        },
        productos: productosFormateados,
        recomendaciones: alternativasSugeridas.map(alt => ({
          producto: alt.producto_original,
          alternativa_sostenible: alt.alternativa_sugerida,
          ahorro_co2_estimado: parseFloat((alt.reduccion_co2_estimada || 0).toFixed(2))
        }))
      }
    });
  } catch (error) {
    console.error('❌ Error al procesar la factura:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al procesar la factura',
      message: 'Ocurrió un error durante el análisis del recibo. Por favor, intente nuevamente.'
    });
  }
};

/**
 * Controlador para obtener el impacto ambiental del usuario
 */
export const getImpact = async (req: Request, res: Response): Promise<void> => {
  try {
    // Obtener el ID del usuario desde el token JWT
    const usuarioId = req.user?.id;
    
    if (!usuarioId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }
    
    // Obtener todos los recibos del usuario
    const recibos = await receiptService.getRecibosByUsuarioId(usuarioId);
    
    // Agrupar recibos por mes
    type MonthData = { total: number; count: number };
    const recibosPorMes = recibos.reduce<Record<string, MonthData>>((acc, recibo) => {
      if (!recibo.fecha_recibo) return acc;
      
      const fecha = new Date(recibo.fecha_recibo);
      const mes = `${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
      
      if (!acc[mes]) {
        acc[mes] = { total: 0, count: 0 };
      }
      
      acc[mes].total += recibo.co2e_total || 0;
      acc[mes].count += 1;
      
      return acc;
    }, {});
    
    // Transformar a formato de respuesta
    const co2PorMes = Object.entries(recibosPorMes).map(([mes, data]) => ({
      mes,
      valor: data.total
    })).sort((a, b) => {
      const [mesA, anioA] = a.mes.split('/').map(Number);
      const [mesB, anioB] = b.mes.split('/').map(Number);
      return new Date(anioA, mesA - 1).getTime() - new Date(anioB, mesB - 1).getTime();
    });
    
    // Calcular comparación con el mes anterior
    let comparacionMensual: Record<string, number> = {};
    if (co2PorMes.length >= 2) {
      const mesActual = co2PorMes[co2PorMes.length - 1];
      const mesAnterior = co2PorMes[co2PorMes.length - 2];
      
      const diferencia = mesActual.valor - mesAnterior.valor;
      const porcentaje = mesAnterior.valor !== 0 
        ? (diferencia / mesAnterior.valor) * 100 
        : 0;
      
      comparacionMensual = {
        mes_actual: mesActual.valor,
        mes_anterior: mesAnterior.valor,
        diferencia: diferencia,
        porcentaje: Math.round(porcentaje * 100) / 100
      };
    }
    
    // Crear "logros" simulados
    const logros = recibos
      .filter(r => r.es_recibo_verde)
      .slice(0, 3)
      .map((recibo, index) => ({
        nombre: `Recibo Verde #${index + 1}`,
        descripcion: `Lograste un recibo verde con puntuación ${recibo.puntuacion_impacto}`,
        fecha: recibo.fecha_recibo || new Date()
      }));
    
    res.status(200).json({
      message: 'Impacto ambiental',
      co2_ahorrado_mensual: co2PorMes,
      logros: logros,
      comparacion_mensual: comparacionMensual
    });
  } catch (error) {
    console.error('Error al obtener datos de impacto:', error);
    res.status(500).json({ error: 'Error al obtener datos de impacto' });
  }
};

/**
 * Controlador para obtener el historial de recibos
 */
export const getHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    // Obtener el ID del usuario desde el token JWT
    const usuarioId = req.user?.id;
    
    if (!usuarioId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }
    
    // Obtener recibos del usuario
    const recibos = await receiptService.getRecibosByUsuarioId(usuarioId);
    
    res.status(200).json({
      message: 'Historial de compras',
      facturas: recibos.map(recibo => ({
        id: recibo.id,
        fecha: recibo.fecha_recibo,
        impacto_co2: recibo.co2e_total,
        es_recibo_verde: recibo.es_recibo_verde,
        puntuacion: recibo.puntuacion_impacto,
        evaluacion: recibo.evaluacion_huella,
        cantidad_productos: recibo.productos_recibo?.length || 0
      }))
    });
  } catch (error) {
    console.error('Error al obtener historial:', error);
    res.status(500).json({ error: 'Error al obtener historial' });
  }
};

/**
 * Controlador para obtener detalle de un recibo específico
 */
export const getReceiptDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    // Obtener detalle del recibo
    const recibo = await receiptService.getReciboById(id);
    
    if (!recibo) {
      res.status(404).json({ error: 'Recibo no encontrado' });
      return;
    }
    
    res.status(200).json({
      message: `Detalle de factura con id: ${id}`,
      id: recibo.id,
      fecha: recibo.fecha_recibo,
      productos: recibo.productos_recibo,
      impacto_co2: recibo.co2e_total,
      es_recibo_verde: recibo.es_recibo_verde,
      puntuacion_impacto: recibo.puntuacion_impacto,
      evaluacion_huella: recibo.evaluacion_huella
    });
  } catch (error) {
    console.error('Error al obtener detalle del recibo:', error);
    res.status(500).json({ error: 'Error al obtener detalle del recibo' });
  }
};

/**
 * Controlador para guardar un recibo procesado
 */
export const saveReceipt = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarioId = req.user?.id;
    
    if (!usuarioId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }
    
    const { establecimiento, fecha, monto_total, co2_generado, productos } = req.body;
    
    const reciboGuardado = await receiptService.saveReceipt(
      usuarioId,
      establecimiento,
      'Recibo guardado manualmente',
      productos || []
    );
    
    res.status(201).json({
      message: 'Recibo guardado exitosamente',
      recibo_id: reciboGuardado.id
    });
  } catch (error) {
    console.error('Error al guardar recibo:', error);
    res.status(500).json({ error: 'Error al guardar recibo' });
  }
};

/**
 * Controlador para obtener todos los recibos del usuario
 */
export const getAllReceipts = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarioId = req.user?.id;
    
    if (!usuarioId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }
    
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    
    const recibos = await receiptService.getRecibosByUsuarioId(usuarioId);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedRecibos = recibos.slice(startIndex, endIndex);
    
    res.status(200).json({
      recibos: paginatedRecibos,
      total: recibos.length,
      page: page
    });
  } catch (error) {
    console.error('Error al obtener recibos:', error);
    res.status(500).json({ error: 'Error al obtener recibos' });
  }
};

/**
 * Controlador para obtener el último recibo del usuario
 */
export const getLatestReceipt = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarioId = req.user?.id;
    
    if (!usuarioId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }
    
    const recibos = await receiptService.getRecibosByUsuarioId(usuarioId);
    
    if (recibos.length === 0) {
      res.status(404).json({ error: 'No se encontraron recibos' });
      return;
    }
    
    const ultimoRecibo = recibos.sort((a, b) => 
      new Date(b.fecha_recibo || 0).getTime() - new Date(a.fecha_recibo || 0).getTime()
    )[0];
    
    res.status(200).json(ultimoRecibo);
  } catch (error) {
    console.error('Error al obtener último recibo:', error);
    res.status(500).json({ error: 'Error al obtener último recibo' });
  }
};

/**
 * Controlador para obtener detalles de un recibo específico
 */
export const getReceiptDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const recibo = await receiptService.getReciboById(id);
    
    if (!recibo) {
      res.status(404).json({ error: 'Recibo no encontrado' });
      return;
    }
    
    res.status(200).json(recibo);
  } catch (error) {
    console.error('Error al obtener detalles del recibo:', error);
    res.status(500).json({ error: 'Error al obtener detalles del recibo' });
  }
};