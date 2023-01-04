import express from 'express';

const router = express.Router();



router.use('/api/paragliding/:id', (req, res) => {
    const idParagliding = req.params.id;
    console.log(idParagliding)
    res.send(`test route paraglinding ${idParagliding}`);
})

router.use('/api/paragliding', (_, res) => {
    res.send('test route paraglinding');
})

router.use('/', (_, res) => {
    res.send('test route /');
})


export default router;
