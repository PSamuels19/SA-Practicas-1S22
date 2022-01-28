import { Schema, model } from 'mongoose';

export const ROLES = ['Cliente', 'Restaurante', 'Repartidor'];

const roleSchema = new Schema(
	{
		name: String,
	},
	{
		versionKey: false,
	}
);

export default model('Role', roleSchema);
