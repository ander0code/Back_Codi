/**
 * Configuración para JWT (JSON Web Tokens)
 * Centraliza la configuración de JWT para mejor mantenimiento
 */
import { SignOptions } from 'jsonwebtoken';

// Obtener secret desde variables de entorno o usar un valor por defecto
export const JWT_SECRET = process.env.JWT_SECRET || 'codi_secret_key_should_be_changed_in_production';

// Configuración de duración de tokens
export const JWT_EXPIRES_IN = '24h';

// Configuración de refrescamiento de tokens (si se implementa)
export const JWT_REFRESH_EXPIRES_IN = '7d';

// Función para generar opciones de firma para diferentes tipos de tokens
export const getSignOptions = (type: 'access' | 'refresh' = 'access'): SignOptions => {
  return {
    expiresIn: type === 'access' ? JWT_EXPIRES_IN : JWT_REFRESH_EXPIRES_IN,
  };
};