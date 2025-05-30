import { Router, Request, Response } from 'express';
import type { Router as IRouter } from 'express';
import authenticateJWT from '../../../middleware/authMiddleware.js';
import * as usersController from '../controllers/usersController.js';

const router: IRouter = Router();

// Aplicar autenticación JWT a todas las rutas
router.use(authenticateJWT);





/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Obtener perfil del usuario
 *     description: Obtiene la información del perfil del usuario autenticado
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información del perfil del usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
router.get('/profile', (req: Request, res: Response) => {
  res.status(501).json({ message: 'Controller not implemented yet' });
});

/**
 * @swagger
 * /api/user/carbon-stats:
 *   get:
 *     summary: Obtener estadísticas de CO2
 *     description: Obtiene las estadísticas de impacto ambiental del usuario autenticado
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum: [week, month, year]
 *           default: month
 *         description: Período de tiempo para las estadísticas
 *     responses:
 *       200:
 *         description: Estadísticas de CO2 del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_co2:
 *                   type: number
 *                   description: Total de CO2 generado en kg
 *                 total_recibos:
 *                   type: integer
 *                   description: Número total de recibos
 *                 promedio_co2:
 *                   type: number
 *                   description: Promedio de CO2 por recibo
 *                 nivel_impacto:
 *                   type: string
 *                   enum: [bajo, medio, alto]
 *                   description: Nivel de impacto ambiental
 *                 productos_eco:
 *                   type: integer
 *                   description: Número de productos eco-friendly comprados
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
router.get('/carbon-stats', usersController.getCarbonStats);

/**
 * @swagger
 * /api/user/green-receipts:
 *   get:
 *     summary: Obtener cantidad de recibos verdes
 *     description: Devuelve la cantidad de recibos verdes del usuario autenticado
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
router.get('/green-receipts', usersController.getGreenReceipts);

/**
 * @swagger
 * /api/user/receipt-stats:
 *   get:
 *     summary: Obtener estadísticas de recibos
 *     description: Devuelve estadísticas sobre los recibos del usuario autenticado
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
router.get('/receipt-stats', usersController.getReceiptStats);

/**
 * @swagger
 * /api/user/update-profile:
 *   put:
 *     summary: Actualizar perfil del usuario
 *     description: Actualiza la información del perfil del usuario autenticado
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nuevo nombre del usuario
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Nuevo email del usuario
 *     responses:
 *       200:
 *         description: Perfil actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autenticado
 *       409:
 *         description: El email ya está en uso
 *       500:
 *         description: Error del servidor
 */
router.put('/update-profile', (req: Request, res: Response) => {
  res.status(501).json({ message: 'Controller not implemented yet' });
});

export default router;