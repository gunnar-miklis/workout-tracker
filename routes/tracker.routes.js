const express = require( 'express' );
const router = express.Router();
const Workout = require( '../models/Workout.model' );
const Exercise = require( '../models/Exercise.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );
const User = require( '../models/User.model' );
// const session = require( 'express-session' );

// NOTE: tracker
router.get( '/tracker', isLoggedIn, ( req, res, next ) => {
	res.render( 'tracker' );
} );

router.post( '/tracker', ( req, res, next ) => {
	const { title, rep, weight, time, distance } = req.body;

	Exercise.create( { title, rep, weight, time, distance } )
		.then( ( exercise ) => {
			req.session.workoutExercises = Array.isArray( req.session.workoutExercises ) ? req.session.workoutExercises : [];
			req.session.workoutExercises.push( exercise._id );
			res.redirect( '/tracker' );
		} )
		.catch( ( err ) => {
			next( err );
		} );
} );


router.post( '/saveworkout', ( req, res, next ) => {
	const { title } = req.body;
	const exercises = req.session.workoutExercises || []; // initialize the array if it's undefined
	Workout.create( { title, date: new Date(), exercises } )
		.then( ( createdWorkout ) => {
			const userId = req.session.sessionUser._id;
			User.findByIdAndUpdate( userId, { $push: { workouts: createdWorkout._id } } ).exec()
				.then( ( updatedUser ) => {
					req.session.workoutExercises = [];
					res.redirect( '/home' );
				} );
		} )
		.catch( ( err ) => {
			next( err );
		} );
} );

module.exports = router;
