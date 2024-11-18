///////////////////////////
// BOOTSRAP INTRODUCTION //
///////////////////////////
function BootstrapIntroduction() {
  let myVisibility = document.getElementById("Bootstrap-Introduction");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}