import { app, setupRoutes } from './app.js';
import { testConnection } from './config/database.js';

// Puerto por defecto o valor de variables de entorno
const PORT = process.env.PORT || 3000;

// Configurar rutas antes de iniciar el servidor
const startServer = async () => {
  try {
    // Probar la conexión a la base de datos
    await testConnection();
    
    // Configurar todas las rutas
    await setupRoutes();
    
    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`API Health Check: http://localhost:${PORT}/health`);
      console.log(`Servidor iniciado: ${new Date().toLocaleString()}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

// Manejo de señales de terminación
process.on('SIGINT', () => {
  console.log('Servidor detenido mediante SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Servidor detenido mediante SIGTERM');
  process.exit(0);
});

// Manejo de errores no capturados
process.on('uncaughtException', (error) => {
  console.error('Error no capturado:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Promesa rechazada no manejada:', promise, 'Razón:', reason);
});

// Iniciar el servidor
startServer();
