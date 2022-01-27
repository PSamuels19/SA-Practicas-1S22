import role from '../models/role';

export const createRoles = async () => {
	try {
		const count = await role.estimatedDocumentCount();

		if (count > 0) return;

		const values = await Promise.all([
			new role({ name: 'USER' }).save(),
			new role({ name: 'ADMIN' }).save(),
			new role({ name: 'MOD' }).save(),
		]);

		console.log(values);
	} catch (error) {
		console.error(error);
	}
};
