import express from "express";

const router = express.Router()

router.route('/:id(\\d+)')
    .get((req, rep) => {
        const idParaglinding = req.params.id;
        rep.send(`controller paradilinding getOne id: ${idParaglinding}`);

    })

router.route('/')
    .get((_req, rep) => {
        rep.send('controller paradilinding getAll');
    })

    export default router;
