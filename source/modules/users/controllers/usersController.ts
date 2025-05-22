import { Request, Response } from 'express';
import * as receiptService from '../../receipts/services/receiptService.js';

/**
 * Obtener estadísticas de CO2 del usuario
 */
export const getCarbonStats = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // Obtener recibos del usuario
    const recibos = await receiptService.getRecibosByUsuarioId(usuarioId);
    
    // Calcular CO2 acumulado
    const co2Acumulado = recibos.reduce((total, recibo) => {
      return total + (recibo.co2e_total || 0);
    }, 0);
    
    // En un entorno real, el objetivo podría venir de la configuración del usuario
    const objetivoCO2 = 150; // Kg
    
    res.status(200).json({
      co2_acumulado: parseFloat(co2Acumulado.toFixed(2)),
      objetivo_co2: objetivoCO2,
      porcentaje_completado: parseFloat(((co2Acumulado / objetivoCO2) * 100).toFixed(2))
    });
  } catch (error) {
    console.error('Error al obtener estadísticas de CO2:', error);
    res.status(500).json({ error: 'Error al obtener estadísticas de CO2' });
  }
};

/**
 * Obtener recibos verdes del usuario
 */
export const getGreenReceipts = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // Obtener recibos del usuario
    const recibos = await receiptService.getRecibosByUsuarioId(usuarioId);
    
    // Contar recibos verdes
    const recibosVerdes = recibos.filter(recibo => recibo.es_recibo_verde).length;
    
    res.status(200).json({
      recibos_verdes: recibosVerdes
    });
  } catch (error) {
    console.error('Error al obtener recibos verdes:', error);
    res.status(500).json({ error: 'Error al obtener recibos verdes' });
  }
};

/**
 * Obtener estadísticas de recibos del usuario
 */
export const getReceiptStats = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // Obtener recibos del usuario
    const recibos = await receiptService.getRecibosByUsuarioId(usuarioId);
    
    // Calcular estadísticas
    const totalCompras = recibos.length;
    const recibosVerdes = recibos.filter(recibo => recibo.es_recibo_verde).length;
    
    const co2Total = recibos.reduce((total, recibo) => {
      return total + (recibo.co2e_total || 0);
    }, 0);
    
    // Categorizar por nivel de impacto
    const comprasVerdes = recibosVerdes;
    const comprasAltoImpacto = recibos.filter(recibo => 
      !recibo.es_recibo_verde && (recibo.co2e_total || 0) > 10
    ).length;
    const comprasRegulares = totalCompras - comprasVerdes - comprasAltoImpacto;
    
    res.status(200).json({
      total_compras: totalCompras,
      recibos_verdes: recibosVerdes,
      co2_total: parseFloat(co2Total.toFixed(2)),
      por_tipo_impacto: {
        verde: comprasVerdes,
        regular: comprasRegulares,
        alto: comprasAltoImpacto
      }
    });
  } catch (error) {
    console.error('Error al obtener estadísticas de recibos:', error);
    res.status(500).json({ error: 'Error al obtener estadísticas de recibos' });
  }
};