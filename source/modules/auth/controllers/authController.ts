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
 *                 example: "Juan Perez"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario
 *                 example: "password123"
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
 *                       example: "123e4567-e89b-12d3-a456-426614174000"
 *                     nombre:
 *                       type: string
 *                       example: "Juan Perez"
 *                     correo:
 *                       type: string
 *                       format: email
 *                       example: "juan.perez@example.com"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Datos inválidos o el correo electrónico ya está registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "El correo electrónico ya está registrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error interno del servidor"
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
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario
 *                 example: "password123"
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
 *                       example: "123e4567-e89b-12d3-a456-426614174000"
 *                     nombre:
 *                       type: string
 *                       example: "Juan Perez"
 *                     correo:
 *                       type: string
 *                       format: email
 *                       example: "juan.perez@example.com"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Credenciales inválidas"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error interno del servidor"
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
 *                   example: "123e4567-e89b-12d3-a456-426614174000"
 *                 nombre:
 *                   type: string
 *                   example: "Juan Perez"
 *                 correo:
 *                   type: string
 *                   format: email
 *                   example: "juan.perez@example.com"
 *       401:
 *         description: Token no proporcionado o formato inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token no proporcionado"
 *       403:
 *         description: Token inválido o expirado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Token inválido o expirado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error interno del servidor"
 */
export const verify = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      res.status(401).json({ error: 'Token no proporcionado' });
      return;
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== 'bearer') {
      res.status(401).json({ error: 'Formato de token inválido. Debe ser "Bearer [token]".' });
      return;
    }
    const token = tokenParts[1];

    const user = await authService.verifyToken(token);
    
    res.status(200).json(user);
  } catch (error: any) {
    console.error('Error verificando token:', error);
    // Distinguir entre error de token inválido y otros errores
    if (error.message === 'Token inválido o expirado' || error.message.includes('jwt')) {
      res.status(403).json({ error: 'Token inválido o expirado' });
    } else {
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Cerrar sesión
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: [] # Indica que este endpoint requiere autenticación Bearer
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
 *                   example: "Sesión cerrada exitosamente"
 *       401:
 *         description: No autenticado (token no válido o no proporcionado)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No autenticado o token no válido"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error interno del servidor"
 */
export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    // En una implementación real con estado (ej. blacklist de tokens),
    // el token se obtendría y se invalidaría aquí.
    // Por ahora, como es stateless, solo devolvemos un mensaje.
    // El req.user es añadido por el middleware authenticateJWT si el token es válido.
    const userId = (req as any).user?.id; 

    if (!userId) {
      // Esto no debería ocurrir si authenticateJWT está correctamente aplicado en las rutas
      res.status(401).json({ error: 'No autenticado o token no válido' });
      return;
    }
    
    // Aquí podrías llamar a authService.logout(userId) si tuvieras lógica de logout en el servicio
    // const result = await authService.logout(userId); 

    res.status(200).json({ message: 'Sesión cerrada exitosamente' });
  } catch (error: any) {
    console.error('Error en logout:', error);
    res.status(500).json({ error: error.message || 'Error al cerrar sesión' });
  }
};