function myGlobal() {
  const globalInput = {
    myHeight: document.getElementById("Input-Height").value,
    myWidth: document.getElementById("Input-Width").value,
    myPadding: document.getElementById("Input-Padding").value,
    myBorder: document.getElementById("Input-Border").value, 
    myBorderRadius: document.getElementById("Input-Border-Radius").value,
    myMargin: document.getElementById("Input-Margin").value,
    myBoxShadow: document.getElementById("Input-Box-Shadow").value,
    myOutline: document.getElementById("Input-Outline").value,
    myOutlineOffset: document.getElementById("Input-Outline-Offset").value,
    myPosition: document.getElementById("Input-Position").value,
    myTop: document.getElementById("Input-Top").value,
    myRight: document.getElementById("Input-Right").value,
    myBottom: document.getElementById("Input-Bottom").value,
    myLeft: document.getElementById("Input-Left").value
  };
  return globalInput;
}

function myBoxModel(myInput) {
  document.getElementById("Box-Model").style.height = myGlobal(myInput).myHeight;
  document.getElementById("Box-Model").style.width = myGlobal(myInput).myWidth;
  document.getElementById("Box-Model").style.padding = myGlobal(myInput).myPadding;
  document.getElementById("Box-Model").style.border = myGlobal(myInput).myBorder;
  document.getElementById("Box-Model").style.borderRadius = myGlobal(myInput).myBorderRadius;
  document.getElementById("Box-Model").style.margin = myGlobal(myInput).myMargin;
  document.getElementById("Box-Model").style.boxShadow = myGlobal(myInput).myBoxShadow;
  document.getElementById("Box-Model").style.outline = myGlobal(myInput).myOutline;
  document.getElementById("Box-Model").style.outlineOffset = myGlobal(myInput).myOutlineOffset;
  document.getElementById("Box-Model").style.position = myGlobal(myInput).myPosition;
  document.getElementById("Box-Model").style.top = myGlobal(myInput).myTop;
  document.getElementById("Box-Model").style.right = myGlobal(myInput).myRight;
  document.getElementById("Box-Model").style.bottom = myGlobal(myInput).myBottom;
  document.getElementById("Box-Model").style.left = myGlobal(myInput).myLeft;
}