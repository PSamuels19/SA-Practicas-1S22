import jwt from 'jsonwebtoken';
import config from '../config';
import role from '../models/role';
import user from '../models/user';

export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers['x-access-token'];

		if (!token)
			return res.status(403).json({ message: 'Token no encontrado :/' });

		const decoded = jwt.verify(token, config.SECRET);

		req.userID = decoded.id;

		const userFound = await user.findById(req.userID, { password: 0 });

		if (!userFound)
			return res
				.status(404)
				.json({ message: 'No se encontró el usuario' });

		next();
	} catch (error) {
		res.status(401).json({ message: 'No autorizado' });
	}
};
