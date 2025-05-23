import type { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

// Asegurarnos de que existe el directorio de uploads
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (_req: Request, _file: any, cb: any) => {
    cb(null, uploadDir);
  },
  filename: (_req: Request, file: any, cb: any) => {
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  }
});

// File filter for image types
const fileFilter = (_req: Request, file: any, cb: any) => {
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos de imagen (jpeg, jpg, png) y PDF'));
  }
};

// Create multer upload middleware
export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max file size
  fileFilter
});

interface MulterError extends Error {
  code?: string;
}

// Middleware to handle upload errors
export const handleUploadErrors = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  const multerErr = err as MulterError;
  if (multerErr && typeof multerErr === 'object') {
    if (multerErr.code === 'LIMIT_FILE_SIZE') {
      res.status(400).json({ error: 'El archivo es demasiado grande. Tamaño máximo: 5MB' });
      return;
    }
    res.status(400).json({ error: `Error en la carga: ${multerErr.message}` });
    return;
  }
  
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  
  next();
};