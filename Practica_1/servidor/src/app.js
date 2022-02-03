import express from 'express';
import morgan from 'morgan';
import pkgJSON from '../package.json';
import { logger } from '../config/logger';
import authRoutes from './routes/auth.routes'
import clienteRoutes from './routes/cliente.routes'
import restauranteRoutes from './routes/restaurante.routes'
import repartidorRoutes from './routes/repartidor.routes'

const app = express();

// CONFIG
app.set('packageJSON', pkgJSON);
app.set('port', process.env.PORT || 80);
app.set('json spaces', 4);
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.get('/', async (req, res) => {
	logger.log('info', `Server run on port ${app.get('port')}`)
	res.json({
		name: pkgJSON.name,
		description: pkgJSON.description,
		version: pkgJSON.version,
		author: pkgJSON.author,
		licence: pkgJSON.license,
		routes: {
			auth: '/api/auth',
		},
	});
});
app.use('/api/auth', authRoutes)
app.use('/api/cliente', clienteRoutes)
// app.use('/api/restaurante', restauranteRoutes)
// app.use('/api/repartidor', repartidorRoutes)

export default app;
