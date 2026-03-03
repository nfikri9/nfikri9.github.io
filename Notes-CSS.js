//////////////////////////////////////////////////////////////////////////////// PROPERTY ////////////////////////////////////////////////////////////////////////////////
const Shorthand = {
  TextDecoration: "text-decoration: text-decoration-line text-decoration-color text-decoration-style text-decoration-thickness;",
  TextEmphasis  : "text-emphasis: text-emphasis-style text-emphasis-color;"
};

document.getElementsByClassName("Shorthand-Text-Decoration")[0].innerHTML = Shorthand.TextDecoration;
document.getElementsByClassName("Shorthand-Text-Decoration")[1].innerHTML = Shorthand.TextDecoration;
document.getElementsByClassName("Shorthand-Text-Decoration")[2].innerHTML = Shorthand.TextDecoration;
document.getElementsByClassName("Shorthand-Text-Decoration")[3].innerHTML = Shorthand.TextDecoration;
document.getElementsByClassName("Shorthand-Text-Emphasis")[0].innerHTML = Shorthand.TextEmphasis;
document.getElementsByClassName("Shorthand-Text-Emphasis")[1].innerHTML = Shorthand.TextEmphasis;

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

////////////////////////////////////////////////////////////////////// TEXT-EMPHASIS-COLOR PROPERTY //////////////////////////////////////////////////////////////////////
function TextEmphasisColorProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextEmphasisColorProperty = document.getElementById("Text-Emphasis-Color-Property");

  if (TextEmphasisColorProperty.style.display === "block") {
    TextEmphasisColorProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextEmphasisColorProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextEmphasisColorValue() {
  let myTextEmphasisColor = document.getElementById("Input-Text-Emphasis-Color").value;
  document.getElementsByClassName("Text-Emphasis")[0].style.textEmphasisColor = myTextEmphasisColor;
}

//////////////////////////////////////////////////////////////////// TEXT-EMPHASIS-POSITION PROPERTY /////////////////////////////////////////////////////////////////////
function TextEmphasisPositionProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextEmphasisPositionProperty = document.getElementById("Text-Emphasis-Position-Property");

  if (TextEmphasisPositionProperty.style.display === "block") {
    TextEmphasisPositionProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextEmphasisPositionProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextEmphasisPositionValue() {
  let myTextEmphasisPosition = document.getElementById("Input-Text-Emphasis-Position").value;
  document.getElementsByClassName("Text-Emphasis")[1].style.textEmphasisPosition = myTextEmphasisPosition;
}

////////////////////////////////////////////////////////////////////// TEXT-EMPHASIS-STYLE PROPERTY //////////////////////////////////////////////////////////////////////
function TextEmphasisStyleProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextEmphasisStyleProperty = document.getElementById("Text-Emphasis-Style-Property");

  if (TextEmphasisStyleProperty.style.display === "block") {
    TextEmphasisStyleProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextEmphasisStyleProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextEmphasisStyleValue() {
  let myTextEmphasisStyle = document.getElementById("Input-Text-Emphasis-Style").value;
  document.getElementsByClassName("Text-Emphasis")[2].style.textEmphasisStyle = myTextEmphasisStyle;
}

////////////////////////////////////////////////////////////////////////// TEXT-INDENT PROPERTY //////////////////////////////////////////////////////////////////////////
function TextIndentProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextIndentProperty = document.getElementById("Text-Indent-Property");

  if (TextIndentProperty.style.display === "block") {
    TextIndentProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextIndentProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextIndentValue() {
  let myTextIndent = document.getElementById("Input-Text-Indent").value;
  document.getElementsByClassName("Text-Indent")[0].style.textIndent = myTextIndent;
}

///////////////////////////////////////////////////////////////////////// TEXT-JUSTIFY PROPERTY //////////////////////////////////////////////////////////////////////////
function TextJustifyProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextJustifyProperty = document.getElementById("Text-Justify-Property");

  if (TextJustifyProperty.style.display === "block") {
    TextJustifyProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextJustifyProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextJustifyValue() {
  let myTextJustify = document.getElementById("Input-Text-Justify").value;
  document.getElementsByClassName("Text-Align")[2].style.textJustify = myTextJustify;
}

/////////////////////////////////////////////////////////////////////// TEXT-ORIENTATION PROPERTY ////////////////////////////////////////////////////////////////////////
function TextOrientationProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextOrientationProperty = document.getElementById("Text-Orientation-Property");

  if (TextOrientationProperty.style.display === "block") {
    TextOrientationProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextOrientationProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextOrientationValue() {
  let myTextOrientation = document.getElementById("Input-Text-Orientation").value;
  document.getElementsByClassName("Text-Orientation")[0].style.textOrientation = myTextOrientation;
}

///////////////////////////////////////////////////////////////////////// TEXT-OVERFLOW PROPERTY /////////////////////////////////////////////////////////////////////////
function TextOverflowProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextOverflowProperty = document.getElementById("Text-Overflow-Property");

  if (TextOverflowProperty.style.display === "block") {
    TextOverflowProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextOverflowProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextOverflowValue() {
  let myTextOverflow = document.getElementById("Input-Text-Overflow").value;
  document.getElementsByClassName("Text-Overflow")[0].style.textOverflow = myTextOverflow;
}

////////////////////////////////////////////////////////////////////////// TEXT-SHADOW PROPERTY //////////////////////////////////////////////////////////////////////////
function TextShadowProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextShadowProperty = document.getElementById("Text-Shadow-Property");

  if (TextShadowProperty.style.display === "block") {
    TextShadowProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextShadowProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextShadowValue() {
  let myTextShadow = document.getElementById("Input-Text-Shadow").value;
  document.getElementsByClassName("Text-Shadow")[0].style.textShadow = myTextShadow;
}

//////////////////////////////////////////////////////////////////////// TEXT-TRANSFORM PROPERTY /////////////////////////////////////////////////////////////////////////
function TextTransformProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextTransformProperty = document.getElementById("Text-Transform-Property");

  if (TextTransformProperty.style.display === "block") {
    TextTransformProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextTransformProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextTransformValue() {
  let myTextTransform = document.getElementById("Input-Text-Transform").value;
  document.getElementsByClassName("Text-Transform")[0].style.textTransform = myTextTransform;
}

///////////////////////////////////////////////////////////////////// TEXT-UNDERLINE-OFFSET PROPERTY /////////////////////////////////////////////////////////////////////
function TextUnderlineOffsetProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextUnderlineOffsetProperty = document.getElementById("Text-Underline-Offset-Property");

  if (TextUnderlineOffsetProperty.style.display === "block") {
    TextUnderlineOffsetProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextUnderlineOffsetProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextUnderlineOffsetValue() {
  let myTextUnderlineOffset = document.getElementById("Input-Text-Underline-Offset").value;
  document.getElementsByClassName("Text-Decoration")[4].style.textUnderlineOffset = myTextUnderlineOffset;
}

//////////////////////////////////////////////////////////////////// TEXT-UNDERLINE-POSITION PROPERTY ////////////////////////////////////////////////////////////////////
function TextUnderlinePositionProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TextUnderlinePositionProperty = document.getElementById("Text-Underline-Position-Property");

  if (TextUnderlinePositionProperty.style.display === "block") {
    TextUnderlinePositionProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TextUnderlinePositionProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TextUnderlinePositionValue() {
  let myTextUnderlinePosition = document.getElementById("Input-Text-Underline-Position").value;
  document.getElementsByClassName("Text-Decoration")[5].style.textUnderlinePosition = myTextUnderlinePosition;
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