import { huellaCarbonoPorSupermercado } from './conts.js';

// Subcategorías específicas para Tottus (basadas en Qdrant)
export const subcategoriasTottus = {
  'Congelados': ['Helados', 'Verduras Congeladas', 'Comidas Preparadas', 'Pescados Congelados'],
  'Desayunos y Panadería': ['Cereales', 'Pan', 'Galletas', 'Mermeladas'],
  'Despensa': ['Aceites', 'Condimentos', 'Salsas', 'Conservas', 'Harinas'],
  'Dulces y Snacks': ['Chocolates', 'Caramelos', 'Snacks Salados', 'Frutos Secos'],
  'Huevos': ['Huevos de Gallina', 'Huevos Orgánicos'],
  'Jamón': ['Jamón Serrano', 'Jamón Cocido', 'Embutidos'],
  'Lácteos y Frescos': ['Leche', 'Yogurt', 'Quesos', 'Mantequilla'],
  'Aguas y Jugos': ['Agua Mineral', 'Jugos Naturales', 'Bebidas Gaseosas'],
  'Cervezas': ['Cerveza Nacional', 'Cerveza Importada'],
  'Espumantes y Vinos': ['Vino Tinto', 'Vino Blanco', 'Espumantes'],
  'Licores': ['Whisky', 'Ron', 'Vodka', 'Pisco'],
  'Cuidado Capilar': ['Shampoo', 'Acondicionador', 'Tratamientos'],
  'Cuidado de la Piel': ['Cremas', 'Protector Solar', 'Limpiadores'],
  'Higiene Personal': ['Jabón', 'Pasta Dental', 'Desodorante'],
  'Salud': ['Medicamentos', 'Vitaminas', 'Primeros Auxilios'],
  'Ambientales y Desinfectantes': ['Desinfectantes', 'Ambientadores'],
  'Bolsas de Basura': ['Bolsas Pequeñas', 'Bolsas Grandes'],
  'Detergentes y Cuidado de Ropa': ['Detergente Líquido', 'Detergente Polvo', 'Suavizante'],
  'Limpiadores': ['Limpiador Multiuso', 'Limpiador de Vidrios', 'Limpiador de Baño'],
  'Papeles': ['Papel Higiénico', 'Servilletas', 'Papel Toalla'],
  'Utensilios de Aseo': ['Escobas', 'Trapos', 'Esponjas']
};

// Mapear categorías genéricas a categorías específicas de cada supermercado
export const mapearCategoriaASupermercado = (
  categoria: string,
  supermercado: string
): { categoria: string; subcategoria?: string } => {
  console.log(`🔄 ===== MAPEO DE CATEGORÍA =====`);
  console.log(`📍 Categoria original: "${categoria}"`);
  console.log(`🏪 Supermercado: "${supermercado}"`);
  
  // Normalizar nombre del supermercado
  const supermercadoNormalizado = normalizarNombreSupermercado(supermercado);
  console.log(`🏪 Supermercado normalizado: "${supermercadoNormalizado}"`);
  
  const categoriasValidas = Object.keys(huellaCarbonoPorSupermercado[supermercadoNormalizado] || {});
  console.log(`📋 Categorías válidas para ${supermercadoNormalizado}:`, categoriasValidas);
  
  // Mapeos específicos por supermercado
  const mapeosCategorias: Record<string, Record<string, string>> = {
    'Tottus': {
      'Frutas y Verduras': 'Lácteos y Frescos',
      'Verduras': 'Lácteos y Frescos',
      'Frutas': 'Lácteos y Frescos',
      'Bebidas': 'Aguas y Jugos',
      'Gaseosas': 'Aguas y Jugos',
      'Snacks': 'Dulces y Snacks',
      'Embutidos': 'Jamón',
      'Lácteos': 'Lácteos y Frescos',
      'Aceites': 'Despensa',
      'Condimentos': 'Despensa',
      'Salsas': 'Despensa'
    },
    'Metro': {
      'Frutas y Verduras': 'Frutas y Verduras',
      'Lácteos': 'Leches',
      'Quesos': 'La Quesería',
      'Carnes': 'Carnes',
      'Pollo': 'Aves y Huevos',
      'Pescado': 'Aves y Pescados',
      'Embutidos': 'Embutidos y Fiambres',
      'Desayuno': 'Desayuno'
    },
    'Wong': {
      'Frutas y Verduras': 'Frutas y Verduras',
      'Bebidas': 'Aguas y Bebidas',
      'Embutidos': 'Embutidos y Fiambres',
      'Pan': 'Panadería y Pastelería',
      'Comidas': 'Comidas y Rostizados'
    },
    'PlazaVea': {
      'Frutas y Verduras': 'Frutas y Verduras',
      'Lácteos': 'Lácteos y Huevos',
      'Carnes': 'Carnes, Aves y Pescados',
      'Bebidas': 'Bebidas',
      'Abarrotes': 'Abarrotes',
      'Limpieza': 'Limpieza',
      'Pan': 'Panadería y Pastelería',
      'Quesos': 'Quesos y Fiambres',
      'Licores': 'Vinos, Licores y Cervezas'
    },
    'FloraFauna': {
      'Abarrotes': 'Abarrotes',
      'Congelados': 'Congelados',
      'Frescos': 'Frescos',
      'Limpieza': 'Hogar y Limpieza',
      'Cuidado Personal': 'Cuidado Personal'
    },
    'Vivanda': {
      'Frutas y Verduras': 'Frutas y Verduras',
      'Lácteos': 'Lácteos y Huevos',
      'Carnes': 'Carnes, Aves y Pescados',
      'Bebidas': 'Bebidas',
      'Abarrotes': 'Abarrotes',
      'Limpieza': 'Limpieza',
      'Pan': 'Panadería y Pastelería',
      'Quesos': 'Quesos y Fiambres'
    }
  };

  // Intentar mapeo directo
  const mapeo = mapeosCategorias[supermercadoNormalizado]?.[categoria];
  console.log(`🔍 Mapeo directo encontrado: "${mapeo}"`);
  
  if (mapeo && categoriasValidas.includes(mapeo)) {
    const resultado = { categoria: mapeo };
    console.log(`✅ Mapeo directo exitoso: "${categoria}" → "${mapeo}"`);
    
    // Añadir subcategoría para Tottus
    if (supermercadoNormalizado === 'Tottus' && subcategoriasTottus[mapeo]) {
      const subcategoria = subcategoriasTottus[mapeo][0];
      console.log(`🎯 Subcategoría añadida para Tottus: "${subcategoria}"`);
      return {
        ...resultado,
        subcategoria: subcategoria
      };
    }
    
    console.log(`📍 Mapeo final:`, resultado);
    return resultado;
  }

  // Buscar coincidencia parcial en categorías válidas
  console.log(`🔍 Buscando coincidencia parcial para: "${categoria}"`);
  const categoriaEncontrada = categoriasValidas.find(cat => 
    cat.toLowerCase().includes(categoria.toLowerCase()) ||
    categoria.toLowerCase().includes(cat.toLowerCase())
  );

  if (categoriaEncontrada) {
    console.log(`✅ Coincidencia parcial encontrada: "${categoria}" → "${categoriaEncontrada}"`);
    const resultado = { categoria: categoriaEncontrada };
    
    // Añadir subcategoría para Tottus
    if (supermercadoNormalizado === 'Tottus' && subcategoriasTottus[categoriaEncontrada]) {
      const subcategoria = subcategoriasTottus[categoriaEncontrada][0];
      console.log(`🎯 Subcategoría añadida para Tottus: "${subcategoria}"`);
      return {
        ...resultado,
        subcategoria: subcategoria
      };
    }
    
    console.log(`📍 Mapeo final:`, resultado);
    return resultado;
  }

  // Fallback: usar la primera categoría disponible
  const fallbackCategoria = categoriasValidas[0] || 'Abarrotes';
  console.log(`⚠️ Usando fallback: "${categoria}" → "${fallbackCategoria}"`);
  const resultado = { categoria: fallbackCategoria };
  
  if (supermercadoNormalizado === 'Tottus' && subcategoriasTottus[fallbackCategoria]) {
    const subcategoria = subcategoriasTottus[fallbackCategoria][0];
    console.log(`🎯 Subcategoría fallback para Tottus: "${subcategoria}"`);
    return {
      ...resultado,
      subcategoria: subcategoria
    };
  }
  
  console.log(`📍 Mapeo fallback final:`, resultado);
  console.log(`✅ ===== FIN MAPEO DE CATEGORÍA =====`);
  return resultado;
};

// Función para normalizar nombres de supermercados
const normalizarNombreSupermercado = (nombre: string): string => {
  const mapeoNombres: Record<string, string> = {
    'tottus': 'Tottus',
    'tottus s.a.': 'Tottus',
    'tottus s.a': 'Tottus',
    'metro': 'Metro',
    'wong': 'Wong',
    'plaza vea': 'PlazaVea',
    'plazavea': 'PlazaVea',
    'plaza-vea': 'PlazaVea',
    'flora y fauna': 'FloraFauna',
    'flora & fauna': 'FloraFauna',
    'flora fauna': 'FloraFauna',
    'vivanda': 'Vivanda'
  };
  
  const nombreNormalizado = nombre.toLowerCase().trim();
  return mapeoNombres[nombreNormalizado] || nombre;
};

// Generar texto de categorías válidas para el prompt
export const generarCategoriasValidasTexto = (): string => {
  console.log('📊 ===== GENERANDO CATEGORÍAS PARA PROMPT =====');
  
  const resultado = Object.entries(huellaCarbonoPorSupermercado)
    .map(([supermercado, categorias]) => {
      console.log(`🏪 Procesando supermercado: ${supermercado}`);
      const categoriasDisponibles = Object.keys(categorias);
      console.log(`📋 Categorías disponibles (${categoriasDisponibles.length}):`, categoriasDisponibles);
      
      const listaCategorias = categoriasDisponibles.map(cat => {
        if (supermercado === 'Tottus' && subcategoriasTottus[cat]) {
          const subs = subcategoriasTottus[cat].slice(0, 3).join(', ');
          console.log(`   🎯 ${cat} con subcategorías: ${subs}`);
          return `- ${cat} (subcategorías: ${subs})`;
        }
        console.log(`   📍 ${cat}`);
        return `- ${cat}`;
      }).join('\n');
      
      return `${supermercado}:\n${listaCategorias}`;
    })
    .join('\n\n');
  
  console.log('✅ ===== CATEGORÍAS GENERADAS EXITOSAMENTE =====');
  return resultado;
};
