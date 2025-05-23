/**
 * Tipos personalizados para la interacción con Prisma
 * Este archivo ayuda a mapear los campos del esquema Prisma a los tipos de negocio
 */

// Tipo para la creación de usuario que coincide con esquema de Prisma
export type UsuarioCreateData = {
  id: string;
  nombre: string | null;
  correo: string | null; 
  contrasena: string | null;
  evita_ingredientes: string[];
  objetivo_consumo?: string | null;
  estilo_vida?: string | null;
  prefiere_supermercado?: string | null;
  precio_prioridad?: boolean | null;
  empaques_sostenibles?: boolean | null;
};

// Tipo para la consulta de usuario que coincide con esquema de Prisma
export type UsuarioWhereQuery = {
  correo?: {
    equals?: string;
  };
  id?: string;
};