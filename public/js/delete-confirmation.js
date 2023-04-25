function addExerciseForm( id ) {
	// TODO: pop-up do you really want to delete workout "name"
}

// TODO: optional 
details = document.querySelector( 'details' );
console.log( details );
details.addEventListener( 'toggle', ( event ) => {
	if ( details.open ) {
		console.log( 'details is open' );
	} else {
		console.log( 'details is closed' );
	}
} );