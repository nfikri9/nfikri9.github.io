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
    absolute:
      "<div id='Box-Absolute-Length-Units'><code><em>Absolute Length Units</em></code>" +
      "<div>Aboslute length units are fixed which always be the same size, not relative to anything else</div>" +
      "<div><code>px</code> &rarr; Pixel</div>" +
      "<div><code>cm</code> &rarr; Centimeters <code>[1cm = 37.8px]</code></div>" +
      "<div><code>mm</code> &rarr; Millimeters <code>[1mm = 3.78px]</code></div>" +
      "<div><code>Q</code> &rarr; Quarter-millimeters <code>[1Q = 0.945px]</code></div>" +
      "<div><code>in</code> &rarr; Inches <code>[1in = 96px]</code></div>" +
      "<div><code>pc</code> &rarr; Picas <code>[1pc = 16px]</code></div>" +
      "<div><code>pt</code> &rarr; Points <code>[1pt = (4/3)px]</code></div>" +
      "</div>",

    relative:
      "<div><code><em>Relative Length Units</em></code>" +
      "<div id='Box-Relative-Length-Units'>Relative length units based on font" +
      "<div><code>cap</code></div>" +
      "<div><code>ch</code></div>" +
      "<div><code>em</code></div>" +
      "<div><code>ex</code></div>" +
      "<div><code>ic</code></div>" +
      "<div><code>lh</code></div>" +
      "</div>" +
      "<div id='Box-Relative-Length-Units'>Relative length units based on root element's font" +
      "<div><code>rcap</code></div>" +
      "<div><code>rch</code></div>" +
      "<div><code>rem</code></div>" +
      "<div><code>rex</code></div>" +
      "<div><code>ric</code></div>" +
      "<div><code>rlh</code></div>" +
      "</div>" +
      "<div id='Box-Relative-Length-Units'>Relative length units based on viewport" +
      "<div><code>sv</code></div>" +
      "<div><code>lv</code></div>" +
      "<div><code>dv</code></div>" +
      "<div><code><em>Default Viewport</em></code></div>" +
      "<div><code>vh</code></div>" +
      "<div><code>vw</code></div>" +
      "<div><code>vmin</code></div>" +
      "<div><code>vmax</code></div>" +
      "<div><code>vb</code></div>" +
      "<div><code>vi</code></div>" +
      "</div>" +
      "<div id='Box-Relative-Length-Units'>Container query length units" +
      "<div><code>cqw</code></div>" +
      "<div><code>cqh</code></div>" +
      "<div><code>cqi</code></div>" +
      "<div><code>cqb</code></div>" +
      "<div><code>cqmin</code></div>" +
      "<div><code>cqmax</code></div>" +
      "</div>" +
      "</div>"
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

////////////////////
// WIDTH PROPERTY //
////////////////////
function PropertyWidth() {
  let myWidth = document.getElementById("Input-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.width = myWidth;
}

// WIDTH: CSS GLOBAL VALUES; //
function WidthGlobalValues() {
  let myVisibility = document.getElementById("Width-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Width-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// WIDTH: CSS LENGTH VALUES; //
function WidthLengthValues() {
  let myVisibility = document.getElementById("Width-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Width-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// WIDTH: AUTO; //
function WidthAuto() {
  let myVisibility = document.getElementById("Width-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Width-Auto").innerHTML =
      "<div>[Default]</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// WIDTH: MIN-CONTENT; //
function WidthMinContent() {
  let myVisibility = document.getElementById("Width-Min-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Width-Min-Content").innerHTML = "<div><code>min-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// WIDTH: FIT-CONTENT; //
function WidthFitContent() {
  let myVisibility = document.getElementById("Width-Fit-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Width-Fit-Content").innerHTML = "<div><code>fit-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// WIDTH: MAX-CONTENT; //
function WidthMaxContent() {
  let myVisibility = document.getElementById("Width-Max-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Width-Max-Content").innerHTML = "<div><code>max-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////
// MIN-WIDTH PROPERTY //
////////////////////////
function PropertyMinWidth() {
  let myMinWidth = document.getElementById("Input-Min-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.minWidth = myMinWidth;
}

// MIN-WIDTH: CSS GLOBAL VALUES; //
function MinWidthGlobalValues() {
  let myVisibility = document.getElementById("Min-Width-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Width-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-WIDTH: CSS LENGTH VALUES; //
function MinWidthLengthValues() {
  let myVisibility = document.getElementById("Min-Width-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Width-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-WIDTH: AUTO; //
function MinWidthAuto() {
  let myVisibility = document.getElementById("Min-Width-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Width-Auto").innerHTML =
      "<div><code>auto</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-WIDTH: MIN-CONTENT; //
function MinWidthMinContent() {
  let myVisibility = document.getElementById("Min-Width-Min-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Width-Min-Content").innerHTML = "<div><code>min-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-WIDTH: FIT-CONTENT; //
function MinWidthFitContent() {
  let myVisibility = document.getElementById("Min-Width-Fit-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Width-Fit-Content").innerHTML = "<div><code>fit-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MIN-WIDTH: MAX-CONTENT; //
function MinWidthMaxContent() {
  let myVisibility = document.getElementById("Min-Width-Max-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Min-Width-Max-Content").innerHTML = "<div><code>max-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////
// MAX-WIDTH PROPERTY //
////////////////////////
function PropertyMaxWidth() {
  let myMaxWidth = document.getElementById("Input-Max-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.maxWidth = myMaxWidth;
}

// MAX-WIDTH: CSS GLOBAL VALUES; //
function MaxWidthGlobalValues() {
  let myVisibility = document.getElementById("Max-Width-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Width-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-WIDTH: CSS LENGTH VALUES; //
function MaxWidthLengthValues() {
  let myVisibility = document.getElementById("Max-Width-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Width-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-WIDTH: NONE; //
function MaxWidthNone() {
  let myVisibility = document.getElementById("Max-Width-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Width-None").innerHTML =
      "<div>[Default] There is no <code>max-width</code> specified</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-WIDTH: MIN-CONTENT; //
function MaxWidthMinContent() {
  let myVisibility = document.getElementById("Max-Width-Min-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Width-Min-Content").innerHTML = "<div><code>min-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-WIDTH: FIT-CONTENT; //
function MaxWidthFitContent() {
  let myVisibility = document.getElementById("Max-Width-Fit-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Width-Fit-Content").innerHTML = "<div><code>fit-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// MAX-WIDTH: MAX-CONTENT; //
function MaxWidthMaxContent() {
  let myVisibility = document.getElementById("Max-Width-Max-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Max-Width-Max-Content").innerHTML = "<div><code>max-content</code></div>";
  }
  else { myVisibility.style.display = "none"; }
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
      "<div>[Default] There is no <code>max-height</code> specified</div>";
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

///////////////////////////
// ASPECT-RATIO PROPERTY //
///////////////////////////
function PropertyAspectRatio() {
  let myAspectRatio = document.getElementById("Input-Aspect-Ratio").value;
  document.getElementsByClassName("Box-Model")[0].style.aspectRatio = myAspectRatio;
}

// ASPECT-RATIO: CSS GLOBAL VALUES; //
function AspectRatioGlobalValues() {
  let myVisibility = document.getElementById("Aspect-Ratio-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Aspect-Ratio-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// ASPECT-RATIO: NUMBERS; //
function AspectRatioNumbers() {
  let myVisibility = document.getElementById("Aspect-Ratio-Numbers");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Aspect-Ratio-Numbers").innerHTML =
      "<div>First parameter is required, which specifies the number for width in aspect ratio</div>" +
      "<div>Second parameter is optional, which specifies the number for height in aspect ratio (the default number is 1)</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ASPECT-RATIO: AUTO; //
function AspectRatioAuto() {
  let myVisibility = document.getElementById("Aspect-Ratio-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Aspect-Ratio-Auto").innerHTML =
      "<div><code>auto</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////
// PADDING PROPERTY //
//////////////////////
function PropertyPadding() {
  let myPadding = document.getElementById("Input-Padding").value;
  document.getElementsByClassName("Box-Model")[0].style.padding = myPadding;
}

// PADDING: CSS GLOBAL VALUES; //
function PaddingGlobalValues() {
  let myVisibility = document.getElementById("Padding-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Padding-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// PADDING: CSS LENGTH VALUES; //
function PaddingLengthValues() {
  let myVisibility = document.getElementById("Padding-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Padding-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////
// MARGIN PROPERTY //
/////////////////////
function PropertyMargin() {
  let myMargin = document.getElementById("Input-Margin").value;
  document.getElementsByClassName("Box-Model")[0].style.margin = myMargin;
}

// MARGIN: CSS GLOBAL VALUES; //
function MarginGlobalValues() {
  let myVisibility = document.getElementById("Margin-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Margin-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// MARGIN: CSS LENGTH VALUES; //
function MarginLengthValues() {
  let myVisibility = document.getElementById("Margin-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Margin-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// MARGIN: AUTO; //
function MarginAuto() {
  let myVisibility = document.getElementById("Margin-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Margin-Auto").innerHTML =
      "<div>Horizontally center the element within its container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////////
// BORDER-WIDTH PROPERTY //
///////////////////////////
function PropertyBorderWidth() {
  let myBorderWidth = document.getElementById("Input-Border-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.borderWidth = myBorderWidth;
}

// BORDER-WIDTH: CSS GLOBAL VALUES; //
function BorderWidthGlobalValues() {
  let myVisibility = document.getElementById("Border-Width-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Width-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-WIDTH: CSS LENGTH VALUES; //
function BorderWidthLengthValues() {
  let myVisibility = document.getElementById("Border-Width-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Width-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-WIDTH: MEDIUM; //
function BorderWidthMedium() {
  let myVisibility = document.getElementById("Border-Width-Medium");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Width-Medium").innerHTML =
      "<div>[Default] The border width is medium</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-WIDTH: THIN; //
function BorderWidthThin() {
  let myVisibility = document.getElementById("Border-Width-Thin");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Width-Thin").innerHTML =
      "<div>The border width is thin</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-WIDTH: THICK; //
function BorderWidthThick() {
  let myVisibility = document.getElementById("Border-Width-Thick");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Width-Thick").innerHTML =
      "<div>The border width is thick</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-MODEL INSIGHTS //
function Insights() {
  let myVisibility = document.getElementsByClassName("Display-Insights")[0];
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////////
// BORDER-STYLE PROPERTY //
///////////////////////////
function PropertyBorderStyle() {
  let myBorderStyle = document.getElementById("Input-Border-Style").value;
  document.getElementsByClassName("Box-Model")[0].style.borderStyle = myBorderStyle;
}

// BORDER-STYLE: CSS GLOBAL VALUES; //
function BorderStyleGlobalValues() {
  let myVisibility = document.getElementById("Border-Style-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: NONE; //
function BorderStyleNone() {
  let myVisibility = document.getElementById("Border-Style-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-None").innerHTML =
      "<div>[Default] There is no specified border style</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: SOLID; //
function BorderStyleSolid() {
  let myVisibility = document.getElementById("Border-Style-Solid");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Solid").innerHTML =
      "<div>The border style is solid</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: DASHED; //
function BorderStyleDashed() {
  let myVisibility = document.getElementById("Border-Style-Dashed");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Dashed").innerHTML =
      "<div>The border style is dashed</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: DOTTED; //
function BorderStyleDotted() {
  let myVisibility = document.getElementById("Border-Style-Dotted");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Dotted").innerHTML =
      "<div>The border style is dotted</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: DOUBLE; //
function BorderStyleDouble() {
  let myVisibility = document.getElementById("Border-Style-Double");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Double").innerHTML =
      "<div>The border style is double</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: HIDDEN; //
function BorderStyleHidden() {
  let myVisibility = document.getElementById("Border-Style-Hidden");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Hidden").innerHTML =
      "<div>The same as <code>none</code>, except in border conflict resolution for table elements</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: GROOVE; //
function BorderStyleGroove() {
  let myVisibility = document.getElementById("Border-Style-Groove");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Groove").innerHTML =
      "<div>The style of the border is 3D groove, which the effect is depends on the <code>border-color</code> value</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: INSET; //
function BorderStyleInset() {
  let myVisibility = document.getElementById("Border-Style-Inset");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Inset").innerHTML =
      "<div>The style of the border is 3D inset, which the effect is depends on the <code>border-color</code> value</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: OUTSET; //
function BorderStyleOutset() {
  let myVisibility = document.getElementById("Border-Style-Outset");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Outset").innerHTML =
      "<div>The style of the border is 3D outset, which the effect depends on the <code>border-color</code> value</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-STYLE: RIDGE; //
function BorderStyleRidge() {
  let myVisibility = document.getElementById("Border-Style-Ridge");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Style-Ridge").innerHTML =
      "<div>The style of the border is 3D ridge, which the effect is depends on the <code>border-color</code> value</div>";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////////
// BORDER-COLOR PROPERTY //
///////////////////////////
function PropertyBorderColor() {
  let myBorderColor = document.getElementById("Input-Border-Color").value;
  document.getElementsByClassName("Box-Model")[0].style.borderColor = myBorderColor;
}

// BORDER-COLOR: CSS GLOBAL VALUES; //
function BorderColorGlobalValues() {
  let myVisibility = document.getElementById("Border-Color-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Color-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-COLOR: CSS COLOR VALUES; //
function BorderColorColorValues() {
  let myVisibility = document.getElementById("Border-Color-Color-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Color-Color-Values").innerHTML =
      CSSColorValues().colorNames + CSSColorValues().colorFunctions;
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-COLOR: CURRENTCOLOR; //
function BorderColorCurrentColor() {
  let myVisibility = document.getElementById("Border-Color-Current-Color");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Color-Current-Color").innerHTML =
      "<div>[Default] The border color is based on the value of the <code>color</code> property of the element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-COLOR: TRANSPARENT; //
function BorderColorTransparent() {
  let myVisibility = document.getElementById("Border-Color-Transparent");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Color-Transparent").innerHTML =
      "<div><code>transparent</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////////
// BORDER-RADIUS PROPERTY //
////////////////////////////
function PropertyBorderRadius() {
  let myBorderRadius = document.getElementById("Input-Border-Radius").value;
  document.getElementsByClassName("Box-Model")[0].style.borderRadius = myBorderRadius;
}

// BORDER-RADIUS: CSS GLOBAL VALUES; //
function BorderRadiusGlobalValues() {
  let myVisibility = document.getElementById("Border-Radius-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Radius-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// BORDER-RADIUS: CSS LENGTH VALUES; //
function BorderRadiusLengthValues() {
  let myVisibility = document.getElementById("Border-Radius-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Border-Radius-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////////
// OUTLINE-WIDTH PROPERTY //
////////////////////////////
function PropertyOutlineWidth() {
  let myOutlineWidth = document.getElementById("Input-Outline-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.outlineWidth = myOutlineWidth;
}

// OUTLINE-WIDTH: CSS GLOBAL VALUES; //
function OutlineWidthGlobalValues() {
  let myVisibility = document.getElementById("Outline-Width-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Width-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-WIDTH: CSS LENGTH VALUES; //
function OutlineWidthLengthValues() {
  let myVisibility = document.getElementById("Outline-Width-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Width-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-WIDTH: MEDIUM; //
function OutlineWidthMedium() {
  let myVisibility = document.getElementById("Outline-Width-Medium");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Width-Medium").innerHTML =
      "<div>[Default] The outline width is medium</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-WIDTH: THIN; //
function OutlineWidthThin() {
  let myVisibility = document.getElementById("Outline-Width-Thin");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Width-Thin").innerHTML =
      "<div>The outline width is thin</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-WIDTH: THICK; //
function OutlineWidthThick() {
  let myVisibility = document.getElementById("Outline-Width-Thick");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Width-Thick").innerHTML =
      "<div>The outline width is thick</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////////
// OUTLINE-STYLE PROPERTY //
////////////////////////////
function PropertyOutlineStyle() {
  let myOutlineStyle = document.getElementById("Input-Outline-Style").value;
  document.getElementsByClassName("Box-Model")[0].style.outlineStyle = myOutlineStyle;
}

// OUTLINE-STYLE: CSS GLOBAL VALUES; //
function OutlineStyleGlobalValues() {
  let myVisibility = document.getElementById("Outline-Style-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: NONE; //
function OutlineStyleNone() {
  let myVisibility = document.getElementById("Outline-Style-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-None").innerHTML =
      "<div>[Default] There is no specified outline style</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: SOLID; //
function OutlineStyleSolid() {
  let myVisibility = document.getElementById("Outline-Style-Solid");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Solid").innerHTML =
      "<div>The outline style is solid</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: DASHED; //
function OutlineStyleDashed() {
  let myVisibility = document.getElementById("Outline-Style-Dashed");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Dashed").innerHTML =
      "<div>The outline style is dashed</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: DOTTED; //
function OutlineStyleDotted() {
  let myVisibility = document.getElementById("Outline-Style-Dotted");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Dotted").innerHTML =
      "<div>The outline style is dotted</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: DOUBLE; //
function OutlineStyleDouble() {
  let myVisibility = document.getElementById("Outline-Style-Double");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Double").innerHTML =
      "<div>The outline style is double</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: HIDDEN; //
function OutlineStyleHidden() {
  let myVisibility = document.getElementById("Outline-Style-Hidden");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Hidden").innerHTML =
      "<div>The same as <code>none</code>, except in outline conflict resolution for table elements</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: GROOVE; //
function OutlineStyleGroove() {
  let myVisibility = document.getElementById("Outline-Style-Groove");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Groove").innerHTML =
      "<div>The style of the outline is 3D groove, which the effect is depends on the <code>outline-color</code> value</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: INSET; //
function OutlineStyleInset() {
  let myVisibility = document.getElementById("Outline-Style-Inset");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Inset").innerHTML =
      "<div>The style of the outline is 3D inset, which the effect is depends on the <code>outline-color</code> value</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: OUTSET; //
function OutlineStyleOutset() {
  let myVisibility = document.getElementById("Outline-Style-Outset");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Outset").innerHTML =
      "<div>The style of the outline is 3D outset, which the effect depends on the <code>outline-color</code> value</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-STYLE: RIDGE; //
function OutlineStyleRidge() {
  let myVisibility = document.getElementById("Outline-Style-Ridge");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Style-Ridge").innerHTML =
      "<div>The style of the outline is 3D ridge, which the effect is depends on the <code>outline-color</code> value</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////////
// OUTLINE-COLOR PROPERTY //
////////////////////////////
function PropertyOutlineColor() {
  let myOutlineColor = document.getElementById("Input-Outline-Color").value;
  document.getElementsByClassName("Box-Model")[0].style.outlineColor = myOutlineColor;
}

// OUTLINE-COLOR: CSS GLOBAL VALUES; //
function OutlineColorGlobalValues() {
  let myVisibility = document.getElementById("Outline-Color-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Color-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-COLOR: CSS COLOR VALUES; //
function OutlineColorColorValues() {
  let myVisibility = document.getElementById("Outline-Color-Color-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Color-Color-Values").innerHTML =
      CSSColorValues().colorNames + CSSColorValues().colorFunctions;
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-COLOR: CURRENTCOLOR; //
function OutlineColorCurrentColor() {
  let myVisibility = document.getElementById("Outline-Color-Current-Color");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Color-Current-Color").innerHTML =
      "<div>[Default] The outline color is based on the value of the <code>color</code> property of the element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-COLOR: TRANSPARENT; //
function OutlineColorTransparent() {
  let myVisibility = document.getElementById("Outline-Color-Transparent");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Color-Transparent").innerHTML =
      "<div><code>transparent</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////////
// OUTLINE-OFFSET PROPERTY //
/////////////////////////////
function PropertyOutlineOffset() {
  let myOutlineOffset = document.getElementById("Input-Outline-Offset").value;
  document.getElementsByClassName("Box-Model")[0].style.outlineOffset = myOutlineOffset;
}

// OUTLINE-OFFSET: CSS GLOBAL VALUES; //
function OutlineOffsetGlobalValues() {
  let myVisibility = document.getElementById("Outline-Offset-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Offset-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// OUTLINE-OFFSET: CSS LENGTH VALUES; //
function OutlineOffsetLengthValues() {
  let myVisibility = document.getElementById("Outline-Offset-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Outline-Offset-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
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