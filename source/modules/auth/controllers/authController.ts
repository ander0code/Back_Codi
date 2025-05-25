import { Request, Response } from 'express';
import * as authService from '../services/authService.js';

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     correo:
 *                       type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Datos inválidos o usuario ya existe
 *       500:
 *         description: Error del servidor
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Validar datos mínimos
    if (!name || !email || !password) {
      res.status(400).json({ error: 'Todos los campos son obligatorios' });
      return;
    }

    const result = await authService.register({ name, email, password });

    res.status(201).json(result);
  } catch (error: any) {
    console.error('Error en registro:', error);
    res.status(400).json({ error: error.message || 'Error en el registro' });
  }
};

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     correo:
 *                       type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error del servidor
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validar datos mínimos
    if (!email || !password) {
      res.status(400).json({ error: 'Email y contraseña son obligatorios' });
      return;
    }

    const result = await authService.login({ email, password });

    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error en login:', error);
    res.status(400).json({ error: error.message || 'Error en el inicio de sesión' });
  }
};

/**
 * @swagger
 * /api/auth/verify:
 *   get:
 *     summary: Verificar token JWT
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token válido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 nombre:
 *                   type: string
 *                 correo:
 *                   type: string
 *       401:
 *         description: Token no proporcionado
 *       403:
 *         description: Token inválido
 *       500:
 *         description: Error del servidor
 */
export const verify = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      res.status(401).json({ error: 'Token no proporcionado' });
      return;
    }

    const token = authHeader.split(' ')[1];
    
    if (!token) {
      res.status(401).json({ error: 'Formato de token inválido' });
      return;
    }

    const user = await authService.verifyToken(token);
    
    res.status(200).json(user);
  } catch (error: any) {
    console.error('Error verificando token:', error);
    res.status(403).json({ error: error.message || 'Token inválido' });
  }
};

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Cerrar sesión
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sesión cerrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: No autenticado
 *       500:
 *         description: Error del servidor
 */
export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    // Obtener el ID del usuario del token
    const userId = (req as any).user?.id;
    
    if (!userId) {
      res.status(401).json({ error: 'No autenticado' });
      return;
    }

    const result = await authService.logout(userId);
    
    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error en logout:', error);
    res.status(500).json({ error: error.message || 'Error al cerrar sesión' });
  }
};