//////////////////////////////////////////////////////////////////////////// TOPIC SELECTIONS ////////////////////////////////////////////////////////////////////////////
function JavaScriptIntroduction() {
  let JavascriptIntroduction = document.getElementById("JavaScript-Introduction");
  if (JavascriptIntroduction.style.display === "block") { JavascriptIntroduction.style.display = "none"; }
  else { JavascriptIntroduction.style.display = "block"; }
}

function JavaScriptReferences() {
  let JavascriptReferences = document.getElementById("JavaScript-References");
  if (JavascriptReferences.style.display === "block") { JavascriptReferences.style.display = "none"; }
  else { JavascriptReferences.style.display = "block"; }
}

function SearchJavaScriptReferences() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("JavaScript-References-Input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("JavaScript-References-List");
  li = ul.getElementsByTagName("li");
  
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) { li[i].style.display = ""; }
    else { li[i].style.display = "none"; }
  }
}

////////////////////////////////////////////////////////////////////////// LIST OF JS METHODS ////////////////////////////////////////////////////////////////////////////
function FillMethod() {
  let FillMethod = document.getElementById("Fill-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (FillMethod.style.display === "block") {
    FillMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    FillMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function JoinMethod() {
  let JoinMethod = document.getElementById("Join-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (JoinMethod.style.display === "block") {
    JoinMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    JoinMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function PopMethod() {
  let PopMethod = document.getElementById("Pop-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (PopMethod.style.display === "block") {
    PopMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    PopMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function PushMethod() {
  let PushMethod = document.getElementById("Push-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (PushMethod.style.display === "block") {
    PushMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    PushMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function ReverseMethod() {
  let ReverseMethod = document.getElementById("Reverse-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (ReverseMethod.style.display === "block") {
    ReverseMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    ReverseMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function ShiftMethod() {
  let ShiftMethod = document.getElementById("Shift-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (ShiftMethod.style.display === "block") {
    ShiftMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    ShiftMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function ToReversedMethod() {
  let ToReversedMethod = document.getElementById("ToReversed-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (ToReversedMethod.style.display === "block") {
    ToReversedMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    ToReversedMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function UnshiftMethod() {
  let UnshiftMethod = document.getElementById("Unshift-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (UnshiftMethod.style.display === "block") {
    UnshiftMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    UnshiftMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function WithMethod() {
  let WithMethod = document.getElementById("With-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (WithMethod.style.display === "block") {
    WithMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    WithMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}