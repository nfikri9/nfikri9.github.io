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

//////////////////////////////////////////////////////////////////////////////// PROPERTY ////////////////////////////////////////////////////////////////////////////////
function ConstructorProperty() {
  let ConstructorProperty = document.getElementById("Constructor-Property");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (ConstructorProperty.style.display === "block") {
    ConstructorProperty.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    ConstructorProperty.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function EpsilonProperty() {
  let EpsilonProperty = document.getElementById("Epsilon-Property");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (EpsilonProperty.style.display === "block") {
    EpsilonProperty.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    EpsilonProperty.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

///////////////////////////////////////////////////////////////////////////////// METHOD /////////////////////////////////////////////////////////////////////////////////
function IsFiniteMethod() {
  let IsFiniteMethod = document.getElementById("IsFinite-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (IsFiniteMethod.style.display === "block") {
    IsFiniteMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    IsFiniteMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}