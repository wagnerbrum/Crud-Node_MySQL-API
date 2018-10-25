'use strict';

const express = require('express')
, router = express.Router()
, usuarios_controller = require('../controllers/usuarios');

router.get('/', usuarios_controller.getAll);
router.get('/id/:id', usuarios_controller.getById);
router.post('/', usuarios_controller.add);
router.delete('/:id', usuarios_controller.delete);
router.put('/:id', usuarios_controller.update);

module.exports = router;