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

function MaxSafeIntegerProperty() {
  let MaxSafeIntegerProperty = document.getElementById("MaxSafeInteger-Property");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (MaxSafeIntegerProperty.style.display === "block") {
    MaxSafeIntegerProperty.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    MaxSafeIntegerProperty.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function MinSafeIntegerProperty() {
  let MinSafeIntegerProperty = document.getElementById("MinSafeInteger-Property");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (MinSafeIntegerProperty.style.display === "block") {
    MinSafeIntegerProperty.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    MinSafeIntegerProperty.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function MaxValueProperty() {
  let MaxValueProperty = document.getElementById("MaxValue-Property");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (MaxValueProperty.style.display === "block") {
    MaxValueProperty.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    MaxValueProperty.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function MinValueProperty() {
  let MinValueProperty = document.getElementById("MinValue-Property");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (MinValueProperty.style.display === "block") {
    MinValueProperty.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    MinValueProperty.style.display = "block";
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

function IsIntegerMethod() {
  let IsIntegerMethod = document.getElementById("IsInteger-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (IsIntegerMethod.style.display === "block") {
    IsIntegerMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    IsIntegerMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function IsNanMethod() {
  let IsNanMethod = document.getElementById("IsNan-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (IsNanMethod.style.display === "block") {
    IsNanMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    IsNanMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function IsSafeIntegerMethod() {
  let IsSafeIntegerMethod = document.getElementById("IsSafeInteger-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (IsSafeIntegerMethod.style.display === "block") {
    IsSafeIntegerMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    IsSafeIntegerMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}

function ParseFloatMethod() {
  let ParseFloatMethod = document.getElementById("ParseFloat-Method");
  let JavaScriptReferences = document.getElementById("JavaScript-References");

  if (ParseFloatMethod.style.display === "block") {
    ParseFloatMethod.style.display = "none";
    JavaScriptReferences.style.display = "block";
  }
  else {
    ParseFloatMethod.style.display = "block";
    JavaScriptReferences.style.display = "none";
  }
}