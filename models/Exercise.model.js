const { Schema, model } = require( 'mongoose' );

const exerciseSchema = new Schema(
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
		type: {
			type: String,
			enum: ['rep', 'weight', 'time'],
			required: true,
		},
		distance: {
			type: Number,
			default: 0,
		},
		rep: {
			type: Number,
			default: 0,
		},
		time: {
			type: Number,
			default: 0,
		},
		repWeight: [
			{
				rep: { type: String, default: 0 },
				weight: { type: String, default: 0 },
			},
		],
	},
	{
		timestamps: true,
	},
);

const Exercise = model( 'Exercise', exerciseSchema );

module.exports = Exercise;
