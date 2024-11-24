///////////////////
// CSS SELECTORS //
///////////////////
function CSSSelectors() {
  let myVisibility = document.getElementById("CSS-Selectors");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// ELEMENT SELECTORS //
function ElementSelectors() {
    let myVisibility = document.getElementById("Element-Selectors");
    myVisibility.style.margin = "10px 0";
    if (myVisibility.style.display === "none") {
      myVisibility.style.display = "block";
      document.getElementById("Element-Selectors").innerHTML =
        "<div>The element selector selects HTML elements based on the element name</div>" +
        "<div><code>body { <em>CSS Codes</em>; } <br> div { <em>CSS Codes</em>; } <br> p { <em>CSS Codes</em>; }</code></div>";
    }
    else { myVisibility.style.display = "none"; }
}

// ID SELECTORS //
function IdSelectors() {
  let myVisibility = document.getElementById("Id-Selectors");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Id-Selectors").innerHTML =
      "<div>The id selector uses the <code>id</code> attribute of an HTML element to select a specific element</div>" +
      "<div>The id of an element is unique within a page, so the id selector is used to select one unique element</div>" +
      "<div><code><em>#Container { CSS Codes; } <br> #Button-Link { CSS Codes; } <br> #myId { CSS Codes; }</em></code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// CLASS SELECTORS //
function ClassSelectors() {
  let myVisibility = document.getElementById("Class-Selectors");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Class-Selectors").innerHTML =
      "<div>The class selectors select HTML elements with a specific <code>class</code> attribute</div>" +
      "<div>Unlike id selectors, class selectors are used by multiple elements</div>" +
      "<div>HTML elements can also refer to more than one class</div>" +
      "<div><code><em>.image { CSS Codes; } <br> .Header-Top { CSS Codes; } <br> .myClass { CSS Codes; }</em></code></div>" +
      "<div>The class selectors also can select only one type of elements with multiple specific class</div>" +
      "<div><code><em>div.box { CSS Codes; } <br> span.myClass.StepA { CSS Codes; }</em></code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// GROUP SELECTORS //
function GroupSelectors() {
  let myVisibility = document.getElementById("Group-Selectors");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Group-Selectors").innerHTML =
      "<div>The grouping selectors select all the HTML elements with the same style definitions</div>" +
      "<div>To group selectors, separate each selector with a comma to minimize the code</div>" +
      "<div><code>div, <em>#myId, .myClass { CSS Codes; }</em></code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// UNIVERSAL SELECTOR //
function UniversalSelector() {
  let myVisibility = document.getElementById("Universal-Selector");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Universal-Selector").innerHTML =
      "<div>The universal selector selects all HTML elements on the page</div>" +
      "<div><code><em>* { CSS Codes; }</em></code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// DESCENDANT COMBINATOR //
function DescendantCombinator() {
  let myVisibility = document.getElementById("Descendant-Combinator");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Descendant-Combinator").innerHTML =
      "<div>The descendant combinator matches all elements that are descendants of a specified element</div>" +
      "<div>As long as the matched elements are inside of a specified element, it is considered descendant combinator</div>" +
      "<div><code>div p { <em>CSS Codes;</em> } /* Selects all &lt;p&gt; inside &lt;div&gt; * /<br></div>" +
      "<div>section div span { <em>CSS Codes;</em> } /* Selects all &lt;span&gt; inside &lt;div&gt;, &lt;div&gt; inside &lt;section&gt; */</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// CHILD COMBINATOR //
function ChildCombinator() {
  let myVisibility = document.getElementById("Child-Combinator");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Child-Combinator").innerHTML =
      "<div>The child combinator selects all elements that are the children of a specified element</div>" +
      "<div>When there is another nested element of a specified element, that nested element is not considered child combinator, but it is descendant combinator</div>" +
      "<div><code>div > p { <em>CSS Codes;</em> } /* Selects all &lt;p&gt; child of &lt;div&gt; */ <br></div>" +
      "<div>section > ul > li { <em>CSS Codes;</em> } /* Selects all &lt;li&gt; child of &lt;ul&gt;, &lt;ul&gt; child of &lt;section&gt; */</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// NEXT SIBLING COMBINATOR //
function NextSiblingCombinator() {
  let myVisibility = document.getElementById("Next-Sibling-Combinator");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Next-Sibling-Combinator").innerHTML =
      "<div>The next sibling combinator is used to select an element that is directly after another specific element</div>" +
      "<div>Sibling elements must have the same parent element, and 'adjacent' means 'immediately following'</div>" +
      "<div>If there is another element in between them, it will not work</div>" +
      "<div><code>div + p { <em>CSS Codes;</em> } /* Select the first &lt;p&gt; right after &lt;div&gt; */ <br></div>" +
      "<div>nav + div + a { <em>CSS Codes;</em> } /* Select the first &lt;a&gt; right after &lt;div&gt;, &lt;div&gt; is right after &lt;nav&gt; */</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// SUBSEQUENT-SIBLING COMBINATOR //
function SubsequentSiblingCombinator() {
  let myVisibility = document.getElementById("Subsequent-Sibling-Combinator");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Subsequent-Sibling-Combinator").innerHTML =
      "<div>The subsequent-sibling combinator selects all elements that are next siblings of a specified element</div>" +
      "<div><code>div ~ p { <em>CSS Codes;</em> } /* Selects all &lt;p&gt; after &lt;div&gt; */ <br></div>" +
      "<div>div ~ p ~ span { <em>CSS Codes;</em> } /* Selects all &lt;span&gt; after &lt;p&gt;, &lt;p&gt; after &lt;div&gt; */</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ATTRIBUTE SELECTOR 1 //
function AttributeSelector1() {
  let myVisibility = document.getElementById("Attribute-Selector1");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Attribute-Selector1").innerHTML =
      "<div>The selector is used to select elements with a specified attribute</div>" +
      "<div><code>a[target] { <em>CSS Codes;</em> } /* Selects all &lt;a&gt; with a target attribute */</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ATTRIBUTE SELECTOR 2 //
function AttributeSelector2() {
  let myVisibility = document.getElementById("Attribute-Selector2");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Attribute-Selector2").innerHTML =
      "<div>The selector is used to select elements with a specified attribute and value</div>" +
      "<div><code>a[target = '_blank'] { <em>CSS Codes;</em> } /* Select all &lt;a&gt; with a target='_blank' attribute */</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ATTRIBUTE SELECTOR 3 //
function AttributeSelector3() {
  let myVisibility = document.getElementById("Attribute-Selector3");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Attribute-Selector3").innerHTML =
      "<div>The selector is used to select elements with the specified attribute</div>" +
      "<div>The value containing atleast a specified word</div>" +
      "<div>Example; <code>[class ~= 'test']</code> matches <code>[class = 'test'], [class = 'my test'], [class = 'test semester']</code></div>" +
      "<div>It does not work for <code>[class = 'my-test'], [class = 'test-sample'], [class = 'tests']</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ATTRIBUTE SELECTOR 4 //
function AttributeSelector4() {
  let myVisibility = document.getElementById("Attribute-Selector4");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Attribute-Selector4").innerHTML =
      "<div>The selector is used to select elements with the specified attribute</div>" +
      "<div>The value can be exactly the specified word, or the specified word followed by a hyphen (-)</div>" +
      "<div>Example; <code>[class |= 'test']</code> matches <code>[class = 'test'], [class = 'test-sample']</code></div>" +
      "<div>It does not work for <code>[class = 'my test'], [class = 'test semester'], [class = 'my-test'], [class = 'tests']</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ATTRIBUTE SELECTOR 5 //
function AttributeSelector5() {
  let myVisibility = document.getElementById("Attribute-Selector5");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Attribute-Selector5").innerHTML =
      "<div>The selector is used to select elements with the specified attribute, which the value starts with the specified value</div>" +
      "<div>The value does not have to be a whole word</div>" +
      "<div>Example; <code>[class ^= 'test']</code> matches <code>[class = 'test'], [class = 'test semester'], [class = 'test-sample'], [class = 'tests']</code></div>" +
      "<div>It does not work for <code>[class = 'my test'], [class = 'my-test']</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ATTRIBUTE SELECTOR 6 //
function AttributeSelector6() {
  let myVisibility = document.getElementById("Attribute-Selector6");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Attribute-Selector6").innerHTML =
      "<div>The selector is used to select elements whose attribute value ends with a specified value</div>" +
      "<div>The value does not have to be a whole word</div>" +
      "<div>Example; <code>[class $= 'test']</code> matches <code>[class = 'test'], [class = 'my-test'], [class = 'mytest']</code></div>" +
      "<div>It does not work for <code>[class = 'test semester'], [class = 'test-sample'], [class = 'tests']</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ATTRIBUTE SELECTOR 7 //
function AttributeSelector7() {
  let myVisibility = document.getElementById("Attribute-Selector7");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Attribute-Selector7").innerHTML =
      "<div>The selector is used to select elements whose attribute value contains a specified value</div>" +
      "<div>Example; <code>[class *= 'te']</code> matches <code>[class = 'test'], [class = 'cute']</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////
// CSS BOX MODEL //
///////////////////
function CSSBoxModel() {
  let myVisibility = document.getElementById("CSS-Box-Model");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////
// CSS BOX LAYOUT //
////////////////////
function CSSBoxLayout() {
  let myVisibility = document.getElementById("CSS-Box-Layout");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////////////
// CSS ANIMATION & TANSITION //
///////////////////////////////
function CSSAnimationTransition() {
  let myVisibility = document.getElementById("CSS-Animation-Transition");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////
// CSS TYPOGRAPHY //
////////////////////
function CSSTypography() {
  let myVisibility = document.getElementById("CSS-Typography");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
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

////////////////////////////
// ALIGN-CONTENT PROPERTY //
////////////////////////////
function PropertyAlignContent() {
  let myAlignContent = document.getElementById("Input-Align-Content").value;
  document.getElementById("Adding-Box-Model").style.alignContent = myAlignContent;
}

// ALIGN-CONTENT: CSS GLOBAL VALUES; //
function AlignContentGlobalValues() {
  let myVisibility = document.getElementById("Align-Content-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: STRETCH; //
function AlignContentStretch() {
  let myVisibility = document.getElementById("Align-Content-Stretch");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Stretch").innerHTML =
      "<div>[Default] Lines stretch to take up the remaining space</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: FLEX-START; //
function AlignContentFlexStart() {
  let myVisibility = document.getElementById("Align-Content-Flex-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Flex-Start").innerHTML =
      "<div>Lines are packed toward the start of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: FLEX-END; //
function AlignContentFlexEnd() {
  let myVisibility = document.getElementById("Align-Content-Flex-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Flex-End").innerHTML =
      "<div>Lines are packed toward the end of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: START; //
function AlignContentStart() {
  let myVisibility = document.getElementById("Align-Content-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Start").innerHTML =
      "<div>Lines are packed toward the start of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: END; //
function AlignContentEnd() {
  let myVisibility = document.getElementById("Align-Content-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-End").innerHTML =
      "<div>Lines are packed toward the end of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: LEFT; //
function AlignContentLeft() {
  let myVisibility = document.getElementById("Align-Content-Left");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Left").innerHTML =
      "<div>Lines are packed toward the left of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: RIGHT; //
function AlignContentRight() {
  let myVisibility = document.getElementById("Align-Content-Right");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Right").innerHTML =
      "<div>Lines are packed toward the right of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: CENTER; //
function AlignContentCenter() {
  let myVisibility = document.getElementById("Align-Content-Center");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Center").innerHTML =
      "<div>Lines are packed toward the center of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: NORMAL; //
function AlignContentNormal() {
  let myVisibility = document.getElementById("Align-Content-Normal");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Normal").innerHTML =
      "<div><code>normal</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: SAFE; //
function AlignContentSafe() {
  let myVisibility = document.getElementById("Align-Content-Safe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Safe").innerHTML =
      "<div><code>safe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: UNSAFE; //
function AlignContentUnsafe() {
  let myVisibility = document.getElementById("Align-Content-Unsafe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Unsafe").innerHTML =
      "<div><code>unsafe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: BASELINE; //
function AlignContentBaseline() {
  let myVisibility = document.getElementById("Align-Content-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Baseline").innerHTML =
      "<div>Lines are positioned at the baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: FIRST-BASELINE; //
function AlignContentFirstBaseline() {
  let myVisibility = document.getElementById("Align-Content-First-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-First-Baseline").innerHTML =
      "<div>Lines are positioned at the first baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: LAST-BASELINE; //
function AlignContentLastBaseline() {
  let myVisibility = document.getElementById("Align-Content-Last-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Last-Baseline").innerHTML =
      "<div>Lines are positioned at the last baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: SPACE-AROUND; //
function AlignContentSpaceAround() {
  let myVisibility = document.getElementById("Align-Content-Space-Around");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Space-Around").innerHTML =
      "<div>Lines are evenly distributed in the container, with half-size spaces on either end</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: SPACE-BETWEEN; //
function AlignContentSpaceBetween() {
  let myVisibility = document.getElementById("Align-Content-Space-Between");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Space-Between").innerHTML =
      "<div>Lines are evenly distributed in the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-CONTENT: SPACE-EVENLY; //
function AlignContentSpaceEvenly() {
  let myVisibility = document.getElementById("Align-Content-Space-Evenly");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Content-Space-Evenly").innerHTML =
      "<div>Lines are evenly distributed in the container, with equal space around them</div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////////////
// JUSTIFY-CONTENT PROPERTY //
//////////////////////////////
function PropertyJustifyContent() {
  let myJustifyContent = document.getElementById("Input-Justify-Content").value;
  document.getElementById("Adding-Box-Model").style.justifyContent = myJustifyContent;
}

// JUSTIFY-CONTENT: CSS GLOBAL VALUES; //
function JustifyContentGlobalValues() {
  let myVisibility = document.getElementById("Justify-Content-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: FLEX-START; //
function JustifyContentFlexStart() {
  let myVisibility = document.getElementById("Justify-Content-Flex-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Flex-Start").innerHTML =
      "<div>[Default] Items are positioned at the beginning of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: FLEX-END; //
function JustifyContentFlexEnd() {
  let myVisibility = document.getElementById("Justify-Content-Flex-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Flex-End").innerHTML =
      "<div>Items are positioned at the end of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: START; //
function JustifyContentStart() {
  let myVisibility = document.getElementById("Justify-Content-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Start").innerHTML =
      "<div>Items are positioned at the start inside the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: END; //
function JustifyContentEnd() {
  let myVisibility = document.getElementById("Justify-Content-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-End").innerHTML =
      "<div>Items are positioned at the end inside the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: LEFT; //
function JustifyContentLeft() {
  let myVisibility = document.getElementById("Justify-Content-Left");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Left").innerHTML =
      "<div>Items are positioned at the left inside the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: RIGHT; //
function JustifyContentRight() {
  let myVisibility = document.getElementById("Justify-Content-Right");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Right").innerHTML =
      "<div>Items are positioned at the right inside the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: CENTER; //
function JustifyContentCenter() {
  let myVisibility = document.getElementById("Justify-Content-Center");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Center").innerHTML =
      "<div>Items are positioned in the center of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: STRETCH; //
function JustifyContentStretch() {
  let myVisibility = document.getElementById("Justify-Content-Stretch");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Stretch").innerHTML =
      "<div><code>stretch</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: SAFE; //
function JustifyContentSafe() {
  let myVisibility = document.getElementById("Justify-Content-Safe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Safe").innerHTML =
      "<div><code>safe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: UNSAFE; //
function JustifyContentUnsafe() {
  let myVisibility = document.getElementById("Justify-Content-Unsafe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Unsafe").innerHTML =
      "<div><code>unsafe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: BASELINE; //
function JustifyContentBaseline() {
  let myVisibility = document.getElementById("Justify-Content-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Baseline").innerHTML =
      "<div>Items are positioned at the baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: FIRST-BASELINE; //
function JustifyContentFirstBaseline() {
  let myVisibility = document.getElementById("Justify-Content-First-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-First-Baseline").innerHTML =
      "<div>Items are positioned at the first baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: LAST-BASELINE; //
function JustifyContentLastBaseline() {
  let myVisibility = document.getElementById("Justify-Content-Last-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Last-Baseline").innerHTML =
      "<div>Items are positioned at the last baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: SPACE-AROUND; //
function JustifyContentSpaceAround() {
  let myVisibility = document.getElementById("Justify-Content-Space-Around");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Space-Around").innerHTML =
      "<div>Items will have space before, between, and after them</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: SPACE-BETWEEN; //
function JustifyContentSpaceBetween() {
  let myVisibility = document.getElementById("Justify-Content-Space-Between");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Space-Between").innerHTML =
      "<div>Items will have space between them</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-CONTENT: SPACE-EVENLY; //
function JustifyContentSpaceEvenly() {
  let myVisibility = document.getElementById("Justify-Content-Space-Evenly");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Content-Space-Evenly").innerHTML =
      "<div>Items will have equal space around them</div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////////
// ALIGN-ITEMS PROPERTY //
//////////////////////////
function PropertyAlignItems() {
  let myAlignItems = document.getElementById("Input-Align-Items").value;
  document.getElementById("Adding-Box-Model").style.alignItems = myAlignItems;
}

// ALIGN-ITEMS: CSS GLOBAL VALUES; //
function AlignItemsGlobalValues() {
  let myVisibility = document.getElementById("Align-Items-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: NORMAL; //
function AlignItemsNormal() {
  let myVisibility = document.getElementById("Align-Items-Normal");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Normal").innerHTML =
      "<div>[Default] Behaves like 'stretch' for flexbox and grid items, or 'start' for grid items with a defined block size</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: FLEX-START; //
function AlignItemsFlexStart() {
  let myVisibility = document.getElementById("Align-Items-Flex-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Flex-Start").innerHTML =
      "<div>Items are positioned at the beginning of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: FLEX-END; //
function AlignItemsFlexEnd() {
  let myVisibility = document.getElementById("Align-Items-Flex-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Flex-End").innerHTML =
      "<div>Items are positioned at the end of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: SELF-START; //
function AlignItemsSelfStart() {
  let myVisibility = document.getElementById("Align-Items-Self-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Self-Start").innerHTML =
      "<div><code>self-start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: SELF-END; //
function AlignItemsSelfEnd() {
  let myVisibility = document.getElementById("Align-Items-Self-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Self-End").innerHTML =
      "<div><code>self-end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: START; //
function AlignItemsStart() {
  let myVisibility = document.getElementById("Align-Items-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Start").innerHTML =
      "<div>Items are positioned at the beginning of their individual grid cells, in the block direction</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: END; //
function AlignItemsEnd() {
  let myVisibility = document.getElementById("Align-Items-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-End").innerHTML =
      "<div>Items are positioned at the end of the their individual grid cells, in the block direction</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: CENTER; //
function AlignItemsCenter() {
  let myVisibility = document.getElementById("Align-Items-Center");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Center").innerHTML =
      "<div>Items are positioned at the center of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: STRETCH; //
function AlignItemsStretch() {
  let myVisibility = document.getElementById("Align-Items-Stretch");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Stretch").innerHTML =
      "<div>Items are stretched to fit the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: SAFE; //
function AlignItemsSafe() {
  let myVisibility = document.getElementById("Align-Items-Safe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Safe").innerHTML =
      "<div><code>safe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: UNSAFE; //
function AlignItemsUnsafe() {
  let myVisibility = document.getElementById("Align-Items-Unsafe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Unsafe").innerHTML =
      "<div><code>unsafe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: BASELINE; //
function AlignItemsBaseline() {
  let myVisibility = document.getElementById("Align-Items-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Baseline").innerHTML =
      "<div>Items are positioned at the baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: FIRST-BASELINE; //
function AlignItemsFirstBaseline() {
  let myVisibility = document.getElementById("Align-Items-First-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-First-Baseline").innerHTML =
      "<div>Items are positioned at the first baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-ITEMS: LAST-BASELINE; //
function AlignItemsLastBaseline() {
  let myVisibility = document.getElementById("Align-Items-Last-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Items-Last-Baseline").innerHTML =
      "<div>Items are positioned at the last baseline of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////////
// JUSTIFY-ITEMS PROPERTY //
////////////////////////////
function PropertyJustifyItems() {
  let myJustifyItems = document.getElementById("Input-Justify-Items").value;
  document.getElementById("Adding-Box-Model").style.justifyItems = myJustifyItems;
}

// JUSTIFY-ITEMS: CSS GLOBAL VALUES; //
function JustifyItemsGlobalValues() {
  let myVisibility = document.getElementById("Justify-Items-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: LEGACY; //
function JustifyItemsLegacy() {
  let myVisibility = document.getElementById("Justify-Items-Legacy");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Legacy").innerHTML =
      "<div>[Default] Grid items with justify-self value 'auto' only inherits grid container justify-items property value if it starts with 'legacy'</div>" +
      "<div>It exists to implement the legacy alignment behavior of HTML's 〈center〉 element and align attribute</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: FLEX-START; //
function JustifyItemsFlexStart() {
  let myVisibility = document.getElementById("Justify-Items-Flex-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Flex-Start").innerHTML =
      "<div><code>flex-start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: FLEX-END; //
function JustifyItemsFlexEnd() {
  let myVisibility = document.getElementById("Justify-Items-Flex-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Flex-End").innerHTML =
      "<div><code>flex-end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: SELF-START; //
function JustifyItemsSelfStart() {
  let myVisibility = document.getElementById("Justify-Items-Self-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Self-Start").innerHTML =
      "<div><code>self-start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: SELF-END; //
function JustifyItemsSelfEnd() {
  let myVisibility = document.getElementById("Justify-Items-Self-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Self-End").innerHTML =
      "<div><code>self-end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: START; //
function JustifyItemsStart() {
  let myVisibility = document.getElementById("Justify-Items-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Start").innerHTML =
      "<div>Align items at the start in the inline direction</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: END; //
function JustifyItemsEnd() {
  let myVisibility = document.getElementById("Justify-Items-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-End").innerHTML =
      "<div>Align items at the end in the inline direction</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: LEFT; //
function JustifyItemsLeft() {
  let myVisibility = document.getElementById("Justify-Items-Left");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Left").innerHTML =
      "<div>Align items to the left</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: RIGHT; //
function JustifyItemsRight() {
  let myVisibility = document.getElementById("Justify-Items-Right");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Right").innerHTML =
      "<div>Align items to the right</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: CENTER; //
function JustifyItemsCenter() {
  let myVisibility = document.getElementById("Justify-Items-Center");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Center").innerHTML =
      "<div>Align items to the center</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: STRETCH; //
function JustifyItemsStretch() {
  let myVisibility = document.getElementById("Justify-Items-Stretch");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Stretch").innerHTML =
      "<div>Stretches to fill the grid cell if inline-size (width) is not set</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: AUTO; //
function JustifyItemsAuto() {
  let myVisibility = document.getElementById("Justify-Items-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Auto").innerHTML =
      "<div><code>auto</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: NORMAL; //
function JustifyItemsNormal() {
  let myVisibility = document.getElementById("Justify-Items-Normal");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Normal").innerHTML =
      "<div>Dependant on layout context, but similar to 'stretch' for grid layout</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: SAFE; //
function JustifyItemsSafe() {
  let myVisibility = document.getElementById("Justify-Items-Safe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Safe").innerHTML =
      "<div><code>safe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: UNSAFE; //
function JustifyItemsUnsafe() {
  let myVisibility = document.getElementById("Justify-Items-Unsafe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Unsafe").innerHTML =
      "<div><code>unsafe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: BASELINE; //
function JustifyItemsBaseline() {
  let myVisibility = document.getElementById("Justify-Items-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Baseline").innerHTML =
      "<div><code>baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: FIRST-BASELINE; //
function JustifyItemsFirstBaseline() {
  let myVisibility = document.getElementById("Justify-Items-First-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-First-Baseline").innerHTML =
      "<div><code>first-baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-ITEMS: LAST-BASELINE; //
function JustifyItemsLastBaseline() {
  let myVisibility = document.getElementById("Justify-Items-Last-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Items-Last-Baseline").innerHTML =
      "<div><code>last-baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////
// ALIGN-SELF PROPERTY //
/////////////////////////
function PropertyAlignSelf() {
  let myAlignSelf = document.getElementById("Input-Align-Self").value;
  document.getElementById("Adding-Box-Model").style.alignSelf = myAlignSelf;
}

// ALIGN-SELF: CSS GLOBAL VALUES; //
function AlignSelfGlobalValues() {
  let myVisibility = document.getElementById("Align-Self-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: AUTO; //
function AlignSelfAuto() {
  let myVisibility = document.getElementById("Align-Self-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Auto").innerHTML =
      "<div>[Default] The element inherits its parent container's align-items property, or 'stretch' if it has no parent container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: NORMAL; //
function AlignSelfNormal() {
  let myVisibility = document.getElementById("Align-Self-Normal");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Normal").innerHTML =
      "<div><code>normal</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: FLEX-START; //
function AlignSelfFlexStart() {
  let myVisibility = document.getElementById("Align-Self-Flex-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Flex-Start").innerHTML =
      "<div><code>flex-start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: FLEX-END; //
function AlignSelfFlexEnd() {
  let myVisibility = document.getElementById("Align-Self-Flex-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Flex-End").innerHTML =
      "<div><code>flex-end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: SELF-START; //
function AlignSelfSelfStart() {
  let myVisibility = document.getElementById("Align-Self-Self-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Self-Start").innerHTML =
      "<div><code>self-start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: SELF-END; //
function AlignSelfSelfEnd() {
  let myVisibility = document.getElementById("Align-Self-Self-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Self-End").innerHTML =
      "<div><code>self-end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: START; //
function AlignSelfStart() {
  let myVisibility = document.getElementById("Align-Self-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Start").innerHTML =
      "<div><code>start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: END; //
function AlignSelfEnd() {
  let myVisibility = document.getElementById("Align-Self-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-End").innerHTML =
      "<div><code>end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: CENTER; //
function AlignSelfCenter() {
  let myVisibility = document.getElementById("Align-Self-Center");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Center").innerHTML =
      "<div>The element is positioned at the center of the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: STRETCH; //
function AlignSelfStretch() {
  let myVisibility = document.getElementById("Align-Self-Stretch");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Stretch").innerHTML =
      "<div>The element is positioned to fit the container</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: SAFE; //
function AlignSelfSafe() {
  let myVisibility = document.getElementById("Align-Self-Safe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Safe").innerHTML =
      "<div><code>safe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: UNSAFE; //
function AlignSelfUnsafe() {
  let myVisibility = document.getElementById("Align-Self-Unsafe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Unsafe").innerHTML =
      "<div><code>unsafe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: BASELINE; //
function AlignSelfBaseline() {
  let myVisibility = document.getElementById("Align-Self-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Baseline").innerHTML =
      "<div><code>baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: FIRST-BASELINE; //
function AlignSelfFirstBaseline() {
  let myVisibility = document.getElementById("Align-Self-First-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-First-Baseline").innerHTML =
      "<div><code>first-baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// ALIGN-SELF: LAST-BASELINE; //
function AlignSelfLastBaseline() {
  let myVisibility = document.getElementById("Align-Self-Last-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Align-Self-Last-Baseline").innerHTML =
      "<div><code>last-baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////////////////
// JUSTIFY-SELF PROPERTY //
///////////////////////////
function PropertyJustifySelf() {
  let myJustifySelf = document.getElementById("Input-Justify-Self").value;
  document.getElementById("Adding-Box-Model").style.justifySelf = myJustifySelf;
}

// JUSTIFY-SELF: CSS GLOBAL VALUES; //
function JustifySelfGlobalValues() {
  let myVisibility = document.getElementById("Justify-Self-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: AUTO; //
function JustifySelfAuto() {
  let myVisibility = document.getElementById("Justify-Self-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Auto").innerHTML =
      "<div>[Default] Grid container justify-self property value is inherited</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: NORMAL; //
function JustifySelfNormal() {
  let myVisibility = document.getElementById("Justify-Self-Normal");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Normal").innerHTML =
      "<div>Dependant on layout context, but similar to 'stretch' for grid layout for grid items when size is not set</div>" +
      "<div>If size is set, the property value behaves lik 'start'</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: FLEX-START; //
function JustifySelfFlexStart() {
  let myVisibility = document.getElementById("Justify-Self-Flex-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Flex-Start").innerHTML =
      "<div><code>flex-start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: FLEX-END; //
function JustifySelfFlexEnd() {
  let myVisibility = document.getElementById("Justify-Self-Flex-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Flex-End").innerHTML =
      "<div><code>flex-end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: SELF-START; //
function JustifySelfSelfStart() {
  let myVisibility = document.getElementById("Justify-Self-Self-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Self-Start").innerHTML =
      "<div><code>self-start</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: SELF-END; //
function JustifySelfSelfEnd() {
  let myVisibility = document.getElementById("Justify-Self-Self-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Self-End").innerHTML =
      "<div><code>self-end</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: START; //
function JustifySelfStart() {
  let myVisibility = document.getElementById("Justify-Self-Start");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Start").innerHTML =
      "<div>Align items at the start in the inline direction</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: END; //
function JustifySelfEnd() {
  let myVisibility = document.getElementById("Justify-Self-End");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-End").innerHTML =
      "<div>Align items at the end in the inline direction</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: LEFT; //
function JustifySelfLeft() {
  let myVisibility = document.getElementById("Justify-Self-Left");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Left").innerHTML =
      "<div><code>left</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: RIGHT; //
function JustifySelfRight() {
  let myVisibility = document.getElementById("Justify-Self-Right");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Right").innerHTML =
      "<div><code>right</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: CENTER; //
function JustifySelfCenter() {
  let myVisibility = document.getElementById("Justify-Self-Center");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Center").innerHTML =
      "<div>Align items to the center</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: STRETCH; //
function JustifySelfStretch() {
  let myVisibility = document.getElementById("Justify-Self-Stretch");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Stretch").innerHTML =
      "<div>Stretches to fill the grid cell if inline-size (width) is not set</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: SAFE; //
function JustifySelfSafe() {
  let myVisibility = document.getElementById("Justify-Self-Safe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Safe").innerHTML =
      "<div><code>safe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: UNSAFE; //
function JustifySelfUnsafe() {
  let myVisibility = document.getElementById("Justify-Self-Unsafe");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Unsafe").innerHTML =
      "<div><code>unsafe</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: BASELINE; //
function JustifySelfBaseline() {
  let myVisibility = document.getElementById("Justify-Self-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Baseline").innerHTML =
      "<div><code>baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: FIRST-BASELINE; //
function JustifySelfFirstBaseline() {
  let myVisibility = document.getElementById("Justify-Self-First-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-First-Baseline").innerHTML =
      "<div><code>first-baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// JUSTIFY-SELF: LAST-BASELINE; //
function JustifySelfLastBaseline() {
  let myVisibility = document.getElementById("Justify-Self-Last-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Justify-Self-Last-Baseline").innerHTML =
      "<div><code>last-baseline</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////////
// VERTICAL-ALIGN PROPERTY //
/////////////////////////////
function PropertyVerticalAlign() {
  let myVerticalAlign = document.getElementById("Input-Vertical-Align").value;
  document.getElementById("Adding-Box-Model").style.verticalAlign = myVerticalAlign;
}

// VERTICAL-ALIGN: CSS GLOBAL VALUES; //
function VerticalAlignGlobalValues() {
  let myVisibility = document.getElementById("Vertical-Align-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: CSS LENGTH VALUES; //
function VerticalAlignLengthValues() {
  let myVisibility = document.getElementById("Vertical-Align-Length-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Length-Values").innerHTML = CSSLengthValues().absolute + CSSLengthValues().relative;
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: BASELINE; //
function VerticalAlignBaseline() {
  let myVisibility = document.getElementById("Vertical-Align-Baseline");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Baseline").innerHTML =
      "<div>[Default] The element is aligned with the baseline of the parent</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: AUTO; //
function VerticalAlignAuto() {
  let myVisibility = document.getElementById("Vertical-Align-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Auto").innerHTML =
      "<div><code>auto</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: TOP; //
function VerticalAlignTop() {
  let myVisibility = document.getElementById("Vertical-Align-Top");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Top").innerHTML =
      "<div>The element is aligned with the top of the tallest element on the line</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: MIDDLE; //
function VerticalAlignMiddle() {
  let myVisibility = document.getElementById("Vertical-Align-Middle");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Middle").innerHTML =
      "<div>The element is placed in the middle of the parent element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: BOTTOM; //
function VerticalAlignBottom() {
  let myVisibility = document.getElementById("Vertical-Align-Bottom");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Bottom").innerHTML =
      "<div>The element is aligned with the lowest element on the line</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: SUB; //
function VerticalAlignSub() {
  let myVisibility = document.getElementById("Vertical-Align-Sub");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Sub").innerHTML =
      "<div>The element is aligned with the subscript baseline of the parent</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: SUPER; //
function VerticalAlignSuper() {
  let myVisibility = document.getElementById("Vertical-Align-Super");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Super").innerHTML =
      "<div>The element is aligned with the superscript baseline of the parent</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: TEXT-TOP; //
function VerticalAlignTextTop() {
  let myVisibility = document.getElementById("Vertical-Align-Text-Top");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Text-Top").innerHTML =
      "<div>The element is aligned with the top of the parent element's font</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// VERTICAL-ALIGN: TEXT-BOTTOM; //
function VerticalAlignTextBottom() {
  let myVisibility = document.getElementById("Vertical-Align-Text-Bottom");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Vertical-Align-Text-Bottom").innerHTML =
      "<div>The element is aligned with the bottom of the parent element's font</div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////
// Z-INDEX PROPERTY //
//////////////////////
function PropertyZIndex() {
  let myZIndex = document.getElementById("Input-Z-Index").value;
  document.getElementById("Adding-Box-Model").style.zIndex = myZIndex;
}

// Z-INDEX: CSS GLOBAL VALUES; //
function ZIndexGlobalValues() {
  let myVisibility = document.getElementById("Z-Index-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Z-Index-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// Z-INDEX: NUMBERS; //
function ZIndexNumbers() {
  let myVisibility = document.getElementById("Z-Index-Numbers");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Z-Index-Numbers").innerHTML =
      "<div>Sets the stack order of the element, negative numbers are allowed</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// Z-INDEX: AUTO; //
function ZIndexAuto() {
  let myVisibility = document.getElementById("Z-Index-Auto");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Z-Index-Auto").innerHTML =
      "<div>[Default] Sets the stack order equal to its parents</div>";
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

////////////////////
// COLOR PROPERTY //
////////////////////
function PropertyColor() {
  let myColor = document.getElementById("Input-Color").value;
  document.getElementsByClassName("Box-Model")[2].style.color = myColor;
}

// COLOR: CSS GLOBAL VALUES; //
function ColorGlobalValues() {
  let myVisibility = document.getElementById("Color-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Color-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// COLOR: CSS COLOR VALUES; //
function ColorColorValues() {
  let myVisibility = document.getElementById("Color-Color-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Color-Color-Values").innerHTML =
      CSSColorValues().colorNames + CSSColorValues().colorFunctions;
  }
  else { myVisibility.style.display = "none"; }
}

// COLOR: CURRENTCOLOR; //
function ColorCurrentColor() {
  let myVisibility = document.getElementById("Color-Current-Color");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Color-Current-Color").innerHTML =
      "<div>[Default] The text color is based on the value of the <code>color</code> property of the element</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// COLOR: TRANSPARENT; //
function ColorTransparent() {
  let myVisibility = document.getElementById("Color-Transparent");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Color-Transparent").innerHTML =
      "<div><code>transparent</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////////////
// FONT-STYLE PROPERTY //
/////////////////////////
function PropertyFontStyle() {
  let myFontStyle = document.getElementById("Input-Font-Style").value;
  document.getElementsByClassName("Box-Model")[2].style.fontStyle = myFontStyle;
}

// FONT-STYLE: CSS GLOBAL VALUES; //
function FontStyleGlobalValues() {
  let myVisibility = document.getElementById("Font-Style-Global-Values");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Font-Style-Global-Values").innerHTML =
      CSSGlobalValues().calculation + CSSGlobalValues().inherit + CSSGlobalValues().initial + CSSGlobalValues().unset + CSSGlobalValues().variable;
  }
  else { myVisibility.style.display = "none"; }
}

// FONT-STYLE: NORMAL; //
function FontStyleNormal() {
  let myVisibility = document.getElementById("Font-Style-Normal");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Font-Style-Normal").innerHTML =
      "<div>[Default] The browser displays a normal font style</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FONT-STYLE: ITALIC; //
function FontStyleItalic() {
  let myVisibility = document.getElementById("Font-Style-Italic");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Font-Style-Italic").innerHTML =
      "<div>The browser displays an italic font style</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FONT-STYLE: OBLIQUE; //
function FontStyleOblique() {
  let myVisibility = document.getElementById("Font-Style-Oblique");
  myVisibility.style.margin = "10px 0";
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Font-Style-Oblique").innerHTML =
      "<div>The browser displays an oblique font style</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// TYPOGRAPHY INSIGHTS //
function InsightsTypography() {
  let myVisibility = document.getElementsByClassName("Display-Insights")[2];
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}