import { Request, Response } from 'express';
import prisma from '../../../config/database.js';
import { v4 as uuidv4 } from 'uuid';
import * as receiptService from '../services/receiptService.js';

/**
 * @swagger
 * tags:
 *   name: Recibos
 *   description: Gestión de recibos
 */

/**
 * @swagger
 * /api/receipts/latest:
 *   get:
 *     summary: Obtener el último recibo del usuario
 *     description: Devuelve la información del último recibo procesado por el usuario
 *     tags: [Recibos]
 *     parameters:
 *       - in: header
 *         name: x-user-id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Información del último recibo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 establecimiento:
 *                   type: string
 *                 logo_id:
 *                   type: string
 *                 fecha:
 *                   type: string
 *                   format: date
 *                 monto_total:
 *                   type: number
 *                 co2_generado:
 *                   type: number
 *       404:
 *         description: No se encontraron recibos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export const getLatestReceipt = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // Obtener el último recibo
    const recibos = await prisma.recibos.findMany({
      where: { usuario_id: usuarioId },
      orderBy: { fecha_recibo: 'desc' },
      take: 1,
      include: {
        productos_recibo: true
      }
    });
    
    if (recibos.length === 0) {
      res.status(404).json({ error: 'No se encontraron recibos' });
      return;
    }
    
    const ultimoRecibo = recibos[0];
    
    res.status(200).json({
      id: ultimoRecibo.id,
      establecimiento: ultimoRecibo.fuente,
      logo_id: 'default', // En el futuro, podría ser un campo en la base de datos
      fecha: ultimoRecibo.fecha_recibo?.toISOString().split('T')[0] || null,
      monto_total: 120.50, // Campo a agregar en la base de datos
      co2_generado: ultimoRecibo.co2e_total || 0
    });
  } catch (error) {
    console.error('Error al obtener el último recibo:', error);
    res.status(500).json({ error: 'Error al obtener el último recibo' });
  }
};

/**
 * Listar todos los recibos del usuario
 */
export const getAllReceipts = async (req: Request, res: Response): Promise<void> => {
  try {
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // Obtener todos los recibos del usuario
    const recibos = await receiptService.getRecibosByUsuarioId(usuarioId);
    
    // Formatear la respuesta
    const formattedReceipts = recibos.map(recibo => {
      const fecha = recibo.fecha_recibo ? new Date(recibo.fecha_recibo) : new Date();
      const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
      const formattedDate = fecha.toLocaleDateString('es-ES', options);
      
      let nivelImpacto = 'regular';
      if (recibo.es_recibo_verde) {
        nivelImpacto = 'verde';
      } else if ((recibo.co2e_total || 0) > 10) {
        nivelImpacto = 'alto';
      }
      
      return {
        id: recibo.id,
        establecimiento: recibo.fuente,
        logo_id: 'default', // En el futuro, podría ser un campo en la base de datos
        fecha: formattedDate,
        monto_total: 120.50, // Campo a agregar en la base de datos
        co2_generado: recibo.co2e_total || 0,
        nivel_impacto: nivelImpacto,
        num_productos: recibo.productos_recibo?.length || 0,
        num_productos_eco: recibo.productos_recibo?.filter(p => 
          (p.co2e_estimado || 0) < 0.5
        ).length || 0
      };
    });
    
    res.status(200).json(formattedReceipts);
  } catch (error) {
    console.error('Error al obtener los recibos:', error);
    res.status(500).json({ error: 'Error al obtener los recibos' });
  }
};

/**
 * Obtener detalles de un recibo específico
 */
export const getReceiptDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    // Obtener detalles del recibo
    const recibo = await receiptService.getReciboById(id);
    
    if (!recibo) {
      res.status(404).json({ error: 'Recibo no encontrado' });
      return;
    }
    
    // Obtener alternativas sostenibles para los productos
    const alternativas = await receiptService.getAlternativasSostenibles(recibo.productos_recibo || []);
    
    // Formatear la respuesta
    const fecha = recibo.fecha_recibo ? new Date(recibo.fecha_recibo) : new Date();
    const formattedDate = fecha.toISOString().split('T')[0];
    
    let nivelImpacto = 'regular';
    if (recibo.es_recibo_verde) {
      nivelImpacto = 'verde';
    } else if ((recibo.co2e_total || 0) > 10) {
      nivelImpacto = 'alto';
    }
    
    res.status(200).json({
      id: recibo.id,
      establecimiento: recibo.fuente,
      fecha: formattedDate,
      monto_total: 120.50, // Campo a agregar en la base de datos
      co2_generado: recibo.co2e_total || 0,
      nivel_impacto: nivelImpacto,
      productos: recibo.productos_recibo?.map(producto => ({
        nombre: producto.nombre_detectado,
        cantidad: producto.cantidad || 1,
        co2_estimado: producto.co2e_estimado || 0,
        peso_estimado: producto.peso_estimado_kg || 0,
        categoria: producto.categorias?.categoria || 'Sin categoría'
      })) || [],
      texto_escaneado: recibo.texto_original || 'Texto no disponible',
      imagen_url: `/uploads/receipts/${recibo.id}.jpg`, // Ruta simulada
      metricas_impacto: {
        co2_total: recibo.co2e_total || 0,
        puntuacion: recibo.puntuacion_impacto || 0,
        evaluacion: recibo.evaluacion_huella || 'No evaluado',
        detalle: recibo.detalle_evaluacion || ''
      },
      recomendaciones: alternativas.map(alt => ({
        producto_original: alt.producto_original,
        alternativa: alt.alternativa_sugerida,
        ahorro_co2: alt.reduccion_co2_estimada
      }))
    });
  } catch (error) {
    console.error('Error al obtener detalles del recibo:', error);
    res.status(500).json({ error: 'Error al obtener detalles del recibo' });
  }
};

/**
 * @swagger
 * /api/receipts/process:
 *   post:
 *     summary: Procesar imagen de recibo
 *     description: Analiza una imagen de recibo usando OCR y devuelve los productos detectados
 *     tags: [Recibos]
 *     security:
 *       - userIdHeader: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               receipt:
 *                 type: string
 *                 format: binary
 *                 description: Imagen del recibo (JPEG, PNG, PDF)
 *     responses:
 *       200:
 *         description: Recibo analizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID del recibo generado
 *                 establecimiento:
 *                   type: string
 *                 fecha:
 *                   type: string
 *                   format: date
 *                 monto_total:
 *                   type: number
 *                 co2_generado:
 *                   type: number
 *                 nivel_impacto:
 *                   type: string
 *                   enum: [verde, regular, alto]
 *                 productos_eco:
 *                   type: number
 *                 texto_escaneado:
 *                   type: string
 *                 productos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       nombre:
 *                         type: string
 *                       co2:
 *                         type: number
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
export const processReceiptImage = async (req: Request, res: Response): Promise<void> => {
  try {
    // Verificar que se haya subido un archivo
    if (!req.file) {
      res.status(400).json({ error: 'No se ha proporcionado ninguna imagen' });
      return;
    }
    
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
      // Procesar la imagen con OCR mediante la función del servicio
    const imagePath = req.file.path;
    // Importamos directamente del ocrService en lugar de usar receiptService
    const { processImage } = await import('../services/ocrService.js');
    const ocrResult = await processImage(imagePath);
    
    // Analizar la imagen y extraer productos
    const productosDetectados = await receiptService.analyzeReceiptImage(imagePath);
    
    // Calcular métricas
    const co2Total = productosDetectados.reduce((sum, p) => sum + (p.co2e_estimado || 0), 0);
    const productosEco = productosDetectados.filter(p => (p.co2e_estimado || 0) < 0.5).length;
    
    // Determinar nivel de impacto
    let nivelImpacto = 'regular';
    if (co2Total < 5) {
      nivelImpacto = 'verde';
    } else if (co2Total > 10) {
      nivelImpacto = 'alto';
    }
    
    // Generar ID del recibo
    const reciboId = uuidv4();
    
    // Obtener fecha del recibo (en un caso real, se extraería del OCR)
    const fechaRecibo = new Date().toISOString().split('T')[0];
    
    // Obtener monto total (en un caso real, se extraería del OCR)
    const montoTotal = 120.50; // Valor por defecto
    
    res.status(200).json({
      id: reciboId,
      establecimiento: 'Supermercado (detectado)', // En un caso real, se extraería del OCR
      fecha: fechaRecibo,
      monto_total: montoTotal,
      co2_generado: co2Total,
      nivel_impacto: nivelImpacto,
      productos_eco: productosEco,
      texto_escaneado: ocrResult.text || 'Texto no disponible',
      imagen_url: req.file.path.replace(/\\/g, '/'),
      productos: productosDetectados.map(p => ({
        nombre: p.nombre_detectado,
        co2: p.co2e_estimado,
        cantidad: p.cantidad || 1,
        peso_estimado_kg: p.peso_estimado_kg || 0
      }))
    });
  } catch (error) {
    console.error('Error al procesar la imagen del recibo:', error);
    res.status(500).json({ error: 'Error al procesar la imagen del recibo' });
  }
};

/**
 * @swagger
 * /api/receipts/save:
 *   post:
 *     summary: Guardar un recibo analizado
 *     description: Guarda un recibo previamente analizado en la base de datos
 *     tags: [Recibos]
 *     security:
 *       - userIdHeader: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del recibo (si fue generado en el paso anterior)
 *               establecimiento:
 *                 type: string
 *               fecha:
 *                 type: string
 *                 format: date
 *               monto_total:
 *                 type: number
 *               co2_generado:
 *                 type: number
 *               nivel_impacto:
 *                 type: string
 *               productos_eco:
 *                 type: number
 *               imagen_url:
 *                 type: string
 *               texto_escaneado:
 *                 type: string
 *               productos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nombre:
 *                       type: string
 *                     co2:
 *                       type: number
 *                     cantidad:
 *                       type: number
 *                     peso_estimado_kg:
 *                       type: number
 *     responses:
 *       201:
 *         description: Recibo guardado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 mensaje:
 *                   type: string
 *       400:
 *         description: Error en la solicitud
 *       500:
 *         description: Error del servidor
 */
export const saveReceipt = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      id,
      establecimiento,
      fecha,
      monto_total,
      co2_generado,
      nivel_impacto,
      productos_eco,
      imagen_url,
      texto_escaneado,
      productos
    } = req.body;
    
    // Validar datos mínimos
    if (!establecimiento || !fecha) {
      res.status(400).json({ error: 'Faltan datos obligatorios para guardar el recibo' });
      return;
    }
    
    // En un entorno real, obtendríamos el ID del usuario desde el token
    const usuarioId = req.headers['x-user-id'] as string || '00000000-0000-0000-0000-000000000000';
    
    // Convertir productos al formato esperado por el servicio
    const productosFormateados = (productos || []).map((p: any) => ({
      id: 0,
      nombre_detectado: p.nombre,
      productos: p.nombre, // Reutilizar el nombre como identificador de producto
      cantidad: p.cantidad || 1,
      peso_estimado_kg: p.peso_estimado_kg || 0,
      co2e_estimado: p.co2
    }));
    
    // Generar un nuevo ID si no se proporcionó uno
    const reciboId = id || uuidv4();
    
    // Guardar recibo en la base de datos
    const reciboGuardado = await receiptService.saveReceipt(
      usuarioId,
      establecimiento,
      texto_escaneado || '',
      productosFormateados
    );
    
    res.status(201).json({
      id: reciboGuardado.id,
      mensaje: 'Recibo guardado correctamente'
    });
  } catch (error) {
    console.error('Error al guardar el recibo:', error);
    res.status(500).json({ error: 'Error al guardar el recibo' });
  }
};