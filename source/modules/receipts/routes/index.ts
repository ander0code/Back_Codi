import express, { Router, Request } from 'express';
import type { Router as IRouter } from 'express';
import multer from 'multer';
import path from 'path';
import authenticateJWT from '../../../middleware/authMiddleware.js';
import * as receiptController from '../controllers/receiptController.js';

const router: IRouter = Router();

// Configuración de multer para subida de archivos
const storage = multer.memoryStorage(); // Usar memoria para procesamiento inmediato

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Tipos de archivo permitidos
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos JPG, PNG y PDF'));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB límite
  },
  fileFilter: fileFilter
});

// Aplicar autenticación JWT a todas las rutas
router.use(authenticateJWT);

/**
 * @swagger
 * /api/receipts/process:
 *   post:
 *     summary: Procesar imagen de recibo con OCR
 *     description: Analiza una imagen de recibo usando OCR y devuelve los productos detectados
 *     tags: [Receipts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - receipt
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
 *                   format: date
 *                 monto_total:
 *                   type: number
 *                 co2_generado:
 *                   type: number
 *                 texto_escaneado:
 *                   type: string
 *                 productos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       nombre:
 *                         type: string
 *                       co2:
 *                         type: number
 *                 nivel_impacto:
 *                   type: string
 *                   enum: [verde, amarillo, rojo]
 *       400:
 *         description: Error en la solicitud
 *       401:
 *         description: No autenticado
 *       413:
 *         description: Archivo muy grande
 *       500:
 *         description: Error del servidor
 */
router.post('/process', upload.single('receipt'), receiptController.uploadReceipt);

/**
 * @swagger
 * /api/receipts/save:
 *   post:
 *     summary: Guardar recibo procesado
 *     description: Guarda un recibo analizado en la base de datos
 *     tags: [Receipts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               establecimiento:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 format: date
 *               monto_total:
 *                 type: number
 *               co2_generado:
 *                 type: number
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *     responses:
 *       201:
 *         description: Recibo guardado exitosamente
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
router.post('/save', receiptController.saveReceipt);

/**
 * @swagger
 * /api/receipts:
 *   get:
 *     summary: Listar recibos del usuario
 *     description: Obtiene todos los recibos del usuario autenticado
 *     tags: [Receipts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Número de página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Cantidad de recibos por página
 *     responses:
 *       200:
 *         description: Lista de recibos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recibos:
 *                   type: array
 *                   items:
 *                     type: object
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
router.get('/', receiptController.getAllReceipts);

/**
 * @swagger
 * /api/receipts/latest:
 *   get:
 *     summary: Obtener último recibo
 *     description: Devuelve el último recibo procesado por el usuario
 *     tags: [Receipts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Último recibo del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: No se encontraron recibos
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
router.get('/latest', receiptController.getLatestReceipt);

/**
 * @swagger
 * /api/receipts/{id}:
 *   get:
 *     summary: Obtener detalles de un recibo
 *     description: Obtiene los detalles completos de un recibo específico
 *     tags: [Receipts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del recibo
 *     responses:
 *       200:
 *         description: Detalles del recibo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Recibo no encontrado
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', receiptController.getReceiptDetails);

export default router;