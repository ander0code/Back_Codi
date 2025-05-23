import swaggerJsdoc from 'swagger-jsdoc';

// Versión de la API
const API_VERSION = '1.0.0';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Recibos Verdes - CODI',
      version: API_VERSION,
      description: 'API para el sistema de análisis de recibos y cálculo de impacto ambiental',
      contact: {
        name: 'Equipo CODI',
        url: 'https://github.com/yourusername/codi-backend',
        email: 'soporte@codi.com'
      }
    },    tags: [
      {
        name: 'Auth',
        description: 'Autenticación y registro'
      },
      {
        name: 'User',
        description: 'Datos y estadísticas del usuario'
      },
      {
        name: 'Receipts',
        description: 'Gestión de recibos de compras'
      },
      {
        name: 'Offers',
        description: 'Sistema de ofertas y promociones'
      }
    ],    servers: [
      {
        url: 'http://localhost:8000',
        description: 'Servidor de desarrollo'
      },
      {
        url: 'https://api.codi.com',
        description: 'Servidor de producción'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Token JWT de autenticación'
        },
        userIdHeader: {
          type: 'apiKey',
          in: 'header',
          name: 'x-user-id',
          description: 'ID de usuario para simulación de autenticación'
        }
      },      schemas: {
        AuthUser: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'ID único del usuario'
            },
            nombre: {
              type: 'string',
              description: 'Nombre completo del usuario'
            },
            correo: {
              type: 'string',
              description: 'Correo electrónico del usuario'
            }
          }
        },
        Recibo: {
          type: 'object',
          required: ['id', 'fuente'],
          properties: {
            id: {
              type: 'string',
              description: 'ID único del recibo'
            },
            usuario_id: {
              type: 'string',
              description: 'ID del usuario asociado al recibo'
            },
            fuente: {
              type: 'string',
              description: 'Origen o establecimiento del recibo'
            },
            fecha_recibo: {
              type: 'string',
              format: 'date',
              description: 'Fecha de emisión del recibo'
            },
            co2e_total: {
              type: 'number',
              description: 'Total de CO2e estimado para el recibo'
            },
            es_recibo_verde: {
              type: 'boolean',
              description: 'Indicador si el recibo es considerado verde'
            }
          }
        },
        Oferta: {
          type: 'object',
          required: ['id', 'tipo', 'titulo', 'descripcion', 'tipo_recibo'],
          properties: {
            id: {
              type: 'string',
              description: 'ID único de la oferta'
            },
            tipo: {
              type: 'string',
              enum: ['discount', 'product', 'donation', 'education', 'coupon'],
              description: 'Tipo de oferta'
            },
            titulo: {
              type: 'string',
              description: 'Título de la oferta'
            },
            descripcion: {
              type: 'string',
              description: 'Descripción de la oferta'
            },
            tipo_recibo: {
              type: 'string',
              enum: ['verde', 'amarillo', 'rojo'],
              description: 'Tipo de recibo necesario para la oferta'
            },
            codigo: {
              type: 'string',
              description: 'Código promocional'
            },
            porcentaje_descuento: {
              type: 'number',
              description: 'Porcentaje de descuento (si aplica)'
            }
          }
        },
        Error: {
          type: 'object',
          required: ['error'],
          properties: {
            error: {
              type: 'string',
              description: 'Mensaje de error'
            },
            message: {
              type: 'string',
              description: 'Detalles adicionales del error'
            }
          }
        }
      }
    },
    security: [
      {
        userIdHeader: []
      }
    ]
  },  apis: [
    './source/routes/*.ts',
    './source/modules/*/routes/*.ts',
    './source/modules/*/controllers/*.ts'
  ]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;