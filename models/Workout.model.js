const { Schema, model } = require( 'mongoose' );

const workoutSchema = new Schema(
	{
		title: {
			type: String,
			trim: true,
			required: false,
		},
		description: {
			type: String,
			trim: true,
		},
		date: {
			type: Date,
		},
		duration: {
			type: String,
			default: '00:00:00',
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
