require('dotenv').config();
const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Importar rutas
const authRouter = require('./routes/auth');
const usuariosRouter = require('./routes/usuarios');

// Usar rutas
app.use('/api/auth', authRouter);
app.use('/api/usuarios', usuariosRouter);

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
