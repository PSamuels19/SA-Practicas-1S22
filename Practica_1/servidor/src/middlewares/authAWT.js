import axios from 'axios';
import config from '../config';

export const verifyToken = async (req, res, next) => {
	const token = req.headers['x-access-token'];
	if (!token)
		return res.status(403).json({ message: 'Token no encontrado :/' });

	const response = await axios.post(
		config.SESION_URI / verifyToken,
		{ token }
	)
	if (response.status !== 200) return res.json(response.data)
	next()
};
