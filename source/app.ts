import express from 'express';
import type { Request, Response, NextFunction, ErrorRequestHandler, Router, Application } from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Importar rutas
import authRoutes from './modules/auth/routes/index.js';
import userRoutes from './modules/users/routes/index.js';
import receiptRoutes from './modules/receipts/routes/index.js';
import offersRoutes from './modules/offers/routes/index.js';
import mainRoutes from './routes/index.js';

config();

const app: Application = express();

// Configurar middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Middleware de logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Ruta de salud para verificar que la API está funcionando
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

const setupRoutes = async (): Promise<void> => {
  try {
    // Configurar rutas para cada módulo
    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);  // Nota: cambio de /users a /user según requerimientos
    app.use('/api/receipts', receiptRoutes);
    app.use('/api/offers', offersRoutes);
    app.use('/api', mainRoutes);
    
    console.log('Rutas cargadas correctamente');
  } catch (error) {
    console.error('Error al cargar las rutas:', error);
  }
};

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

export { app, setupRoutes };