import express from 'express';
import morgan from 'morgan';
import { createRoles } from './libs/initialSetup';
import authRoutes from './routes/auth.routes'
import pkgJSON from '../package.json';
import { logger } from '../config/logger';

const app = express();

// INITIAL CONFIG
createRoles();

// CONFIG
app.set('packageJSON', pkgJSON);
app.set('port', process.env.PORT || 80);
app.set('json spaces', 4);
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.get('/', (req, res) => {
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

export default app;
