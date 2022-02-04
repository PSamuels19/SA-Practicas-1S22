import express from 'express'
import morgan from 'morgan'

const app = express()

// CONFIG
app.set('port', process.env.PORT || 3005)
app.set('json spaces', 4)
app.use(express.json())
app.use(morgan('dev'))

// ROUTES
app.get('/', (req, res) => res.json({ message: 'Repartidor server' }))
app.get('/repartidor', (req, res) => {
    res.json({ message: 'Repartidor server' })
})
app.get('/repartidor', (req, res) => {
    res.json({ message: 'Repartidor server' })
})
app.get('/repartidor', (req, res) => {
    res.json({ message: 'Repartidor server' })
})
export default app