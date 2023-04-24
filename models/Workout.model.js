const { Schema, model } = require( 'mongoose' );

const workoutSchema = new Schema(
	{
		title: {
			type: String,
			trim: true,
			required: false,
			unique: true,
		},
		description: {
			type: String,
			trim: true,
		},
		date: {
			type: Date,
		},
		duration: {
			type: Number,
			default: 0,
		},
		exercises: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Exercise',
			},
		],
	},
	{
		timestamps: true,
	},
);

const Workout = model( 'Workout', workoutSchema );

module.exports = Workout;
