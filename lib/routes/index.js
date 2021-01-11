import express from 'express';
import usuarios from './usuarios';
import turnos from './turnos';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/turnos', turnos);

// Un comentario que no debería molestar

export default router;
