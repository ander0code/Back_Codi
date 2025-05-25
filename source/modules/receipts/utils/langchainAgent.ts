import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { z } from 'zod';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { huellaCarbonoPorSupermercado } from './conts.js';

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    supermercado: z.string(),
    productos: z.array(
      z.object({
        nombre: z.string(),
        cantidad: z.number(),
        precio: z.number().optional(),
        categoria: z.string(),
        subcategoria: z.string().optional()
      })
    )
  })
);

// 👉 función para generar lista de categorías del carbonThresholds
function generarCategoriasTexto(): string {
  return Object.entries(huellaCarbonoPorSupermercado)
    .map(([supermercado, categorias]) => {
      const lista = Object.keys(categorias).map(c => `- ${c}`).join('\n');
      return `Supermercado: ${supermercado}\n${lista}`;
    })
    .join('\n\n');
}

const prompt = new PromptTemplate({
  template: `
Eres un experto en análisis de recibos de supermercados peruanos. Tu tarea es extraer información estructurada del siguiente texto OCR.

INSTRUCCIONES:
1. Identifica el supermercado exacto: Tottus, Metro, Wong, Plaza Vea, Vivanda, Flora y Fauna
2. Extrae TODOS los productos con nombre, cantidad y precio
3. Clasifica cada producto en la categoría correcta según el supermercado
4. Devuelve ÚNICAMENTE un JSON válido, sin texto adicional

FORMATO DE RESPUESTA REQUERIDO:
{{
  "supermercado": "nombre_exacto_del_supermercado",
  "productos": [
    {{
      "nombre": "nombre_del_producto",
      "cantidad": numero_entero,
      "precio": numero_decimal,
      "categoria": "categoria_del_supermercado"
    }}
  ]
}}

CATEGORÍAS VÁLIDAS POR SUPERMERCADO:
{categorias}

TEXTO OCR A ANALIZAR:
{ocr}

RESPUESTA (solo JSON):`,
  inputVariables: ['ocr', 'categorias'],
  partialVariables: { format_instructions: parser.getFormatInstructions() }
});

const model = new ChatOpenAI({
  temperature: 0,
  modelName: 'deepseek-chat',
  openAIApiKey: process.env.DEEPSEEK_API_KEY,
  configuration: {
    baseURL: 'https://api.deepseek.com',
  }
});

// Verificar configuración
if (!process.env.DEEPSEEK_API_KEY) {
  console.error('❌ DEEPSEEK_API_KEY no está configurada en las variables de entorno');
} else {
  console.log('✅ DeepSeek API configurada correctamente');
}

const chain = RunnableSequence.from([prompt, model, parser]);

export async function analizarTextoOCRConAgente(ocr: string) {
  try {
    console.log('🔄 Iniciando análisis con DeepSeek...');
    console.log('📝 Texto OCR recibido:', ocr.substring(0, 200) + '...');
    
    const categoriasTexto = generarCategoriasTexto();
    console.log('📊 Categorías generadas para el prompt');
    
    const resultado = await chain.invoke({ ocr, categorias: categoriasTexto });
    console.log('✅ Resultado de DeepSeek:', resultado);
    
    return resultado;
  } catch (error) {
    console.error('❌ Error en análisis DeepSeek:', error);
    // Retornar formato básico en caso de error
    return {
      supermercado: 'Desconocido',
      productos: []
    };
  }
}
