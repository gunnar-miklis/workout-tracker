const express = require( 'express' );
const router = express.Router();
const isLoggedIn = require( '../utils/isLoggedIn' );
const { renderUserData } = require( '../utils/renderUserData' );

// NOTE: home page
router.get( '/home', isLoggedIn, ( req, res, next ) => {
	renderUserData( '../views/home', req, res, next );
} );

module.exports = router;
