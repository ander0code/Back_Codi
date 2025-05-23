import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../config/swagger.js';

/**
 * Configura el middleware de Swagger para la documentación API
 * @param app Instancia de Express
 */
export const setupSwaggerMiddleware = (app: express.Application): void => {
  // Opciones de configuración de Swagger
  const options = {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'API CODI - Documentación'
  };

  // Endpoint para obtener la especificación en formato JSON
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  // Configurar Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));
  
  // Rutas alternativas
  app.get('/docs', (req, res) => {
    res.redirect('/api-docs');
  });
  
  app.get('/swagger', (req, res) => {
    res.redirect('/api-docs');
  });

  console.log('Middleware de Swagger configurado correctamente');
  console.log('Documentación disponible en: /api-docs');
}