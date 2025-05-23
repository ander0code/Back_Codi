import { PrismaClient } from '@prisma/client';

// Enfoque más simple para inicializar Prisma
let prisma: PrismaClient;

try {
  prisma = new PrismaClient();
} catch (error) {
  console.error("Error al inicializar PrismaClient:", error);
  // No terminamos el proceso aquí para permitir que la app funcione sin DB
  // Pero creamos un objeto vacío para evitar errores
  prisma = {} as PrismaClient;
}

export const testConnection = async (): Promise<boolean> => {
  try {
    // Ejecutar una consulta simple para verificar la conexión
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Conexión a la base de datos establecida con éxito');
    return true;
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    return false;
  }
};

// Exportar el cliente
export default prisma;