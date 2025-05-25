import { createWorker } from 'tesseract.js';
import fs from 'fs';
import path from 'path';

/**
 * Procesa una imagen y extrae texto mediante OCR (Tesseract v5)
 */
export const processImage = async (imagePath: string): Promise<{ text: string, confidence: number }> => {
  try {
    if (!fs.existsSync(imagePath)) {
      throw new Error(`El archivo no existe: ${imagePath}`);
    }

    const worker = await createWorker(); // No necesita loadLanguage ni initialize
    const { data } = await worker.recognize(imagePath, { lang: 'spa' });
 // Idioma directamente aquí
    await worker.terminate();

    return {
      text: data.text,
      confidence: data.confidence ?? 0
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
 */
export const extractEstablecimiento = (text: string): string => {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  if (lines.length > 0) {
    return lines[0].trim();
  }
  return 'Establecimiento no detectado';
};

/**
 * Extrae la fecha del texto OCR
 */
export const extractFecha = (text: string): string => {
  const dateRegex = /(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})/;
  const match = text.match(dateRegex);

  if (match) {
    const day = match[1].padStart(2, '0');
    const month = match[2].padStart(2, '0');
    let year = match[3];
    if (year.length === 2) {
      const currentYear = new Date().getFullYear();
      const century = Math.floor(currentYear / 100) * 100;
      year = (century + parseInt(year)) < currentYear + 20
        ? `${century + parseInt(year)}`
        : `${century - 100 + parseInt(year)}`;
    }
    return `${year}-${month}-${day}`;
  }

  return new Date().toISOString().split('T')[0];
};

/**
 * Extrae el monto total del texto OCR
 */
export const extractMontoTotal = (text: string): number => {
  const totalRegex = /TOTAL[\s:]*[\$S\/]*\s*(\d+[.,]\d{2})/i;
  const match = text.match(totalRegex);

  if (match) {
    return parseFloat(match[1].replace(',', '.'));
  }

  return 0;
};

/**
 * Extrae productos del texto OCR
 */
export const extractProductos = (text: string): { nombre: string, cantidad: number, precio: number }[] => {
  const productos: { nombre: string, cantidad: number, precio: number }[] = [];
  const lines = text.split('\n');
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
