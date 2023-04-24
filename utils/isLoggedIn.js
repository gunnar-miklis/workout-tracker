const isLoggedIn = ( req, res, next ) => {
	if ( req.session.sessionUser ) {
		next();
	} else {
		res.redirect( '/login' );
	}
};

module.exports = isLoggedIn;
