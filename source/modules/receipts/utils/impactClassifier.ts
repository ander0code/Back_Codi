import { huellaCarbonoPorSupermercado, ImpactLevel } from './conts.js';

export function clasificarImpactoPorCategoria(
  supermercado: string,
  categoria: string,
  co2ePorKg: number
): ImpactLevel {
  const thresholds = huellaCarbonoPorSupermercado[supermercado];
  if (!thresholds) return 'medio'; // fallback

  const regla = thresholds[categoria];
  if (!regla) return 'medio';

  if (co2ePorKg <= regla.umbrales.bajo) return 'bajo';
  if (co2ePorKg <= regla.umbrales.medio) return 'medio';
  return 'alto';
}


export function clasificarImpactoProducto(
  supermercado: string,
  categoria: string,
  co2ePorKg: number
): {
  nivel: ImpactLevel;
  esEco: boolean;
} {
  const thresholds = huellaCarbonoPorSupermercado[supermercado];
  if (!thresholds) return { nivel: 'medio', esEco: false };

  const regla = thresholds[categoria];
  if (!regla) return { nivel: 'medio', esEco: false };

  if (co2ePorKg <= regla.umbrales.bajo) return { nivel: 'bajo', esEco: true };
  if (co2ePorKg <= regla.umbrales.medio) return { nivel: 'medio', esEco: false };
  return { nivel: 'alto', esEco: false };
}