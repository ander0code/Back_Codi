import { Router } from 'express';
import type { Router as IRouter } from 'express';

const router: IRouter = Router();

// Ruta principal
router.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'API CODI - Sistema de Recibos Verdes', 
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    endpoints: [
      '/api/auth',
      '/api/user',
      '/api/receipts',
      '/api/offers'
    ]
  });
});

// Rutas adicionales pueden ser agregadas aquí
router.get('/status', (req, res) => {
  res.status(200).json({
    status: 'online',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

export default router;