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
  let myVisibility = document.getElementById("Arithmetic-Addition");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Addition").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Addition is an arithmetic operation where 2 or more operands are added</div>" +
      "<div>Concatenation involves addition with string, which resulting the total value is in string datatype</div>" +

      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 + number2;   // 14     (The datatype is number)</code></div>" +
      "<div><code>number1 + string1;   // 4Hello (The datatype is string)</code></div>" +
      "<div><code>number1 + boolean1;  // 5      (The datatype is number)</code></div>" +
      "<div><code>number1 + null;      // 4      (The datatype is number)</code></div>" +
      "<div><code>number1 + undefined; // NaN    (The datatype is number)</code></div>" +
      "</div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Subtraction() {
  let myVisibility = document.getElementById("Arithmetic-Subtraction");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Subtraction").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Subtraction is an arithmetic operation where 2 or more operands are subtracted</div>" +

      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 - number2;   // -6     (The datatype is number)</code></div>" +
      "<div><code>number1 - string1;   // NaN    (The datatype is number)</code></div>" +
      "<div><code>number1 - boolean1;  // 3      (The datatype is number)</code></div>" +
      "<div><code>number1 - null;      // 4      (The datatype is number)</code></div>" +
      "<div><code>number1 - undefined; // NaN    (The datatype is number)</code></div>" +
      "</div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Multiplication() {
  let myVisibility = document.getElementById("Arithmetic-Multiplication");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Multiplication").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Multiplication is an arithmetic operation where 2 or more operands are multiplied</div>" +

      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 * number2;   // 40     (The datatype is number)</code></div>" +
      "<div><code>number1 * string1;   // NaN    (The datatype is number)</code></div>" +
      "<div><code>number1 * boolean1;  // 4      (The datatype is number)</code></div>" +
      "<div><code>number1 * null;      // 0      (The datatype is number)</code></div>" +
      "<div><code>number1 * undefined; // NaN    (The datatype is number)</code></div>" +
      "</div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Exponentiation() {
  let myVisibility = document.getElementById("Arithmetic-Exponentiation");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Exponentiation").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Exponentiation is an arithmetic operation where an operand (base) is raised the quantity to the power of another operand (exponent)</div>" +

      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 ** number2;   // 1048576 (The datatype is number)</code></div>" +
      "<div><code>number1 ** string1;   // NaN     (The datatype is number)</code></div>" +
      "<div><code>number1 ** boolean1;  // 4       (The datatype is number)</code></div>" +
      "<div><code>number1 ** null;      // 1       (The datatype is number)</code></div>" +
      "<div><code>number1 ** undefined; // NaN     (The datatype is number)</code></div>" +
      "</div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Division() {
  let myVisibility = document.getElementById("Arithmetic-Division");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Division").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Division is an arithmetic operation where 2 or more operands are divided</div>" +

      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 / number2;   // 0.4      (The datatype is number)</code></div>" +
      "<div><code>number1 / string1;   // NaN      (The datatype is number)</code></div>" +
      "<div><code>number1 / boolean1;  // 4        (The datatype is number)</code></div>" +
      "<div><code>number1 / null;      // Infinity (The datatype is number)</code></div>" +
      "<div><code>number1 / undefined; // NaN      (The datatype is number)</code></div>" +
      "</div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Modulus() {
  let myVisibility = document.getElementById("Arithmetic-Modulus");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Modulus").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Modulus is an arithmetic operation where 2 or more operands are divided</div>" +
      "<div>However, the result will return remainder only</div>" +

      "<div class=\"Sub-Topics\">" +
      "<div><code>number1 % number2;   // 4   (The datatype is number)</code></div>" +
      "<div><code>number1 % string1;   // NaN (The datatype is number)</code></div>" +
      "<div><code>number1 % boolean1;  // 0   (The datatype is number)</code></div>" +
      "<div><code>number1 % null;      // NaN (The datatype is number)</code></div>" +
      "<div><code>number1 % undefined; // NaN (The datatype is number)</code></div>" +
      "</div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Increment() {
  let myVisibility = document.getElementById("Arithmetic-Increment");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Increment").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Post-increment is used to increment the value of an identifier after executing the expression in which the operator is used</div>" +
      "<div><code>number1++;   // 4   (The datatype is number)</code></div>" +
      "<div><code>string++;    // NaN (The datatype is number)</code></div>" +
      "<div><code>boolean++;   // 1   (The datatype is number)</code></div>" +
      "<div><code>null++;      // 0   (The datatype is number)</code></div>" +
      "<div><code>undefined++; // NaN (The datatype is number)</code></div>" +
      "</div>" +

      "<div class=\"Sub-Topics\">" +
      "<div>Pre-increment is used to increment the value of an identifier before using it in a expression</div>" +
      "<div><code>++number1;   // 5   (The datatype is number)</code></div>" +
      "<div><code>++string;    // NaN (The datatype is number)</code></div>" +
      "<div><code>++boolean;   // 2   (The datatype is number)</code></div>" +
      "<div><code>++null;      // 1   (The datatype is number)</code></div>" +
      "<div><code>++undefined; // NaN (The datatype is number)</code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

function Decrement() {
  let myVisibility = document.getElementById("Arithmetic-Decrement");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Arithmetic-Decrement").innerHTML =
      "<div class=\"Sub-Topics\">" +
      "<div>Post-decrement is used to decrement the value of an identifier after executing the expression in which the operator is used</div>" +
      "<div><code>number1--;   // 4   (The datatype is number)</code></div>" +
      "<div><code>string--;    // NaN (The datatype is number)</code></div>" +
      "<div><code>boolean--;   // 1   (The datatype is number)</code></div>" +
      "<div><code>null--;      // 0   (The datatype is number)</code></div>" +
      "<div><code>undefined--; // NaN (The datatype is number)</code></div>" +
      "</div>" +
      
      "<div class=\"Sub-Topics\">" +
      "<div>Pre-decrement is used to decrement the value of an identifier before using it in a expression</div>" +
      "<div><code>--number1;   // 3   (The datatype is number)</code></div>" +
      "<div><code>--string;    // NaN (The datatype is number)</code></div>" +
      "<div><code>--boolean;   // 0   (The datatype is number)</code></div>" +
      "<div><code>--null;      // -1  (The datatype is number)</code></div>" +
      "<div><code>--undefined; // NaN (The datatype is number)</code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////
// JAVASCRIPT METHODS //
////////////////////////
const JSMethods = {
  // String Methods
  At:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>at(<em>i</em>)</code> method returns an indexed character from a string</div>" +
    "<div>If the index is not within the string's length, returns <code>undefined</code> since there is no character at all</div>" +
    "<div>Negative index will start from the last character and goes backward</div>" +
    "<div><code>let <em>myString</em> = \"Hello World\";</code></div>" +
    "<div><code><em>myString</em>.at(0);  // Return H (H is on index 0)</code></div>" +
    "<div><code><em>myString</em>.at(10); // Return d (d is on index 10)</code></div>" +
    "<div><code><em>myString</em>.at(11); // Return undefined (Index 11 is not within the string's length)</code></div>" +
    "<div><code><em>myString</em>.at(-1); // Return d (d is on index -1)</code></div>" +
    "<div><code><em>myString</em>.at(-5); // Return W (W is on index -5)</code></div>" +
    "</div>",

  CharAt:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>charAt(<em>i</em>)</code> method returns the character at a specified index (position) in a string</div>" +
    "<div>If the index is not within the string's length (including negative index), returns empty string</div>" +
    "<div><code>let <em>myString</em> = \"Hello World\";</code></div>" +
    "<div><code><em>myString</em>.charAt(0);  // Return H (H is on index 0)</code></div>" +
    "<div><code><em>myString</em>.charAt(10); // Return d (d is on index 10)</code></div>" +
    "<div><code><em>myString</em>.charAt(11); // Return empty string (Index 11 is not within the string's length)</code></div>" +
    "<div><code><em>myString</em>.charAt(-1); // Return empty string (Index -1 is not within the string's length)</code></div>" +
    "</div>",

  CharCodeAt:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>charCodeAt(<em>i</em>)</code> method returns the UTF-16 code of the character at a specified index (position) in a string</div>" +
    "<div>If the index is not within the string's length (including negative index), returns <code>NaN</code> since there is empty string</div>" +
    "<div><code>let <em>myString</em> = \"Hello World\";</code></div>" +
    "<div><code><em>myString</em>.charCodeAt(0);  // Return 72 (UTF-16 code for H is 72, which located on index 0)</code></div>" +
    "<div><code><em>myString</em>.charCodeAt(10); // Return 100 (UTF-16 code for d is 100, which located on index 10)</code></div>" +
    "<div><code><em>myString</em>.charCodeAt(11); // Return NaN (empty string, since index 11 is not within the string's length)</code></div>" +
    "<div><code><em>myString</em>.charCodeAt(-1); // Return NaN (empty string, since index -1 is not within the string's length)</code></div>" +
    "</div>",

  CodePointAt:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>codePointAt(<em>i</em>)</code> method returns the Unicode value at an index (position) in a string</div>" +
    "<div>If the index is not within the string's length (including negative index), returns <code>undefined</code> since there is no character at all</div>" +
    "<div><code>let <em>myString</em> = \"Hello World\";</code></div>" +
    "<div><code><em>myString</em>.codePointAt(0); // Return 72 (Unicode for H is 72, which located on index 0)</code></div>" +
    "<div><code><em>myString</em>.codePointAt(10); // Return 100 (Unicode for d is 100, which located on index 10)</code></div>" +
    "<div><code><em>myString</em>.codePointAt(11); // Return undefined (undefined, since index 11 is not within the string's length)</code></div>" +
    "<div><code><em>myString</em>.codePointAt(-1); // Return undefined (undefined, since index -1 is not within the string's length)</code></div>" +
    "</div>",

  Concat:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>concat(<em>string<sub>n</sub></em>)</code> method joins two or more strings</div>" +
    "<div>The <code>concat(<em>string<sub>n</sub></em>)</code> method does not change the existing strings</div>" +
    "<div>The <code>concat(<em>string<sub>n</sub></em>)</code> method returns a new string</div>" +
    "<div><code>let <em>myString1</em> = \"Hello\";</code></div>" +
    "<div><code>let <em>myString2</em> = \"World\";</code></div>" +
    "<div><code><em>myString1</em>.concat(<em>myString2</em>);        // Return HelloWorld</code></div>" +
    "<div><code><em>myString1</em>.concat(\" \", <em>myString2</em>); // Return Hello World</code></div>" +
    "</div>",

  EndsWith:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>endsWith(\"<em>string</em>\", <em>position</em>)</code> method returns <code>true</code> if a string ends with a specified string</div>" +
    "<div>Otherwise it returns <code>false</code></div>" +
    "<div>The <code>endsWith(\"<em>string</em>\", <em>position</em>)</code> method is case sensitive</div>" +
    "<div><code>let <em>myString1</em> = \"Hello World\";</code></div>" +
    "<div><code><em>myString1</em>.endsWith(\"World\");     // Return true</code></div>" +
    "<div><code><em>myString1</em>.endsWith(\"world\");     // Return false</code></div>" +
    "<div><code><em>myString1</em>.endsWith(\"World\", 11); // Return true (The string \"World\" is end at 11 based on normal count)</code></div>" +
    "<div><code><em>myString1</em>.endsWith(\"World\", 10); // Return false (The position of character is based on normal count, not index)</code></div>" +
    "</div>",

  FromCharCode:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>fromCharCode(<em>code<sub>n</sub></em>)</code> method converts 1 or more Unicode values to characters</div>" +
    "<div><code>String.fromCharCode(65); // Return A</code></div>" +
    "<div><code>String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100); // Return Hello World (Every code represents their own character respectively)</code></div>" +
    "</div>",

  Includes:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>includes(\"<em>string</em>\")</code> method returns <code>true</code> if a string contains a specified string</div>" +
    "<div>Otherwise it returns <code>false</code></div>" +
    "<div>The <code>includes(\"<em>string</em>\")</code> method is case sensitive</div>" +
    "<div><code>let <em>myString1</em> = \"Hello World\";</code></div>" +
    "<div><code><em>myString1</em>.includes(\"World\"); // Return true</code></div>" +
    "<div><code><em>myString1</em>.includes(\"world\"); // Return false</code></div>" +
    "</div>",

  IndexOf:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>indexOf(\"<em>string</em>\")</code> method returns the position of the first occurrence of the specified value in a string</div>" +
    "<div>The <code>indexOf(\"<em>string</em>\")</code> method returns <code>-1</code> if the value is not found</div>" +
    "<div>The <code>indexOf(\"<em>string</em>\")</code> method is case sensitive</div>" +
    "<div><code>let <em>myString1</em> = \"Hello World\";</code></div>" +
    "<div><code><em>myString1</em>.indexOf(\"H\");     // Return 0 (Index 0 is the first occurence for H)</code></div>" +
    "<div><code><em>myString1</em>.indexOf(\"l\");     // Return 2 (Index 2 is the first occurence for l)</code></div>" +
    "<div><code><em>myString1</em>.indexOf(\"z\");     // Return -1 (The string z is not found in the string)</code></div>" +
    "<div><code><em>myString1</em>.indexOf(\"World\"); // Return 6 (Index 6 is the first occurence for World)</code></div>" +
    "<div><code><em>myString1</em>.indexOf(\"world\"); // Return -1 (The string world is not found in the string)</code></div>" +
    "</div>",

  LastIndexOf:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>lastIndexOf(\"<em>string</em>\")</code> method returns the index of the last occurrence of a specified value in a string</div>" +
    "<div>The <code>lastIndexOf(\"<em>string</em>\")</code> method searches the string from the end to the beginning</div>" +
    "<div>The <code>lastIndexOf(\"<em>string</em>\")</code> method returns the index from the beginning, index 0 and so on</div>" +
    "<div>The <code>lastIndexOf(\"<em>string</em>\")</code> method returns <code>-1</code> if the value is not found</div>" +
    "<div>The <code>lastIndexOf(\"<em>string</em>\")</code> method is case sensitive</div>" +
    "<div><code>let <em>myString1</em> = \"Hello World\";</code></div>" +
    "<div><code><em>myString1</em>.lastIndexOf(\"H\"); // Return 0 (Index 0 is the last occurence for H)</code></div>" +
    "<div><code><em>myString1</em>.lastIndexOf(\"l\"); // Return 9 (Index 9 is the last occurence for l)</code></div>" +
    "<div><code><em>myString1</em>.lastIndexOf(\"z\"); // Return -1 (The string z is not found in the string)</code></div>" +
    "<div><code><em>myString1</em>.lastIndexOf(\"World\"); // Return 6 (Index 6 is the last occurence for World)</code></div>" +
    "<div><code><em>myString1</em>.lastIndexOf(\"world\"); // Return -1 (The string world is not found in the string)</code></div>" +
    "</div>"
};

function AtMethod() {
  let myVisibility = document.getElementById("At-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("At-Method").innerHTML = JSMethods.At;
  }
  else { myVisibility.style.display = "none"; }
}

function CharAtMethod() {
  let myVisibility = document.getElementById("CharAt-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("CharAt-Method").innerHTML = JSMethods.CharAt;
  }
  else { myVisibility.style.display = "none"; }
}

function CharCodeAtMethod() {
  let myVisibility = document.getElementById("CharCodeAt-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("CharCodeAt-Method").innerHTML = JSMethods.CharCodeAt;
  }
  else { myVisibility.style.display = "none"; }
}

function CodePointAtMethod() {
  let myVisibility = document.getElementById("CodePointAt-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("CodePointAt-Method").innerHTML = JSMethods.CodePointAt;
  }
  else { myVisibility.style.display = "none"; }
}

function ConcatMethod() {
  let myVisibility = document.getElementById("Concat-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Concat-Method").innerHTML = JSMethods.Concat;
  }
  else { myVisibility.style.display = "none"; }
}

function EndsWithMethod() {
  let myVisibility = document.getElementById("EndsWith-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("EndsWith-Method").innerHTML = JSMethods.EndsWith;
  }
  else { myVisibility.style.display = "none"; }
}

function FromCharCodeMethod() {
  let myVisibility = document.getElementById("FromCharCode-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("FromCharCode-Method").innerHTML = JSMethods.FromCharCode;
  }
  else { myVisibility.style.display = "none"; }
}

function IncludesMethod() {
  let myVisibility = document.getElementById("Includes-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Includes-Method").innerHTML = JSMethods.Includes;
  }
  else { myVisibility.style.display = "none"; }
}

function IndexOfMethod() {
  let myVisibility = document.getElementById("IndexOf-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("IndexOf-Method").innerHTML = JSMethods.IndexOf;
  }
  else { myVisibility.style.display = "none"; }
}

function LastIndexOfMethod() {
  let myVisibility = document.getElementById("LastIndexOf-Method");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("LastIndexOf-Method").innerHTML = JSMethods.LastIndexOf;
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////////
// JAVASCRIPT PROPERTIES //
///////////////////////////
const JSProperties = {
  // General Properties
  Constructor:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>constructor</code> property returns the function that created the specified JavaScript data type prototype</div>" +
    "<div>The <code>constructor</code> property can be applied to all JavaScript data types (number, string, boolean, array, object)</div>" +
    "<div><code>let <em>myNumber1</em>  = 100;</code></div>" +
    "<div><code>let <em>myString1</em>  = \"Hello World\";</code></div>" +
    "<div><code>let <em>myBoolean1</em> = true;</code></div>" +
    "<div><code>let <em>myArray1</em>   = [34, \"Hello\", false];</code></div>" +
    "<div><code>let <em>myObject1</em>  = {<em>myProperty1</em>: 56, <em>myProperty2</em>: \"World\", <em>myProperty3</em>: true};</code></div>" +
    "<div><code><em>myNumber1</em>.constructor;  // Return function Number() { [native code] }</code></div>" +
    "<div><code><em>myString1</em>.constructor;  // Return function String() { [native code] }</code></div>" +
    "<div><code><em>myBoolean1</em>.constructor; // Return function Boolean() { [native code] }</code></div>" +
    "<div><code><em>myArray1</em>.constructor;   // Return function Array() { [native code] }</code></div>" +
    "<div><code><em>myObject1</em>.constructor;  // Return function Object() { [native code] }</code></div>" +
    "</div>",

  // String Properties
  Length:
    "<div class=\"Sub-Topics\">" +
    "<div>The <code>length</code> property returns the length of a string</div>" +
    "<div>The <code>length</code> property of an empty string is 0</div>" +
    "<div><code>let <em>myString1</em>  = \"Hello World\";</code></div>" +
    "<div><code>let <em>myString2</em>  = \"\";</code></div>" +
    "<div><code><em>myString1</em>.length; // Return 11 (There are 11 characters in the string)</code></div>" +
    "<div><code><em>myString2</em>.length; // Return 0 (There is no character in empty string)</code></div>" +
    "</div>"
};

function ConstructorProperty() {
  let myVisibility = document.getElementById("Constructor-Property");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Constructor-Property").innerHTML = JSProperties.Constructor;
  }
  else { myVisibility.style.display = "none"; }
}

function LengthProperty() {
  let myVisibility = document.getElementById("Length-Property");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Length-Property").innerHTML = JSProperties.Length;
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