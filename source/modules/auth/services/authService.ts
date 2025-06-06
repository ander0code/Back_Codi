import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../../config/database.js';
import { JWT_SECRET, getSignOptions } from '../../../config/jwt.js';

// Tipos para TypeScript
interface UserData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface UserResponse {
  id: string;
  nombre: string;
  correo: string;
}

interface AuthResponse {
  user: UserResponse;
  token: string;
}

/**
 * Registra un nuevo usuario en el sistema
 * @param userData Datos del usuario a registrar
 * @returns Usuario creado con token JWT
 */
export const register = async (userData: UserData): Promise<AuthResponse> => {
  try {
    // Verificar si el correo ya está registrado
    const existingUser = await prisma.usuarios.findFirst({
      where: {
        correo: userData.email
      }
    });

    if (existingUser) {
      throw new Error('El correo electrónico ya está registrado');
    }

    // Encriptar contraseña con bcryptjs
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(userData.password, salt);

    // Crear usuario con campos que coinciden con el esquema
    const newUser = await prisma.usuarios.create({
      data: {
        id: uuidv4(),
        nombre: userData.name,
        correo: userData.email,
        contrasena: hashedPassword,
        evita_ingredientes: []
      }
    });

    const user = newUser;

    // Generar token JWT para el nuevo usuario
    const tokenPayload = {
      id: user.id,
      email: user.correo || ''
    };

    // Usar SignOptions desde la configuración centralizada
    const token = jwt.sign(tokenPayload, JWT_SECRET, getSignOptions('access'));

    return {
      user: {
        id: user.id,
        nombre: user.nombre || '',
        correo: user.correo || ''
      },
      token
    };
  } catch (error) {
    console.error('Error en el registro:', error);
    throw error;
  }
};

/**
 * Autentica a un usuario en el sistema
 * @param loginData Credenciales de inicio de sesión
 * @returns Usuario autenticado y token de acceso
 */
export const login = async (loginData: LoginData): Promise<AuthResponse> => {
  try {
    // Buscar usuario por correo
    const userFound = await prisma.usuarios.findFirst({
      where: {
        correo: loginData.email
      }
    });

    const user = userFound;
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // Verificar contraseña con bcryptjs
    if (!user.contrasena) {
      throw new Error('Error en la configuración de la cuenta');
    }

    const isValidPassword = await bcryptjs.compare(loginData.password, user.contrasena);
    if (!isValidPassword) {
      throw new Error('Credenciales inválidas');
    }

    // Generar token JWT
    const tokenPayload = {
      id: user.id,
      email: user.correo || ''
    };

    // Usar SignOptions desde la configuración centralizada
    const token = jwt.sign(tokenPayload, JWT_SECRET, getSignOptions('access'));

    return {
      user: {
        id: user.id,
        nombre: user.nombre || '',
        correo: user.correo || ''
      },
      token
    };
  } catch (error) {
    console.error('Error en el login:', error);
    throw error;
  }
};

/**
 * Verifica si un token JWT es válido
 * @param token Token JWT
 * @returns Información del usuario asociado al token
 */
export const verifyToken = async (token: string): Promise<UserResponse> => {
  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    // Buscar usuario por ID
    const userFound = await prisma.usuarios.findUnique({
      where: {
        id: decoded.id
      }
    });

    const user = userFound;
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    return {
      id: user.id,
      nombre: user.nombre || '',
      correo: user.correo || ''
    };
  } catch (error) {
    console.error('Error verificando token:', error);
    throw new Error('Token inválido o expirado');
  }
};

/**
 * Procesa el cierre de sesión (puede invalidar tokens o limpiar sesiones)
 * @param userId ID del usuario que cierra sesión
 * @returns Mensaje de confirmación
 */
export const logout = async (userId: string): Promise<{ message: string }> => {
  try {
    // En una implementación real, aquí se podría:
    // 1. Agregar el token a una lista negra
    // 2. Eliminar tokens de la base de datos
    // 3. Limpiar sesiones del usuario

    return { message: 'Sesión cerrada exitosamente' };
  } catch (error) {
    console.error('Error en logout:', error);
    throw error;
  }
};