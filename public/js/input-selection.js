function showInputs(selectDropdown){
  const type = selectDropdown.value
  const trackerInputs = selectDropdown.parentNode.nextSibling.nextSibling.children
  
  switch (type){
    case 'rep':
      trackerInputs[0].classList.remove('hide')
      trackerInputs[2].classList.add('hide')
      trackerInputs[3].classList.add('hide')
      trackerInputs[1].classList.add('hide')

      trackerInputs[0].required = true
      trackerInputs[1].required = false
      trackerInputs[2].required = false
      trackerInputs[3].required = false
      break;
    case 'weight':
      trackerInputs[0].classList.remove('hide')
      trackerInputs[1].classList.remove('hide')
      trackerInputs[2].classList.add('hide')
      trackerInputs[3].classList.add('hide')

      trackerInputs[0].required = true
      trackerInputs[1].required = true
      trackerInputs[2].required = false
      trackerInputs[3].required = false
      break;
    case 'time':
      trackerInputs[0].classList.add('hide')
      trackerInputs[1].classList.add('hide')
      trackerInputs[2].classList.remove('hide')
      trackerInputs[3].classList.add('hide')

      trackerInputs[0].required = false
      trackerInputs[1].required = false
      trackerInputs[2].required = true
      trackerInputs[3].required = false
      break;
    case 'distance':
      trackerInputs[0].classList.add('hide')
      trackerInputs[1].classList.add('hide')
      trackerInputs[2].classList.remove('hide')
      trackerInputs[3].classList.remove('hide')

      trackerInputs[0].required = false
      trackerInputs[1].required = false
      trackerInputs[2].required = true
      trackerInputs[3].required = true
  }
}
function addExerciseForm() {
  // Create a new form element
  var newForm = document.createElement("form");
  newForm.className = "container exercise flex-row-between flex-wrap";
  newForm.action = "";

  // Add the form fields to the new form element
  newForm.innerHTML = `
  <form action='/tracker' method='POST'>
    <div class="flex-row-between">
      <input class="standard-input" type="text" name="title" placeholder="Name of Exercise" required>
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
        <button class="main-button" type="submit">Track</button>
    </div>
  </form>
  `;
  newForm.setAttribute('action', '/tracker')
  newForm.setAttribute('method', 'POST')
  // Append the new form element to the exercises-container div
  var exercisesContainer = document.getElementById("exercises-container");
  exercisesContainer.appendChild(newForm);
}
