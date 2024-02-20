// Imports
import express from 'express'
import sequelize from './db.js'
import 'dotenv/config.js'
import routesDriver from './routes/routesDriver.js'
import routesPassenger from './routes/routesPassenger.js'
import routesTrip from './routes/routesTrip.js'
import routesUser from './routes/routesUser.js'
import { ModelUser } from './models/User.js'

// Inits
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/driver', routesDriver)
app.use('/passenger', routesPassenger)
app.use('/trip', routesTrip)
app.use('/user', routesUser)

// Run
sequelize.sync({
    force: true
})
    .then(async () => {
        await ModelUser.create({
            username: 'admin',
            password: 'admin',
            name: 'Jean Carlos',
            email: 'jeancc1532@gmail.com',
            phones: '48998465757'
        })
    })
    .then(() => {
        app.listen(3000, () => {
            console.clear()
            console.log('Server running on http://localhost:3000')
        })
    })