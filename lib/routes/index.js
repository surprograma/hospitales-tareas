import express from 'express';
import usuarios from './usuarios';
import centros from './centros';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/centros', centros);

export default router;
