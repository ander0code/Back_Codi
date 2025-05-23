import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/auth.interfaces.js';
import { JWT_SECRET } from '../../../config/jwt.js';


export const verifyAuth = (
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  try {
    // Obtener token del header
    const token = req.headers['x-auth-token'] as string;
    
    // Verificar que exista un token
    if (!token) {
      res.status(401).json({ error: 'Acceso denegado. No se proporcionó token.' });
      return;
    }

    // Verificar el token
    try {      const decoded = jwt.verify(
        token, 
        JWT_SECRET
      ) as TokenPayload;
      
      // Agregar el usuario decodificado a la request para uso posterior
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Token inválido o expirado' });
    }
  } catch (error) {
    console.error('Error en middleware de autenticación:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/**
 * Middleware para simular autenticación en desarrollo
 * Permite pruebas sin token válido usando x-user-id en headers
 */
export const devAuth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Obtener userId de los headers
    const userId = req.header('x-user-id');
    
    // Si no hay userId, rechazar
    if (!userId) {
      res.status(401).json({ error: 'Se requiere x-user-id para desarrollo' });
      return;
    }
    
    // Crear objeto de usuario simulado
    req.user = {
      id: userId,
      email: 'dev@example.com'
    };
    
    next();
  } catch (error) {
    console.error('Error en middleware de desarrollo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};