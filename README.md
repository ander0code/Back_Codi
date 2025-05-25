# Backend para Análisis de Recibos

Esta API permite analizar imágenes de recibos utilizando OCR (Reconocimiento Óptico de Caracteres) para extraer información como productos, establecimiento, fecha y monto total. También calcula el impacto ambiental (huella de CO₂) de los productos comprados.

## Tecnologías utilizadas

- Node.js y TypeScript
- Express
- Prisma ORM
- Tesseract.js para OCR
- Multer para manejo de archivos

## Instalación

1. Clonar el repositorio:
```bash
git clone <repositorio>
cd Back_Codi
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno en un archivo `.env`:
```
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_db"
PORT=3000
```

4. Ejecutar migraciones de la base de datos:
```bash
npx prisma migrate dev
```

5. Iniciar el servidor:
```bash
npm run dev
```

## Endpoints principales

### Procesar imagen de recibo
- **Ruta**: `/api/receipts/process`
- **Método**: POST
- **Descripción**: Analiza una imagen de recibo usando OCR y devuelve los productos detectados
- **Datos a enviar**: Imagen del recibo (multipart/form-data)
- **Datos a recibir**: 
  - ID del recibo generado
  - Nombre del establecimiento
  - Fecha de compra (formato YYYY-MM-DD)
  - Monto total
  - Huella de CO₂ calculada
  - Nivel de impacto (verde/regular/alto)
  - Cantidad de productos eco-amigables
  - Texto escaneado (OCR)
  - Productos detectados

### Guardar recibo analizado
- **Ruta**: `/api/receipts/save`
- **Método**: POST
- **Descripción**: Guarda un recibo previamente analizado en la base de datos
- **Datos a enviar**:
  - ID del recibo (si fue generado en el paso anterior)
  - Nombre del establecimiento
  - Fecha de compra
  - Monto total
  - Huella de CO₂
  - Nivel de impacto
  - Cantidad de productos eco-amigables
  - Ruta de la imagen del recibo
  - Texto escaneado
  - Productos detectados
- **Datos a recibir**:
  - Confirmación de guardado
  - ID del recibo (si se genera en este paso)

## Cómo funciona el OCR

El sistema utiliza Tesseract.js para extraer texto de las imágenes de recibos. Luego analiza este texto para identificar:

1. Nombre del establecimiento (generalmente en las primeras líneas)
2. Fecha de compra (buscando patrones de fecha)
3. Monto total (buscando patrones como "TOTAL: $XX.XX")
4. Productos (analizando líneas que contienen cantidad, nombre y precio)

Para cada producto detectado, se calcula una estimación de su huella de carbono basada en su categoría y peso.

## Modelo de datos

La base de datos contiene principalmente estas entidades:

- **Recibos**: Información general del recibo
- **ProductosRecibo**: Productos detectados en cada recibo con su impacto ambiental estimado