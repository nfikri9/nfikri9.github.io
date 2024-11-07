///////////////////////
// CSS GLOBAL VALUES //
///////////////////////
function CSSGlobalValues(){
  const global = {
    calculation: "<div><code>calc()</code></div>",
    inherit: "<div><code>inherit</code></div>",
    initial: "<div><code>initial</code></div>",
    unset: "<div><code>unset</code></div>",
    variable: "<div><code>var(<em>--Name, Value</em>)</code></div>"
  };
  return global;
}

///////////////////////
// CSS LENGTH VALUES //
///////////////////////
function CSSLengthValues(){
  const length = {
    absolute: "<div><code><em>Absolute Length Units</em></code></div>",
    relative: "<div><code><em>Relative Length Units</em></code></div>"
  };
  return length;
}

//////////////////////
// CSS COLOR VALUES //
//////////////////////
function CSSColorValues(){
  /* REFERENCE = https://www.colorhexa.com/ */
  const color = {
    colorNames:
      "<div><code>aqua | aquamarine | mediumaquamarine</code></div>" +
      "<div><code>azure</code></div>" +
      "<div><code>blue | lightblue | mediumblue | darkblue</code></div>" +
      "<div><code>brown | rosybrown | saddlebrown | sandybrown</code></div>" +
      "<div><code>coral | lightcoral</code></div>" +
      "<div><code>cyan | lightcyan | darkcyan</code></div>" +
      "<div><code>gainsboro</code></div>" +
      "<div><code>gold | goldenrod | palegoldenrod | darkgoldenrod | lightgoldenrodyellow</code></div>" +
      "<div><code>gray | lightgray | dimgray | darkgray</code></div>" +
      "<div><code>green | palegreen | lightgreen | darkgreen</code></div>" +
      "<div><code>grey | lightgrey | dimgrey | darkgrey</code></div>" +
      "<div><code>honeydew</code></div>" +
      "<div><code>khaki | darkkhaki</code></div>" +
      "<div><code>lavender | lavenderblush</code></div>" +
      "<div><code>lime | limegreen</code></div>" +
      "<div><code>magenta | darkmagenta</code></div>" +
      "<div><code>maroon</code></div>" +
      "<div><code>navy</code></div>" +
      "<div><code>olive | olivedrab | darkolivegreen</code></div>" +
      "<div><code>oldlace</code></div>" +
      "<div><code>orange | darkorange | orangered</code></div>" +
      "<div><code>orchid | mediumorchid | darkorchid</code></div>" +
      "<div><code>pink | lightpink | deeppink | hotpink</code></div>" +
      "<div><code>purple | mediumpurple | rebeccapurple</code></div>" +
      "<div><code>red | darkred | indianred</code></div>" +
      "<div><code>salmon | lightsalmon | darksalmon</code></div>" +
      "<div><code>seagreen | lightseagreen | mediumseagreen | darkseagreen</code></div>" +
      "<div><code>skyblue | lightskyblue | deepskyblue</code></div>" +
      "<div><code>slateblue | mediumslateblue | darkslateblue</code></div>" +
      "<div><code>slategray | lightslategray | darkslategray</code></div>" +
      "<div><code>slategrey | lightslategrey | darkslategrey</code></div>" +
      "<div><code>springgreen | mediumspringgreen</code></div>" +
      "<div><code>steelblue | lightsteelblue</code></div>" +
      "<div><code>turquoise | paleturquoise | mediumturquoise | darkturquoise</code></div>" +
      "<div><code>violet | darkviolet | palevioletred | mediumvioletred</code></div>" +
      "<div><code>wheat</code></div>" +
      "<div><code>white | antiquewhite | floralwhite | ghostwhite | navajowhite | whitesmoke</code></div>" +
      "<div><code>yellow | lightyellow | yellowgreen</code></div>" +
      "<div><code>aliceblue | cadetblue | cornflowerblue | dodgerblue | midnightblue | powderblue | royalblue</code></div>" +
      "<div><code>forestgreen | lawngreen</code></div>" +
      "<div><code>blueviolet | greenyellow</code></div>" +
      "<div><code>beige | bisque | black | blanchedalmond | burlywood</code></div>" +
      "<div><code>chartreuse | chocolate | cornsilk | crimson</code></div>" +
      "<div><code>firebrick | fuchsia</code></div>" +
      "<div><code>indigo | ivory</code></div>" +
      "<div><code>lemonchiffon | linen</code></div>" +
      "<div><code>mintcream | mistyrose | moccasin</code></div>" +
      "<div><code>papayawhip | peachpuff | peru | plum</code></div>" +
      "<div><code>seashell | sienna | silver | snow</code></div>" +
      "<div><code>tan | teal | thistle | tomato</code></div>",

    colorFunctions:
      "<div><code>color()</code></div>" +
      "<div><code>color-relative()</code></div>" +
      "<div><code>color-mix()</code></div>" +
      "<div><code>color-mix-hue()</code></div>" +
      "<div><code>hsl()</code></div>" +
      "<div><code>hsl-relative()</code></div>" +
      "<div><code>hsla()</code></div>" +
      "<div><code>hwb()</code></div>" +
      "<div><code>hwb-relative()</code></div>" +
      "<div><code>lab()</code></div>" +
      "<div><code>lab-relative()</code></div>" +
      "<div><code>lch()</code></div>" +
      "<div><code>lch-relative()</code></div>" +
      "<div><code>oklab()</code></div>" +
      "<div><code>oklab-relative()</code></div>" +
      "<div><code>oklch()</code></div>" +
      "<div><code>oklch-relative()</code></div>" +
      "<div><code>rgb()</code></div>" +
      "<div><code>rgb-relative()</code></div>" +
      "<div><code>rgba()</code></div>"
  };
  return color;
}

/////////////////////
// HEIGHT PROPERTY //
/////////////////////
function PropertyHeight() {
  let myHeight = document.getElementById("Input-Height").value;
  document.getElementsByClassName("Box-Model")[0].style.height = myHeight;
}

// HEIGHT: CSS GLOBAL VALUES; //
function HeightGlobalValues() {
  let myVisibility = document.getElementById("Height-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Height-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// HEIGHT: CSS LENGTH VALUES; //
function HeightLengthValues() {
  let myVisibility = document.getElementById("Height-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Height-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// HEIGHT: AUTO; //
function HeightAuto() {
  let myVisibility = document.getElementById("Height-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Height-Auto").innerHTML =
      "<div>[Default] The element will automatically adjust its height to allow its content to be displayed correctly</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// HEIGHT: MIN-CONTENT; //
function HeightMinContent() {
  let myVisibility = document.getElementById("Height-Min-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Height-Min-Content").innerHTML = "<div><code>min-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// HEIGHT: FIT-CONTENT; //
function HeightFitContent() {
  let myVisibility = document.getElementById("Height-Fit-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Height-Fit-Content").innerHTML = "<div><code>fit-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// HEIGHT: MAX-CONTENT; //
function HeightMaxContent() {
  let myVisibility = document.getElementById("Height-Max-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Height-Max-Content").innerHTML = "<div><code>max-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////
// MIN-HEIGHT PROPERTY //
/////////////////////////
function PropertyMinHeight() {
  let myMinHeight = document.getElementById("Input-Min-Height").value;
  document.getElementsByClassName("Box-Model")[0].style.minHeight = myMinHeight;
}

// MIN-HEIGHT: CSS GLOBAL VALUES; //
function MinHeightGlobalValues() {
  let myVisibility = document.getElementById("Min-Height-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Height-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-HEIGHT: CSS LENGTH VALUES; //
function MinHeightLengthValues() {
  let myVisibility = document.getElementById("Min-Height-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Height-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-HEIGHT: AUTO; //
function MinHeightAuto() {
  let myVisibility = document.getElementById("Min-Height-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Height-Auto").innerHTML =
      "<div>The element will automatically adjust its height to allow its content to be displayed correctly</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-HEIGHT: MIN-CONTENT; //
function MinHeightMinContent() {
  let myVisibility = document.getElementById("Min-Height-Min-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Height-Min-Content").innerHTML = "<div><code>min-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-HEIGHT: FIT-CONTENT; //
function MinHeightFitContent() {
  let myVisibility = document.getElementById("Min-Height-Fit-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Height-Fit-Content").innerHTML = "<div><code>fit-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-HEIGHT: MAX-CONTENT; //
function MinHeightMaxContent() {
  let myVisibility = document.getElementById("Min-Height-Max-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Height-Max-Content").innerHTML = "<div><code>max-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////
// MAX-HEIGHT PROPERTY //
/////////////////////////
function PropertyMaxHeight() {
  let myMaxHeight = document.getElementById("Input-Max-Height").value;
  document.getElementsByClassName("Box-Model")[0].style.maxHeight = myMaxHeight;
}

// MAX-HEIGHT: CSS GLOBAL VALUES; //
function MaxHeightGlobalValues() {
  let myVisibility = document.getElementById("Max-Height-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Height-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-HEIGHT: CSS LENGTH VALUES; //
function MaxHeightLengthValues() {
  let myVisibility = document.getElementById("Max-Height-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Height-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-HEIGHT: NONE; //
function MaxHeightNone() {
  let myVisibility = document.getElementById("Max-Height-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Height-None").innerHTML =
      "<div><code>none</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-HEIGHT: MIN-CONTENT; //
function MaxHeightMinContent() {
  let myVisibility = document.getElementById("Max-Height-Min-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Height-Min-Content").innerHTML = "<div><code>min-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-HEIGHT: FIT-CONTENT; //
function MaxHeightFitContent() {
  let myVisibility = document.getElementById("Max-Height-Fit-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Height-Fit-Content").innerHTML = "<div><code>fit-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-HEIGHT: MAX-CONTENT; //
function MaxHeightMaxContent() {
  let myVisibility = document.getElementById("Max-Height-Max-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Height-Max-Content").innerHTML = "<div><code>max-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

/*
function myGlobal() {
  const globalInput = { myWidth: document.getElementById("Input-Width").value };
  return globalInput;
}
function ClickerHandlerWidth(myInput) { document.getElementById("Box-Model").style.width = myGlobal(myInput).myWidth; }
*/