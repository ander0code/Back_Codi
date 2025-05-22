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
export const processImage = async (imagePath: string): Promise<OCRResult> => {
  try {
    // En un entorno real, aquí conectaríamos con alguna API de OCR
    // Por ahora, simulamos un resultado
    
    console.log(`Procesando imagen: ${imagePath}`);
    
    // Simulamos un tiempo de procesamiento
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Devolvemos un texto simulado
    return {
      text: `SUPERMERCADO EJEMPLO
      FACTURA N° 0001-123456
      FECHA: ${new Date().toLocaleDateString()}
      
      2x Leche Entera 1L      S/. 10.00
      1x Pan Integral 500g    S/. 5.50
      3x Manzanas             S/. 6.00
      1x Papel Higiénico      S/. 12.00
      
      TOTAL                   S/. 33.50
      
      GRACIAS POR SU COMPRA`,
      confidence: 0.85,
      blocks: [
        { text: "SUPERMERCADO EJEMPLO", confidence: 0.95 },
        { text: "FACTURA N° 0001-123456", confidence: 0.90 },
        { text: `FECHA: ${new Date().toLocaleDateString()}`, confidence: 0.85 },
        { text: "2x Leche Entera 1L      S/. 10.00", confidence: 0.80 },
        { text: "1x Pan Integral 500g    S/. 5.50", confidence: 0.82 },
        { text: "3x Manzanas             S/. 6.00", confidence: 0.78 },
        { text: "1x Papel Higiénico      S/. 12.00", confidence: 0.80 },
        { text: "TOTAL                   S/. 33.50", confidence: 0.90 },
        { text: "GRACIAS POR SU COMPRA", confidence: 0.95 }
      ]
    };
  } catch (error) {
    console.error('Error en el procesamiento OCR:', error);
    throw new Error('Error en el procesamiento de la imagen');
  }
};

/**
 * Extrae productos de un texto OCR
 * @param ocrText Texto completo del OCR
 * @returns Lista de productos extraídos
 */
export const extractProducts = (ocrText: string): DetectedProduct[] => {
  // En un entorno real, usaríamos regex y NLP para extraer productos
  // Por ahora, simplemente dividimos el texto y buscamos patrones
  
  const lines = ocrText.split('\n');
  const productLines: string[] = [];
  
  // Buscamos líneas que parezcan productos (tienen números y S/.)
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (
      (trimmedLine.includes('x ') || trimmedLine.includes('X ')) && 
      trimmedLine.includes('S/.') && 
      !trimmedLine.includes('TOTAL')
    ) {
      productLines.push(trimmedLine);
    }
  }
  
  // Extraemos información de cada línea
  return productLines.map(line => {
    // Intentamos separar cantidad, nombre y precio
    const quantityMatch = line.match(/(\d+)[xX]\s+/);
    const quantity = quantityMatch ? parseInt(quantityMatch[1]) : 1;
    
    // Extraer nombre del producto
    let productName = line.replace(/^\s*\d+[xX]\s+/, '').replace(/\s+S\/\.\s+[\d\.]+$/, '');
    
    return {
      name: productName.trim(),
      quantity: quantity
    };
  });
};