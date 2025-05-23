import { Router } from 'express';
import type { Router as IRouter } from 'express';
import * as usersController from '../controllers/usersController.js';

const router: IRouter = Router();

/**
 * @swagger
 * /api/user/carbon-stats:
 *   get:
 *     summary: Obtener estadísticas de CO2
 *     description: Devuelve las estadísticas de CO2 acumulado y objetivo del usuario
 *     tags: [User]
 *     parameters:
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Estadísticas de CO2
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 co2_acumulado:
 *                   type: number
 *                   description: CO2 acumulado en kg
 *                 objetivo_co2:
 *                   type: number
 *                   description: Objetivo de CO2 en kg
 *                 porcentaje_completado:
 *                   type: number
 *                   description: Porcentaje completado del objetivo
 *       500:
 *         description: Error del servidor
 */
router.get('/carbon-stats', usersController.getCarbonStats);

/**
 * @swagger
 * /api/user/green-receipts:
 *   get:
 *     summary: Obtener cantidad de recibos verdes
 *     description: Devuelve la cantidad de recibos verdes del usuario
 *     tags: [User]
 *     parameters:
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Cantidad de recibos verdes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recibos_verdes:
 *                   type: integer
 *                   description: Número de recibos verdes
 *       500:
 *         description: Error del servidor
 */
router.get('/green-receipts', usersController.getGreenReceipts);

/**
 * @swagger
 * /api/user/receipt-stats:
 *   get:
 *     summary: Obtener estadísticas de recibos
 *     description: Devuelve estadísticas sobre los recibos del usuario
 *     tags: [User]
 *     parameters:
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Estadísticas de recibos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_compras:
 *                   type: integer
 *                   description: Número total de compras
 *                 recibos_verdes:
 *                   type: integer
 *                   description: Número de recibos verdes
 *                 co2_total:
 *                   type: number
 *                   description: Total de CO2 generado
 *                 por_tipo_impacto:
 *                   type: object
 *                   properties:
 *                     verde:
 *                       type: integer
 *                     regular:
 *                       type: integer
 *                     alto:
 *                       type: integer
 *       500:
 *         description: Error del servidor
 */
router.get('/receipt-stats', usersController.getReceiptStats);

export default router;