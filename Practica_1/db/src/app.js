import { createRoles } from './libs/initialSetup'

const express = require('express')
const morgan = require('morgan')

const app = express()

// INITIAL CONFIG
createRoles()

// CONFIG
app.set('port', process.env.PORT || 3001)
app.set('json spaces', 4)
app.use(express.json())
app.use(morgan('dev'))

// ROUTES
app.get('/', (req, res) => {
    res.json({ message: 'Database server' })
})


export default app;