import role from '../models/role';

export const createRoles = async () => {
	try {
		const count = await role.estimatedDocumentCount();

		if (count > 0) return;

		const values = await Promise.all([
			new role({ name: 'Cliente' }).save(),
			new role({ name: 'Restaurante' }).save(),
			new role({ name: 'Repartidor' }).save(),
		]);

		console.log(values);
	} catch (error) {
		console.error(error);
	}
};
