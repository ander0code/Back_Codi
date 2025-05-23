/**
 * Interfaces para el módulo de autenticación
 */

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface TokenPayload {
  id: string;
  email: string;
}

export interface AuthUser {
  id: string;
  nombre: string;
  correo: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}