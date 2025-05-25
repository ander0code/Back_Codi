// Definición de tipos basados en el schema de Prisma

export interface Categoria {
  id: number;
  categoria: string;
  subcategoria?: string | null;
  supermercado?: string | null;
  co2e_promedio_por_kg: number;
  productos_recibo?: ProductoRecibo[];
}

export interface ProductoRecibo {
  id: number;
  recibo_id?: string | null;
  nombre_detectado: string;
  productos: string;
  categoria_id?: number | null;
  cantidad?: number | null;
  peso_estimado_kg?: number | null;
  co2e_estimado?: number | null;
  impacto?: 'bajo' | 'medio' | 'alto';         // 🆕 Añade esto
  eco_amigable?: boolean;                      // 🆕 Y esto también
  categorias?: Categoria | null;
  recibos?: Recibo | null;
}

export interface Recibo {
  id: string;
  usuario_id?: string | null;
  fuente: string;
  texto_original?: string | null;
  fecha_recibo?: Date | null;
  co2e_total?: number | null;
  es_recibo_verde?: boolean | null;
  puntuacion_impacto?: number | null;
  evaluacion_huella?: string | null;
  detalle_evaluacion?: string | null;
  creado_en?: Date | null;
  productos_recibo?: ProductoRecibo[];
  usuarios?: Usuario | null;
}

export interface Usuario {
  id: string;
  objetivo_consumo?: string | null;
  estilo_vida?: string | null;
  evita_ingredientes?: string[];
  prefiere_supermercado?: string | null;
  precio_prioridad?: boolean | null;
  empaques_sostenibles?: boolean | null;
  recibos?: Recibo[];
}

export interface Alternativa {
  producto_original: string;
  alternativa_sugerida: string;
  reduccion_co2_estimada: number;
}

export interface AnalisisRecibo {
  productos_detectados: ProductoRecibo[];
  impacto_co2: number;
  es_recibo_verde: boolean;
  puntos_obtenidos: number;
  alternativas_sugeridas: Alternativa[];
}

export interface DashboardData {
  co2_acumulado: number;
  ultima_factura: Recibo | null;
  puntos_verdes: number;
}

export interface ImpactData {
  co2_ahorrado_mensual: Array<{ mes: string; valor: number }>;
  logros: Array<{ nombre: string; descripcion: string; fecha: Date }>;
  comparacion_mensual: Record<string, number>;
}