// services/qdrantService.ts
import { QdrantClient } from '@qdrant/js-client-rest';
import { OpenAIEmbeddings } from '@langchain/openai';

const qdrantClient = new QdrantClient({ url: 'http://168.138.135.113:6333' });

const SUPERMERCADO_TO_COLLECTION: Record<string, string> = {
  'wong': 'wong',
  'vivanda': 'vivanda',
  'tottus': 'tottus',
  'tottus s.a.': 'tottus',
  'plazavea': 'plazavea',
  'plaza vea': 'plazavea',
  'metro': 'metro',
  'flora y fauna': 'flora_y_fauna',
  'flora & fauna': 'flora_y_fauna',
  'flora_y_fauna': 'flora_y_fauna'
};    


const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'text-embedding-3-small',
  dimensions: 1536, 
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
    console.log(`🔍 ===== BÚSQUEDA QDRANT =====`);
    console.log(`🔍 Producto: "${nombreProducto}"`);
    console.log(`🏪 Supermercado: "${supermercado}"`);
    
    const normalizedName = supermercado.toLowerCase().trim();
    console.log(`🏪 Nombre normalizado: "${normalizedName}"`);
    
    const collection = SUPERMERCADO_TO_COLLECTION[normalizedName];
    console.log(`📂 Colección mapeada: "${collection}"`);

    if (!collection) {
      console.error(`❌ Supermercado no reconocido: ${supermercado}`);
      console.log(`📋 Supermercados disponibles:`, Object.keys(SUPERMERCADO_TO_COLLECTION));
      throw new Error(`Nombre de supermercado no reconocido: ${supermercado}`);
    }

    console.log(`🔢 Generando vector para: "${nombreProducto}"`);
    const vector = await obtenerVectorDelProducto(nombreProducto);
    console.log(`🔢 Vector generado con ${vector.length} dimensiones`);

    console.log(`🚀 Ejecutando búsqueda en colección: ${collection}`);
    const searchResult = await qdrantClient.search(collection, {
      vector: vector,
      limit: 5,
      with_payload: true,
    });

    console.log(`📊 Resultados encontrados: ${searchResult.length}`);

    if (searchResult.length === 0) {
      console.log(`❌ No se encontraron resultados para: "${nombreProducto}"`);
      return null;
    }    // Log de todos los resultados con análisis detallado del payload
    searchResult.forEach((result, index) => {
      console.log(`📍 Resultado ${index + 1}:`);
      console.log(`   - Score: ${result.score}`);
      console.log(`   - Payload completo:`, JSON.stringify(result.payload, null, 2));
      console.log(`   - Campos disponibles:`, Object.keys(result.payload || {}));
    });

    const mejorResultado = searchResult[0];
    const payload = mejorResultado.payload as any;

    console.log(`🔍 ===== ANÁLISIS DETALLADO DEL PAYLOAD =====`);
    console.log(`🔍 Payload raw:`, JSON.stringify(payload, null, 2));
    console.log(`🔍 Campo 'categoria_principal':`, payload.categoria_principal);
    console.log(`🔍 Campo 'categoria':`, payload.categoria);
    console.log(`🔍 Campo 'category':`, payload.category);
    console.log(`🔍 Campo 'tipo':`, payload.tipo);
    console.log(`🔍 ===== FIN ANÁLISIS PAYLOAD =====`);

    // Intentar múltiples campos posibles para cada dato
    const resultado = {
      co2e_estimado: payload.co2_estimado || payload.co2e_estimado || payload.huella_co2 || 0,
      huella_categoria: payload.huella_categoria || payload.co2_categoria || payload.co2_estimado || payload.co2e_estimado || 0,
      categoria: payload.categoria_principal || payload.categoria || payload.category || payload.tipo || 'Sin categoría',
    };

    // Validar que la categoría no esté vacía
    if (!resultado.categoria || resultado.categoria.trim() === '' || resultado.categoria === 'Sin categoría') {
      console.log(`⚠️ Categoría no válida detectada, intentando campos alternativos...`);
      
      // Intentar campos alternativos
      const categoriasAlternativas = [
        payload.tipo_producto,
        payload.seccion,
        payload.departamento,
        payload.grupo,
        payload.linea
      ].filter(Boolean);
      
      if (categoriasAlternativas.length > 0) {
        resultado.categoria = categoriasAlternativas[0];
        console.log(`🔄 Categoría alternativa encontrada: "${resultado.categoria}"`);
      }
    }

    console.log(`✅ Mejor resultado seleccionado:`, resultado);
    console.log(`✅ ===== FIN BÚSQUEDA QDRANT =====`);

    return resultado;
  } catch (error) {
    console.error('❌ ===== ERROR EN BÚSQUEDA QDRANT =====');
    console.error('❌ Error:', error);
    console.error('❌ Stack:', error.stack);
    return null;
  }
};

const obtenerVectorDelProducto = async (nombreProducto: string): Promise<number[]> => {
  console.log(`🔢 Generando embedding con text-embedding-3-small para: "${nombreProducto}"`);
  try {
    const vector = await embeddings.embedQuery(nombreProducto);
    console.log(`✅ Embedding text-embedding-3-small generado exitosamente con ${vector.length} dimensiones`);
    return vector;
  } catch (error) {
    console.error(`❌ Error generando embedding con text-embedding-3-small:`, error);
    throw error;
  }
};