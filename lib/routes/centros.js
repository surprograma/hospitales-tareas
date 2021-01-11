import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  // TODO: modificar cuando haya centros de salud
  res.send({ data: [] });
});

export default router;
