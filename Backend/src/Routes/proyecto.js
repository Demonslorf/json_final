const express = require('express');
const {Router} = require('express');
const router = Router();
const Controlador_Proyecto = require('../Controllers/proyecto');

router.get('/viewProyect', Controlador_Proyecto.viewProyect);
router.post('/createProyect', Controlador_Proyecto.createProyecto);
router.put('/editProyect', Controlador_Proyecto.editProyecto);
router.get('/deleteProyect/:id', Controlador_Proyecto.deleteProyect);
router.get('/FindProyect/:id_Estudiante', Controlador_Proyecto.FindProyect);

module.exports = router;