const express = require( 'express' );
const router = express.Router();
const isLoggedIn = require( '../utils/isLoggedIn' );
const { renderUserData } = require( '../utils/renderUserData' );
const c = require( 'colors' );
c.setTheme( { log: 'bgBrightYellow' } );

// NOTE: home page
router.get( '/home', isLoggedIn, ( req, res, next ) => {
	renderUserData( '../views/home', req, res, next );
} );

module.exports = router;
