import express from 'express';
import apiControlleur from '../helpers/apiController.js'
import paraglindingControllers from '../controllers/paraglinding.controllers.js';

const router = express.Router()

router.route('/:id(\\d+)')
    .get(apiControlleur(paraglindingControllers.getOne))

router.route('/')
    .get(apiControlleur(paraglindingControllers.getAll))

    export default router;
