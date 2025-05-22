import { Router } from 'express';
import type { Router as IRouter } from 'express';
import { upload, handleUploadErrors } from '../middleware/uploadMiddleware.js';
import { 
  getLatestReceipt,
  getAllReceipts,
  getReceiptDetails,
  processReceiptImage,
  saveReceipt
} from '../controllers/receiptsController.js';

const router: IRouter = Router();

// Obtener el último recibo del usuario
router.get('/latest', getLatestReceipt);

// Obtener todos los recibos del usuario
router.get('/', getAllReceipts);

// Obtener detalles de un recibo específico
router.get('/:id', getReceiptDetails);

// Procesar imagen de recibo (OCR + análisis)
router.post('/process', upload.single('receipt'), handleUploadErrors, processReceiptImage);

// Guardar recibo analizado
router.post('/save', saveReceipt);

export default router;