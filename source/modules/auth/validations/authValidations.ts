import { LoginDto, RegisterDto } from '../interfaces/auth.interfaces.js';

/**
 * Validaciones para el módulo de autenticación
 * Centraliza todas las validaciones relacionadas con autenticación
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Valida datos de registro de usuario
 * @param data Datos de registro a validar
 * @returns Resultado de validación
 */
export const validateRegister = (data: RegisterDto): ValidationResult => {
  const errors: ValidationError[] = [];
  
  // Validar nombre
  if (!data.name || data.name.trim() === '') {
    errors.push({
      field: 'name',
      message: 'El nombre es obligatorio'
    });
  } else if (data.name.length < 2) {
    errors.push({
      field: 'name',
      message: 'El nombre debe tener al menos 2 caracteres'
    });
  }
  
  // Validar email
  if (!data.email || data.email.trim() === '') {
    errors.push({
      field: 'email',
      message: 'El correo electrónico es obligatorio'
    });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push({
        field: 'email',
        message: 'El formato del correo electrónico es inválido'
      });
    }
  }
  
  // Validar contraseña
  if (!data.password || data.password === '') {
    errors.push({
      field: 'password',
      message: 'La contraseña es obligatoria'
    });
  } else if (data.password.length < 6) {
    errors.push({
      field: 'password',
      message: 'La contraseña debe tener al menos 6 caracteres'
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Valida datos de inicio de sesión
 * @param data Datos de login a validar
 * @returns Resultado de validación
 */
export const validateLogin = (data: LoginDto): ValidationResult => {
  const errors: ValidationError[] = [];
  
  // Validar email
  if (!data.email || data.email.trim() === '') {
    errors.push({
      field: 'email',
      message: 'El correo electrónico es obligatorio'
    });
  }
  
  // Validar contraseña
  if (!data.password || data.password === '') {
    errors.push({
      field: 'password',
      message: 'La contraseña es obligatoria'
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};