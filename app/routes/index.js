import express from 'express';
import paraglindingRouter from './paraglider.js'

const router = express.Router();



router.use('/api/paraglider', paraglindingRouter)

router.use((_req, res) => {
    res.status(404).json({ message: 'page not found' });
  });

export default router;
