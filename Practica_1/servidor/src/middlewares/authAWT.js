import axios from 'axios';
import config from '../config';

export const clienteAccess = async (req, res, next) => {
	const { authorization } = req.headers
	const token = authorization.replace('Bearer ', '')
	const result = await verifyToken(token)
	if (result.status === 403)
		return res.status(result.status).json({ message: result.message })
	else if (result.status === 404)
		return res.status(result.status).json(result.data)
	else {
		const currentUser = result.data
		console.log(currentUser)
		if (currentUser.rolId === 1)
			next()
		else
			return res.status(401).json({ message: 'Acceso denegado' })
	}
}

export const restauranteAccess = async (req, res, next) => {
	const { authorization } = req.headers
	const token = authorization.replace('Bearer ', '')
	const result = await verifyToken(token)
	if (result.status === 403)
		return res.status(result.status).json({ message: result.message })
	else if (result.status === 404)
		return res.status(result.status).json(result.data)
	else {
		const currentUser = result.data
		if (currentUser.rowId === 2)
			next()
		else
			return res.status(401).json({ message: 'Acceso denegado' })
	}
}

export const repartidorAccess = async (req, res, next) => {
	const { authorization } = req.headers
	const token = authorization.replace('Bearer ', '')
	const result = await verifyToken(token)
	if (result.status !== 200)
		return res.status(result.status).json({ message: result.message })
	else {
		const currentUser = result.data
		if (currentUser.rowId === 3)
			next()
		else
			return res.status(401).json({ message: 'Acceso denegado' })
	}
}

export const verifyToken = async (token) => {
	if (!token)
		return { status: 403, data: [], message: 'Token no encontrado' }

	const response = await axios.post(
		`${config.SESION_URI}/verifyToken`,
		{ token }
	)
	if (response.status !== 200)
		return { status: response.status, data: [], message: response.data }
	return { status: response.status, data: response.data, message: 'ok' }
};
