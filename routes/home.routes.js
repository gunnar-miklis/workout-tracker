const express = require( 'express' );
const router = express.Router();
const Workout = require( '../models/Workout.model' );
const User = require( '../models/User.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );
const Exercise = require( '../models/Exercise.model' );

// NOTE: function to calculate the active days
const getActiveDays = ( workouts ) => {
	// create an array only with the dates
	const workoutDates = [];
	workouts.forEach( ( workout ) => workoutDates.push( workout.date ) );

	// convert date to yyyy-mm-dd format :>> get the unique dates :>> convert them back to default date format
	const convertedDates = workoutDates.map( ( date ) => date.toISOString().slice( 0, 10 ) );
	const uniqueDates = [...new Set( convertedDates )];
	const datesConvertedBack = uniqueDates.map( ( dateString ) => new Date( dateString ) );

	// return the length
	return datesConvertedBack.length;
};

// NOTE: home
router.get( '/home', isLoggedIn, ( req, res, next ) => {
	// get user from session object
	const username = req.session.sessionUser.username;

	User.findOne( { username } )
		.populate( 'workouts' ) // populate the workouts
		.populate( {
			path: 'workouts', // in the populated workouts...
			populate: {
				path: 'exercises', // ...populate the exercises
			},
		} )
		.then( ( userFromDb ) => {
			// NOTE: collect all the data, that will be passed to the view
			// 1. get all past workouts from the user
			const pastWorkouts = userFromDb.workouts;
			// 2. get the total of all exercises for each workout (single number for each workout)
			pastWorkouts.forEach( ( workout ) => {
				// attach it to the pastWorkout-object
				workout.totalExercises = workout.exercises.length;
			} );
			// 3. get the total of all workouts (single number)
			const totalWorkouts = pastWorkouts.length;
			// 4. get the active days via function
			const activeDays = getActiveDays( pastWorkouts );

			res.render( 'home', { pastWorkouts, totalWorkouts, activeDays, username } );
		} )
		.catch( ( err ) => next( err ) );
} );

module.exports = router;
