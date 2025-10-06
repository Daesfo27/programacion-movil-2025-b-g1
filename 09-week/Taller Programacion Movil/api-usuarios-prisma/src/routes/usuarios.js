const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authmiddleware'); // 
const {
  listarUsuarios,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/usuarioscontroller'); // 

//  Todas las rutas protegidas (puedes dejar GET abierto si prefieres)
router.get('/', authMiddleware, listarUsuarios);
router.get('/:id', authMiddleware, obtenerUsuario);
router.put('/:id', authMiddleware, actualizarUsuario);
router.delete('/:id', authMiddleware, eliminarUsuario);

module.exports = router;
