import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		roles: [
			{
				ref: 'Role',
				type: Schema.Types.ObjectId,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

/**
 * 
 * @param {string} password 
 * @returns {string}
 */
userSchema.statics.encryptPassword = (password) => {
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
};

/**
 * 
 * @param {string} password 
 * @param {string} receivedPassword 
 * @returns {boolean}
 */
userSchema.statics.comparePassword = (
	password,
	receivedPassword
) => {
	return bcrypt.compareSync(password, receivedPassword);
};

export default model('User', userSchema);
