// services/qdrantService.ts
import { QdrantClient } from '@qdrant/js-client-rest';
import { OpenAIEmbeddings } from '@langchain/openai';

const qdrantClient = new QdrantClient({ url: 'http://168.138.135.113:6333' });

const SUPERMERCADO_TO_COLLECTION: Record<string, string> = {
  'tottus': 'tottus',
  'tottus s.a.': 'tottus',
  'metro': 'metro',
  'wong': 'wong',
  'plaza vea': 'plaza_vea',
  'plazavea': 'plaza_vea',
  'flora y fauna': 'flora_y_fauna',
  'flora & fauna': 'flora_y_fauna',
  'vivanda': 'vivanda',
};


const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'text-embedding-ada-002',
  dimensions: 384, 
});

export const buscarProductoEnQdrant = async (
  nombreProducto: string,
  supermercado: string
): Promise<{
  co2e_estimado: number;
  huella_categoria: number;
  categoria: string;
} | null> => {
  try {
    const normalizedName = supermercado.toLowerCase().trim();
    const collection = SUPERMERCADO_TO_COLLECTION[normalizedName];

    if (!collection) {
      throw new Error(`Nombre de supermercado no reconocido: ${supermercado}`);
    }

    const searchResult = await qdrantClient.search(collection, {
      vector: await obtenerVectorDelProducto(nombreProducto),
      limit: 5,
      with_payload: true,
    });

    if (searchResult.length === 0) return null;

    const payload = searchResult[0].payload as any;

    return {
      co2e_estimado: payload.co2_estimado,
      huella_categoria: payload.huella_categoria,
      categoria: payload.categoria,
    };
  } catch (error) {
    console.error('Error al buscar en Qdrant:', error);
    return null;
  }
};

const obtenerVectorDelProducto = async (nombreProducto: string): Promise<number[]> => {
  return await embeddings.embedQuery(nombreProducto); // Devuelve vector de 384 dimensiones
};