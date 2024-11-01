const express = require('express') // Importo Express
const userRoutes = require('./routes/userRoutes') // Importo las rutas de usuario
const app = express()
const cors = require('cors') // Importo CORS

app.use(cors()) // Habilito CORS para todas las solicitudes
app.use(express.json()) // Middleware para parsear JSON en las solicitudes
app.use('/', userRoutes) // Defino el prefijo '/api' para las rutas de usuario

// Inicio el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})
