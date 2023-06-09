const { Schema, model } = require( 'mongoose' );

const userSchema = new Schema(
	{
		username: {
			type: String,
			trim: true,
			required: false,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ['admin', 'user'],
			default: 'user',
		},
		workouts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Workout',
			},
		],
		weight: {
			type: Number,
			default: 0,
		},
		height: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	},
);

const User = model( 'User', userSchema );

module.exports = User;
