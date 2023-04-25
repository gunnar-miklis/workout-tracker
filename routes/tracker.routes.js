const express = require( 'express' );
const router = express.Router();
const Workout = require( '../models/Workout.model' );
const Exercise = require('../models/Exercise.model')
const isLoggedIn = require( '../utils/isLoggedIn' );

// NOTE: tracker
router.get( '/tracker', isLoggedIn, ( req, res, next ) => {
	const workoutId = req.params.id;

	Workout.findById( workoutId )
		.populate( 'exercises' )
		.then( ( workoutFromDb ) => {
			res.render( 'tracker', { workoutFromDb } );
		} )
		.catch( ( err ) => next( err ) );
} );

module.exports = router;
