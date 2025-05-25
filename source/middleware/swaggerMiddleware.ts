import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CODI API - Sistema de Recibos Verdes',
      version: '1.0.0',
      description: 'API para el análisis de recibos y cálculo de impacto ambiental. Todos los endpoints requieren autenticación JWT, excepto registro y login.',
      contact: {
        name: 'Equipo CODI',
        email: 'soporte@codi.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:8000',
        description: 'Servidor de Desarrollo'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Ingresa tu token JWT sin el prefijo Bearer. Ejemplo: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        }
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Mensaje de error'
            }
          }
        },
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'ID único del usuario'
            },
            nombre: {
              type: 'string',
              description: 'Nombre del usuario'
            },
            correo: {
              type: 'string',
              format: 'email',
              description: 'Correo electrónico del usuario'
            }
          }
        },
        AuthResponse: {
          type: 'object',
          properties: {
            user: {
              $ref: '#/components/schemas/User'
            },
            token: {
              type: 'string',
              description: 'Token JWT para autenticación'
            }
          }
        }
      }
    },
    tags: [
      {
        name: 'Autenticación',
        description: 'Endpoints para registro, login y gestión de sesiones (no requieren JWT)'
      },
      {
        name: 'Receipts',
        description: 'Endpoints para procesamiento y gestión de recibos (requieren JWT)'
      },
      {
        name: 'Users',
        description: 'Endpoints para gestión de perfil de usuario (requieren JWT)'
      },
      {
        name: 'Offers',
        description: 'Endpoints para gestión de ofertas y promociones (requieren JWT)'
      }
    ]
  },
  apis: [
    './source/modules/auth/controllers/*.ts',
    './source/modules/receipts/routes/*.ts',
    './source/modules/users/routes/*.ts',
    './source/modules/offers/routes/*.ts',
    './source/routes/*.ts'
  ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

/**
 * Configura el middleware de Swagger para la documentación API
 * @param app Instancia de Express
 */
export const setupSwaggerMiddleware = (app: express.Application): void => {
  // Configuración personalizada de Swagger UI
  const swaggerUiOptions = {
    explorer: true,
    swaggerOptions: {
      docExpansion: 'none', // Colapsar todas las secciones por defecto
      filter: true, // Habilitar filtro de búsqueda
      showRequestDuration: true, // Mostrar duración de requests
      tryItOutEnabled: true, // Habilitar el botón "Try it out"
      persistAuthorization: true, // Mantener la autorización entre sesiones
      defaultModelsExpandDepth: 0, // No expandir modelos por defecto
      defaultModelExpandDepth: 0
    },
    customCss: `
      .swagger-ui .topbar { display: none; }
      .swagger-ui .info { margin-bottom: 20px; }
      .swagger-ui .scheme-container { margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 8px; }
      .swagger-ui .info .title { color: #336699; font-size: 2.5em; }
      .swagger-ui .info .description { font-size: 1.1em; margin: 20px 0; }
      .swagger-ui .btn.authorize { 
        background-color: #336699; 
        border-color: #336699; 
        color: white;
        font-weight: bold;
      }
      .swagger-ui .btn.authorize:hover { 
        background-color: #264d73; 
        border-color: #264d73; 
      }
      .swagger-ui .auth-btn-wrapper { 
        display: flex; 
        justify-content: center; 
        margin: 20px 0; 
      }
      .swagger-ui .opblock.opblock-post { border-color: #336699; }
      .swagger-ui .opblock.opblock-get { border-color: #28a745; }
      .swagger-ui .opblock.opblock-put { border-color: #ffc107; }
      .swagger-ui .opblock.opblock-delete { border-color: #dc3545; }
    `,
    customSiteTitle: 'CODI API - Documentación',
    customfavIcon: '/favicon.ico'
  };

  // Endpoint para obtener la especificación en formato JSON
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  // Configurar Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
  
  // Rutas alternativas para acceder a la documentación
  app.get('/docs', (req, res) => {
    res.redirect('/api-docs');
  });
  
  app.get('/swagger', (req, res) => {
    res.redirect('/api-docs');
  });

  console.log('📚 Swagger configurado correctamente');
  console.log('📚 Documentación disponible en: /api-docs');
  console.log('📚 Spec JSON disponible en: /api-docs.json');
}