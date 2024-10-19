function myBoxModel() {
  const myInput = {
    myHeight: document.getElementById("Input-Height").value,
    myWidth: document.getElementById("Input-Width").value
  };
  document.getElementById("Box-Model").style.height = myInput.myHeight;
  document.getElementById("Box-Model").style.width = myInput.myWidth;
}