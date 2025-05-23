import { Router } from 'express';
import type { Router as IRouter } from 'express';
import * as offersController from '../controllers/offersController.js';

const router: IRouter = Router();

/**
 * @swagger
 * /api/offers:
 *   get:
 *     summary: Obtener ofertas disponibles
 *     description: Devuelve las ofertas disponibles según el tipo de recibo (verde, amarillo o rojo)
 *     tags: [Offers]
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
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       tipo:
 *                         type: string
 *                         enum: [discount, product, donation, education, coupon]
 *                       titulo:
 *                         type: string
 *                       descripcion:
 *                         type: string
 *                       tipo_recibo:
 *                         type: string
 *                         enum: [verde, amarillo, rojo]
 *                       codigo:
 *                         type: string
 *                       porcentaje_descuento:
 *                         type: number
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
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get('/', offersController.getAvailableOffers);

/**
 * @swagger
 * /api/offers/{id}:
 *   get:
 *     summary: Obtener detalles de una oferta
 *     description: Devuelve información detallada de una oferta específica
 *     tags: [Offers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la oferta
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Detalles de la oferta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 tipo:
 *                   type: string
 *                   enum: [discount, product, donation, education, coupon]
 *                 titulo:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *                 tipo_recibo:
 *                   type: string
 *                   enum: [verde, amarillo, rojo]
 *                 codigo:
 *                   type: string
 *                 porcentaje_descuento:
 *                   type: number
 *                 valido_hasta:
 *                   type: string
 *                   format: date
 *       404:
 *         description: Oferta no encontrada
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'Detalles de oferta endpoint' });
});

/**
 * @swagger
 * /api/offers/redeem/{id}:
 *   post:
 *     summary: Canjear una oferta
 *     description: Canjea una oferta disponible para el usuario
 *     tags: [Offers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la oferta
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Oferta canjeada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *                 codigo_canje:
 *                   type: string
 *       400:
 *         description: No cumple con los requisitos para canjear la oferta
 *       404:
 *         description: Oferta no encontrada
 *       500:
 *         description: Error del servidor
 */
router.post('/redeem/:id', (req, res) => {
  res.status(200).json({ message: 'Canjear oferta endpoint' });
});

export default router;