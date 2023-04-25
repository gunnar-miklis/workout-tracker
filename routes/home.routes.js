const express = require( 'express' );
const router = express.Router();
const Workout = require( '../models/Workout.model' );
const User = require( '../models/User.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );

// NOTE: home
// router.get( '/home', isLoggedIn, ( req, res, next ) => {
// 	Workout.find()
// 		.then( ( workoutsFromDb ) => {
// 			res.render( 'home', { workoutsFromDb, user: req.session.sessionUser } );
// 		} )
// 		.catch( ( err ) => next( err ) );
// } );

router.get( '/home', isLoggedIn, ( req, res, next ) => {
	const user = req.session.sessionUser;
	const username = user.username;

	User.findOne( { username } )
		.populate( 'workouts' )
		.populate( {
			path: 'workouts',
			populate: {
				path: 'exercises',
			},
		} )
		.then( ( userFromDb ) => {
			console.log( 'USER :>> ', user );

			const pastWorkouts = userFromDb.workouts;
			console.log( 'pastWorkouts :>> ', pastWorkouts );

			// Workout.findById( {} )
			res.render( 'home', { pastWorkouts, user } );
		} )
		.catch( ( err ) => next( err ) );
} );

module.exports = router;
