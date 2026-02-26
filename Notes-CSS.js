/////////////////////////////////////////////////////////////////////////////// SHORTHANDS ///////////////////////////////////////////////////////////////////////////////
const Shorthand = {
  Background: "background: background-color background-image background-position background-size background-repeat background-origin background-clip background-attachment;",
  Border    : "border: border-width border-style border-color;",
  Font      : "font: font-style font-variant font-weight font-stretch font-size/line-height font-family;"
};

/* document.getElementById("Shorthand-Background-Attachment").innerHTML = Shorthand.Background; */
document.getElementById("Shorthand-Background-Color").innerHTML         = Shorthand.Background;
document.getElementById("Shorthand-Background-Image").innerHTML         = Shorthand.Background;
/* document.getElementById("Shorthand-Background-Clip").innerHTML       = Shorthand.Background; */
/* document.getElementById("Shorthand-Background-Origin").innerHTML     = Shorthand.Background; */
/* document.getElementById("Shorthand-Background-Position").innerHTML   = Shorthand.Background; */
/* document.getElementById("Shorthand-Background-Repeat").innerHTML     = Shorthand.Background; */
/* document.getElementById("Shorthand-Background-Size").innerHTML       = Shorthand.Background; */

document.getElementById("Shorthand-Border-Color").innerHTML = Shorthand.Border;
document.getElementById("Shorthand-Border-Style").innerHTML = Shorthand.Border;
document.getElementById("Shorthand-Border-Width").innerHTML = Shorthand.Border;

/* document.getElementById("Shorthand-Line-Height").innerHTML  = Shorthand.Font; */
document.getElementById("Shorthand-Font-Family").innerHTML     = Shorthand.Font;
document.getElementById("Shorthand-Font-Size").innerHTML       = Shorthand.Font;
/* document.getElementById("Shorthand-Font-Stretch").innerHTML = Shorthand.Font; */
document.getElementById("Shorthand-Font-Style").innerHTML      = Shorthand.Font;
/* document.getElementById("Shorthand-Font-Variant").innerHTML = Shorthand.Font; */
/* document.getElementById("Shorthand-Font-Weight").innerHTML  = Shorthand.Font; */

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

//////////////////////////////////////////////////////////////////////////// BACKGROUND-COLOR ////////////////////////////////////////////////////////////////////////////
function BackgroundColorProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let BackgroundColorProperty = document.getElementById("Background-Color-Property");

  if (BackgroundColorProperty.style.display === "block") {
    BackgroundColorProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    BackgroundColorProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function BackgroundColorValue() {
  let myBackgroundColor = document.getElementById("Input-Background-Color").value;
  document.getElementsByClassName("Background-Color")[0].style.backgroundColor = myBackgroundColor;
}

//////////////////////////////////////////////////////////////////////////// BACKGROUND-IMAGE ////////////////////////////////////////////////////////////////////////////
function BackgroundImageProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let BackgroundImageProperty = document.getElementById("Background-Image-Property");

  if (BackgroundImageProperty.style.display === "block") {
    BackgroundImageProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    BackgroundImageProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function BackgroundImageValue() {
  let myBackgroundImage = document.getElementById("Input-Background-Image").value;
  document.getElementsByClassName("Background-Image")[0].style.backgroundImage = myBackgroundImage;
}

////////////////////////////////////////////////////////////////////////////// BORDER-COLOR //////////////////////////////////////////////////////////////////////////////
function BorderColorProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let BorderColorProperty = document.getElementById("Border-Color-Property");

  if (BorderColorProperty.style.display === "block") {
    BorderColorProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    BorderColorProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function BorderColorValue() {
  let myBorderColor = document.getElementById("Input-Border-Color").value;
  document.getElementsByClassName("Border-Color")[0].style.borderColor = myBorderColor;
}

////////////////////////////////////////////////////////////////////////////// BORDER-STYLE //////////////////////////////////////////////////////////////////////////////
function BorderStyleProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let BorderStyleProperty = document.getElementById("Border-Style-Property");

  if (BorderStyleProperty.style.display === "block") {
    BorderStyleProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    BorderStyleProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function BorderStyleValue() {
  let myBorderStyle = document.getElementById("Input-Border-Style").value;
  document.getElementsByClassName("Border-Style")[0].style.borderStyle = myBorderStyle;
}

////////////////////////////////////////////////////////////////////////////// BORDER-WIDTH //////////////////////////////////////////////////////////////////////////////
function BorderWidthProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let BorderWidthProperty = document.getElementById("Border-Width-Property");

  if (BorderWidthProperty.style.display === "block") {
    BorderWidthProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    BorderWidthProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function BorderWidthValue() {
  let myBorderWidth = document.getElementById("Input-Border-Width").value;
  document.getElementsByClassName("Border-Width")[0].style.borderWidth = myBorderWidth;
}

/////////////////////////////////////////////////////////////////////////////// BOX-SHADOW ///////////////////////////////////////////////////////////////////////////////
function BoxShadowProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let BoxShadowProperty = document.getElementById("Box-Shadow-Property");

  if (BoxShadowProperty.style.display === "block") {
    BoxShadowProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    BoxShadowProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function BoxShadowValue() {
  let myBoxShadow = document.getElementById("Input-Box-Shadow").value;
  document.getElementsByClassName("Box-Shadow")[0].style.boxShadow = myBoxShadow;
}

///////////////////////////////////////////////////////////////////////////////// COLOR //////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////// DISPLAY /////////////////////////////////////////////////////////////////////////////////
function DisplayProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let DisplayProperty = document.getElementById("Display-Property");

  if (DisplayProperty.style.display === "block") {
    DisplayProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    DisplayProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function DisplayValue() {
  let myDisplay = document.getElementById("Input-Display").value;
  document.getElementsByClassName("Display")[0].style.display = myDisplay;
}

////////////////////////////////////////////////////////////////////////////// FONT-FAMILY ///////////////////////////////////////////////////////////////////////////////
function FontFamilyProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let FontFamilyProperty = document.getElementById("Font-Family-Property");

  if (FontFamilyProperty.style.display === "block") {
    FontFamilyProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    FontFamilyProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function FontFamilyValue() {
  let myFontFamily = document.getElementById("Input-Font-Family").value;
  document.getElementsByClassName("Font-Family")[0].style.fontFamily = myFontFamily;
}

/////////////////////////////////////////////////////////////////////////////// FONT-SIZE ////////////////////////////////////////////////////////////////////////////////
function FontSizeProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let FontSizeProperty = document.getElementById("Font-Size-Property");

  if (FontSizeProperty.style.display === "block") {
    FontSizeProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    FontSizeProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function FontSizeValue() {
  let myFontSize = document.getElementById("Input-Font-Size").value;
  document.getElementsByClassName("Font-Size")[0].style.fontSize = myFontSize;
}

/////////////////////////////////////////////////////////////////////////////// FONT-STYLE ///////////////////////////////////////////////////////////////////////////////
function FontStyleProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let FontStyleProperty = document.getElementById("Font-Style-Property");

  if (FontStyleProperty.style.display === "block") {
    FontStyleProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    FontStyleProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function FontStyleValue() {
  let myFontStyle = document.getElementById("Input-Font-Style").value;
  document.getElementsByClassName("Font-Style")[0].style.fontStyle = myFontStyle;
}

///////////////////////////////////////////////////////////////////////////////// HEIGHT /////////////////////////////////////////////////////////////////////////////////
function HeightProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let HeightProperty = document.getElementById("Height-Property");

  if (HeightProperty.style.display === "block") {
    HeightProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    HeightProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function HeightValue() {
  let myHeight = document.getElementById("Input-Height").value;
  document.getElementsByClassName("Height")[0].style.height = myHeight;
}

///////////////////////////////////////////////////////////////////////////////// MARGIN /////////////////////////////////////////////////////////////////////////////////
function MarginProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let MarginProperty = document.getElementById("Margin-Property");

  if (MarginProperty.style.display === "block") {
    MarginProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    MarginProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function MarginValue() {
  let myMargin = document.getElementById("Input-Margin").value;
  document.getElementsByClassName("Margin")[0].style.margin = myMargin;
}

/////////////////////////////////////////////////////////////////////////////// MAX-HEIGHT ///////////////////////////////////////////////////////////////////////////////
function MaximumHeightProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let MaximumHeightProperty = document.getElementById("Maximum-Height-Property");

  if (MaximumHeightProperty.style.display === "block") {
    MaximumHeightProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    MaximumHeightProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function MaximumHeightValue() {
  let myMaximumHeight = document.getElementById("Input-Maximum-Height").value;
  document.getElementsByClassName("Maximum-Height")[0].style.maxHeight = myMaximumHeight;
}

/////////////////////////////////////////////////////////////////////////////// MAX-WIDTH ////////////////////////////////////////////////////////////////////////////////
function MaximumWidthProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let MaximumWidthProperty = document.getElementById("Maximum-Width-Property");

  if (MaximumWidthProperty.style.display === "block") {
    MaximumWidthProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    MaximumWidthProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function MaximumWidthValue() {
  let myMaximumWidth = document.getElementById("Input-Maximum-Width").value;
  document.getElementsByClassName("Maximum-Width")[0].style.maxWidth = myMaximumWidth;
}

/////////////////////////////////////////////////////////////////////////////// MIN-HEIGHT ///////////////////////////////////////////////////////////////////////////////
function MinimumHeightProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let MinimumHeightProperty = document.getElementById("Minimum-Height-Property");

  if (MinimumHeightProperty.style.display === "block") {
    MinimumHeightProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    MinimumHeightProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function MinimumHeightValue() {
  let myMinimumHeight = document.getElementById("Input-Minimum-Height").value;
  document.getElementsByClassName("Minimum-Height")[0].style.minHeight = myMinimumHeight;
}

/////////////////////////////////////////////////////////////////////////////// MIN-WIDTH ////////////////////////////////////////////////////////////////////////////////
function MinimumWidthProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let MinimumWidthProperty = document.getElementById("Minimum-Width-Property");

  if (MinimumWidthProperty.style.display === "block") {
    MinimumWidthProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    MinimumWidthProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function MinimumWidthValue() {
  let myMinimumWidth = document.getElementById("Input-Minimum-Width").value;
  document.getElementsByClassName("Minimum-Width")[0].style.minWidth = myMinimumWidth;
}

//////////////////////////////////////////////////////////////////////////////// PADDING /////////////////////////////////////////////////////////////////////////////////
function PaddingProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let PaddingProperty = document.getElementById("Padding-Property");

  if (PaddingProperty.style.display === "block") {
    PaddingProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    PaddingProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function PaddingValue() {
  let myPadding = document.getElementById("Input-Padding").value;
  document.getElementsByClassName("Padding")[0].style.padding = myPadding;
}

/////////////////////////////////////////////////////////////////////////////// TEXT-ALIGN ///////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////// TRANSFORM ////////////////////////////////////////////////////////////////////////////////
function TransformProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let TransformProperty = document.getElementById("Transform-Property");

  if (TransformProperty.style.display === "block") {
    TransformProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    TransformProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function TransformValue() {
  let myTransform = document.getElementById("Input-Transform").value;
  document.getElementsByClassName("Transform")[0].style.transform = myTransform;
}

///////////////////////////////////////////////////////////////////////////////// WIDTH //////////////////////////////////////////////////////////////////////////////////
function WidthProperty() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let WidthProperty = document.getElementById("Width-Property");

  if (WidthProperty.style.display === "block") {
    WidthProperty.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    WidthProperty.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

function WidthValue() {
  let myWidth = document.getElementById("Input-Width").value;
  document.getElementsByClassName("Width")[0].style.width = myWidth;
}





function CSSBoxModel() {
  let CSSProperties = document.getElementById("CSS-Properties");
  let CSSBoxModel = document.getElementById("CSS-Box-Model");

  if (CSSBoxModel.style.display === "block") {
    CSSBoxModel.style.display = "none";
    CSSProperties.style.display = "block";
  }
  else {
    CSSBoxModel.style.display = "block";
    CSSProperties.style.display = "none";
  }
}

///////////////////////////////////////////////////////////////////////////// CSS BOX MODEL //////////////////////////////////////////////////////////////////////////////
function PropertyWidth() {
  let myWidth = document.getElementById("Input-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.width = myWidth;
}

function PropertyMinWidth() {
  let myMinWidth = document.getElementById("Input-Min-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.minWidth = myMinWidth;
}

function PropertyMaxWidth() {
  let myMaxWidth = document.getElementById("Input-Max-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.maxWidth = myMaxWidth;
}

function PropertyPadding() {
  let myPadding = document.getElementById("Input-Padding").value;
  document.getElementsByClassName("Box-Model")[0].style.padding = myPadding;
}

function PropertyMargin() {
  let myMargin = document.getElementById("Input-Margin").value;
  document.getElementsByClassName("Box-Model")[0].style.margin = myMargin;
}

function PropertyBorderWidth() {
  let myBorderWidth = document.getElementById("Input-Border-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.borderWidth = myBorderWidth;
}

function PropertyBorderColor() {
  let myBorderColor = document.getElementById("Input-Border-Color").value;
  document.getElementsByClassName("Box-Model")[0].style.borderColor = myBorderColor;
}

function PropertyBorderRadius() {
  let myBorderRadius = document.getElementById("Input-Border-Radius").value;
  document.getElementsByClassName("Box-Model")[0].style.borderRadius = myBorderRadius;
}

function PropertyOutlineWidth() {
  let myOutlineWidth = document.getElementById("Input-Outline-Width").value;
  document.getElementsByClassName("Box-Model")[0].style.outlineWidth = myOutlineWidth;
}

function PropertyOutlineStyle() {
  let myOutlineStyle = document.getElementById("Input-Outline-Style").value;
  document.getElementsByClassName("Box-Model")[0].style.outlineStyle = myOutlineStyle;
}

function PropertyOutlineColor() {
  let myOutlineColor = document.getElementById("Input-Outline-Color").value;
  document.getElementsByClassName("Box-Model")[0].style.outlineColor = myOutlineColor;
}

function PropertyOutlineOffset() {
  let myOutlineOffset = document.getElementById("Input-Outline-Offset").value;
  document.getElementsByClassName("Box-Model")[0].style.outlineOffset = myOutlineOffset;
}

function PropertyBoxSizing() {
  let myBoxSizing = document.getElementById("Input-Box-Sizing").value;
  document.getElementsByClassName("Box-Model")[0].style.boxSizing = myBoxSizing;
}

function PropertyBoxShadow() {
  let myBoxShadow = document.getElementById("Input-Box-Shadow").value;
  document.getElementsByClassName("Box-Model")[0].style.boxShadow = myBoxShadow;
}

///////////////////
// CSS SELECTORS //
///////////////////
function CSSSelectors() {
  let myVisibility = document.getElementById("CSS-Selectors");
  if (myVisibility.style.display === "block") {
    myVisibility.style.display = "none";
  }
  else { myVisibility.style.display = "block"; }
}

// ELEMENT SELECTORS //
function ElementSelectors() {
    let myVisibility = document.getElementById("Element-Selectors");
    myVisibility.style.margin = "10px 0";
    if (myVisibility.style.display === "block") {myVisibility.style.display = "none"; }
    else {
      myVisibility.style.display = "block"; 
      document.getElementById("Element-Selectors").innerHTML =
        "<div>The element selector selects HTML elements based on the element name</div>" +
        "<div><code>body { <em>CSS Codes</em>; } <br> div { <em>CSS Codes</em>; } <br> p { <em>CSS Codes</em>; }</code></div>"; }
}

// ID SELECTORS //
function IdSelectors() {
  let myVisibility = document.getElementById("Id-Selectors");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "block") {
    myVisibility.style.display = "none";
    document.getElementById("Id-Selectors").innerHTML =
      "<div>The id selector uses the <code>id</code> attribute of an HTML element to select a specific element</div>" +
      "<div>The id of an element is unique within a page, so the id selector is used to select one unique element</div>" +
      "<div><code><em>#Container { CSS Codes; } <br> #Button-Link { CSS Codes; } <br> #myId { CSS Codes; }</em></code></div>";
  }
  else { myVisibility.style.display = "block"; }
}

// CLASS SELECTORS //
function ClassSelectors() {
  let myVisibility = document.getElementById("Class-Selectors");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "block") {
    myVisibility.style.display = "none";
    document.getElementById("Class-Selectors").innerHTML =
      "<div>The class selectors select HTML elements with a specific <code>class</code> attribute</div>" +
      "<div>Unlike id selectors, class selectors are used by multiple elements</div>" +
      "<div>HTML elements can also refer to more than one class</div>" +
      "<div><code><em>.image { CSS Codes; } <br> .Header-Top { CSS Codes; } <br> .myClass { CSS Codes; }</em></code></div>" +
      "<div>The class selectors also can select only one type of elements with multiple specific class</div>" +
      "<div><code><em>div.box { CSS Codes; } <br> span.myClass.StepA { CSS Codes; }</em></code></div>";
  }
  else { myVisibility.style.display = "block"; }
}

// UNIVERSAL SELECTOR //
function UniversalSelector() {
  let myVisibility = document.getElementById("Universal-Selector");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "block") {
    myVisibility.style.display = "none";
    document.getElementById("Universal-Selector").innerHTML =
      "<div>The universal selector selects all HTML elements on the page</div>" +
      "<div><code><em>* { CSS Codes; }</em></code></div>";
  }
  else { myVisibility.style.display = "block"; }
}

///////////////////////
// CSS GLOBAL VALUES //
///////////////////////
function CSSGlobalValues(){
  const global = {
    calculation:
      "<div id='Box-Calculation'><code>calc(<em>myComputation</em>)</code>" +
      "<div><code>calc()</code> = Performs a calculation to be used as the property value</div>" +
      "<div><code><em>myComputation</em></code> = Specifies a mathematical expression which the result of  will be used as the value</div>" +
      "</div>",

    inherit:
      "<div id='Box-Inherit'><code>inherit</code>" +
      "<div>The <code>inherit</code> keyword specifies that a property should inherit its value from its parent element</div>" +
      "</div>",

    initial:
      "<div id='Box-Initial'><code>initial</code>" +
      "<div>The <code>initial</code> keyword is used to set a CSS property to its default value</div>" +
      "</div>",

    unset:
      "<div id='Box-Unset'><code>unset</code>" +
      "<div>The <code>unset</code> keyword resets a property to its inherited value if the property naturally inherits from its parent, and to its initial value if not</div>" +
      "<div><code><em>myProperty</em>: inherit;</code> = The property behaves like the <code>inherit</code> keyword</div>" +
      "<div><code><em>myProperty: Non-Inherited Value</em>;</code> = The property behaves like the <code>initial</code> keyword</div>" +
      "</div>",

    variable:
      "<div id='Box-Variable'><code>var(<em>--Name, Value</em>)</code>" +
      "<div><code><em>Name</em></code> = <b>Required</b> parameter, specifies the variable name, must begin with two dashes (--), it is case sensitive</div>" +
      "<div><code><em>Value</em></code> = <b>Optional</b> parameter, specifies the fallback value, it is used if the variable is not found</div>" +
      "<div>Global Variable = <code>:root { --<em>myVariable: myValue</em>; } div { <em>myProperty</em>: var(--<em>myVariable</em>); }</code></div>" +
      "<div>Local Variable = <code>div { --<em>myVariable: myValue</em>; <em>myProperty</em>: var(--<em>myVariable</em>); }</code></div>" +
      "<div>Best practice to use CSS variables when it comes to the colors of the design</div>" +
      "<div>Local variables overrides global variables when there is same variable declared inside selector</div>" +
      "</div>"
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