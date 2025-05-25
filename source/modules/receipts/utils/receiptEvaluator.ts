import { ProductoRecibo } from '../models/types.js';

export function evaluarRecibo(productos: ProductoRecibo[]) {
  const totalCO2 = productos.reduce((acc, p) => acc + (p.co2e_estimado || 0), 0);
  const totalProductos = productos.length;
  const productosEco = productos.filter(p => p.eco_amigable).length;
  const porcentajeEco = totalProductos ? productosEco / totalProductos : 0;

  let nivelRecibo: 'verde' | 'regular' | 'rojo' = 'rojo';
  if (porcentajeEco >= 0.7 && totalCO2 < 8) {
    nivelRecibo = 'verde';
  } else if (porcentajeEco >= 0.4 && totalCO2 < 15) {
    nivelRecibo = 'regular';
  }

  const puntuacionImpacto = calcularPuntuacionImpacto(totalCO2, totalProductos);
  const evaluacionHuella = determinarEvaluacionHuella(totalCO2);

  return {
    totalCO2,
    productosEco,
    totalProductos,
    porcentajeEco,
    nivelRecibo,
    puntuacionImpacto,
    evaluacionHuella,
  };
}

function calcularPuntuacionImpacto(co2eTotal: number, cantidadProductos: number): number {
  if (cantidadProductos === 0) return 0;
  const co2ePromedio = co2eTotal / cantidadProductos;
  const limiteBajo = 0.2;
  const limiteAlto = 2.0;
  if (co2ePromedio <= limiteBajo) return 100;
  if (co2ePromedio >= limiteAlto) return 0;
  return Math.round(100 - ((co2ePromedio - limiteBajo) / (limiteAlto - limiteBajo)) * 100);
}

function determinarEvaluacionHuella(co2eTotal: number): string {
  if (co2eTotal < 1) return 'Excelente';
  if (co2eTotal < 3) return 'Buena';
  if (co2eTotal < 6) return 'Regular';
  if (co2eTotal < 10) return 'Alta';
  return 'Muy alta';
}
