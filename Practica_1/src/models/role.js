import { Schema, model } from 'mongoose';

export const ROLES = ['USER', 'ADMIN', 'MOD'];

const roleSchema = new Schema(
	{
		name: String,
	},
	{
		versionKey: false,
	}
);

export default model('Role', roleSchema);
