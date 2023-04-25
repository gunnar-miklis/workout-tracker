const express = require( 'express' );
const router = express.Router();
const Workout = require( '../models/Workout.model' );
const User = require( '../models/User.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );
const Exercise = require( '../models/Exercise.model' );

const getActiveDays = ( workouts ) => {
	const workoutDates = [];
	workouts.forEach( ( workout ) => workoutDates.push( workout.date ) );

	const convertedDates = workoutDates.map( ( date ) => date.toISOString().slice( 0, 10 ) );
	const uniqueDates = [...new Set( convertedDates )];
	const datesConvertedBack = uniqueDates.map( ( dateString ) => new Date( dateString ) );

	return datesConvertedBack.length;
};

// NOTE: home
router.get( '/home', isLoggedIn, ( req, res, next ) => {
	const username = req.session.sessionUser.username;

	User.findOne( { username } )
		.populate( 'workouts' )
		.populate( {
			path: 'workouts',
			populate: {
				path: 'exercises',
			},
		} )
		.then( ( userFromDb ) => {
			console.log( 'userFromDb :>> ', userFromDb );
			const pastWorkouts = userFromDb.workouts;
			const totalWorkouts = pastWorkouts.length;
			const activeDays = getActiveDays( pastWorkouts );
			res.render( 'home', { pastWorkouts, totalWorkouts, activeDays, username } );
		} )
		.catch( ( err ) => next( err ) );
} );

module.exports = router;
