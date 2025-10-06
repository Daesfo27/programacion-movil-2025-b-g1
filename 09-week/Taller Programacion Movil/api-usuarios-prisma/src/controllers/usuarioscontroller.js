const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');

// Listar todos los usuarios
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        email: true,
        createdAt: true,
      },
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar usuarios' });
  }
};

// Obtener un usuario por ID
exports.obtenerUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({
      where: { id: parseInt(id) },
    });
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario' });
  }
};

// Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;

  const data = {};
  if (nombre) data.nombre = nombre;
  if (email) data.email = email;
  if (password) data.password = await bcrypt.hash(password, 10);

  try {
    const usuario = await prisma.usuario.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json(usuario);
  } catch (error) {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await prisma.usuario.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Usuario eliminado', usuario });
  } catch (error) {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};
