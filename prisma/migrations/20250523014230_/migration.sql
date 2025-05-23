-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "subcategoria" TEXT,
    "supermercado" TEXT,
    "co2e_promedio_por_kg" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productos_recibo" (
    "id" SERIAL NOT NULL,
    "recibo_id" UUID,
    "nombre_detectado" TEXT NOT NULL,
    "productos" TEXT NOT NULL,
    "categoria_id" INTEGER,
    "cantidad" DOUBLE PRECISION,
    "peso_estimado_kg" DOUBLE PRECISION,
    "co2e_estimado" DOUBLE PRECISION,

    CONSTRAINT "productos_recibo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recibos" (
    "id" UUID NOT NULL,
    "usuario_id" UUID,
    "fuente" TEXT NOT NULL,
    "texto_original" TEXT,
    "fecha_recibo" TIMESTAMP(6),
    "co2e_total" DOUBLE PRECISION,
    "es_recibo_verde" BOOLEAN DEFAULT false,
    "puntuacion_impacto" INTEGER,
    "evaluacion_huella" TEXT,
    "detalle_evaluacion" TEXT,
    "creado_en" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recibos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" UUID NOT NULL,
    "nombre" TEXT,
    "correo" TEXT,
    "contrasena" TEXT,
    "objetivo_consumo" TEXT,
    "estilo_vida" TEXT,
    "evita_ingredientes" TEXT[],
    "prefiere_supermercado" TEXT,
    "precio_prioridad" BOOLEAN DEFAULT false,
    "empaques_sostenibles" BOOLEAN DEFAULT true,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "productos_recibo" ADD CONSTRAINT "productos_recibo_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "productos_recibo" ADD CONSTRAINT "productos_recibo_recibo_id_fkey" FOREIGN KEY ("recibo_id") REFERENCES "recibos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "recibos" ADD CONSTRAINT "recibos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
