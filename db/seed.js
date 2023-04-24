const mongoose = require( 'mongoose' );
const Exercise = require( '../models/Exercise.model' );
const Workout = require( '../models/Workout.model' );

const MONGO_URI = process.env.MONGODB_URI;

const exercises = [
	{
		'id': 'ex-1',
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
		'id': 'ex-2',
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
		'id': 'ex-3',
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
		'strenghtDay': [
			{
				'title': 'Strength Day',
				'date': '2023-04-21',
				'duration': 30,
				'exercises': [
					{
						'exerciseId': 'ex-2',
					},
					{
						'exerciseId': 'ex-3',
					},
					{
						'exerciseId': 'ex-2',
					},
				],
			},
		],
	},
	{
		'enduranceDay': [
			{
				'title': 'Endurance Day',
				'date': '2023-04-24',
				'duration': 60,
				'exercises': [
					{
						'exerciseId': 'ex-1',
					},
					{
						'exerciseId': 'ex-1',
					},
					{
						'exerciseId': 'ex-1',
					},
				],
			},
		],
	},
];


mongoose.connect( MONGO_URI )
	.connect( MONGO_URI )
	.then( ( x ) => {
		console.log( `Connected to Mongo database: "${x.connections[0].name}"` );
		Exercise.create( exercises );
		return Workout.create( workouts );
	} )
	.then( ( booksFromDB ) => {
		console.log( `Created ${booksFromDB.length} books` );
		return mongoose.connection.close();
	} )
	.then( () => {
		console.log( 'DB connection closed!' );
	} )
	.catch( ( err ) => {
		console.log( `An error occurred while creating books from the DB: ${err}` );
	} );
