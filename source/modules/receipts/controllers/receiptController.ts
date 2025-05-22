import type { Request, Response } from 'express';
import * as receiptService from '../services/receiptService.js';

/**
 * Controlador para la página de inicio/dashboard
 */
export const getDashboard = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
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
    // Obtener el archivo subido por el middleware multer
    const receiptFile = req.file;
    
    if (!receiptFile) {
      res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
      return;
    }
    
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // Procesar la imagen con el servicio OCR
    const productosDetectados = await receiptService.analyzeReceiptImage(receiptFile.path);
    
    // Calcular impacto total
    const impactoCO2 = productosDetectados.reduce((total, producto) => {
      return total + (producto.co2e_estimado || 0);
    }, 0);
    
    // Determinar si es recibo verde (promedio < 0.5 kg CO2e)
    const co2ePromedio = impactoCO2 / (productosDetectados.length || 1);
    const esReciboVerde = co2ePromedio < 0.5;
    
    // Obtener alternativas sostenibles
    const alternativasSugeridas = await receiptService.getAlternativasSostenibles(productosDetectados);
    
    // Guardar el recibo en la base de datos
    const reciboGuardado = await receiptService.saveReceipt(
      usuarioId,
      'upload',
      'Texto extraído del recibo', // Aquí iría el texto real extraído por OCR
      productosDetectados
    );
    
    res.status(201).json({
      message: 'Factura analizada correctamente',
      recibo_id: reciboGuardado.id,
      file: {
        filename: receiptFile.filename,
        mimetype: receiptFile.mimetype,
        size: receiptFile.size
      },
      productos_detectados: productosDetectados,
      impacto_co2: impactoCO2,
      es_recibo_verde: esReciboVerde,
      puntos_obtenidos: esReciboVerde ? 10 : 0, // Simple: 10 puntos por recibo verde
      alternativas_sugeridas: alternativasSugeridas
    });
  } catch (error) {
    console.error('Error al procesar la factura:', error);
    res.status(500).json({ error: 'Error al procesar la factura' });
  }
};

/**
 * Controlador para obtener el impacto ambiental del usuario
 */
export const getImpact = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
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
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
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