import app from './app.js';
import { testConnection } from './config/database.js';

// Puerto por defecto o valor de variables de entorno
const PORT = process.env.PORT || 8000;

// Iniciar el servidor
const startServer = async () => {
  try {
    // Probar la conexión a la base de datos
    await testConnection();
    
    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`API Health Check: http://localhost:${PORT}/health`);
      console.log(`Swagger Docs: http://localhost:${PORT}/api-docs`);
      console.log(`Servidor iniciado: ${new Date().toLocaleString()}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

// Iniciar el servidor
startServer();
