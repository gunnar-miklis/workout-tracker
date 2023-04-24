const express = require( 'express' );
const router = express.Router();
const Workout = require( '../models/Workout.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );

// NOTE: home
router.get( '/home', isLoggedIn, ( req, res, next ) => {
	Workout.find()
		.then( ( workoutsFromDb ) => {
			res.render( 'home', { workoutsFromDb } );
		} );
} );

module.exports = router;
