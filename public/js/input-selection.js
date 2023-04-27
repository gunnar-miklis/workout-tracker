const exList = ["Abdominal crunches",
"Barbell row",
"Basketball",
"Bench press",
"Boxing",
"Burpees",
"Calf raises",
"Canoeing",
"Cardio kickboxing",
"Chest fly",
"Cross trainer",
"Cycling",
"Dancing",
"Deadlift",
"Dips",
"Dumbbell curls",
"Elliptical machine",
"Frisbee",
"Golf",
"Hack squats",
"Hammer curls",
"High-intensity interval training (HIIT)",
"Hiking",
"Incline dumbbell press",
"Jogging",
"Jumping jacks",
"Jumping rope",
"Kayaking",
"Kickboxing",
"Lat pulldowns",
"Lateral raises",
"Leg curls",
"Leg extensions",
"Leg press",
"Other martial arts",
"Plank",
"Pull-ups",
"Push-ups",
"Rock climbing",
"Rollerblading",
"Romanian deadlifts",
"Rowing machines",
"Rowing",
"Running",
"Seated cable rows",
"Seated leg press",
"Shoulder press",
"Skateboarding",
"Skull crushers",
"Soccer",
"Spinning",
"Squat jumps",
"Squat",
"Stair climbing",
"Stationary bikes",
"Surfing",
"Swimming",
"Tennis",
"Treadmills",
"Tricep extensions",
"Volleyball",
"Walking briskly",
"Water aerobics",
'Arnold Press',
'Barbell Bench Press',
'Bent-Over Rows',
'Bicep Curls',
'Box Jumps',
'Burpees',
'Cable Chest Flyes',
'Cable Rows',
'Calf Raises',
'Close-Grip Bench Press',
'Concentration Curls',
'Crunches',
'Deadlifts',
'Decline Bench Press',
'Dips',
'Dumbbell Bench Press',
'Front Raises',
'Glute Bridges',
'Good Mornings',
'Hack Squats',
'Hammer Curls',
'Hip Thrusts',
'Incline Bench Press',
'Jumping Jacks',
'Lat Pulldowns',
'Lateral Raises',
'Leg Press',
'Leg Raises',
'Lunges',
'Mountain Climbers',
'One-Arm Dumbbell Rows',
'Overhead Tricep Extensions',
'Planks',
'Preacher Curls',
'Pull Ups',
'Pull-Throughs',
'Push Ups',
'Reverse Flyes',
'Reverse Lunges',
'Romanian Deadlifts',
'Russian Twists',
'Seated Calf Raises',
'Seated Leg Curls',
'Shoulder Press',
'Shrugs',
'Six Pack Training',
'Skull Crushers',
'Squats',
'Standing Calf Raises',
'Step-Ups',
'T-Bar Rows',
'Tricep Extensions',
'Tricep Pushdowns',
'Upright Rows',
'Kettlebell swings',
'Medicine ball slams',
'Battle ropes',
'Resistance band exercises',
'Jump squats',
'Box squats',
'Pistol squats',
'Bulgarian split squats',
'Glute kickbacks',
'abductor machine',
'adductor machine', 
'Leg curls with exercise ball',
'Seated or standing calf raises with weights',
'Bench dips',
'Cable woodchoppers',
'Cable curls',
'Cable pull-throughs',
'Farmers walks',
'Plate pushes',
'Push press',
'Thrusters',
'Wall balls',
'Barbell hip thrusts',
'Sumo deadlifts',
'Single-leg deadlifts',
'Dumbbell pullovers',
'Face pulls',
'Cable face pulls',
'Band pull-aparts',
'Kipping pull-ups',
'Ring dips',
'Ring rows',
'Handstand push-ups',
'Pistol squats on a box',
'L-sits',
'Turkish get-ups',
'Box jumps with dumbbells',
'Bear crawls',
'Crab walks',
'Plank jacks',
'Bicycle crunches',
'Russian twists with medicine ball',
'Hanging leg raises',
'Flutter kicks',
'Scissor kicks',
'Superman holds',
'Hollow holds',
'Arch holds',
'Reverse crunches',
'Side plank hip dips',
'Side plank holds',
'Bird dogs',
'Renegade rows',
'Spiderman push-ups',
'Hindu push-ups',
'Pike push-ups',
'Single-arm dumbbell press',
'Incline dumbbell curls',
'Cable kickbacks',
'Cable tricep pushdowns with rope attachment',
'Hammer strength machines (various exercises)',
'Pec deck flyes',
'lateral pulldowns with resistance band',
'Bent-over lateral raises with dumbbells',
'Cable upright rows with rope attachment',
'Wall sits',
'Lunges with dumbbells',
'Walking lunges',
'Jump lunges',
'Side lunges with dumbbell',
'military press with dumbbells',
];

function showInputs( selectDropdown ) {
	const type = selectDropdown.value;
	const trackerInputs = selectDropdown.parentNode.nextSibling.nextSibling.children;

	switch ( type ) {
	case 'rep':
		trackerInputs[0].classList.remove( 'hide' );
		trackerInputs[2].classList.add( 'hide' );
		trackerInputs[3].classList.add( 'hide' );
		trackerInputs[1].classList.add( 'hide' );

		trackerInputs[0].required = true;
		trackerInputs[1].required = false;
		trackerInputs[2].required = false;
		trackerInputs[3].required = false;
		break;
	case 'weight':
		trackerInputs[0].classList.remove( 'hide' );
		trackerInputs[1].classList.remove( 'hide' );
		trackerInputs[2].classList.add( 'hide' );
		trackerInputs[3].classList.add( 'hide' );

		trackerInputs[0].required = true;
		trackerInputs[1].required = true;
		trackerInputs[2].required = false;
		trackerInputs[3].required = false;
		break;
	case 'time':
		trackerInputs[0].classList.add( 'hide' );
		trackerInputs[1].classList.add( 'hide' );
		trackerInputs[2].classList.remove( 'hide' );
		trackerInputs[3].classList.add( 'hide' );

		trackerInputs[0].required = false;
		trackerInputs[1].required = false;
		trackerInputs[2].required = true;
		trackerInputs[3].required = false;
		break;
	case 'distance':
		trackerInputs[0].classList.add( 'hide' );
		trackerInputs[1].classList.add( 'hide' );
		trackerInputs[2].classList.remove( 'hide' );
		trackerInputs[3].classList.remove( 'hide' );

		trackerInputs[0].required = false;
		trackerInputs[1].required = false;
		trackerInputs[2].required = true;
		trackerInputs[3].required = true;
	}
}
function addExerciseForm() {
	// Create a new form element
	const newForm = document.createElement( 'form' );
	newForm.className = 'container exercise flex-row-between flex-wrap';
	newForm.action = '';

	// Add the form fields to the new form element
	newForm.innerHTML = `
  <form autocomplete="off" action='/tracker' method='POST'>
    <div class="flex-row-between autocomplete">
      <input id="search-input" class="standard-input" type="text" name="title" placeholder="Name of Exercise" required>
      <select class="standard-input" name="type" onchange="showInputs(this)" required>
        <option value="" disabled selected>Select Type</option>
        <option value="rep">reps</option>
        <option value="weight">reps and kg</option>
        <option value="time">time</option>
        <option value="distance">time and km</option>
      </select>
    </div>
    <div class="flex-row-center tracker-inputs">
        <input name="rep" class="standard-input hide" type="number" min="0" placeholder="reps">
        <input name="weight" class="standard-input hide" type="number" min="0" placeholder="kg">
        <input name="time" class="standard-input hide" type="number" min="0" placeholder="min">
        <input name="distance" class="standard-input hide" type="number" min="0" placeholder="km">
        <button class="main-button" type="submit">✔</button>
    </div>
    <script type="text/javascript" src="/js/exercise-search.js"></script>
  </form>
  `;
	newForm.setAttribute( 'action', '/tracker' );
	newForm.setAttribute( 'method', 'POST' );
	// Append the new form element to the exercises-container div
	const exercisesContainer = document.getElementById( 'exercises-container' );
	exercisesContainer.appendChild( newForm );

	// NOTE: search with autocomplete feature
	function autocomplete( inp, arr ) {
		/* the autocomplete function takes two arguments,
		the text field element and an array of possible autocompleted values:*/
		let currentFocus;
		/* execute a function when someone writes in the text field:*/
		inp.addEventListener( 'input', function( e ) {
			let a; let b; let i; const val = this.value;
			/* close any already open lists of autocompleted values*/
			closeAllLists();
			if ( !val ) {
				return false;
			}
			currentFocus = -1;
			/* create a DIV element that will contain the items (values):*/
			a = document.createElement( 'DIV' );
			a.setAttribute( 'id', this.id + 'autocomplete-list' );
			a.setAttribute( 'class', 'autocomplete-items' );
			/* append the DIV element as a child of the autocomplete container:*/
			this.parentNode.appendChild( a );
			/* for each item in the array...*/
			for ( i = 0; i < arr.length; i++ ) {
				/* check if the item starts with the same letters as the text field value:*/
				if ( arr[i].name.toString().substr( 0, val.length ).toUpperCase() == val.toUpperCase() ) {
					/* create a DIV element for each matching element:*/
					b = document.createElement( 'DIV' );
					/* make the matching letters bold:*/
					b.innerHTML = '<strong>' + arr[i].name.substr( 0, val.length ) + '</strong>';
					b.innerHTML += arr[i].name.substr( val.length );
					/* insert a input field that will hold the current array item's value:*/
					b.innerHTML += '<input type=\'hidden\' value=\'' + arr[i].name + '\'>';
					/* execute a function when someone clicks on the item value (DIV element):*/
					b.addEventListener( 'click', function( e ) {
					/* insert the value for the autocomplete text field:*/
						inp.value = this.getElementsByTagName( 'input' )[0].value;
						/* close the list of autocompleted values,
					(or any other open lists of autocompleted values:*/
						closeAllLists();
					} );
					a.appendChild( b );
				}
			}
		} );
		/* execute a function presses a key on the keyboard:*/
		inp.addEventListener( 'keydown', function( e ) {
			let x = document.getElementById( this.id + 'autocomplete-list' );
			if ( x ) x = x.getElementsByTagName( 'div' );
			if ( e.keyCode == 40 ) {
				/* If the arrow DOWN key is pressed,
				increase the currentFocus variable:*/
				currentFocus++;
				/* and and make the current item more visible:*/
				addActive( x );
			} else if ( e.keyCode == 38 ) { // up
				/* If the arrow UP key is pressed,
				decrease the currentFocus variable:*/
				currentFocus--;
				/* and and make the current item more visible:*/
				addActive( x );
			} else if ( e.keyCode == 13 ) {
				/* If the ENTER key is pressed, prevent the form from being submitted,*/
				e.preventDefault();
				if ( currentFocus > -1 ) {
					/* and simulate a click on the "active" item:*/
					if ( x ) x[currentFocus].click();
				}
			}
		} );
		function addActive( x ) {
			/* a function to classify an item as "active":*/
			if ( !x ) return false;
			/* start by removing the "active" class on all items:*/
			removeActive( x );
			if ( currentFocus >= x.length ) currentFocus = 0;
			if ( currentFocus < 0 ) currentFocus = ( x.length - 1 );
			/* add class "autocomplete-active":*/
			x[currentFocus].classList.add( 'autocomplete-active' );
		}
		function removeActive( x ) {
			/* a function to remove the "active" class from all autocomplete items:*/
			for ( let i = 0; i < x.length; i++ ) {
				x[i].classList.remove( 'autocomplete-active' );
			}
		}
		function closeAllLists( elmnt ) {
			/* close all autocomplete lists in the document,
			except the one passed as an argument:*/
			const x = document.getElementsByClassName( 'autocomplete-items' );
			for ( let i = 0; i < x.length; i++ ) {
				if ( elmnt != x[i] && elmnt != inp ) {
					x[i].parentNode.removeChild( x[i] );
				}
			}
		}
		/* execute a function when someone clicks in the document:*/
		document.addEventListener( 'click', function( e ) {
			closeAllLists( e.target );
		} );
	}
	autocomplete( document.getElementById( 'search-input' ), exList );
}
