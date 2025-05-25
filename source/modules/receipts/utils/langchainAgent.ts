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
A partir del siguiente texto OCR de una boleta, debes:
1. Identificar el supermercado (Tottus, Metro, Wong, Plaza Vea, Vivanda, Flora y Fauna).
2. Listar productos comprados (nombre, cantidad, precio).
3. Clasificarlos en las categorías válidas para ese supermercado.

Si el supermercado es **Tottus**, también asigna la **subcategoría** correcta.

Solo responde con el siguiente formato JSON exacto:
{{
  "supermercado": "...",
  "productos": [
    {{
      "nombre": "...",
      "cantidad": ...,
      "precio": ...,
      "categoria": "...",
      "subcategoria": "..." // opcional
    }}
  ]
}}

Categorías válidas por supermercado:
{categorias}

Texto OCR:
"{ocr}"
  `,
  inputVariables: ['ocr', 'categorias'],
  partialVariables: { format_instructions: parser.getFormatInstructions() }
});

const model = new ChatOpenAI({
  temperature: 0,
  modelName: 'gpt-3.5-turbo',
  openAIApiKey: process.env.OPENAI_API_KEY
});

const chain = RunnableSequence.from([prompt, model, parser]);

export async function analizarTextoOCRConAgente(ocr: string) {
  const categoriasTexto = generarCategoriasTexto();
  return await chain.invoke({ ocr, categorias: categoriasTexto });
}
