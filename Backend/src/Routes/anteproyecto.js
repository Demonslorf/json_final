const express = require('express');
const {Router} = require('express');
const router = Router();
const Controlador_AnteProyecto = require('../Controllers/anteproyecto');

router.get('/viewAnteProyect', Controlador_AnteProyecto.viewAnteProyect);
router.post('/createAnteProyect', Controlador_AnteProyecto.createAnteProyect);
router.put('/editAnteProyect', Controlador_AnteProyecto.editAnteProyect);
router.get('/deleteAnteProyect/:id', Controlador_AnteProyecto.deleteAnteProyect);
router.get('/unAnteProyect/:id', Controlador_AnteProyecto.unAnteProyect);
router.get('/unAP/:atributo/:id', Controlador_AnteProyecto.unAP);

module.exports = router;