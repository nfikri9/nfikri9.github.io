//////////////////////////////////////////////////////////////////////////////// PROPERTY ////////////////////////////////////////////////////////////////////////////////
const Shorthand = {
  TextDecoration: "text-decoration: text-decoration-line text-decoration-color text-decoration-style text-decoration-thickness;"
};

document.getElementsByClassName("Shorthand-Text-Decoration")[0].innerHTML = Shorthand.TextDecoration;
document.getElementsByClassName("Shorthand-Text-Decoration")[1].innerHTML = Shorthand.TextDecoration;
document.getElementsByClassName("Shorthand-Text-Decoration")[2].innerHTML = Shorthand.TextDecoration;
document.getElementsByClassName("Shorthand-Text-Decoration")[3].innerHTML = Shorthand.TextDecoration;

//////////////////////////////////////////////////////////////////////////// TOPIC SELECTIONS ////////////////////////////////////////////////////////////////////////////
function CSSIntroduction() {
  let CSSIntroduction = document.getElementById("CSS-Introduction");
  if (CSSIntroduction.style.display === "block") { CSSIntroduction.style.display = "none"; }
  else { CSSIntroduction.style.display = "block"; }
}

function CSSProperties() {
  let CSSProperties = document.getElementById("CSS-Properties");
  if (CSSProperties.style.display === "block") { CSSProperties.style.display = "none"; }
  else { CSSProperties.style.display = "block"; }
}

///////////////////////////////////////////////////////////////////////// LIST OF CSS PROPERTIES /////////////////////////////////////////////////////////////////////////
function SearchCSSProperties() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("CSS-Properties-Input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("CSS-Properties-List");
  li = ul.getElementsByTagName("li");
  
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) { li[i].style.display = ""; }
    else { li[i].style.display = "none"; }
  }
}

///////////////////////////////////////////////////////////////////////////// COLOR PROPERTY /////////////////////////////////////////////////////////////////////////////
function ColorProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let ColorProperty = document.getElementById("Color-Property");

  if (ColorProperty.style.display === "block") {
    ColorProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    ColorProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function ColorValue() {
  let myColor = document.getElementById("Input-Color").value;
  document.getElementsByClassName("Color")[0].style.color = myColor;
}

////////////////////////////////////////////////////////////////////////// TEXT-ALIGN PROPERTY ///////////////////////////////////////////////////////////////////////////
function TextAlignProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextAlignProperty = document.getElementById("Text-Align-Property");

  if (TextAlignProperty.style.display === "block") {
    TextAlignProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextAlignProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextAlignValue() {
  let myTextAlign = document.getElementById("Input-Text-Align").value;
  document.getElementsByClassName("Text-Align")[0].style.textAlign = myTextAlign;
}

//////////////////////////////////////////////////////////////////////// TEXT-ALIGN-LAST PROPERTY ////////////////////////////////////////////////////////////////////////
function TextAlignLastProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextAlignLastProperty = document.getElementById("Text-Align-Last-Property");

  if (TextAlignLastProperty.style.display === "block") {
    TextAlignLastProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextAlignLastProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextAlignLastValue() {
  let myTextAlignLast = document.getElementById("Input-Text-Align-Last").value;
  document.getElementsByClassName("Text-Align")[1].style.textAlignLast = myTextAlignLast;
}

///////////////////////////////////////////////////////////////////// TEXT-DECORATION-COLOR PROPERTY /////////////////////////////////////////////////////////////////////
function TextDecorationColorProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextDecorationColorProperty = document.getElementById("Text-Decoration-Color-Property");

  if (TextDecorationColorProperty.style.display === "block") {
    TextDecorationColorProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextDecorationColorProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextDecorationColorValue() {
  let myTextDecorationColor = document.getElementById("Input-Text-Decoration-Color").value;
  document.getElementsByClassName("Text-Decoration")[0].style.textDecorationColor = myTextDecorationColor;
}

///////////////////////////////////////////////////////////////////// TEXT-DECORATION-LINE PROPERTY //////////////////////////////////////////////////////////////////////
function TextDecorationLineProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextDecorationLineProperty = document.getElementById("Text-Decoration-Line-Property");

  if (TextDecorationLineProperty.style.display === "block") {
    TextDecorationLineProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextDecorationLineProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextDecorationLineValue() {
  let myTextDecorationLine = document.getElementById("Input-Text-Decoration-Line").value;
  document.getElementsByClassName("Text-Decoration")[1].style.textDecorationLine = myTextDecorationLine;
}

///////////////////////////////////////////////////////////////////// TEXT-DECORATION-STYLE PROPERTY /////////////////////////////////////////////////////////////////////
function TextDecorationStyleProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextDecorationStyleProperty = document.getElementById("Text-Decoration-Style-Property");

  if (TextDecorationStyleProperty.style.display === "block") {
    TextDecorationStyleProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextDecorationStyleProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextDecorationStyleValue() {
  let myTextDecorationStyle = document.getElementById("Input-Text-Decoration-Style").value;
  document.getElementsByClassName("Text-Decoration")[2].style.textDecorationStyle = myTextDecorationStyle;
}

/////////////////////////////////////////////////////////////////// TEXT-DECORATION-THICKNESS PROPERTY ///////////////////////////////////////////////////////////////////
function TextDecorationThicknessProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextDecorationThicknessProperty = document.getElementById("Text-Decoration-Thickness-Property");

  if (TextDecorationThicknessProperty.style.display === "block") {
    TextDecorationThicknessProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextDecorationThicknessProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextDecorationThicknessValue() {
  let myTextDecorationThickness = document.getElementById("Input-Text-Decoration-Thickness").value;
  document.getElementsByClassName("Text-Decoration")[3].style.textDecorationThickness = myTextDecorationThickness;
}

//////////////////////////////////////////////////////////////////////////////// PROPERTY ////////////////////////////////////////////////////////////////////////////////
function EXAMPLEProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let EXAMPLEProperty = document.getElementById("EXAMPLE-Property");

  if (EXAMPLEProperty.style.display === "block") {
    EXAMPLEProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    EXAMPLEProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function EXAMPLEValue() {
  let myEXAMPLE = document.getElementById("Input-EXAMPLE").value;
  document.getElementsByClassName("EXAMPLE")[0].style.example = myEXAMPLE;
}