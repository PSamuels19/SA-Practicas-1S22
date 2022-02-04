import express from "express"
import morgan from "morgan"

const app = express()

// CONFIG
app.set('port', process.env.PORT || 3003)
app.set('json spaces', 4)
app.use(express.json())
app.use(morgan('dev'))

// ROUTES
app.get('/', (req, res) => {
    res.json({ message: 'Cliente server' })
})
app.post('/pedido', (req, res) => {
    res.json({ message: 'Crear pedido' })
})
app.get('/pedido/:id', (req, res) => {
    res.json({ message: 'Ver estado de pedido' })
})
app.get('/reparto/:id', (req, res) => {
    res.json({ message: 'Ver estado reparto' })
})

export default app