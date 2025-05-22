import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


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