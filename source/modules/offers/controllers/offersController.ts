import { Request, Response } from 'express';
import prisma from '../../../config/database.js';

/**
 * Obtener ofertas disponibles
 */
export const getAvailableOffers = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // En un futuro, esto vendría de la base de datos
    // Por ahora, devolvemos datos simulados
    const ofertas = [
      {
        id: '1',
        tipo: 'discount',
        titulo: 'Descuento en tienda - 10%',
        descripcion: 'Obtén un 10% de descuento en tu próxima compra en tiendas EcoMart'
      },
      {
        id: '2',
        tipo: 'product',
        titulo: 'Producto eco-amigable gratis',
        descripcion: 'Reclama una bolsa reutilizable en tu próxima compra'
      },
      {
        id: '3',
        tipo: 'donation',
        titulo: 'Donación a reforestación',
        descripcion: 'Haz una donación a nombre de la empresa para plantar 5 árboles'
      },
      {
        id: '4',
        tipo: 'discount',
        titulo: 'Descuento en productos eco',
        descripcion: '15% de descuento en productos con etiqueta eco-friendly'
      }
    ];
    
    res.status(200).json(ofertas);
  } catch (error) {
    console.error('Error al obtener ofertas:', error);
    res.status(500).json({ error: 'Error al obtener ofertas disponibles' });
  }
};