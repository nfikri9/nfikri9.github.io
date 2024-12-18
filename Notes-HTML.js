////////////////////////////
// HTML GLOBAL ATTRIBUTES //
////////////////////////////
function GlobalAttributes() {
  const myGlobalAttributes = {
    accesskey: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>accesskey</b>=\"<em>myAccessKey</em>\"&gt;</code></div> -->",

    class:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>class</b>=\"<em>myClass</em>\"&gt;</code>" +
      "<div>The <code>class</code> attribute specifies one or more class names for an element</div>" +
      "<div>Naming convention" +
      "<div>The class names must begin with a letter A-Z or a-z</div>" +
      "<div>The class names can be followed by: letters (A-Za-z), digits (0-9), hyphens ('-'), and underscores ('_')</div>" +
      "</div>" +
      "<div>Syntax of writing multiple classes for an element" +
      "<div>To specify multiple classes, separate the class names with a space</div>" +
      "<div>This allows users to combine several CSS classes for one HTML element</div>" +
      "<div>Example, <code>&lt;div class='<em>myClass1 myClass2 myClass3</em>'&gt;</code></div>" +
      "</div>" +
      "<div> Mostly used as node" +
      "<div>The <code>class</code> attribute is mostly used to point to a class in a style sheet</div>" +
      "<div>It can also be used by a JavaScript (via the HTML DOM) to make changes to HTML elements with a specified class</div>" +
      "</div> </div>",

    contenteditable: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>contenteditable</b>=\"<em>myContentEdible</em>\"&gt;</code></div> -->",
    data: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>data-*</b>=\"<em>myData</em>\"&gt;</code></div> -->",

    direction:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>dir</b>=\"<em>myDirection</em>\"&gt;</code>" +
      "<div>The <code>dir</code> attribute specifies the text direction of the element's content</div>" +
      "<div><code>ltr</code> &rarr; [Default] Specifies left-to-right text direction</div>" +
      "<div><code>rtl</code> &rarr; Specifies right-to-left text direction</div>" +
      "<div><code>auto</code> &rarr; Let the browser figure out the text direction, based on the content (Only recommended if the text direction is unknown)</div>" +
      "</div>",

    draggable: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>draggable</b>=\"<em>myDraggable</em>\"&gt;</code></div> -->",
    enterkeyhint: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>enterkeyhint</b>=\"<em>myEnterKeyHint</em>\"&gt;</code></div> -->",
    hidden: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>hidden</b>=\"<em>myHidden</em>\"&gt;</code></div> -->",

    identifier:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>id</b>=\"<em>myId</em>\"&gt;</code>" +
      "<div>The <code>id</code> attribute specifies a unique id for an HTML element</div>" +
      "<div>Naming convention" +
      "<div>The id name must contain at least one character</div>" +
      "<div>The id name must not contain any space characters</div>" +
      "</div>" +
      "<div>Unique Id" +
      "<div>The value must be unique within the HTML document, which only one specific id can exist in the document</div>" +
      "</div>" +
      "<div>Mostly used as node" +
      "<div>The <code>id</code> attribute is mostly used to point to a style in a style sheet</div>" +
      "<div>It can also be used by a JavaScript (via the HTML DOM) to manipulate the element with the specific id</div>" +
      "</div> </div>",

    inert: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>inert</b>=\"<em>myInert</em>\"&gt;</code></div> -->",
    inputmode: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>inputmode</b>=\"<em>myInputMode</em>\"&gt;</code></div> -->",

    language:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>lang</b>=\"<em><a href=\"https://www.w3schools.com/tags/ref_language_codes.asp\" target=\"_blank\">HTML Language Codes</a></em>\"&gt;</code>" +
      "<div>The <code>lang</code> attribute specifies the language of the element's content</div>" +
      "<div>Common examples are <code>'en'</code> for English, <code>'fr'</code> for French, and so on</div>" +
      "</div>",

    popover: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>popover</b>=\"<em>myPopOver</em>\"&gt;</code></div> -->",
    spellcheck: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>spellcheck</b>=\"<em>mySpellCheck</em>\"&gt;</code></div> -->",

    style:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>style</b>=\"<em><a href=\"Notes-CSS.html\" target=\"_blank\">CSS Properties</a></em>\"&gt;</code>" +
      "<div>The <code>style</code> attribute specifies an inline style for an element</div>" +
      "<div>Syntax of writing multiple properties and values" +
      "<div>One or more CSS properties and values separated by semicolons</div>" +
      "<div>Example, <code>&lt;div style='color:blue; text-align:center;'&gt;</code></div>" +
      "</div>" +
      "<div>Overrides any style set globally" +
      "<div>The <code>style</code> attribute will override any style set globally, like styles specified in the <code>&lt;style&gt;</code> tag or in an external style sheet</div>" +
      "<div>The <code>style</code> attribute can be used on any HTML element</div>" +
      "<div>It will validate on any HTML element, however, it is not necessarily useful</div>" +
      "</div> </div>",

    tabindex: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>tabindex</b>=\"<em>myTabIndex</em>\"&gt;</code></div> -->",

    title:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>title</b>=\"<em>myTitle</em>\"&gt;</code>" +
      "<div>The <code>title</code> attribute specifies extra information about an element</div>" +
      "<div>The information is most often shown as a tooltip text when the mouse moves over the element</div>" +
      "</div>",

    translate: "<!-- <div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>translate</b>=\"<em>myTranslate</em>\"&gt;</code></div> -->"
  };
  return myGlobalAttributes;
}

///////////////////////////
// HTML EVENT ATTRIBUTES //
///////////////////////////
function EventAttributes() {
  const myEventAttributes = {
    windows:
      "<div class=\"Box-Attributes\"><code><em>Windows Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onafterprint</b>=\"<em>MyFunction</em>()\"&gt;</code>   = Script to be run after the document is printed</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onbeforeprint</b>=\"<em>MyFunction</em>()\"&gt;</code>  = Script to be run before the document is printed</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onbeforeunload</b>=\"<em>MyFunction</em>()\"&gt;</code> = Script to be run when the document is about to be unloaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onerror</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Script to be run when an error occurs</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onhashchange</b>=\"<em>MyFunction</em>()\"&gt;</code>   = Script to be run when there has been changes to the anchor part of the a URL</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onload</b>=\"<em>MyFunction</em>()\"&gt;</code>         = Fires after the page is finished loading</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmessage</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Script to be run when the message is triggered</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onoffline</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Script to be run when the browser starts to work offline</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ononline</b>=\"<em>MyFunction</em>()\"&gt;</code>       = Script to be run when the browser starts to work online</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpagehide</b>=\"<em>MyFunction</em>()\"&gt;</code>     = Script to be run when a user navigates away from a page</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpageshow</b>=\"<em>MyFunction</em>()\"&gt;</code>     = Script to be run when a user navigates to a page</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpopstate</b>=\"<em>MyFunction</em>()\"&gt;</code>     = Script to be run when the window's history changes</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onresize</b>=\"<em>MyFunction</em>()\"&gt;</code>       = Fires when the browser window is resized</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onstorage</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Script to be run when a Web Storage area is updated</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onunload</b>=\"<em>MyFunction</em>()\"&gt;</code>       = Fires once a page has unloaded (or the browser window has been closed)</div>" +
      "</div>",
    
    form:
      "<div class=\"Box-Attributes\"><code><em>Form Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onblur</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Fires the moment that the element loses focus</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onchange</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Fires the moment when the value of the element is changed</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncontextmenu</b>=\"<em>MyFunction</em>()\"&gt;</code> = Script to be run when a context menu is triggered</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onfocus</b>=\"<em>MyFunction</em>()\"&gt;</code>       = Fires the moment when the element gets focus</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oninput</b>=\"<em>MyFunction</em>()\"&gt;</code>       = Script to be run when an element gets user input</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oninvalid</b>=\"<em>MyFunction</em>()\"&gt;</code>     = Script to be run when an element is invalid</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onreset</b>=\"<em>MyFunction</em>()\"&gt;</code>       = Fires when the Reset button in a form is clicked</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onsearch</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Fires when the user writes something in a search field</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onselect</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Fires after some text has been selected in an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onsubmit</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Fires when a form is submitted</div>" +
      "</div>",

    keyboard:
      "<div class=\"Box-Attributes\"><code><em>Keyboard Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onkeydown</b>=\"<em>MyFunction</em>()\"&gt;</code>  = Fires when a user is pressing a key</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onkeypress</b>=\"<em>MyFunction</em>()\"&gt;</code> = Fires when a user presses a key</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onkeyup</b>=\"<em>MyFunction</em>()\"&gt;</code>    = Fires when a user releases a key</div>" +
      "</div>",

    mouse:
      "<div class=\"Box-Attributes\"><code><em>Mouse Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onclick</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Fires on a mouse click on the element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondblclick</b>=\"<em>MyFunction</em>()\"&gt;</code>   = Fires on a mouse double-click on the element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmousedown</b>=\"<em>MyFunction</em>()\"&gt;</code>  = Fires when a mouse button is pressed down on an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmousemove</b>=\"<em>MyFunction</em>()\"&gt;</code>  = Fires when the mouse pointer is moving while it is over an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmouseout</b>=\"<em>MyFunction</em>()\"&gt;</code>   = Fires when the mouse pointer moves out of an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmouseover</b>=\"<em>MyFunction</em>()\"&gt;</code>  = Fires when the mouse pointer moves over an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmouseup</b>=\"<em>MyFunction</em>()\"&gt;</code>    = Fires when a mouse button is released over an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmousewheel</b>=\"<em>MyFunction</em>()\"&gt;</code> = Deprecated. Use the onwheel attribute instead</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onwheel</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Fires when the mouse wheel rolls up or down over an element</div>" +
      "</div>",

    drag:
      "<div class=\"Box-Attributes\"><code><em>Drag Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondrag</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Script to be run when an element is dragged</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragend</b>=\"<em>MyFunction</em>()\"&gt;</code>   = Script to be run at the end of a drag operation</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragenter</b>=\"<em>MyFunction</em>()\"&gt;</code> = Script to be run when an element has been dragged to a valid drop target</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragleave</b>=\"<em>MyFunction</em>()\"&gt;</code> = Script to be run when an element leaves a valid drop target</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragover</b>=\"<em>MyFunction</em>()\"&gt;</code>  = Script to be run when an element is being dragged over a valid drop target</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragstart</b>=\"<em>MyFunction</em>()\"&gt;</code> = Script to be run at the start of a drag operation</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondrop</b>=\"<em>MyFunction</em>()\"&gt;</code>	     = Script to be run when dragged element is being dropped</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onscroll</b>=\"<em>MyFunction</em>()\"&gt;</code>	   = Script to be run when an element's scrollbar is being scrolled</div>" +
      "</div>",

    clipboard:
      "<div class=\"Box-Attributes\"><code><em>Clipboard Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncopy</b>=\"<em>MyFunction</em>()\"&gt;</code>  = Fires when the user copies the content of an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncut</b>=\"<em>MyFunction</em>()\"&gt;</code>   = Fires when the user cuts the content of an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpaste</b>=\"<em>MyFunction</em>()\"&gt;</code> = Fires when the user pastes some content in an element</div>" +
      "</div>",

    media:
      "<div class=\"Box-Attributes\"><code><em>Media Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onabort</b>=\"<em>MyFunction</em>()\"&gt;</code>          = Script to be run on abort</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncanplay</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Script to be run when a file is ready to start playing (when it has buffered enough to begin)</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncanplaythrough</b>=\"<em>MyFunction</em>()\"&gt;</code> = Script to be run when a file can be played all the way to the end without pausing for buffering</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncuechange</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Script to be run when the cue changes in a <code>&lt;track&gt;</code> element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondurationchange</b>=\"<em>MyFunction</em>()\"&gt;</code> = Script to be run when the length of the media changes</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onemptied</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onended</b>=\"<em>MyFunction</em>()\"&gt;</code>          = Script to be run when the media has reach the end (a useful event for messages like 'thanks for listening')</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onerror</b>=\"<em>MyFunction</em>()\"&gt;</code>          = Script to be run when an error occurs when the file is being loaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onloadeddata</b>=\"<em>MyFunction</em>()\"&gt;</code>     = Script to be run when media data is loaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onloadedmetadata</b>=\"<em>MyFunction</em>()\"&gt;</code> = Script to be run when meta data (like dimensions and duration) are loaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onloadstart</b>=\"<em>MyFunction</em>()\"&gt;</code>      = Script to be run just as the file begins to load before anything is actually loaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpause</b>=\"<em>MyFunction</em>()\"&gt;</code>          = Script to be run when the media is paused either by the user or programmatically</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onplay</b>=\"<em>MyFunction</em>()\"&gt;</code>           = Script to be run when the media is ready to start playing</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onplaying</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Script to be run when the media actually has started playing</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onprogress</b>=\"<em>MyFunction</em>()\"&gt;</code>       = Script to be run when the browser is in the process of getting the media data</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onratechange</b>=\"<em>MyFunction</em>()\"&gt;</code>     = Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode)</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onseeked</b>=\"<em>MyFunction</em>()\"&gt;</code>         = Script to be run when the seeking attribute is set to false indicating that seeking has ended</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onseeking</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Script to be run when the seeking attribute is set to true indicating that seeking is active</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onstalled</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Script to be run when the browser is unable to fetch the media data for whatever reason</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onsuspend</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ontimeupdate</b>=\"<em>MyFunction</em>()\"&gt;</code>     = Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media)</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onvolumechange</b>=\"<em>MyFunction</em>()\"&gt;</code>   = Script to be run each time the volume is changed which (includes setting the volume to 'mute')</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onwaiting</b>=\"<em>MyFunction</em>()\"&gt;</code>        = Script to be run when the media has paused but is expected to resume (like when the media pauses to buffer more data)</div>" +
      "</div>",

    misc:
      "<div class=\"Box-Attributes\"><code><em>Miscellaneous Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>ontoggle</b>=\"<em>MyFunction</em>()\"&gt;</code> = Fires when the user opens or closes the <code>&lt;details&gt;</code> element</div>" +
      "</div>"
  };
  return myEventAttributes;
}

///////////////////////////////
// HTML HYPERLINK ATTRIBUTES //
//////////////////////////////
function HyperlinkAttributes() {
  let AbsoluteURL =
    "<div>Points to another web site</div>" +
    "<div>Example &rarr; <code>http://www.example.com</code></div>";

  let RelativeURL =
    "<div>Points to a page within a web site</div>" +
    "<div>Example &rarr; <code>example.html</code></div>";
  
  const myHyperlink = {
    cite:
      "<div class=\"Box-Attributes\">" +
      "<div class=\"Box-Values\"><code>cite=\"<em><b>Absolute URL</b></em>\"</code>" + AbsoluteURL + "</div>" +
      "<div class=\"Box-Values\"><code>cite=\"<em><b>Relative URL</b></em>\"</code>" + RelativeURL + "</div>" +
      "<div>Applied Tag(s): <code>&lt;q&gt;, &lt;blockq&gt;, &lt;ins&gt;, &lt;del&gt;</code></div>" +
      "</div>"
  };
  return myHyperlink;
}

//////////////////////////
// HTML TIME ATTRIBUTES //
//////////////////////////
function TimeAttributes() {
  const myTime = {
    datetime:
      "<div class=\"Box-Attributes\"><code>datetime=\"<em><b>YYYY-MM-DDThh:mm:ssTZD</b></em>\"</code>" +
      "<div>Applied Tag(s): <code>&lt;ins&gt;, &lt;del&gt;</code></div>" +
      "</div>"
  };
  return myTime;
}

///////////////////////
// HTML INTRODUCTION //
///////////////////////
function HTMLIntroduction() {
  let myVisibility = document.getElementById("HTML-Introduction");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////
// HTML PAGE //
///////////////
function HTMLPageStructure() {
  let myVisibility = document.getElementById("HTML-Page");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// HTML DECLARATION //
function HTMLDeclaration() {
  let myVisibility = document.getElementById("HTML-Declaration");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// HTML TAG //
function HTMLTag() {
  let myVisibility = document.getElementById("HTML-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function HTMLGlobalAttributes() {
  let myVisibility = document.getElementById("HTML-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("HTML-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////////////
// HTML SEMANTIC CONTAINER //
/////////////////////////////
function HTMLSemanticContainer() {
  let myVisibility = document.getElementById("HTML-Semantic-Container");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////////////
// HTML SEMANTIC TEXT //
////////////////////////
function HTMLSemanticText() {
  let myVisibility = document.getElementById("HTML-Semantic-Text");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// COMMENT TAG //
function CommentTag() {
  let myVisibility = document.getElementById("Comment-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// HEADING TAG //
function HeadingTag() {
  let myVisibility = document.getElementById("Heading-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function HeadingGlobalAttributes() {
  let myVisibility = document.getElementById("Heading-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Heading-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function HeadingEventAttributes() {
  let myVisibility = document.getElementById("Heading-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Heading-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// PARAGRAPH TAG //
function ParagraphTag() {
  let myVisibility = document.getElementById("Paragraph-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ParagraphGlobalAttributes() {
  let myVisibility = document.getElementById("Paragraph-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Paragraph-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ParagraphEventAttributes() {
  let myVisibility = document.getElementById("Paragraph-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Paragraph-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// ANCHOR TAG //
function AnchorTag() {
  let myVisibility = document.getElementById("Anchor-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorGlobalAttributes() {
  let myVisibility = document.getElementById("Anchor-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorEventAttributes() {
  let myVisibility = document.getElementById("Anchor-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// ADDRESS TAG //
function AddressTag() {
  let myVisibility = document.getElementById("Address-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// ABBREVIATION TAG //
function AbbreviationTag() {
  let myVisibility = document.getElementById("Abbreviation-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DEFINITION TAG //
function DefinitionTag() {
  let myVisibility = document.getElementById("Definition-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// CITE TAG //
function CiteTag() {
  let myVisibility = document.getElementById("Cite-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// QUOTE TAG //
function QuoteTag() {
  let myVisibility = document.getElementById("Quote-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function QuoteGlobalAttributes() {
  let myVisibility = document.getElementById("Quote-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Quote-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function QuoteEventAttributes() {
  let myVisibility = document.getElementById("Quote-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Quote-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function QuoteCiteAttributes() {
  let myVisibility = document.getElementById("Quote-Cite-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Quote-Cite-Attributes").innerHTML = HyperlinkAttributes().cite;
  }
  else { myVisibility.style.display = "none"; }
}

// BLOCKQUOTE TAG //
function BlockquoteTag() {
  let myVisibility = document.getElementById("Blockquote-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function BlockquoteGlobalAttributes() {
  let myVisibility = document.getElementById("Blockquote-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Blockquote-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function BlockquoteEventAttributes() {
  let myVisibility = document.getElementById("Blockquote-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Blockquote-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function BlockquoteCiteAttributes() {
  let myVisibility = document.getElementById("Blockquote-Cite-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Blockquote-Cite-Attributes").innerHTML = HyperlinkAttributes().cite;
  }
  else { myVisibility.style.display = "none"; }
}

// STRONG TAG //
function StrongTag() {
  let myVisibility = document.getElementById("Strong-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function StrongGlobalAttributes() {
  let myVisibility = document.getElementById("Strong-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Strong-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function StrongEventAttributes() {
  let myVisibility = document.getElementById("Strong-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Strong-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// EMPHASIZE TAG //
function EmphasizeTag() {
  let myVisibility = document.getElementById("Emphasize-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function EmphasizeGlobalAttributes() {
  let myVisibility = document.getElementById("Emphasize-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Emphasize-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function EmphasizeEventAttributes() {
  let myVisibility = document.getElementById("Emphasize-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Emphasize-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// INSERT TAG //
function InsertTag() {
  let myVisibility = document.getElementById("Insert-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function InsertGlobalAttributes() {
  let myVisibility = document.getElementById("Insert-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Insert-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function InsertEventAttributes() {
  let myVisibility = document.getElementById("Insert-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Insert-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function InsertCiteAttributes() {
  let myVisibility = document.getElementById("Insert-Cite-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Insert-Cite-Attributes").innerHTML = HyperlinkAttributes().cite;
  }
  else { myVisibility.style.display = "none"; }
}

function InsertDatetimeAttributes() {
  let myVisibility = document.getElementById("Insert-Datetime-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Insert-Datetime-Attributes").innerHTML = TimeAttributes().datetime;
  }
  else { myVisibility.style.display = "none"; }
}

// DELETE TAG //
function DeleteTag() {
  let myVisibility = document.getElementById("Delete-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function DeleteGlobalAttributes() {
  let myVisibility = document.getElementById("Delete-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Delete-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DeleteEventAttributes() {
  let myVisibility = document.getElementById("Delete-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Delete-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function DeleteCiteAttributes() {
  let myVisibility = document.getElementById("Delete-Cite-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Delete-Cite-Attributes").innerHTML = HyperlinkAttributes().cite;
  }
  else { myVisibility.style.display = "none"; }
}

function DeleteDatetimeAttributes() {
  let myVisibility = document.getElementById("Delete-Datetime-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Delete-Datetime-Attributes").innerHTML = TimeAttributes().datetime;
  }
  else { myVisibility.style.display = "none"; }
}

// BOLD TAG //
function BoldTag() {
  let myVisibility = document.getElementById("Bold-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function BoldGlobalAttributes() {
  let myVisibility = document.getElementById("Bold-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Bold-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function BoldEventAttributes() {
  let myVisibility = document.getElementById("Bold-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Bold-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// ITALIC TAG //
function ItalicTag() {
  let myVisibility = document.getElementById("Italic-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ItalicGlobalAttributes() {
  let myVisibility = document.getElementById("Italic-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Italic-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ItalicEventAttributes() {
  let myVisibility = document.getElementById("Italic-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Italic-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// UNARTICULATE TAG //
function UnarticulateTag() {
  let myVisibility = document.getElementById("Unarticulate-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function UnarticulateGlobalAttributes() {
  let myVisibility = document.getElementById("Unarticulate-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Unarticulate-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function UnarticulateEventAttributes() {
  let myVisibility = document.getElementById("Unarticulate-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Unarticulate-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// STRIKE TAG //
function StrikeTag() {
  let myVisibility = document.getElementById("Strike-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function StrikeGlobalAttributes() {
  let myVisibility = document.getElementById("Strike-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Strike-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function StrikeEventAttributes() {
  let myVisibility = document.getElementById("Strike-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Strike-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// MARK TAG //
function MarkTag() {
  let myVisibility = document.getElementById("Mark-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function MarkGlobalAttributes() {
  let myVisibility = document.getElementById("Mark-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Mark-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function MarkEventAttributes() {
  let myVisibility = document.getElementById("Mark-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Mark-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SMALL TAG //
function SmallTag() {
  let myVisibility = document.getElementById("Small-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SmallGlobalAttributes() {
  let myVisibility = document.getElementById("Small-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Small-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SmallEventAttributes() {
  let myVisibility = document.getElementById("Small-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Small-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SUPERSCRIPT TAG //
function SuperscriptTag() {
  let myVisibility = document.getElementById("Superscript-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SuperscriptGlobalAttributes() {
  let myVisibility = document.getElementById("Superscript-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Superscript-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SuperscriptEventAttributes() {
  let myVisibility = document.getElementById("Superscript-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Superscript-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SUBSCRIPT TAG //
function SubscriptTag() {
  let myVisibility = document.getElementById("Subscript-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SubscriptGlobalAttributes() {
  let myVisibility = document.getElementById("Subscript-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Subscript-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SubscriptEventAttributes() {
  let myVisibility = document.getElementById("Subscript-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Subscript-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// CODE TAG //
function CodeTag() {
  let myVisibility = document.getElementById("Code-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function CodeGlobalAttributes() {
  let myVisibility = document.getElementById("Code-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Code-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function CodeEventAttributes() {
  let myVisibility = document.getElementById("Code-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Code-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// KEYBOARD TAG //
function KeyboardTag() {
  let myVisibility = document.getElementById("Keyboard-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function KeyboardGlobalAttributes() {
  let myVisibility = document.getElementById("Keyboard-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Keyboard-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function KeyboardEventAttributes() {
  let myVisibility = document.getElementById("Keyboard-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Keyboard-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// PREFORMAT TAG //
function PreformatTag() {
  let myVisibility = document.getElementById("Preformat-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function PreformatGlobalAttributes() {
  let myVisibility = document.getElementById("Preformat-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Preformat-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function PreformatEventAttributes() {
  let myVisibility = document.getElementById("Preformat-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Preformat-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SAMPLE TAG //
function SampleTag() {
  let myVisibility = document.getElementById("Sample-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SampleGlobalAttributes() {
  let myVisibility = document.getElementById("Sample-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Sample-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SampleEventAttributes() {
  let myVisibility = document.getElementById("Sample-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Sample-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// VARIABLE TAG //
function VariableTag() {
  let myVisibility = document.getElementById("Variable-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function VariableGlobalAttributes() {
  let myVisibility = document.getElementById("Variable-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Variable-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function VariableEventAttributes() {
  let myVisibility = document.getElementById("Variable-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Variable-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// BIDIRECTIONAL ISOLATION TAG //
function BiDirectionalIsolationTag() {
  let myVisibility = document.getElementById("Bi-Directional-Isolation-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// BIDIRECTIONAL OVERRIDE TAG //
function BiDirectionalOverrideTag() {
  let myVisibility = document.getElementById("Bi-Directional-Override-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// TIME TAG //
function TimeTag() {
  let myVisibility = document.getElementById("Time-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////
// HTML FORM //
///////////////
function HTMLFormStructure() {
  let myVisibility = document.getElementById("HTML-Form");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////
// HTML TABLE //
////////////////
function HTMLTableStructure() {
  let myVisibility = document.getElementById("HTML-Table");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////
// HTML LIST //
///////////////
function HTMLListStructure() {
  let myVisibility = document.getElementById("HTML-List");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

////////////////
// HTML MEDIA //
////////////////
function HTMLMediaStructure() {
  let myVisibility = document.getElementById("HTML-Media");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

/////////////////////
// RUBY ANNOTATION //
/////////////////////
function RubyAnnotationStructure() {
  let myVisibility = document.getElementById("Ruby-Annotation");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

///////////////
// HTML MISC //
///////////////
function HTMLMisc() {
  let myVisibility = document.getElementById("HTML-Misc");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DETAILS TAG //
function DetailsTag() {
  let myVisibility = document.getElementById("Details-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// SUMMARY TAG //
function SummaryTag() {
  let myVisibility = document.getElementById("Summary-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// OBJECT TAG //
function ObjectTag() {
  let myVisibility = document.getElementById("Object-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// PARAMETER TAG //
function ParameterTag() {
  let myVisibility = document.getElementById("Parameter-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// CANVAS TAG //
function CanvasTag() {
  let myVisibility = document.getElementById("Canvas-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// HORIZONTAL RULE TAG //
function HorizontalRuleTag() {
  let myVisibility = document.getElementById("Horizontal-Rule-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function HorizontalRuleGlobalAttributes() {
  let myVisibility = document.getElementById("Horizontal-Rule-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Horizontal-Rule-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function HorizontalRuleEventAttributes() {
  let myVisibility = document.getElementById("Horizontal-Rule-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Horizontal-Rule-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// BREAK TAG //
function BreakTag() {
  let myVisibility = document.getElementById("Break-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function BreakGlobalAttributes() {
  let myVisibility = document.getElementById("Break-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Break-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function BreakEventAttributes() {
  let myVisibility = document.getElementById("Break-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Break-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// WORD BREAK TAG //
function WordBreakTag() {
  let myVisibility = document.getElementById("Word-Break-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function WordBreakGlobalAttributes() {
  let myVisibility = document.getElementById("Word-Break-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Word-Break-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function WordBreakEventAttributes() {
  let myVisibility = document.getElementById("Word-Break-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Word-Break-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// DATA TAG //
function DataTag() {
  let myVisibility = document.getElementById("Data-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// DIALOG TAG //
function DialogTag() {
  let myVisibility = document.getElementById("Dialog-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// EMBED TAG //
function EmbedTag() {
  let myVisibility = document.getElementById("Embed-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// IFRAME TAG //
function IframeTag() {
  let myVisibility = document.getElementById("Iframe-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}