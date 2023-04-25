const hbs = require( 'hbs' );

hbs.registerHelper( 'ifeq', function( arg1, arg2, options ) {
	return ( arg1 === arg2 ) ? options.fn( this ) : options.inverse( this );
} );

hbs.registerHelper( 'formatDate', function( date ) {
	const day = ( '0' + date.getDate() ).slice( -2 );
	const month = ( '0' + ( date.getMonth() + 1 ) ).slice( -2 );
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
} );
