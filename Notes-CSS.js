function myGlobal() {
  const globalInput = {
    myHeight: document.getElementById("Input-Height").value,
    myWidth: document.getElementById("Input-Width").value,
    myPadding: document.getElementById("Input-Padding").value,
    myBorder: document.getElementById("Input-Border").value, 
    myBorderRadius: document.getElementById("Input-Border-Radius").value
  };
  return globalInput;
}

function myBoxModel(myInput) {
  document.getElementById("Box-Model").style.height = myGlobal(myInput).myHeight;
  document.getElementById("Box-Model").style.width = myGlobal(myInput).myWidth;
  document.getElementById("Box-Model").style.padding = myGlobal(myInput).myPadding;
  document.getElementById("Box-Model").style.border = myGlobal(myInput).myBorder;
  document.getElementById("Box-Model").style.borderRadius = myGlobal(myInput).myBorderRadius;
}