require( 'dotenv' ).config();
const mongoose = require( 'mongoose' );
const Exercise = require( '../models/Exercise.model' );
const Workout = require( '../models/Workout.model' );

const exercises = [
	{
		'title': 'running',
		'description': 'run for your life',
		'type': 'time',
		'distance': 0,
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
		'title': 'plank',
		'description': 'run for your life',
		'type': 'time',
		'distance': 0,
		'time': 5,
		'rep': 0,
		'repWeight': [
			{
				'rep': 0,
				'weight': 0,
			},
		],
	},
	{
		'title': 'wall sit',
		'description': 'run for your life',
		'type': 'time',
		'distance': 0,
		'time': 3,
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
		'distance': 0,
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
		'title': 'squats',
		'description': 'push the floor away',
		'type': 'rep',
		'distance': 0,
		'time': 0,
		'rep': 20,
		'repWeight': [
			{
				'rep': 0,
				'weight': 0,
			},
		],
	},
	{
		'title': 'lunges',
		'description': 'push the floor away',
		'type': 'rep',
		'distance': 0,
		'time': 0,
		'rep': 15,
		'repWeight': [
			{
				'rep': 0,
				'weight': 0,
			},
		],
	},
	{
		'title': 'deadlifts',
		'description': 'press the bench',
		'type': 'weight',
		'distance': 0,
		'time': 0,
		'rep': 0,
		'repWeight': [
			{
				'rep': 5,
				'weight': 15,
			},
		],
	},
	{
		'title': 'bench press',
		'description': 'press the bench',
		'type': 'weight',
		'distance': 0,
		'time': 0,
		'rep': 0,
		'repWeight': [
			{
				'rep': 8,
				'weight': 30,
			},
		],
	},
	{
		'title': 'bicep curls',
		'description': 'press the bench',
		'type': 'weight',
		'distance': 0,
		'time': 0,
		'rep': 0,
		'repWeight': [
			{
				'rep': 3,
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
		'description': 'keep going...',
		'date': '2023-04-24',
		'duration': 60,
		'exercises': [],
	},
	{
		'title': 'Lifting Day',
		'description': 'lift lift lift',
		'date': '2023-04-24',
		'duration': 40,
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
		const strength = [x[3]._id, x[4]._id, x[5]._id];
		workouts[0].exercises.push( ...strength );

		// endurance day: jogging, jogging, jogging
		const endurance = [x[0]._id, x[1]._id, x[2]._id];
		workouts[1].exercises.push( ...endurance );

		// lifting day:
		const lifting = [x[6]._id, x[7]._id, x[8]._id];
		workouts[2].exercises.push( ...lifting );

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
