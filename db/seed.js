require( 'dotenv' ).config();
const mongoose = require( 'mongoose' );
const Exercise = require( '../models/Exercise.model' );
const Workout = require( '../models/Workout.model' );

const exercises = [
	{
		'title': 'running',
		'description': 'run for your life',
		'distance': 0,
		'time': 20,
		'rep': 0,
		'weight': 0,
	},
	{
		'title': 'plank',
		'description': 'run for your life',
		'distance': 0,
		'time': 5,
		'rep': 0,
		'weight': 0,
	},
	{
		'title': 'wall sit',
		'description': 'run for your life',
		'distance': 0,
		'time': 3,
		'rep': 0,
		'weight': 0,
	},
	{
		'title': 'push up',
		'description': 'push the floor away',
		'distance': 0,
		'time': 0,
		'rep': 12,
		'weight': 0,
	},
	{
		'title': 'squats',
		'description': 'push the floor away',
		'distance': 0,
		'time': 0,
		'rep': 20,
		'weight': 0,
	},
	{
		'title': 'lunges',
		'description': 'push the floor away',
		'distance': 0,
		'time': 0,
		'rep': 15,
		'weight': 0,
	},
	{
		'title': 'deadlifts',
		'description': 'press the bench',
		'distance': 0,
		'time': 0,
		'rep': 0,
		'weight': 10,
	},
	{
		'title': 'bench press',
		'description': 'press the bench',
		'distance': 0,
		'time': 0,
		'rep': 0,
		'weight': 20,
	},
	{
		'title': 'bicep curls',
		'description': 'press the bench',
		'distance': 0,
		'time': 0,
		'rep': 0,
		'weight': 30,
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

		return Exercise.deleteMany()
			.then( () => {
				console.log( '✅ old exercises deleted' );
				return Exercise.create( exercises );
			} )
			.catch( ( err ) => console.log( '⚠️ there was an error', err ) );
	} )
	.then( ( x ) => {
		console.log( '✅ exercises added', x );

		// strength day: push up, bench press, push up
		const strength = [x[3]._id, x[4]._id, x[5]._id];
		workouts[0].exercises.push( ...strength );

		// endurance day: jogging, jogging, jogging
		const endurance = [x[0]._id];
		workouts[1].exercises.push( ...endurance );

		// lifting day:
		const lifting = [x[6]._id, x[7]._id, x[8]._id, x[6]._id];
		workouts[2].exercises.push( ...lifting );

		return Workout.deleteMany()
			.then( () => {
				console.log( '✅ old workouts deleted' );
				return Workout.create( workouts );
			} )
			.catch( ( err ) => console.log( '⚠️ there was an error', err ) );
	} )
	.then( ( x ) => {
		console.log( '✅ workouts added', x );
		return mongoose.connection.close();
	} )
	.then( () => {
		console.log( '❌ DB connection closed!' );
	} )
	.catch( ( err ) => {
		console.log( '⚠️ there was an error', err );
	} );
