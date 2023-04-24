const express = require( 'express' );
const router = express.Router();

router.get( '/signup', ( req, res, next ) => {
	res.render( 'auth/signup' );
} );

router.post( '/signup', ( req, res, next ) => {
	const { username, email, password } = req.body;
	console.log( `Username: ${username} Password: ${password}` );
} );

router.get( '/login', ( req, res, next ) => {
	res.render( 'auth/login' );
} );

router.post( '/login', ( req, res, next ) => {
	const { username, email, password } = req.body;
	console.log( `Username: ${username}, Email: ${email}, Password: ${password}` );
} );


module.exports = router;
