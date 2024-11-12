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

/////////////////////////
// BOX-SHADOW PROPERTY //
/////////////////////////
function PropertyBoxShadow() {
  let myBoxShadow = document.getElementById("Input-Box-Shadow").value;
  document.getElementsByClassName("Box-Model")[0].style.boxShadow = myBoxShadow;
}

// BOX-SHADOW: CSS GLOBAL VALUES; //
function BoxShadowGlobalValues() {
  let myVisibility = document.getElementById("Box-Shadow-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Shadow-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-SHADOW: CSS LENGTH VALUES; //
function BoxShadowLengthValues() {
  let myVisibility = document.getElementById("Box-Shadow-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Shadow-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-SHADOW: CSS COLOR VALUES; //
function BoxShadowColorValues() {
  let myVisibility = document.getElementById("Box-Shadow-Color-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Shadow-Color-Values").innerHTML =
      CSSColorValues().colorNames + CSSColorValues().colorFunctions;
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-SHADOW: CURRENTCOLOR; //
function BoxShadowCurrentColor() {
  let myVisibility = document.getElementById("Box-Shadow-Current-Color");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Shadow-Current-Color").innerHTML =
      "<div>[Default] The box shadow color is based on the value of the <code>color</code> property of the element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-SHADOW: TRANSPARENT; //
function BoxShadowTransparent() {
  let myVisibility = document.getElementById("Box-Shadow-Transparent");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Shadow-Transparent").innerHTML =
      "<div><code>transparent</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-SHADOW: NONE; //
function BoxShadowNone() {
  let myVisibility = document.getElementById("Box-Shadow-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Shadow-None").innerHTML =
      "<div>[Default] There is no specified box shadow</div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////
// BOX-SIZING PROPERTY //
/////////////////////////
function PropertyBoxSizing() {
  let myBoxSizing = document.getElementById("Input-Box-Sizing").value;
  document.getElementsByClassName("Box-Model")[0].style.boxSizing = myBoxSizing;
}

// BOX-SIZING: CSS GLOBAL VALUES; //
function BoxSizingGlobalValues() {
  let myVisibility = document.getElementById("Box-Sizing-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Sizing-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-SIZING: BORDER-BOX; //
function BoxSizingBorderBox() {
  let myVisibility = document.getElementById("Box-Sizing-Border-Box");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Sizing-Border-Box").innerHTML =
      "<div>[Default] The <code>width</code> and <code>height</code> properties (and <code>min/max</code> properties) includes only the content</div>" +
      "<div>Since the element will remain the same, the content will appears smaller as the <code>padding</code> and <code>border</code> are added into the calculation</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-SIZING: CONTENT-BOX; //
function BoxSizingContentBox() {
  let myVisibility = document.getElementById("Box-Sizing-Content-Box");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Sizing-Content-Box").innerHTML =
      "<div>The <code>width</code> and <code>height</code> properties (and <code>min/max</code> properties) includes content, <code>padding</code> and <code>border</code></div>" +
      "<div>The element will appears bigger than intended to be</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-MODEL INSIGHTS //
function InsightsBoxModel() {
  let myVisibility = document.getElementsByClassName("Display-Insights")[0];
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////
// POSITION PROPERTY //
///////////////////////
function PropertyPosition() {
  let myPosition = document.getElementById("Input-Position").value;
  document.getElementsByClassName("Box-Model")[1].style.position = myPosition;
}

// POSITION: CSS GLOBAL VALUES; //
function PositionGlobalValues() {
  let myVisibility = document.getElementById("Position-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Position-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// POSITION: STATIC; //
function PositionStatic() {
  let myVisibility = document.getElementById("Position-Static");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Position-Static").innerHTML =
      "<div>[Default] The element is always positioned according to the normal flow of the page</div>" +
      "<div>The <code>inset</code> property does not affects the position of the element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// POSITION: RELATIVE; //
function PositionRelative() {
  let myVisibility = document.getElementById("Position-Relative");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Position-Relative").innerHTML =
      "<div>The element is positioned relative to its normal position</div>" +
      "<div>Use the <code>inset</code> property to adjust the position of the element</div>" +
      "<div>Other content will not be adjusted to fit into any gap left by the element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// POSITION: FIXED; //
function PositionFixed() {
  let myVisibility = document.getElementById("Position-Fixed");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Position-Fixed").innerHTML =
      "<div>The element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled</div>" +
      "<div>Use the <code>inset</code> property to adjust the position of the element</div>" +
      "<div>A fixed element does not leave a gap in the page where it would normally have been located</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// POSITION: ABSOLUTE; //
function PositionAbsolute() {
  let myVisibility = document.getElementById("Position-Absolute");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Position-Absolute").innerHTML =
      "<div>The element is positioned relative to the nearest positioned ancestor</div>" +
      "<div>Use the <code>inset</code> property to adjust the position of the element</div>" +
      "<div>If an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling</div>" +
      "<div>Absolute positioned elements are removed from the normal flow, and can overlap elements</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// POSITION: STICKY; //
function PositionSticky() {
  let myVisibility = document.getElementById("Position-Sticky");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Position-Sticky").innerHTML =
      "<div>The element is positioned based on the user's scroll position</div>" +
      "<div>Use the <code>inset</code> property to adjust the position of the element</div>" +
      "<div>A sticky element toggles between <code>relative</code> and <code>fixed</code>, depending on the scroll position</div>" +
      "<div>It is positioned relative until a given offset position is met in the viewport - then it 'sticks' in place</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////
// INSET PROPERTY //
////////////////////
function PropertyInset() {
  let myInset = document.getElementById("Input-Inset").value;
  document.getElementsByClassName("Box-Model")[1].style.inset = myInset;
}

// INSET: CSS GLOBAL VALUES; //
function InsetGlobalValues() {
  let myVisibility = document.getElementById("Inset-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Inset-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// INSET: CSS LENGTH VALUES; //
function InsetLengthValues() {
  let myVisibility = document.getElementById("Inset-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Inset-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// INSET: AUTO; //
function InsetAuto() {
  let myVisibility = document.getElementById("Inset-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Inset-Auto").innerHTML =
      "<div>[Default] The element is set to default inset distance</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////
// FLOAT PROPERTY //
////////////////////
function PropertyFloat() {
  let myFloat = document.getElementById("Input-Float").value;
  document.getElementsByClassName("Box-Model")[1].style.float = myFloat;
}

// FLOAT: CSS GLOBAL VALUES; //
function FloatGlobalValues() {
  let myVisibility = document.getElementById("Float-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Float-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// FLOAT: NONE; //
function FloatNone() {
  let myVisibility = document.getElementById("Float-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Float-None").innerHTML =
      "<div>[Default] There is no specified float element, it just displayed where it occurs in the text</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLOAT: LEFT; //
function FloatLeft() {
  let myVisibility = document.getElementById("Float-Left");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Float-Left").innerHTML =
      "<div>The element floats to the left of its container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLOAT: RIGHT; //
function FloatRight() {
  let myVisibility = document.getElementById("Float-Right");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Float-Right").innerHTML =
      "<div>The element floats to the right of its container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLOAT: INLINE-START; //
function FloatInlineStart() {
  let myVisibility = document.getElementById("Float-Inline-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Float-Inline-Start").innerHTML =
      "<div><code>inline-start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLOAT: INLINE-END; //
function FloatInlineEnd() {
  let myVisibility = document.getElementById("Float-Inline-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Float-Inline-End").innerHTML =
      "<div><code>inline-end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////
// CLEAR PROPERTY //
////////////////////
function PropertyClear() {
  let myClear = document.getElementById("Input-Clear").value;
  document.getElementById("Property-Position").style.clear = myClear;
}

// CLEAR: CSS GLOBAL VALUES; //
function ClearGlobalValues() {
  let myVisibility = document.getElementById("Clear-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Clear-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// CLEAR: NONE; //
function ClearNone() {
  let myVisibility = document.getElementById("Clear-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Clear-None").innerHTML =
      "<div>[Default] There is no specified clear element, the element is not pushed below left or right floated elements</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// CLEAR: LEFT; //
function ClearLeft() {
  let myVisibility = document.getElementById("Clear-Left");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Clear-Left").innerHTML =
      "<div>The element is pushed below left floated elements</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// CLEAR: RIGHT; //
function ClearRight() {
  let myVisibility = document.getElementById("Clear-Right");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Clear-Right").innerHTML =
      "<div>The element is pushed below right floated elements</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// CLEAR: BOTH; //
function ClearBoth() {
  let myVisibility = document.getElementById("Clear-Both");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Clear-Both").innerHTML =
      "<div>The element is pushed below both left and right floated elements</div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////
// DISPLAY PROPERTY //
//////////////////////
function PropertyDisplay() {
  let myDisplay = document.getElementById("Input-Display").value;
  document.getElementById("Adding-Box-Model").style.display = myDisplay;
}

// DISPLAY: CSS GLOBAL VALUES; //
function DisplayGlobalValues() {
  let myVisibility = document.getElementById("Display-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: INLINE; //
function DisplayInline() {
  let myVisibility = document.getElementById("Display-Inline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Inline").innerHTML =
      "<div>[Default] The element is displayed as an inline element</div>" +
      "<div>Like <code>&lt;span&gt;</code> any <code>height</code> and <code>width</code> properties will have no effect</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: BLOCK; //
function DisplayBlock() {
  let myVisibility = document.getElementById("Display-Block");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Block").innerHTML =
      "<div>Displays an element as a block element</div>" +
      "<div>Like <code>&lt;p&gt;</code> it starts on a new line, and takes up the whole width</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: FLEX; //
function DisplayFlex() {
  let myVisibility = document.getElementById("Display-Flex");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Flex").innerHTML =
      "<div>Displays an element as a block-level flex container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: GRID; //
function DisplayGrid() {
  let myVisibility = document.getElementById("Display-Grid");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Grid").innerHTML =
      "<div>Displays an element as a block-level grid container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: NONE; //
function DisplayNone() {
  let myVisibility = document.getElementById("Display-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-None").innerHTML =
      "<div>The element is completely removed</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: CONTENTS; //
function DisplayContents() {
  let myVisibility = document.getElementById("Display-Contents");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Contents").innerHTML =
      "<div>Makes the container disappear, making the child elements children of the element the next level up in the DOM</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: INLINE-BLOCK; //
function DisplayInlineBlock() {
  let myVisibility = document.getElementById("Display-Inline-Block");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Inline-Block").innerHTML =
      "<div>Displays an element as an inline-level block container</div>" +
      "<div>The element itself is formatted as an inline element, but the values for <code>height</code> and <code>width</code> properties can be applied</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: INLINE-FLEX; //
function DisplayInlineFlex() {
  let myVisibility = document.getElementById("Display-Inline-Flex");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Inline-Flex").innerHTML =
      "<div>Displays an element as an inline-level flex container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: INLINE-GRID; //
function DisplayInlineGrid() {
  let myVisibility = document.getElementById("Display-Inline-Grid");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Inline-Grid").innerHTML =
      "<div>Displays an element as an inline-level grid container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: INLINE-TABLE; //
function DisplayInlineTable() {
  let myVisibility = document.getElementById("Display-Inline-Table");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Inline-Table").innerHTML =
      "<div>The element is displayed as an inline-level table</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: LIST-ITEM; //
function DisplayListItem() {
  let myVisibility = document.getElementById("Display-List-Item");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-List-Item").innerHTML =
      "<div>Let the element behave like a <code>&lt;li&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: RUN-IN; //
function DisplayRunIn() {
  let myVisibility = document.getElementById("Display-Run-In");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Run-In").innerHTML =
      "<div>Displays an element as either block or inline, depending on context</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE; //
function DisplayTable() {
  let myVisibility = document.getElementById("Display-Table");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table").innerHTML =
      "<div>Let the element behave like a <code>&lt;table&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE-CAPTION; //
function DisplayTableCaption() {
  let myVisibility = document.getElementById("Display-Table-Caption");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table-Caption").innerHTML =
      "<div>Let the element behave like a <code>&lt;caption&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE-COLUMN-GROUP; //
function DisplayTableColumnGroup() {
  let myVisibility = document.getElementById("Display-Table-Column-Group");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table-Column-Group").innerHTML =
      "<div>Let the element behave like a <code>&lt;colgroup&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE-COLUMN; //
function DisplayTableColumn() {
  let myVisibility = document.getElementById("Display-Table-Column");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table-Column").innerHTML =
      "<div>Let the element behave like a <code>&lt;col&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE-HEADER-GROUP; //
function DisplayTableHeaderGroup() {
  let myVisibility = document.getElementById("Display-Table-Header-Group");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table-Header-Group").innerHTML =
      "<div>Let the element behave like a <code>&lt;thead&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE-ROW-GROUP; //
function DisplayTableRowGroup() {
  let myVisibility = document.getElementById("Display-Table-Row-Group");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table-Row-Group").innerHTML =
      "<div>Let the element behave like a <code>&lt;tbody&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE-FOOTER-GROUP; //
function DisplayTableFooterGroup() {
  let myVisibility = document.getElementById("Display-Table-Footer-Group");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table-Footer-Group").innerHTML =
      "<div>Let the element behave like a <code>&lt;tfoot&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE-ROW; //
function DisplayTableRow() {
  let myVisibility = document.getElementById("Display-Table-Row");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table-Row").innerHTML =
      "<div>Let the element behave like a <code>&lt;tr&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: TABLE-CELL; //
function DisplayTableCell() {
  let myVisibility = document.getElementById("Display-Table-Cell");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Table-Cell").innerHTML =
      "<div>Let the element behave like a <code>&lt;td&gt;</code> element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: FLEXBOX; //
function DisplayFlexbox() {
  let myVisibility = document.getElementById("Display-Flexbox");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Flexbox").innerHTML =
      "<div><code>flexbox</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: INLINE-FLEXBOX; //
function DisplayInlineFlexbox() {
  let myVisibility = document.getElementById("Display-Inline-Flexbox");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Inline-Flexbox").innerHTML =
      "<div><code>inline-flexbox</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: FLOW-ROOT; //
function DisplayFlowRoot() {
  let myVisibility = document.getElementById("Display-Flow-Root");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Flow-Root").innerHTML =
      "<div><code>flow-root</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: RUBY; //
function DisplayRuby() {
  let myVisibility = document.getElementById("Display-Ruby");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Ruby").innerHTML =
      "<div><code>ruby</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: RUBY-BASE-CONTAINER; //
function DisplayRubyBaseContainer() {
  let myVisibility = document.getElementById("Display-Ruby-Base-Container");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Ruby-Base-Container").innerHTML =
      "<div><code>ruby-base-container</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: RUBY-BASE; //
function DisplayRubyBase() {
  let myVisibility = document.getElementById("Display-Ruby-Base");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Ruby-Base").innerHTML =
      "<div><code>ruby-base</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: RUBY-TEXT-CONTAINER; //
function DisplayRubyTextContainer() {
  let myVisibility = document.getElementById("Display-Ruby-Text-Container");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Ruby-Text-Container").innerHTML =
      "<div><code>ruby-text-container</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DISPLAY: RUBY-TEXT; //
function DisplayRubyText() {
  let myVisibility = document.getElementById("Display-Ruby-Text");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Display-Ruby-Text").innerHTML =
      "<div><code>ruby-text</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////////
// FLEX-DIRECTION PROPERTY //
/////////////////////////////
function PropertyFlexDirection() {
  let myFlexDirection = document.getElementById("Input-Flex-Direction").value;
  document.getElementById("Adding-Box-Model").style.flexDirection = myFlexDirection;
}

// FLEX-DIRECTION: CSS GLOBAL VALUES; //
function FlexDirectionGlobalValues() {
  let myVisibility = document.getElementById("Flex-Direction-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Direction-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-DIRECTION: ROW; //
function FlexDirectionRow() {
  let myVisibility = document.getElementById("Flex-Direction-Row");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Direction-Row").innerHTML =
      "<div>[Default]  The flexible items are displayed horizontally, as a row</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-DIRECTION: ROW-REVERSE; //
function FlexDirectionRowReverse() {
  let myVisibility = document.getElementById("Flex-Direction-Row-Reverse");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Direction-Row-Reverse").innerHTML =
      "<div>The flexible items are displayed horizontally, as a row in reverse order</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-DIRECTION: COLUMN; //
function FlexDirectionColumn() {
  let myVisibility = document.getElementById("Flex-Direction-Column");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Direction-Column").innerHTML =
      "<div>The flexible items are displayed vertically, as a column</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-DIRECTION: COLUMN-REVERSE; //
function FlexDirectionColumnReverse() {
  let myVisibility = document.getElementById("Flex-Direction-Column-Reverse");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Direction-Column-Reverse").innerHTML =
      "<div>The flexible items are displayed vertically, as a column in reverse order</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////
// FLEX-WRAP PROPERTY //
////////////////////////
function PropertyFlexWrap() {
  let myFlexWrap = document.getElementById("Input-Flex-Wrap").value;
  document.getElementById("Adding-Box-Model").style.flexWrap = myFlexWrap;
}

// FLEX-WRAP: CSS GLOBAL VALUES; //
function FlexWrapGlobalValues() {
  let myVisibility = document.getElementById("Flex-Wrap-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Wrap-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-WRAP: NOWRAP; //
function FlexWrapNoWrap() {
  let myVisibility = document.getElementById("Flex-Wrap-No-Wrap");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Wrap-No-Wrap").innerHTML =
      "<div>[Default] Specifies that the flexible items will not wrap</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-WRAP: WRAP; //
function FlexWrapWrap() {
  let myVisibility = document.getElementById("Flex-Wrap-Wrap");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Wrap-Wrap").innerHTML =
      "<div>Specifies that the flexible items will wrap if necessary</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-WRAP: WRAP-REVERSE; //
function FlexWrapWrapReverse() {
  let myVisibility = document.getElementById("Flex-Wrap-Wrap-Reverse");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Wrap-Wrap-Reverse").innerHTML =
      "<div>Specifies that the flexible items will wrap, if necessary, in reverse order</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////
// FLEX-GROW PROPERTY //
////////////////////////
function PropertyFlexGrow() {
  let myFlexGrow = document.getElementById("Input-Flex-Grow").value;
  document.getElementsByClassName("Added-Box-Model")[0].style.flexGrow = myFlexGrow;
}

// FLEX-GROW: CSS GLOBAL VALUES; //
function FlexGrowGlobalValues() {
  let myVisibility = document.getElementById("Flex-Grow-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Grow-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-GROW: NUMBERS; //
function FlexGrowNumbers() {
  let myVisibility = document.getElementById("Flex-Grow-Numbers");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Grow-Numbers").innerHTML =
      "<div>A number specifying how much the item will grow relative to the rest of the flexible items</div>" +
      "<div><code>0</code> is the default value where the item growth relative to the rest of the flexible items remain unchanged</div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////////
// FLEX-SHRINK PROPERTY //
//////////////////////////
function PropertyFlexShrink() {
  let myFlexShrink = document.getElementById("Input-Flex-Shrink").value;
  document.getElementsByClassName("Added-Box-Model")[0].style.flexShrink = myFlexShrink;
}

// FLEX-SHRINK: CSS GLOBAL VALUES; //
function FlexShrinkGlobalValues() {
  let myVisibility = document.getElementById("Flex-Shrink-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Shrink-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-SHRINK: NUMBERS; //
function FlexShrinkNumbers() {
  let myVisibility = document.getElementById("Flex-Shrink-Numbers");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Shrink-Numbers").innerHTML =
      "<div>A number specifying how much the item will shrink relative to the rest of the flexible items</div>" +
      "<div><code>1</code> is the default value where the item is shrinking relative to the rest of the flexible items</div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////////
// FLEX-BASIS PROPERTY //
//////////////////////////
function PropertyFlexBasis() {
  let myFlexBasis = document.getElementById("Input-Flex-Basis").value;
  document.getElementsByClassName("Added-Box-Model")[0].style.flexBasis = myFlexBasis;
}

// FLEX-BASIS: CSS GLOBAL VALUES; //
function FlexBasisGlobalValues() {
  let myVisibility = document.getElementById("Flex-Basis-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Basis-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-BASIS: CSS LENGTH VALUES; //
function FlexBasisLengthValues() {
  let myVisibility = document.getElementById("Flex-Basis-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Basis-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// FLEX-BASIS: AUTO; //
function FlexBasisAuto() {
  let myVisibility = document.getElementById("Flex-Basis-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Flex-Basis-Auto").innerHTML =
    "<div>[Default] The length is equal to the length of the flexible item</div>" +
    "<div>If the item has no length specified, the length will be according to its content</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////
// ORDER PROPERTY //
////////////////////
function PropertyOrder() {
  let myOrder = document.getElementById("Input-Order").value;
  document.getElementsByClassName("Added-Box-Model")[0].style.order = myOrder;
}

// ORDER: CSS GLOBAL VALUES; //
function OrderGlobalValues() {
  let myVisibility = document.getElementById("Order-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Order-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// ORDER: NUMBERS; //
function OrderNumbers() {
  let myVisibility = document.getElementById("Order-Numbers");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Order-Numbers").innerHTML =
      "<div>Specifies the order for the flexible item</div>" +
      "<div><code>0</code> is the default value where order of the item is remain unchanged</div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////////////
// GRID-TEMPLATE-ROWS PROPERTY //
/////////////////////////////////
function PropertyGridTemplateRows() {
  let myGridTemplateRows = document.getElementById("Input-Grid-Template-Rows").value;
  document.getElementById("Adding-Box-Model").style.gridTemplateRows = myGridTemplateRows;
}

// GRID-TEMPLATE-ROWS: CSS GLOBAL VALUES; //
function GridTemplateRowsGlobalValues() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: CSS LENGTH VALUES; //
function GridTemplateRowsLengthValues() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: NONE; //
function GridTemplateRowsNone() {
  let myVisibility = document.getElementById("Grid-Template-Rows-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-None").innerHTML =
      "<div>[Default] No size is set, rows are created if needed</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: AUTO; //
function GridTemplateRowsAuto() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Auto").innerHTML =
      "<div>The size of the rows is determined by the size of the container, and on the size of the content of the items in the row</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: MIN-CONTENT; //
function GridTemplateRowsMinContent() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Min-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Min-Content").innerHTML =
      "<div>Sets the size of each row to depend on the smallest item in the row</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: FIT-CONTENT; //
function GridTemplateRowsFitContent() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Fit-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Fit-Content").innerHTML =
      "<div>Sets the size of the rows in length or %, and works like the row will use the available space, but it will never expand the max-content size</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: MAX-CONTENT; //
function GridTemplateRowsMaxContent() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Max-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Max-Content").innerHTML =
      "<div>Sets the size of each row to depend on the largest item in the row</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: MINMAX(); //
function GridTemplateRowsMinmax() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Minmax");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Minmax").innerHTML =
      "<div>Defines a size-range greater than or equal to min and less than or equal to max</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: REPEAT(); //
function GridTemplateRowsRepeat() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Repeat");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Repeat").innerHTML =
      "<div>Represents a repeated fragment of the track list</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-ROWS: SUBGRID; //
function GridTemplateRowsSubgrid() {
  let myVisibility = document.getElementById("Grid-Template-Rows-Subgrid");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Rows-Subgrid").innerHTML =
      "<div>Indicates that the grid will adopt the spanned portion of its parent grid in that axis</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////////////////
// GRID-TEMPLATE-COLUMNS PROPERTY //
////////////////////////////////////
function PropertyGridTemplateColumns() {
  let myGridTemplateColumns = document.getElementById("Input-Grid-Template-Columns").value;
  document.getElementById("Adding-Box-Model").style.gridTemplateColumns = myGridTemplateColumns;
}

// GRID-TEMPLATE-COLUMNS: CSS GLOBAL VALUES; //
function GridTemplateColumnsGlobalValues() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: CSS LENGTH VALUES; //
function GridTemplateColumnsLengthValues() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: NONE; //
function GridTemplateColumnsNone() {
  let myVisibility = document.getElementById("Grid-Template-Columns-None");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-None").innerHTML =
      "<div>[Default] No size is set, columns are created if needed</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: AUTO; //
function GridTemplateColumnsAuto() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Auto").innerHTML =
      "<div>The size of the columns is determined by the size of the container and on the size of the content of the items in the column</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: MIN-CONTENT; //
function GridTemplateColumnsMinContent() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Min-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Min-Content").innerHTML =
      "<div>Sets the size of each column to depend on the smallest item in the column</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: FIT-CONTENT; //
function GridTemplateColumnsFitContent() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Fit-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Fit-Content").innerHTML =
      "<div>Sets the size of the columns in length or %, and works like the column will use the available space, but it will never expand the max-content size</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: MAX-CONTENT; //
function GridTemplateColumnsMaxContent() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Max-Content");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Max-Content").innerHTML =
      "<div>Sets the size of each column to depend on the largest item in the column</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: MINMAX(); //
function GridTemplateColumnsMinmax() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Minmax");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Minmax").innerHTML =
      "<div>Defines a size-range greater than or equal to min and less than or equal to max</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: REPEAT(); //
function GridTemplateColumnsRepeat() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Repeat");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Repeat").innerHTML =
      "<div>Represents a repeated fragment of the track list</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-TEMPLATE-COLUMNS: SUBGRID; //
function GridTemplateColumnsSubgrid() {
  let myVisibility = document.getElementById("Grid-Template-Columns-Subgrid");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Template-Columns-Subgrid").innerHTML =
      "<div>Indicates that the grid will adopt the spanned portion of its parent grid in that axis</div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////////
// GRID-ROW-START PROPERTY //
/////////////////////////////
function PropertyGridRowStart() {
  let myGridRowStart = document.getElementById("Input-Grid-Row-Start").value;
  document.getElementsByClassName("Added-Box-Model")[0].style.gridRowStart = myGridRowStart;
}

// GRID-ROW-START: CSS GLOBAL VALUES; //
function GridRowStartGlobalValues() {
  let myVisibility = document.getElementById("Grid-Row-Start-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Row-Start-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-ROW-START: AUTO; //
function GridRowStartAuto() {
  let myVisibility = document.getElementById("Grid-Row-Start-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Row-Start-Auto").innerHTML =
      "<div>[Default] The item will be placed by following the flow</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-ROW-START: SPAN; //
function GridRowStartSpan() {
  let myVisibility = document.getElementById("Grid-Row-Start-Span");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Row-Start-Span").innerHTML =
      "<div>Specifies the number of rows the item will span</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////////////
// GRID-COLUMN-START PROPERTY //
////////////////////////////////
function PropertyGridColumnStart() {
  let myGridColumnStart = document.getElementById("Input-Grid-Column-Start").value;
  document.getElementsByClassName("Added-Box-Model")[0].style.gridColumnStart = myGridColumnStart;
}

// GRID-COLUMN-START: CSS GLOBAL VALUES; //
function GridColumnStartGlobalValues() {
  let myVisibility = document.getElementById("Grid-Column-Start-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Column-Start-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-COLUMN-START: AUTO; //
function GridColumnStartAuto() {
  let myVisibility = document.getElementById("Grid-Column-Start-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Column-Start-Auto").innerHTML =
      "<div>[Default] The item will be placed by following the flow</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-COLUMN-START: SPAN; //
function GridColumnStartSpan() {
  let myVisibility = document.getElementById("Grid-Column-Start-Span");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Column-Start-Span").innerHTML =
      "<div>Specifies the number of columns the item will span</div>";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////////
// GRID-ROW-END PROPERTY //
///////////////////////////
function PropertyGridRowEnd() {
  let myGridRowEnd = document.getElementById("Input-Grid-Row-End").value;
  document.getElementsByClassName("Added-Box-Model")[0].style.gridRowEnd = myGridRowEnd;
}

// GRID-ROW-END: CSS GLOBAL VALUES; //
function GridRowEndGlobalValues() {
  let myVisibility = document.getElementById("Grid-Row-End-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Row-End-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-ROW-END: AUTO; //
function GridRowEndAuto() {
  let myVisibility = document.getElementById("Grid-Row-End-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Row-End-Auto").innerHTML =
      "<div>[Default] The item will be placed by following the flow</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-ROW-END: SPAN; //
function GridRowEndSpan() {
  let myVisibility = document.getElementById("Grid-Row-End-Span");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Row-End-Span").innerHTML =
      "<div>Specifies the number of rows the item will span</div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////////////
// GRID-COLUMN-END PROPERTY //
//////////////////////////////
function PropertyGridColumnEnd() {
  let myGridColumnEnd = document.getElementById("Input-Grid-Column-End").value;
  document.getElementsByClassName("Added-Box-Model")[0].style.gridColumnEnd = myGridColumnEnd;
}

// GRID-COLUMN-END: CSS GLOBAL VALUES; //
function GridColumnEndGlobalValues() {
  let myVisibility = document.getElementById("Grid-Column-End-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Column-End-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-COLUMN-END: AUTO; //
function GridColumnEndAuto() {
  let myVisibility = document.getElementById("Grid-Column-End-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Column-End-Auto").innerHTML =
      "<div>[Default] The item will be placed by following the flow</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GRID-COLUMN-END: SPAN; //
function GridColumnEndSpan() {
  let myVisibility = document.getElementById("Grid-Column-End-Span");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Grid-Column-End-Span").innerHTML =
      "<div>Specifies the number of columns the item will span</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// BOX-LAYOUT INSIGHTS //
function InsightsBoxLayout() {
  let myVisibility = document.getElementsByClassName("Display-Insights")[1];
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function AddBoxModel() {
  const myNewBox = document.createElement("div");
  myNewBox.className = "Added-Box-Model";
  const textnode = document.createTextNode("My Contents!");
  myNewBox.appendChild(textnode);
  document.getElementById("Adding-Box-Model").appendChild(myNewBox);
}