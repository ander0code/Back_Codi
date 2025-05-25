import { Request, Response, NextFunction } from 'express';

/**
 * Middleware adicional para garantizar headers CORS específicos para móviles
 */
export const mobileCorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-user-id');
  
  // Manejo de peticiones OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(204).send();
  }
  
  next();
};