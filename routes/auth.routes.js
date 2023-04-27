const express = require( 'express' );
const router = express.Router();
const bcrypt = require( 'bcryptjs' );
const User = require( '../models/User.model' );
const isLoggedIn = require( '../utils/isLoggedIn' );
const Exercise = require( '../models/Exercise.model' );
const Workout = require( '../models/Workout.model' );

// NOTE: create a session for the user
const createUserSession = ( req, user ) => {
	const sessionUser = {
		_id: user._id,
		username: user.username,
		role: user.role,
	};
	req.session.sessionUser = sessionUser;
};

// NOTE: create user templates
const createUserTemplates = ( res, next, userId ) => {
	// first get all exercises
	// COMMENT: ...however we will only use the first 9 exercises (might be a thing to improve later: to find only index [0-8] )
	Exercise.find()
		.then( ( exercises ) => {
			// create some default workouts for the user
			return workoutTemplates = [
				{
					'title': 'Strength Day',
					'description': 'pushing max power.',
					'date': '2023-04-21',
					'duration': '00:32:12',
					'exercises': [exercises[3]._id, exercises[4]._id, exercises[5]._id],
				},
				{
					'title': 'Endurance Day',
					'description': 'run to the park, along the river',
					'date': '2023-04-24',
					'duration': '01:15:12',
					'exercises': [exercises[0]._id],
				},
				{
					'title': 'Lifting Day',
					'description': 'doing some weight exercises in the gym',
					'date': '2023-04-24',
					'duration': '00:21:44',
					'exercises': [exercises[6]._id, exercises[7]._id, exercises[8]._id, exercises[6]._id],
				},
			];
		} )
		.then( ( workoutTemplates ) => {
			// create the workouts
			Workout.create( workoutTemplates )
				.then( ( createdWorkouts ) => {
					// get only the ids
					const updateWorkoutIds = [];
					updateWorkoutIds.push( createdWorkouts[0]._id );
					updateWorkoutIds.push( createdWorkouts[1]._id );
					updateWorkoutIds.push( createdWorkouts[2]._id );
					// update the user and push the ids from the created workouts to the users workouts array
					User.findByIdAndUpdate( userId, { $push: { workouts: updateWorkoutIds } }, { new: true } )
						.then( () => {
							// redirect to welcome page
							res.redirect( '/welcome' );
						} )
						.catch( ( err ) => next( err ) );
				} )
				.catch( ( err ) => next( err ) );
		} )
		.catch( ( err ) => next( err ) );
};

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
									// call function to create session
									createUserSession( req, newUser );
									return newUser._id;
								} )
								.then( ( userId ) => {
									// call function to create user template
									createUserTemplates( res, next, userId );
									// COMMENT: redirect happens inside the function (might be a thing to improve later: to call the redirect inside the route)
								} )
								.catch( ( err ) => next( err ) );
						}
					} )
					.catch( ( err ) => next( err ) );
			}
		} )
		.catch( ( err ) => next( err ) );
} );

// NOTE: Welcome Page
router.get( '/welcome', isLoggedIn, ( req, res, next ) => {
	res.render( 'auth/welcome' );
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
					createUserSession( req, userFromDb );
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

module.exports = router;
