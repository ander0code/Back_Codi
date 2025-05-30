import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { z } from 'zod';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { huellaCarbonoPorSupermercado } from './conts.js';
import { generarCategoriasValidasTexto } from './categoryMapper.js';

// --- Parser y prompt para enriquecer interpretación de líneas OCR ---
const enrichSchema = z.array(
  z.object({
    texto_original: z.string(),
    interpretacion_ai: z.string()
  })
);
const enrichParser = StructuredOutputParser.fromZodSchema(enrichSchema);

const enrichPrompt = new PromptTemplate({
  template: `
Eres un experto en interpretación de boletas y recibos de supermercados en Perú.

Tu tarea es analizar el texto crudo proveniente de un OCR y devolver una lista de objetos con estos campos:
1. texto_original: la línea original EXACTA.
2. interpretacion_ai: el nombre enriquecido y claro del producto (como lo haría un humano).

NO devuelvas cantidades, categorías ni precios. Solo el JSON.

EJEMPLO DE RESPUESTA:
[
  {"texto_original": "VOLT 6UN 300", "interpretacion_ai": "Bebida Energética VOLT pack de 6 unidades"},
  {"texto_original": "CHICHA M BT", "interpretacion_ai": "Chicha Morada botella"}
]

TEXTO OCR A INTERPRETAR (una línea por producto):
{ocr_lines}

RESPUESTA (solo JSON, sin texto adicional):`,
  inputVariables: ['ocr_lines'],
});

const enrichModel = new ChatOpenAI({
  temperature: 0,
  modelName: 'deepseek-chat',
  openAIApiKey: process.env.DEEPSEEK_API_KEY,
  configuration: { baseURL: 'https://api.deepseek.com' }
});
const enrichChain = RunnableSequence.from([enrichPrompt, enrichModel, enrichParser]);

// --- Parser y prompt originales para estructura de productos ---
const structSchema = z.object({
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
});
const structParser = StructuredOutputParser.fromZodSchema(structSchema);

function generarCategoriasTexto(): string {
  return Object.entries(huellaCarbonoPorSupermercado)
    .map(([supermercado, cats]) => {
      const lista = Object.keys(cats).map(c => `- ${c}`).join('\n');
      return `Supermercado: ${supermercado}\n${lista}`;
    })
    .join('\n\n');
}

const structPrompt = new PromptTemplate({
  template: `
Eres un experto en análisis de recibos de supermercados peruanos. Tu tarea es extraer información estructurada del texto enriquecido.

INSTRUCCIONES:
1. Identifica el supermercado exacto: Tottus, Metro, Wong, PlazaVea, Vivanda, FloraFauna
2. Extrae TODOS los productos con nombre, cantidad y precio
3. Clasifica cada producto usando ÚNICAMENTE las categorías válidas listadas abajo
4. Para Tottus, SIEMPRE incluye una subcategoría
5. Devuelve ÚNICAMENTE un JSON válido, sin texto adicional

FORMATO DE RESPUESTA REQUERIDO:
{{"supermercado": "nombre_exacto",
 "productos": [
   {{"nombre": "...","cantidad":0,"precio":0,"categoria":"...","subcategoria":"..."}}
 ]}}

CATEGORÍAS VÁLIDAS POR SUPERMERCADO:
{categorias}

TEXTO ENRIQUECIDO A ANALIZAR:
{enriched_text}

RESPUESTA (solo JSON):`,
  inputVariables: ['categorias', 'enriched_text'],
});
const structModel = new ChatOpenAI({
  temperature: 0,
  modelName: 'deepseek-chat',
  openAIApiKey: process.env.DEEPSEEK_API_KEY,
  configuration: { baseURL: 'https://api.deepseek.com' }
});
const structChain = RunnableSequence.from([structPrompt, structModel, structParser]);

// Export de ambas funciones
export async function enriquecerLineasOCR(rawText: string) {
  const lines = rawText
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean);

  console.log('🔄 Enriqueciendo líneas OCR con IA...');
  const input = lines.join('\n');
  console.log('📋 Líneas a enriquecer:', input.substring(0, 200));

  const enriched = await enrichChain.invoke({ ocr_lines: input });
  console.log('✅ Linéas enriquecidas recibidas:', enriched.length);
  return enriched;
}

export async function analizarTextoOCRConAgente(rawText: string) {
  try {
    // 1) Enriquecer primero
    const enrichedLines = await enriquecerLineasOCR(rawText);
    const enrichedText = enrichedLines
      .map(item => item.interpretacion_ai)
      .join('\n');

    // 2) Preparar categorías y prompt
    const categoriasTexto = generarCategoriasTexto();
    console.log('📊 Categorías:', categoriasTexto);

    console.log('🔄 Llamando a agente estructurador con texto enriquecido...');
    const formattedPrompt = await structPrompt.format({
      categorias: categoriasTexto,
      enriched_text: enrichedText
    });
    console.log(formattedPrompt.substring(0, 500));

    // 3) Invocar estructura
    const resultado = await structChain.invoke({ categorias: categoriasTexto, enriched_text: enrichedText });
    console.log('✅ Resultado estructurado obtenido');
    return resultado;
  } catch (error) {
    console.error('❌ Error en análisis combinado DeepSeek:', error);
    return { supermercado: 'Desconocido', productos: [] };
  }
}
