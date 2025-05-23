import { v4 as uuidv4 } from 'uuid';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../../config/database.js';
import { JWT_SECRET, getSignOptions } from '../../../config/jwt.js';
import { LoginDto, RegisterDto, TokenPayload, AuthUser } from '../interfaces/auth.interfaces.js';

/**
 * Registra un nuevo usuario en el sistema
 * @param userData Datos del usuario a registrar
 * @returns Usuario creado sin incluir contraseña
 */
export const register = async (userData: RegisterDto): Promise<AuthUser> => {
  try {
    // Verificar si el correo ya está registrado
    const existingUser = await prisma.usuarios.findFirst({
      where: {
        correo: userData.email
      } as any
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
      } as any
    });

    const user = newUser as any;
    
    return {
      id: user.id,
      nombre: user.nombre || '',
      correo: user.correo || ''
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
export const login = async (loginData: LoginDto): Promise<{ user: AuthUser, token: string }> => {
  try {
    // Buscar usuario por correo
    const userFound = await prisma.usuarios.findFirst({
      where: {
        correo: loginData.email
      } as any
    });

    const user = userFound as any;

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
    const tokenPayload: TokenPayload = {
      id: user.id,
      email: user.correo || ''
    };
      // Usar SignOptions tipado correctamente desde la configuración centralizada
    const token = jwt.sign(
      tokenPayload,
      JWT_SECRET,
      getSignOptions('access')
    );

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
export const verifyToken = async (token: string): Promise<AuthUser> => {
  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as TokenPayload;

    // Buscar usuario por ID
    const userFound = await prisma.usuarios.findUnique({
      where: {
        id: decoded.id
      }
    });
    
    const user = userFound as any;
    
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