import { Request, Response } from 'express';
import * as authService from '../services/authService.js';
import { LoginDto, RegisterDto } from '../interfaces/auth.interfaces.js';
import { validateLogin, validateRegister } from '../validations/authValidations.js';

/**
 * Controlador para registrar un nuevo usuario
 * @route POST /api/auth/register
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData: RegisterDto = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };    // Validar datos usando la capa de validación
    const validationResult = validateRegister(userData);
    if (!validationResult.isValid) {
      res.status(400).json({ 
        error: 'Datos de registro inválidos',
        errors: validationResult.errors
      });
      return;
    }

    const user = await authService.register(userData);
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      userId: user.id
    });
  } catch (error: any) {
    console.error('Error en registro:', error);
    
    if (error.message === 'El correo electrónico ya está registrado') {
      res.status(409).json({ error: error.message });
      return;
    }
    
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

/**
 * Controlador para iniciar sesión
 * @route POST /api/auth/login
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const loginData: LoginDto = {
      email: req.body.email,
      password: req.body.password
    };    // Validar datos
    const validationResult = validateLogin(loginData);
    if (!validationResult.isValid) {
      res.status(400).json({ 
        error: 'Datos de inicio de sesión inválidos',
        errors: validationResult.errors
      });
      return;
    }

    const { user, token } = await authService.login(loginData);
    res.status(200).json({ token, user });
  } catch (error: any) {
    console.error('Error en login:', error);
    
    if (error.message === 'Credenciales inválidas') {
      res.status(401).json({ error: error.message });
      return;
    }
    
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

/**
 * Controlador para verificar token
 * @route GET /api/auth/verify
 */
export const verify = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.header('x-auth-token');
    
    if (!token) {
      res.status(401).json({ error: 'No se proporcionó token' });
      return;
    }
    
    const user = await authService.verifyToken(token);
    res.status(200).json({ valid: true, user });
  } catch (error: any) {
    console.error('Error verificando token:', error);
    res.status(401).json({ valid: false, error: error.message });
  }
};

/**
 * Controlador para cerrar sesión
 * @route POST /api/auth/logout
 */
export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id || (req.header('x-user-id') as string);
    
    if (!userId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }
    
    const result = await authService.logout(userId);
    res.status(200).json(result);
  } catch (error: any) {
    console.error('Error en logout:', error);
    res.status(500).json({ error: 'Error al cerrar sesión' });
  }
};