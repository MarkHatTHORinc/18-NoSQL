// -----------------------------------------------------------------------------
// Program:  index.js
// Purpose:  Functions to display the home page
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Provided
// Date:     June 21, 2021
// -----------------------------------------------------------------------------


init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      console.log('I did not find previous entries');
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}
