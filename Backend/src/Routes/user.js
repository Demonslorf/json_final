const express = require('express');
const {Router} = require('express');
const router = Router();
const Controlador_Usuario = require('../Controllers/usuario');

router.get('/viewUser', Controlador_Usuario.viewUser);
router.post('/createUser', Controlador_Usuario.createUser);
router.post('/logIn', Controlador_Usuario.login);
router.post('/findUser', Controlador_Usuario.FindUser);

module.exports = router;