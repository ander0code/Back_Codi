import { Router } from 'express';
import type { Router as IRouter } from 'express';
import { getAvailableOffers } from '../controllers/offersController.js';

const router: IRouter = Router();

// Obtener ofertas disponibles
router.get('/', getAvailableOffers);

export default router;