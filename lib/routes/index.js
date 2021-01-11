import express from 'express';
import usuarios from './usuarios';
import turnos from './turnos';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/turnos', turnos);

export default router;
