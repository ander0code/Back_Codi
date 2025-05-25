import { createWorker } from 'tesseract.js';
import fs from 'fs';
import path from 'path';

/**
 * Servicio para procesar imágenes con OCR
 */

interface OCRResult {
  text: string;
  confidence: number;
  blocks: Array<{
    text: string;
    confidence: number;
  }>;
}

interface DetectedProduct {
  name: string;
  quantity: number;
}

/**
 * Procesa una imagen y extrae texto mediante OCR
 * @param imagePath Ruta a la imagen en el servidor
 * @returns Texto extraído y metadatos
 */
export const processImage = async (imagePath: string): Promise<{ text: string, confidence: number }> => {
  try {    // Verificar que el archivo existe
    if (!fs.existsSync(imagePath)) {
      throw new Error(`El archivo no existe: ${imagePath}`);
    }

    // Crear un worker de Tesseract.js
    const worker = await createWorker();
    await worker.loadLanguage('spa');
    await worker.initialize('spa');
    
    // Reconocer texto en la imagen
    const { data } = await worker.recognize(imagePath);
    
    // Terminar el worker
    await worker.terminate();
    
    return {
      text: data.text,
      confidence: data.confidence
    };
  } catch (error) {
    console.error('Error en el procesamiento OCR:', error);
    return {
      text: 'Error al procesar la imagen',
      confidence: 0
    };
  }
};

/**
 * Extrae el establecimiento del texto OCR
 * @param text Texto extraído por OCR
 * @returns Nombre del establecimiento
 */
export const extractEstablecimiento = (text: string): string => {
  // En un entorno real, se usaría regex o NLP para identificar el nombre del establecimiento
  // Generalmente aparece en las primeras líneas del recibo
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  if (lines.length > 0) {
    return lines[0].trim();
  }
  
  return 'Establecimiento no detectado';
};

/**
 * Extrae la fecha del texto OCR
 * @param text Texto extraído por OCR
 * @returns Fecha en formato YYYY-MM-DD
 */
export const extractFecha = (text: string): string => {
  // Buscar patrones de fecha comunes: DD/MM/YYYY, DD-MM-YYYY, etc.
  const dateRegex = /(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})/;
  const match = text.match(dateRegex);
  
  if (match) {
    const day = match[1].padStart(2, '0');
    const month = match[2].padStart(2, '0');
    let year = match[3];
    
    // Si el año tiene 2 dígitos, convertir a 4 dígitos
    if (year.length === 2) {
      const currentYear = new Date().getFullYear();
      const century = Math.floor(currentYear / 100) * 100;
      year = century + parseInt(year) < currentYear + 20 ? `${century + parseInt(year)}` : `${century - 100 + parseInt(year)}`;
    }
    
    return `${year}-${month}-${day}`;
  }
  
  // Si no se encuentra un patrón, devolver la fecha actual
  return new Date().toISOString().split('T')[0];
};

/**
 * Extrae el monto total del texto OCR
 * @param text Texto extraído por OCR
 * @returns Monto total
 */
export const extractMontoTotal = (text: string): number => {
  // Buscar patrones como "TOTAL: $123.45" o "TOTAL $123.45"
  const totalRegex = /TOTAL[\s:]*[\$]?(\d+[.,]\d{2})/i;
  const match = text.match(totalRegex);
  
  if (match) {
    return parseFloat(match[1].replace(',', '.'));
  }
  
  return 0;
};

/**
 * Extrae productos del texto OCR
 * @param text Texto extraído por OCR
 * @returns Lista de productos detectados
 */
export const extractProductos = (text: string): { nombre: string, cantidad: number, precio: number }[] => {
  // En un entorno real, se usaría un algoritmo más sofisticado para identificar productos
  // Este es un ejemplo simple que busca patrones comunes en recibos
  
  const productos: { nombre: string, cantidad: number, precio: number }[] = [];
  const lines = text.split('\n');
  
  // Patrón común: [cantidad] [nombre producto] [precio unitario] [precio total]
  const productoRegex = /(\d+)\s+(.+?)\s+(\d+[.,]\d{2})\s+(\d+[.,]\d{2})/;
  
  for (const line of lines) {
    const match = line.match(productoRegex);
    if (match) {
      productos.push({
        cantidad: parseInt(match[1]),
        nombre: match[2].trim(),
        precio: parseFloat(match[4].replace(',', '.'))
      });
    }
  }
  
  return productos;
};