const express = require( 'express' );
const router = express.Router();
const User = require( '../models/User.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );
const { renderUserData } = require( '../utils/renderUserData' );
const Workout = require( '../models/Workout.model' );

// NOTE: history page
router.get( '/history', isLoggedIn, ( req, res, next ) => {
	renderUserData( '../views/history', req, res, next );
} );

// NOTE: delete workout
router.post( '/delete', ( req, res, next ) => {
	const workoutId = req.body.id;
	const userId = req.session.sessionUser._id;

	User.findById( userId )
		.then( ( userFromDb ) => {
			const userWorkouts = userFromDb.workouts;

			// find the matching workout id
			userWorkouts.forEach( ( workout ) => {
				if ( workout.toString() === workoutId ) {
					// get the index
					const workoutIdx = userFromDb.workouts.indexOf( workout );
					// splice the array at index position, aka remove this index
					userFromDb.workouts.splice( workoutIdx, 1 );

					// update the user: remove the workout from the user
					User.findByIdAndUpdate( userId, { workouts: userFromDb.workouts }, { new: true } )
						.then( ( updatedWorkouts ) => {
							// remove the workout form the workout collection
							Workout.findByIdAndDelete( { _id: workoutId } )
								.then( ( deletedWorkout ) => {
									res.redirect( '/history' );
								} )
								.catch( ( err ) => next( err ) );
						} )
						.catch( ( err ) => next( err ) );
				}
			} );
		} )
		.catch( ( err ) => next( err ) );
} );

module.exports = router;
