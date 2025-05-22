import { Router } from 'express';
import type { Router as IRouter } from 'express';

const router: IRouter = Router();

// Ruta de inicio de sesión
router.post('/login', (req, res) => {
  res.status(200).json({ message: 'Login endpoint' });
});

// Ruta de registro
router.post('/register', (req, res) => {
  res.status(200).json({ message: 'Register endpoint' });
});

// Ruta de cierre de sesión
router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logout endpoint' });
});

// Ruta para verificar token
router.get('/verify', (req, res) => {
  res.status(200).json({ message: 'Token verification endpoint' });
});

export default router;