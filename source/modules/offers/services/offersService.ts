import prisma from '../../../config/database.js';

export interface Oferta {
  id: string;
  tipo: 'discount' | 'product' | 'donation' | 'education' | 'coupon';
  titulo: string;
  descripcion: string;
  tipo_recibo: 'verde' | 'amarillo' | 'rojo';
  codigo?: string;
  valido_hasta?: string;
  porcentaje_descuento?: number;
}

/**
 * Verifica si un usuario tiene recibos verdes recientes
 * @param usuarioId ID del usuario
 * @returns Número de recibos verdes en los últimos 30 días
 */
export const contarRecibosVerdesRecientes = async (usuarioId: string): Promise<number> => {
  try {
    const recibosVerdes = await prisma.recibos.count({
      where: {
        usuario_id: usuarioId,
        es_recibo_verde: true,
        fecha_recibo: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        }
      }
    });
    return recibosVerdes;
  } catch (error) {
    console.error('Error al contar recibos verdes:', error);
    return 0;
  }
};

/**
 * Obtiene ofertas disponibles según el tipo de recibo
 * @param tipoRecibo Tipo de recibo (verde, amarillo, rojo)
 * @returns Lista de ofertas disponibles
 */
export const obtenerOfertasPorTipoRecibo = (tipoRecibo: string): Oferta[] => {
  // En el futuro, estas ofertas vendrían de la base de datos
  
  if (tipoRecibo === 'verde') {
    // Ofertas premium para recibos verdes
    return [
      {
        id: '1',
        tipo: 'discount',
        titulo: 'Descuento en tienda - 10%',
        descripcion: 'Obtén un 10% de descuento en tu próxima compra en tiendas EcoMart',
        tipo_recibo: 'verde',
        codigo: 'ECO10VERDE',
        valido_hasta: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        porcentaje_descuento: 10
      },
      {
        id: '2',
        tipo: 'product',
        titulo: 'Producto eco-amigable gratis',
        descripcion: 'Reclama una bolsa reutilizable en tu próxima compra',
        tipo_recibo: 'verde',
        codigo: 'ECOBOLSA',
        valido_hasta: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        id: '3',
        tipo: 'donation',
        titulo: 'Donación a reforestación',
        descripcion: 'Haz una donación a nombre de la empresa para plantar 5 árboles',
        tipo_recibo: 'verde',
        codigo: 'ECOARBOLES',
        valido_hasta: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        id: '4',
        tipo: 'discount',
        titulo: 'Descuento en productos eco',
        descripcion: '15% de descuento en productos con etiqueta eco-friendly',
        tipo_recibo: 'verde',
        codigo: 'ECO15VERDE',
        valido_hasta: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        porcentaje_descuento: 15
      }
    ];
  } else if (tipoRecibo === 'amarillo') {
    // Ofertas educativas para recibos amarillos
    return [
      {
        id: '5',
        tipo: 'education',
        titulo: 'Guía de compras sostenibles',
        descripcion: 'Descarga nuestra guía gratuita para hacer compras más sostenibles',
        tipo_recibo: 'amarillo'
      },
      {
        id: '6',
        tipo: 'coupon',
        titulo: 'Pequeño descuento eco',
        descripcion: '5% de descuento en productos eco-friendly - ¡Mejora tus hábitos para obtener mejores ofertas!',
        tipo_recibo: 'amarillo',
        codigo: 'MEJORAECO5',
        porcentaje_descuento: 5
      }
    ];
  } else {
    // No hay ofertas para recibos rojos
    return [];
  }
};