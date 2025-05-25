import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/jwt.js';

// Extender el tipo Request para incluir el usuario
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        [key: string]: any;
      };
    }
  }
}

/**
 * Middleware para verificar autenticación JWT
 * Extrae la información del usuario del token y la añade a req.user
 */
export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Si es una solicitud OPTIONS, permitir pasar para habilitar CORS
    if (req.method === 'OPTIONS') {
      return next();
    }

    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      res.status(401).json({ error: 'Token de autenticación requerido' });
      return;
    }

    // Formato esperado: Bearer token
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      res.status(401).json({ error: 'Formato de token inválido. Use: Bearer <token>' });
      return;
    }

    // Verificar el token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Token inválido o expirado' });
      }
      
      // Añadir información del usuario al objeto de solicitud
      req.user = decoded as { id: string; email: string; [key: string]: any };
      next();
    });
  } catch (error) {
    console.error('Error en la autenticación:', error);
    res.status(500).json({ error: 'Error interno de autenticación' });
  }
};

export default authenticateJWT;