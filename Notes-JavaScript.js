/////////////////////////////
// JAVASCRIPT INTRODUCTION //
/////////////////////////////
function JavaScriptIntroduction() {
  let myVisibility = document.getElementById("JavaScript-Introduction");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////////
// JAVASCRIPT DATA TYPES //
///////////////////////////
function JavaScriptDataTypes() {
  let myVisibility = document.getElementById("JavaScript-Data-Types");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DATA TYPE NUMBER //
function DataTypeNumber() {
  let myVisibility = document.getElementById("Data-Type-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DATA TYPE STRING //
function DataTypeString() {
  let myVisibility = document.getElementById("Data-Type-String");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DATA TYPE BOOLEAN //
function DataTypeBoolean() {
  let myVisibility = document.getElementById("Data-Type-Boolean");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DATA TYPE NULL //
function DataTypeNull() {
  let myVisibility = document.getElementById("Data-Type-Null");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DATA TYPE UNDEFINED //
function DataTypeUndefined() {
  let myVisibility = document.getElementById("Data-Type-Undefined");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DATA TYPE ARRAY //
function DataTypeArray() {
  let myVisibility = document.getElementById("Data-Type-Array");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DATA TYPE OBJECT //
function DataTypeObject() {
  let myVisibility = document.getElementById("Data-Type-Object");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////////
// JAVASCRIPT OPERATORS //
//////////////////////////
function JavaScriptOperators() {
  let myVisibility = document.getElementById("JavaScript-Operators");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// ARITHMETIC OPERATIONS //
function Addition() {
  let x = 4; let y=undefined; let z = x+y; document.getElementById("test").innerText = typeof z;
  let myVisibility = document.getElementById("Arithmetic-Operations");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Operations").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Addition is an arithmetic operation where 2 or more operands are added</div>" +
      "<div>Concatenation involves addition with string and resulting the value is in string datatype</div>" +
      "<div><code>let number1 = 4;         // The datatype is number</code></code>" +
      "<div><code>let number2 = 10;        // The datatype is number</code></code>" +
      "<div><code>let string1 = \"Hello\"; // The datatype is string</code></code>" +
      "<div><code>let string2 = \"World\"; // The datatype is string</code></code>" +
      "<div><code>let boolean1 = true;     // The datatype is boolean</code></code>" +
      "<div><code>let boolean2 = false;    // The datatype is boolean</code></code>" +

      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 + number2;   // 14     (The datatype is number)</code></div>" +
      "<div><code>number1 + string1;   // 4Hello (The datatype is string)</code></div>" +
      "<div><code>number1 + boolean1;  // 5      (The datatype is number)</code></div>" +
      "<div><code>number1 + null;      // 4      (The datatype is number)</code></div>" +
      "<div><code>number1 + undefined; // NaN    (The datatype is number)</code></div>" +
      "</div> </div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Subtraction() {
  let myVisibility = document.getElementById("Arithmetic-Operations");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Operations").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 - number2  = <span>answer</span></code></div>" +
      "<div><code>number - string    = <span>answer</span></code></div>" +
      "<div><code>number - boolean   = <span>answer</span></code></div>" +
      "<div><code>number - null      = <span>answer</span></code></div>" +
      "<div><code>number - undefined = <span>answer</span></code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Multiplication() {
  let myVisibility = document.getElementById("Arithmetic-Operations");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Operations").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 * number2  = <span>answer</span></code></div>" +
      "<div><code>number * string    = <span>answer</span></code></div>" +
      "<div><code>number * boolean   = <span>answer</span></code></div>" +
      "<div><code>number * null      = <span>answer</span></code></div>" +
      "<div><code>number * undefined = <span>answer</span></code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Exponentiation() {
  let myVisibility = document.getElementById("Arithmetic-Operations");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Operations").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 ** number2  = <span>answer</span></code></div>" +
      "<div><code>number ** string    = <span>answer</span></code></div>" +
      "<div><code>number ** boolean   = <span>answer</span></code></div>" +
      "<div><code>number ** null      = <span>answer</span></code></div>" +
      "<div><code>number ** undefined = <span>answer</span></code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Division() {
  let myVisibility = document.getElementById("Arithmetic-Operations");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Operations").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 / number2  = <span>answer</span></code></div>" +
      "<div><code>number / string    = <span>answer</span></code></div>" +
      "<div><code>number / boolean   = <span>answer</span></code></div>" +
      "<div><code>number / null      = <span>answer</span></code></div>" +
      "<div><code>number / undefined = <span>answer</span></code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Modulus() {
  let myVisibility = document.getElementById("Arithmetic-Operations");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Operations").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 % number2  = <span>answer</span></code></div>" +
      "<div><code>number % string    = <span>answer</span></code></div>" +
      "<div><code>number % boolean   = <span>answer</span></code></div>" +
      "<div><code>number % null      = <span>answer</span></code></div>" +
      "<div><code>number % undefined = <span>answer</span></code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Increment() {
  let myVisibility = document.getElementById("Arithmetic-Operations");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Operations").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div><code>number1++   = <span>answer</span></code></div>" +
      "<div><code>string++    = <span>answer</span></code></div>" +
      "<div><code>boolean++   = <span>answer</span></code></div>" +
      "<div><code>null++      = <span>answer</span></code></div>" +
      "<div><code>undefined++ = <span>answer</span></code></div>" +

      "<div><code>++number1   = <span>answer</span></code></div>" +
      "<div><code>++string    = <span>answer</span></code></div>" +
      "<div><code>++boolean   = <span>answer</span></code></div>" +
      "<div><code>++null      = <span>answer</span></code></div>" +
      "<div><code>++undefined = <span>answer</span></code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Decrement() {
  let myVisibility = document.getElementById("Arithmetic-Operations");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Operations").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div><code>number1--   = <span>answer</span></code></div>" +
      "<div><code>string--    = <span>answer</span></code></div>" +
      "<div><code>boolean--   = <span>answer</span></code></div>" +
      "<div><code>null--      = <span>answer</span></code></div>" +
      "<div><code>undefined-- = <span>answer</span></code></div>" +
      
      "<div><code>--number1   = <span>answer</span></code></div>" +
      "<div><code>--string    = <span>answer</span></code></div>" +
      "<div><code>--boolean   = <span>answer</span></code></div>" +
      "<div><code>--null      = <span>answer</span></code></div>" +
      "<div><code>--undefined = <span>answer</span></code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////////////////
// JAVASCRIPT METHODS & PROPERTIES //
/////////////////////////////////////
const JSMethodsProperties = {
  propertyConstructor:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>constructor</code> property returns the function that created the Number prototype</div>" +
    "<div>The JavaScript data types that can use <code>constructor</code> property are number</div>" +
    "<div><code>function Number() { <em>Codes</em> }</code></div>" +
    "</div>",

  propertyEpsilon:
    "<div class=\"Sub-Topics\">" +
    "<div><code>Number.EPSILON</code> returns the difference between the smallest floating point number greater than 1 and 1</div>" +
    "<div><code>Number.EPSILON</code> has the value of 2.220446049250313e-16</div>" +
    "</div>",

  propertyMaxsafeinteger:
    "<div class=\"Sub-Topics\">" +
    "<div><code>Number.MAX_SAFE_INTEGER</code> represents the maximum safe integer in JavaScript</div>" +
    "<div><code>Number.MAX_SAFE_INTEGER</code> is <code>9007199254740991</code> (within range of <code>2<sup>53</sup> - 1</code>)</div>" +
    "</div>",

  propertyMinsafeinteger:
    "<div class=\"Sub-Topics\">" +
    "<div><code>Number.MIN_SAFE_INTEGER</code> represents the minimum safe integer in JavaScript</div>" +
    "<div><code>Number.MIN_SAFE_INTEGER</code> is <code>-9007199254740991</code> (within range of <code>-(2<sup>53</sup> - 1)</code>)</div>" +
    "</div>",

  propertyMaxvalue:
    "<div class=\"Sub-Topics\">" +
    "<div><code>Number.MAX_VALUE</code> returns the largest number possible in JavaScript</div>" +
    "<div><code>Number.MAX_VALUE</code> has the value of <code>1.7976931348623157e+308</code></div>" +
    "<div>Numbers larger than <code>MAX_VALUE</code> are represented as <code>Infinity</code></div>" +
    "</div>",

  propertyMinvalue:
    "<div class=\"Sub-Topics\">" +
    "<div><code>Number.MIN_VALUE</code> returns the smallest number possible in JavaScript</div>" +
    "<div><code>Number.MIN_VALUE</code> has a value of <code>5e-324</code></div>" +
    "<div><code>MIN_VALUE</code> is the value closest to <code>0</code></div>" +
    "<div>Numbers smaller than this are converted to <code>0</code></div>" +
    "<div>The most negative number is the negative <code>MAX_NUMBER</code></div>" +
    "</div>",

  propertyNan:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>Number.NaN</code> property is same as the keyword <code>NaN</code> itself</div>" +
    "</div>",

  propertyNegativeinfinity:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>Number.NEGATIVE_INFINITY</code> returns negative infinity (<code>-Infinity</code>)</div>" +
    "</div>",

  propertyPositiveinfinity:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>Number.POSITIVE_INFINITY</code> returns positive infinity (<code>Infinity</code>)</div>" +
    "</div>",

  propertyPrototype:
    "<div class=\"Sub-Topics\">" +
    "<div><code>prototype</code> allows user to add new properties and methods to numbers</div>" +
    "<div><code>prototype</code> is a property available with all JavaScript objects</div>" +
    "<div>It is not recommended to change the prototype of an object that user do not control</div>" +
    "<div>User should not change the prototype of built in JavaScript datatypes like Numbers, Strings, Arrays, Dates, Booleans, Function, Objects</div>" +
    "<div>Only change the prototype of user's own objects</div>" +
    "</div>",

  methodIsfinite:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>isFinite()</code> method converts the value to a number, then returns <code>true</code> if the value is a finite number</div>" +
    "<div>The <code>Number.isFinite()</code> method returns <code>true</code> if a number is a finite number (without changing its data type)</div>" +
    "<div>Infinite numbers like <code>Infinity, -Infinity, NaN</code> will return <code>false</code></div>" +
    "</div>",

  methodIsinteger:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>Number.isInteger()</code> method returns <code>true</code> if a value is an integer of the datatype Number</div>" +
    "<div>Otherwise it returns <code>false</code></div>" +
    "</div>",

  methodIsnan:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>isNaN()<code> method converts the value to a number, then returns <code>true</code> if the value is <code>NaN</code></div>" +
    "<div>The <code>Number.isNaN()</code> method returns <code>true</code> if the number is <code>NaN</code> (without changing its data type)</div>" +
    "<div>Otherwise it returns <code>false</code></div>" +
    "</div>",

  methodIssafeinteger:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>Number.isSafeInteger()</code> method returns <code>true</code> if a number is a safe integer</div>" +
    "<div>Otherwise it returns <code>false</code></div>" +
    "<div>A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number</div>" +
    "<div>All safe integers from <code>(2<sup>53</sup> - 1)</code> to <code>-(2<sup>53</sup> - 1)</code></div>" +
    "</div>",

  methodParsefloat:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>Number.parseFloat()</code> method parses a value as a string and returns the first number</div>" +
    "<div>If the first character cannot be converted, <code>NaN</code> is returned</div>" +
    "<div>Leading and trailing spaces are ignored</div>" +
    "<div>Only the first number found is returned</div>" +
    "</div>",

  methodParseint:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>Number.parseInt</code> method parses a value as a string and returns the first integer</div>" +
    "<div>A radix parameter specifies the number system to use; 2=binary, 8=octal, 10=decimal, 16=hexadecimal</div>" +
    "<div>If radix is omitted, JavaScript assumes radix 10</div>" +
    "<div>If the value begins with \"0x\", JavaScript assumes radix 16</div>" +
    "<div>If the first character cannot be converted, <code>NaN</code> is returned</div>" +
    "<div>Leading and trailing spaces are ignored</div>" +
    "<div>Only the first number found is returned</div>" +
    "</div>",

  methodToexponential:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>toExponential()</code> method converts a number into an exponential notation</div>" +
    "</div>",

  methodTofixed:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>toFixed()</code> method converts a number to a string</div>" +
    "<div>The <code>toFixed()</code> method rounds the string to a specified number of decimals</div>" +
    "<div>If the number of decimals are higher than in the number, zeros are added</div>" +
    "</div>",

  methodTolocalestring:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>toLocaleString()</code> returns a number as a string, using local language format</div>" +
    "<div>The language format depends on the locale setup on user's computer</div>" +
    "</div>",

  methodToprecision:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>toPrecision()</code> method formats a number to a specified length</div>" +
    "<div>A decimal point and nulls are added (if needed), to create the specified length</div>" +
    "</div>",

  methodTostring:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>toString()</code> returns a number as a string</div>" +
    "<div>Every JavaScript object has a <code>toString()</code> method</div>" +
    "<div>The <code>toString()</code> method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML)</div>" +
    "<div>The <code>toString()</code> method is also used when an object needs to be used as a string</div>" +
    "</div>",

  methodValueof:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>valueOf()</code> method returns the primitive value of a number</div>" +
    "</div>"
};

function ConstructorNumber() {
  let myVisibility = document.getElementById("Constructor-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Constructor-Number").innerHTML = JSMethodsProperties.propertyConstructor;
  }
  else { myVisibility.style.display = "none"; }
}

function EpsilonNumber() {
  let myVisibility = document.getElementById("Epsilon-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Epsilon-Number").innerHTML = JSMethodsProperties.propertyEpsilon;
  }
  else { myVisibility.style.display = "none"; }
}

function IsfiniteNumber() {
  let myVisibility = document.getElementById("Isfinite-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Isfinite-Number").innerHTML = JSMethodsProperties.methodIsfinite;
  }
  else { myVisibility.style.display = "none"; }
}

function IsintegerNumber() {
  let myVisibility = document.getElementById("Isinteger-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Isinteger-Number").innerHTML = JSMethodsProperties.methodIsinteger;
  }
  else { myVisibility.style.display = "none"; }
}

function IsnanNumber() {
  let myVisibility = document.getElementById("Isnan-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Isnan-Number").innerHTML = JSMethodsProperties.methodIsnan;
  }
  else { myVisibility.style.display = "none"; }
}

function IssafeintegerNumber() {
  let myVisibility = document.getElementById("Issafeinteger-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Issafeinteger-Number").innerHTML = JSMethodsProperties.methodIssafeinteger;
  }
  else { myVisibility.style.display = "none"; }
}

function MaxsafeintegerNumber() {
  let myVisibility = document.getElementById("Maxsafeinteger-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Maxsafeinteger-Number").innerHTML = JSMethodsProperties.propertyMaxsafeinteger;
  }
  else { myVisibility.style.display = "none"; }
}

function MinsafeintegerNumber() {
  let myVisibility = document.getElementById("Minsafeinteger-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Minsafeinteger-Number").innerHTML = JSMethodsProperties.propertyMinsafeinteger;
  }
  else { myVisibility.style.display = "none"; }
}

function MaxvalueNumber() {
  let myVisibility = document.getElementById("Maxvalue-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Maxvalue-Number").innerHTML = JSMethodsProperties.propertyMaxvalue;
  }
  else { myVisibility.style.display = "none"; }
}

function MinvalueNumber() {
  let myVisibility = document.getElementById("Minvalue-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Minvalue-Number").innerHTML = JSMethodsProperties.propertyMinvalue;
  }
  else { myVisibility.style.display = "none"; }
}

function NanNumber() {
  let myVisibility = document.getElementById("Nan-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Nan-Number").innerHTML = JSMethodsProperties.propertyNan;
  }
  else { myVisibility.style.display = "none"; }
}

function NegativeinfinityNumber() {
  let myVisibility = document.getElementById("Negativeinfinity-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Negativeinfinity-Number").innerHTML = JSMethodsProperties.propertyNegativeinfinity;
  }
  else { myVisibility.style.display = "none"; }
}

function PositiveinfinityNumber() {
  let myVisibility = document.getElementById("Positiveinfinity-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Positiveinfinity-Number").innerHTML = JSMethodsProperties.propertyPositiveinfinity;
  }
  else { myVisibility.style.display = "none"; }
}

function ParsefloatNumber() {
  let myVisibility = document.getElementById("Parsefloat-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Parsefloat-Number").innerHTML = JSMethodsProperties.methodParsefloat;
  }
  else { myVisibility.style.display = "none"; }
}

function ParseintNumber() {
  let myVisibility = document.getElementById("Parseint-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Parseint-Number").innerHTML = JSMethodsProperties.methodParseint;
  }
  else { myVisibility.style.display = "none"; }
}

function PrototypeNumber() {
  let myVisibility = document.getElementById("Prototype-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Prototype-Number").innerHTML = JSMethodsProperties.propertyPrototype;
  }
  else { myVisibility.style.display = "none"; }
}

function ToexponentialNumber() {
  let myVisibility = document.getElementById("Toexponential-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Toexponential-Number").innerHTML = JSMethodsProperties.methodToexponential;
  }
  else { myVisibility.style.display = "none"; }
}

function TofixedNumber() {
  let myVisibility = document.getElementById("Tofixed-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tofixed-Number").innerHTML = JSMethodsProperties.methodTofixed;
  }
  else { myVisibility.style.display = "none"; }
}

function TolocalestringNumber() {
  let myVisibility = document.getElementById("Tolocalestring-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tolocalestring-Number").innerHTML = JSMethodsProperties.methodTolocalestring;
  }
  else { myVisibility.style.display = "none"; }
}

function ToprecisionNumber() {
  let myVisibility = document.getElementById("Toprecision-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Toprecision-Number").innerHTML = JSMethodsProperties.methodToprecision;
  }
  else { myVisibility.style.display = "none"; }
}

function TostringNumber() {
  let myVisibility = document.getElementById("Tostring-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tostring-Number").innerHTML = JSMethodsProperties.methodTostring;
  }
  else { myVisibility.style.display = "none"; }
}

function ValueofNumber() {
  let myVisibility = document.getElementById("Valueof-Number");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Valueof-Number").innerHTML = JSMethodsProperties.methodValueof;
  }
  else { myVisibility.style.display = "none"; }
}