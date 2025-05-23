import express from 'express';
import type { Request, Response, NextFunction, Application } from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';

// Importar rutas
import authRoutes from './modules/auth/routes/index.js';
import userRoutes from './modules/users/routes/index.js';
import receiptRoutes from './modules/receipts/routes/index.js';
import offersRoutes from './modules/offers/routes/index.js';
import mainRoutes from './routes/index.js';
import { setupSwaggerMiddleware } from './middleware/swaggerMiddleware.js';

// Cargar variables de entorno
config();

// Crear aplicación Express
const app: Application = express();

// Configurar puerto
const PORT = process.env.PORT || 8000;

// Middlewares básicos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.use('/uploads', express.static(path.resolve('./uploads')));

// Middleware de logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Ruta de salud para verificar que la API está funcionando
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Ruta para página de inicio con documentación
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CODI API</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { color: #336699; }
        .container { margin-top: 30px; }
        .button { display: inline-block; background-color: #336699; color: white; padding: 10px 20px; 
                  margin: 10px 0; text-decoration: none; border-radius: 4px; }
        .button:hover { background-color: #264d73; }
        .endpoints { background-color: #f4f4f4; padding: 15px; border-radius: 4px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <h1>API CODI - Sistema de Recibos Verdes</h1>
      <p>Bienvenido a la API de CODI. Esta API proporciona endpoints para el análisis de recibos y cálculo de impacto ambiental.</p>
      
      <div class="container">
        <h2>Documentación de la API</h2>
        <p>Puedes acceder a la documentación completa de la API a través de Swagger UI:</p>
        <a class="button" href="/api-docs">Ver Documentación Swagger</a>
        <a class="button" href="/api-docs.json">Descargar Spec JSON</a>
      </div>

      <div class="endpoints">
        <h2>Endpoints Principales</h2>
        <ul>
          <li><strong>GET /api/receipts</strong> - Listar todos los recibos</li>
          <li><strong>GET /api/user/carbon-stats</strong> - Obtener estadísticas de CO2</li>
          <li><strong>GET /api/offers</strong> - Obtener ofertas disponibles</li>
        </ul>
      </div>
    </body>
    </html>
  `);
});

// Configurar Swagger
try {
  setupSwaggerMiddleware(app);
} catch (swaggerError) {
  console.error('Error al configurar Swagger:', swaggerError);
  console.log('La API continuará funcionando sin la documentación Swagger');
}

// Configurar rutas para cada módulo
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/receipts', receiptRoutes);
app.use('/api/offers', offersRoutes);
app.use('/api', mainRoutes);

// Middleware para manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Error interno del servidor', 
    message: process.env.NODE_ENV === 'development' ? err.message : undefined 
  });
});

// Middleware para rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

export default app;