const express = require( 'express' );
const router = express.Router();
const bcrypt = require( 'bcryptjs' );
const User = require( '../models/User.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );

// NOTE: Signup Page
router.get( '/signup', ( req, res, next ) => {
	res.render( 'auth/signup' );
} );

router.post( '/signup', ( req, res, next ) => {
	const { username, email, password } = req.body;

	// NOTE: Validation: validate password security
	if ( password.length <= 8 ) {
		res.render( 'auth/signup', { message: 'Password must have at least 8 characters' } );
		return;
	}
	if ( !/[A-Z]/.test( password ) && !/[a-z]/.test( password ) ) {
		res.render( 'auth/signup', { message: 'Password must contain both uppercase and lowercase letters' } );
		return;
	}
	if ( !/\d/.test( password ) ) {
		res.render( 'auth/signup', { message: 'Password must contain at least one digit' } );
		return;
	}
	if ( !/[@!#$%^&*()_+=[\]{}|\\,.?:-]/.test( password ) ) {
		res.render( 'auth/signup', { message: 'Password must contain at least one special character' } );
		return;
	}

	// NOTE: Create User
	User.findOne( { username } )
		.then( ( userFromDb ) => {
			if ( userFromDb !== null ) {
				res.render( 'auth/signup', { message: 'Username is already taken!' } );
			} else {
				User.findOne( { email } )
					.then( ( emailUserFromDb ) => {
						if ( emailUserFromDb !== null ) {
							res.render( 'auth/signup', { message: 'Email is already taken!' } );
						} else {
							const salt = bcrypt.genSaltSync();
							const hash = bcrypt.hashSync( password, salt );

							User.create( { username: username, email: email, password: hash } )
								.then( ( newUser ) => {
									// create session
									const sessionUser = {
										_id: userFromDb.id,
										username: userFromDb.username,
										role: userFromDb.role,
									};
									req.session.sessionUser = sessionUser;
									// redirect to welcome page
									res.redirect( 'auth/welcome' );
								} )
								.catch( ( err ) => next( err ) );
						}
					} );
			}
		} );
} );

// NOTE: Login Page
router.get( '/login', ( req, res, next ) => {
	res.render( 'auth/login' );
} );

router.post( '/login', ( req, res, next ) => {
	const { username, password } = req.body;

	// find by email
	User.findOne( { username } )
		.then( ( userFromDb ) => {
			// if user is in database
			if ( userFromDb ) {
				// compare input-password with database-hash
				if ( bcrypt.compareSync( password, userFromDb.password ) ) {
					// if matching :>> create session
					const sessionUser = {
						_id: userFromDb.id,
						username: userFromDb.username,
						role: userFromDb.role,
					};
					req.session.sessionUser = sessionUser;
					// redirect to home page
					res.redirect( 'home' );
				} else {
					res.render( 'auth/login', { message: 'Wrong Credentials' } );
				}
			} else {
				res.render( 'auth/login', { message: 'Wrong Credentials' } );
			}
		} )
		.catch( ( err ) => next( err ) );
} );

// NOTE: Logout Page
router.get( '/auth/logout', ( req, res, next ) => {
	// destroy session
	req.session.destroy( ( err ) => {
		if ( err ) next( err );
		res.render( 'auth/logout' );
	} );
} );

// NOTE: Welcome Page
router.get( '/welcome', isLoggedIn, ( req, res, next ) => {
	res.render( 'auth/welcome' );
} );

module.exports = router;
