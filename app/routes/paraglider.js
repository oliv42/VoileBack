import express from 'express';
import apiControlleur from '../helpers/apiController.js'
import paragliderControllers from '../controllers/paraglider.controllers.js';

const router = express.Router()

router.route('/:id(\\d+)')
    .get(apiControlleur(paragliderControllers.getOne))

router.route('/')
    .get(apiControlleur(paragliderControllers.getAll))

export default router;
