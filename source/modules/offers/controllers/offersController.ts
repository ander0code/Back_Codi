import { Request, Response } from 'express';
import { contarRecibosVerdesRecientes, obtenerOfertasPorTipoRecibo } from '../services/offersService.js';

/**
 * @swagger
 * /api/offers:
 *   get:
 *     summary: Obtener ofertas disponibles
 *     description: Devuelve ofertas disponibles según el tipo de recibo (verde, amarillo o rojo)
 *     tags: [Ofertas]
 *     parameters:
 *       - in: query
 *         name: tipo
 *         schema:
 *           type: string
 *           enum: [verde, amarillo, rojo]
 *         required: false
 *         description: Tipo de recibo (verde, amarillo o rojo)
 *         default: verde
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de ofertas disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ofertas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Oferta'
 *                 recibos_verdes:
 *                   type: number
 *                   description: Cantidad de recibos verdes del usuario
 *                 mensaje:
 *                   type: string
 *                   description: Mensaje informativo
 *       400:
 *         description: Tipo de recibo inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export const getAvailableOffers = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // Obtener el tipo de recibo del query param (verde, amarillo, rojo)
    const tipoRecibo = req.query.tipo as string || 'verde';
    
    // Validar el tipo de recibo
    if (!['verde', 'amarillo', 'rojo'].includes(tipoRecibo)) {
      res.status(400).json({ 
        error: 'Tipo de recibo inválido', 
        mensaje: 'El tipo de recibo debe ser verde, amarillo o rojo' 
      });
      return;
    }
    
    // Verificar si el usuario tiene recibos verdes recientes
    const recibosVerdesCount = await contarRecibosVerdesRecientes(usuarioId);
    
    // Obtener ofertas según el tipo de recibo
    const ofertas = obtenerOfertasPorTipoRecibo(tipoRecibo);
    
    let mensaje = '';
    
    if (tipoRecibo === 'verde') {
      mensaje = 'Ofertas disponibles para recibos verdes';
      
      if (recibosVerdesCount === 0) {
        mensaje += ' (Nota: No tienes recibos verdes recientes, estas ofertas son de muestra)';
      } else {
        mensaje += ` (Tienes ${recibosVerdesCount} recibos verdes en los últimos 30 días)`;
      }
      
      res.status(200).json({ 
        ofertas, 
        recibos_verdes: recibosVerdesCount,
        mensaje
      });
    } else if (tipoRecibo === 'amarillo') {
      mensaje = 'Recibos amarillos tienen acceso limitado a ofertas. ¡Mejora tus hábitos para conseguir más beneficios!';
      
      res.status(200).json({ 
        ofertas,
        mensaje
      });
    } else {
      mensaje = 'Los recibos rojos no califican para ofertas. Intenta mejorar tus hábitos de compra para obtener un recibo verde en tu próxima compra.';
      
      res.status(200).json({ 
        ofertas,
        mensaje,
        recomendaciones: [
          'Prefiere productos locales y de temporada',
          'Evita productos con exceso de empaque',
          'Elige alternativas orgánicas o sostenibles'
        ]
      });
    }
  } catch (error) {
    console.error('Error al obtener ofertas:', error);
    res.status(500).json({ error: 'Error al obtener ofertas disponibles' });
  }
};