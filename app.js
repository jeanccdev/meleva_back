// Imports
import express from 'express'
import 'dotenv/config'
import routesMotorista from './routes/routesMotorista.js'
import routesPassageiro from './routes/routesPassageiro.js'
import routesTrajeto from './routes/routesTrajeto.js'
import routesUsuario from './routes/routesUsuario.js'

// Inits
const app = express()

// Middlewares
app.use(express.json())

// Routes
app.use('/motorista', routesMotorista)
app.use('/passageiro', routesPassageiro)
app.use('/trajeto', routesTrajeto)
app.use('/usuario', routesUsuario)

// Run
app.listen(3000, () => {
    console.clear()
    console.log('Server running on http://localhost:3000')
})