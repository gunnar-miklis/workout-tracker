require( 'dotenv' ).config();
const mongoose = require( 'mongoose' );
const Exercise = require( '../models/Exercise.model' );
const Workout = require( '../models/Workout.model' );

const exercises = [
	{
		'title': 'jogging',
		'description': 'run for your life',
		'type': 'time',
		'time': 20,
		'rep': 0,
		'repWeight': [
			{
				'rep': 0,
				'weight': 0,
			},
		],
	},
	{
		'title': 'push up',
		'description': 'push the floor away',
		'type': 'rep',
		'time': 0,
		'rep': 12,
		'repWeight': [
			{
				'rep': 0,
				'weight': 0,
			},
		],
	},
	{
		'title': 'bench press',
		'description': 'press the bench',
		'type': 'weight',
		'time': 0,
		'rep': 0,
		'repWeight': [
			{
				'rep': 5,
				'weight': 15,
			},
		],
	},
];

const workouts = [
	{
		'title': 'Strength Day',
		'description': 'it\'s all about lifting weights',
		'date': '2023-04-21',
		'duration': 30,
		'exercises': [],
	},
	{
		'title': 'Endurance Day',
		'description': 'just keep going...',
		'date': '2023-04-24',
		'duration': 60,
		'exercises': [],
	},
];


mongoose
	.connect( process.env.MONGODB_URI )
	.then( ( x ) => {
		console.log( `🔄️ Connected to Mongo database: "${x.connections[0].name}"` );
		return Exercise.create( exercises );
	} )
	.then( ( x ) => {
		console.log( x );
		console.log( '✅ exercises added' );

		// strength day: push up, bench press, push up
		let ids = [x[1]._id, x[2]._id, x[1]._id];
		workouts[0].exercises.push( ...ids );

		// endurance day: jogging, jogging, jogging
		ids = [x[0]._id, x[0]._id, x[0]._id];
		workouts[1].exercises.push( ...ids );

		return Workout.create( workouts );
	} )
	.then( ( x ) => {
		console.log( x );
		console.log( '✅ workouts added' );
		return mongoose.connection.close();
	} )
	.then( () => {
		console.log( '❌ DB connection closed!' );
	} )
	.catch( ( err ) => {
		console.log( '⚠️ there was an error' );
		console.log( err );
	} );
