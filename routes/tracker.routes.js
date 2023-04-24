const express = require( 'express' );
const router = express.Router();
const Workout = require( '../models/Workout.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );

// NOTE: tracker
router.get( '/tracker/:id', isLoggedIn, ( req, res, next ) => {
	const workoutId = req.params.id;

	Workout.findById( workoutId )
		.populate( 'Exercise' )
		.then( ( workoutFromDb ) => {
			res.render( 'tracker', workoutFromDb );
		} )
		.catch( ( err ) => next( err ) );
} );

module.exports = router;
