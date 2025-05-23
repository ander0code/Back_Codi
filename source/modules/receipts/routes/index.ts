import { Router } from 'express';
import type { Router as IRouter } from 'express';
import * as receiptsController from '../controllers/receiptsController.js';

const router: IRouter = Router();

/**
 * @swagger
 * /api/receipts/latest:
 *   get:
 *     summary: Obtener el último recibo
 *     description: Devuelve información del último recibo procesado por el usuario
 *     tags: [Receipts]
 *     parameters:
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Información del último recibo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 establecimiento:
 *                   type: string
 *                 logo_id:
 *                   type: string
 *                 fecha:
 *                   type: string
 *                   format: date
 *                 monto_total:
 *                   type: number
 *                 co2_generado:
 *                   type: number
 *       404:
 *         description: No se encontraron recibos
 *       500:
 *         description: Error del servidor
 */
router.get('/latest', receiptsController.getLatestReceipt);

/**
 * @swagger
 * /api/receipts:
 *   get:
 *     summary: Obtener todos los recibos
 *     description: Devuelve lista de todos los recibos del usuario
 *     tags: [Receipts]
 *     parameters:
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de recibos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   establecimiento:
 *                     type: string
 *                   fecha:
 *                     type: string
 *                     format: date
 *                   monto_total:
 *                     type: number
 *                   co2_generado:
 *                     type: number
 *                   es_recibo_verde:
 *                     type: boolean
 *       500:
 *         description: Error del servidor
 */
router.get('/', receiptsController.getAllReceipts);

/**
 * @swagger
 * /api/receipts/{id}:
 *   get:
 *     summary: Obtener detalles de un recibo
 *     description: Devuelve información detallada de un recibo específico
 *     tags: [Receipts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del recibo
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Detalles del recibo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 establecimiento:
 *                   type: string
 *                 fecha:
 *                   type: string
 *                   format: date
 *                 monto_total:
 *                   type: number
 *                 co2_generado:
 *                   type: number
 *                 es_recibo_verde:
 *                   type: boolean
 *                 productos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       nombre:
 *                         type: string
 *                       cantidad:
 *                         type: number
 *                       co2:
 *                         type: number
 *       404:
 *         description: Recibo no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', receiptsController.getReceiptDetails);

/**
 * @swagger
 * /api/receipts/process:
 *   post:
 *     summary: Procesar imagen de recibo
 *     description: Analiza una imagen de recibo usando OCR y devuelve los productos detectados
 *     tags: [Receipts]
 *     parameters:
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               receipt:
 *                 type: string
 *                 format: binary
 *                 description: Imagen del recibo (JPEG, PNG, PDF)
 *     responses:
 *       200:
 *         description: Recibo analizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 establecimiento:
 *                   type: string
 *                 fecha:
 *                   type: string
 *                 monto_total:
 *                   type: number
 *                 co2_generado:
 *                   type: number
 *                 nivel_impacto:
 *                   type: string
 *                   enum: [verde, amarillo, rojo]
 *                 productos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       nombre:
 *                         type: string
 *                       co2:
 *                         type: number
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error del servidor
 */
router.post('/process', receiptsController.processReceiptImage);

/**
 * @swagger
 * /api/receipts/save:
 *   post:
 *     summary: Guardar recibo procesado
 *     description: Guarda un recibo previamente procesado en la base de datos
 *     tags: [Receipts]
 *     parameters:
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - establecimiento
 *               - fecha
 *             properties:
 *               id:
 *                 type: string
 *               establecimiento:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 format: date
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nombre:
 *                       type: string
 *                     cantidad:
 *                       type: number
 *                     co2:
 *                       type: number
 *     responses:
 *       201:
 *         description: Recibo guardado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/save', receiptsController.saveReceipt);

export default router;