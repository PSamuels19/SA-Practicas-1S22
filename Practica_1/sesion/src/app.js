import express from 'express'
import morgan from "morgan";
import authRoutes from './routes/auth.routes'

const app = express()

// CONFIG
app.set('port', process.env.PORT || 3002)
app.set('json spaces', 4)
app.set(morgan('dev'))
app.use(express.json())

// ROUTES
app.use('/', authRoutes)

export default app