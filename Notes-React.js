////////////////////////
// REACT INTRODUCTION //
////////////////////////
function ReactIntroduction() {
  let myVisibility = document.getElementById("React-Introduction");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}