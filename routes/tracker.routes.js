const express = require( 'express' );
const router = express.Router();
const Workout = require( '../models/Workout.model' );
const Exercise = require( '../models/Exercise.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );
const User = require( '../models/User.model' );
const exercisesList = require( '../db/list-of-exercises' ).exercisesList;

router.get( '/tracker', isLoggedIn, ( req, res, next ) => {
	if ( req.session.previousWorkoutExercises ) {
		// get all exercises for this workout session ( contains only ids )
		const previousWorkoutExercisesIds = req.session.previousWorkoutExercises;

		// populate exercises, wait for all to be populated
		Promise.all( previousWorkoutExercisesIds.map( ( exerciseId ) => {
			// populate the ids, to show title, etc. later
			return Exercise.findById( exerciseId )
				.populate()
				.then( ( populated ) => {
					return populated;
				} );
		} ) )
			.then( ( result ) => {
				// create an object for all these exercercises
				const previousWorkoutExercises = {};
				// need to be stored in a property "exercises", in order to use the partial correctly later
				previousWorkoutExercises.exercises = result;
				res.render( 'tracker', { previousWorkoutExercises } );
			} )
			.catch( ( err ) => next( err ) );
	} else {
		res.render( 'tracker' );
	}
} );

router.post( '/tracker', ( req, res, next ) => {
	const { title, rep, weight, time, distance } = req.body;

	if ( !exercisesList.some( ( exercise ) => exercise === title ) ) {
		res.render( 'tracker', { message: 'Exercise not found' } );
		return;
	}

	Exercise.create( { title, rep, weight, time, distance } )
		.then( ( exercise ) => {
			req.session.previousWorkoutExercises = Array.isArray( req.session.previousWorkoutExercises ) ? req.session.previousWorkoutExercises : [];
			req.session.previousWorkoutExercises.push( exercise._id );
			res.redirect( '/tracker' );
		} )
		.catch( ( err ) => next( err ) );
} );


router.post( '/saveworkout', ( req, res, next ) => {
	const { title, description, duration } = req.body;
	const exercises = req.session.previousWorkoutExercises || []; // initialize the array if it's undefined
	Workout.create( { title, description, duration, date: new Date(), exercises } )
		.then( ( createdWorkout ) => {
			const userId = req.session.sessionUser._id;
			User.findByIdAndUpdate( userId, { $push: { workouts: createdWorkout._id } } ).exec()
				.then( ( updatedUser ) => {
					delete req.session.previousWorkoutExercises;
					res.redirect( '/home' );
				} );
		} )
		.catch( ( err ) => next( err ) );
} );

router.post( '/abort', ( req, res, next ) => {
	delete req.session.previousWorkoutExercises;
	res.redirect( '/home' );
} );

module.exports = router;
