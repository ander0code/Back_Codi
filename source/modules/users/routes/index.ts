import { Router } from 'express';
import type { Router as IRouter } from 'express';
import { 
  getCarbonStats,
  getGreenReceipts,
  getReceiptStats
} from '../controllers/usersController.js';

const router: IRouter = Router();

// Obtener estadísticas de CO2 del usuario
router.get('/carbon-stats', getCarbonStats);

// Obtener recibos verdes del usuario
router.get('/green-receipts', getGreenReceipts);

// Obtener estadísticas de recibos del usuario
router.get('/receipt-stats', getReceiptStats);

export default router;