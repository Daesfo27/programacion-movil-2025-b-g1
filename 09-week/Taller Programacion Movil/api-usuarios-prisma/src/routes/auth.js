const express = require('express');
const router = express.Router();
const { registrar, login } = require('../controllers/authcontroller');

// Ruta para registrar usuario
router.post('/register', registrar);

// Ruta para iniciar sesión
router.post('/login', login);

module.exports = router;
