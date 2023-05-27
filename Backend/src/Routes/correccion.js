const express = require('express');
const {Router} = require('express');
const router = Router();
const Controlador_Correccion = require('../Controllers/correccion');

router.get('/viewCorrection', Controlador_Correccion.viewCorrection);
router.post('/createCorrection', Controlador_Correccion.createCorrection);
router.get('/especificC/:atributo/:valor', Controlador_Correccion.especificC);

module.exports = router;