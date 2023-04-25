const isLoggedIn = ( req, res, next ) => {
	// if there's a sessionUser...
	if ( req.session.sessionUser ) {
		// ...then continue with the middleware flow (or next route)...
		next();
	} else {
		// ...otherwise, redirect to login page
		res.redirect( '/login' );
	}
};

module.exports = isLoggedIn;
