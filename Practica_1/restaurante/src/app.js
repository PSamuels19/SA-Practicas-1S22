import express from 'express'
import morgan from 'morgan'

const app = express()

// CONFIG
app.set('port', process.env.PORT || 3004)
app.set('json spaces', 4)
app.use(express.json())
app.use(morgan('dev'))

// ROUTES
app.get('/', (req, res) => res.json({ message: 'Restaurente server' }))
app.get('/restaurante', (req, res) => {
    res.json({ message: 'Restaurente server' })
})
app.get('/restaurante/:id', (req, res) => {
    res.json({ message: 'Restaurente server' })
})
app.get('/repartidor/:id', (req, res) => {
    res.json({ message: 'Restaurente server' })
})
export default app