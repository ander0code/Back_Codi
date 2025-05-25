import express from 'express';
import cors from 'cors';
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
const PORT = Number(process.env.PORT) || 8000;

// Configuración de CORS específica para aplicaciones móviles y web
app.use(cors({
  origin: function (origin, callback) {
    // Permitir peticiones sin origin (apps móviles nativas)
    if (!origin) return callback(null, true);
    
    // Permitir cualquier origen (para desarrollo y apps móviles)
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'x-user-id', 
    'Origin', 
    'Accept', 
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods',
    'Cache-Control',
    'Pragma',
    'Expires'
  ],
  exposedHeaders: ['Content-Length', 'Content-Type', 'X-Total-Count'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
  maxAge: 86400
}));

// Middleware adicional para manejar preflight requests
app.options('*', (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, x-user-id');
  res.sendStatus(200);
});

// Middlewares básicos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.use('/uploads', express.static(path.resolve('./uploads')));

// Middleware de logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.get('Origin') || 'No origin'}`);
  next();
});

// Ruta de salud para verificar que la API está funcionando
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date(),
    server: 'CODI API',
    version: '1.0.0'
  });
});

// Ruta para verificar conectividad desde móviles
app.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({ 
    message: 'pong',
    timestamp: new Date(),
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });
});

// Ruta para página de inicio con documentación
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CODI API</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; }
        h1 { color: #336699; text-align: center; }
        h2 { color: #264d73; border-bottom: 2px solid #336699; padding-bottom: 10px; }
        .container { margin-top: 30px; }
        .button { display: inline-block; background-color: #336699; color: white; padding: 12px 24px; 
                  margin: 10px 5px; text-decoration: none; border-radius: 6px; font-weight: bold; }
        .button:hover { background-color: #264d73; }
        .endpoints { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px; }
        .auth-info { background-color: #e7f3ff; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #336699; }
        .warning { background-color: #fff3cd; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #ffc107; }
        .code { background-color: #f1f1f1; padding: 10px; border-radius: 4px; font-family: monospace; margin: 10px 0; }
        ul { padding-left: 20px; }
        li { margin: 8px 0; }
        .status { text-align: center; color: #28a745; font-weight: bold; font-size: 1.2em; }
      </style>
    </head>
    <body>
      <div class="status">🟢 API CODI - ONLINE</div>
      <h1>🌱 API CODI - Sistema de Recibos Verdes</h1>
      <p style="text-align: center; font-size: 1.1em;">
        API para el análisis de recibos y cálculo de impacto ambiental usando OCR y tecnología verde.
      </p>
      
      <div class="container">
        <h2>📚 Documentación de la API</h2>
        <p>Accede a la documentación interactiva donde puedes probar todos los endpoints:</p>
        <div style="text-align: center;">
          <a class="button" href="/api-docs">🔍 Ver Documentación Swagger</a>
          <a class="button" href="/api-docs.json">📄 Descargar Spec JSON</a>
          <a class="button" href="/health">💚 Estado del Servidor</a>
        </div>
      </div>

      <div class="auth-info">
        <h2>🔐 Autenticación JWT</h2>
        <p><strong>¡Importante!</strong> Esta API utiliza exclusivamente autenticación JWT (JSON Web Tokens).</p>
        <p><strong>Pasos para usar la API:</strong></p>
        <ol>
          <li><strong>Registrarse:</strong> <code>POST /api/auth/register</code></li>
          <li><strong>Iniciar sesión:</strong> <code>POST /api/auth/login</code></li>
          <li><strong>Usar el token:</strong> Incluir en el header: <code>Authorization: Bearer TU_TOKEN</code></li>
        </ol>
        <p><strong>En Swagger:</strong> Haz clic en el botón "Authorize" 🔓 e ingresa tu token JWT.</p>
      </div>

      <div class="endpoints">
        <h2>🛠️ Endpoints Principales</h2>
        <h3>🔑 Autenticación (No requieren JWT)</h3>
        <ul>
          <li><strong>POST /api/auth/register</strong> - Registrar nuevo usuario</li>
          <li><strong>POST /api/auth/login</strong> - Iniciar sesión</li>
        </ul>
        
        <h3>📄 Recibos (Requieren JWT)</h3>
        <ul>
          <li><strong>POST /api/receipts/process</strong> - Procesar imagen de recibo con OCR</li>
          <li><strong>POST /api/receipts/save</strong> - Guardar recibo analizado</li>
          <li><strong>GET /api/receipts</strong> - Listar recibos del usuario</li>
          <li><strong>GET /api/receipts/latest</strong> - Obtener último recibo</li>
        </ul>
        
        <h3>👤 Usuario (Requieren JWT)</h3>
        <ul>
          <li><strong>GET /api/user/profile</strong> - Obtener perfil del usuario</li>
          <li><strong>GET /api/user/carbon-stats</strong> - Estadísticas de CO2</li>
          <li><strong>PUT /api/user/update-profile</strong> - Actualizar perfil</li>
        </ul>
      </div>

      <div class="warning">
        <h3>⚠️ Importante para Desarrollo</h3>
        <p><strong>Para aplicaciones móviles:</strong> Asegúrate de usar la IP correcta de tu red local.</p>
        <div class="code">
          📱 URL para móviles: http://TU_IP_LOCAL:8000<br>
          💻 URL para desarrollo web: http://localhost:8000
        </div>
        <p><strong>Encuentra tu IP:</strong> Ejecuta <code>ipconfig</code> (Windows) o <code>ifconfig</code> (Mac/Linux)</p>
      </div>

      <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
        <h3>🚀 Estado del Servidor</h3>
        <p>Servidor iniciado: ${new Date().toLocaleString()}</p>
        <p>Puerto: ${PORT}</p>
        <p>Modo: ${process.env.NODE_ENV || 'development'}</p>
        <a class="button" href="/ping">📡 Ping Test</a>
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

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor CODI iniciado en puerto ${PORT}`);
  console.log(`📱 Accesible desde aplicaciones móviles en: http://0.0.0.0:${PORT}`);
  console.log(`🌐 Accesible desde navegador en: http://localhost:${PORT}`);
  console.log(`📚 Documentación Swagger: http://localhost:${PORT}/api-docs`);
});

export default app;