const { Schema, model } = require( 'mongoose' );

const exerciseSchema = new Schema(
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
		weight: Number
	},
	{
		timestamps: true,
	},
);

const Exercise = model( 'Exercise', exerciseSchema );

module.exports = Exercise;
