////////////////////////////
// HTML GLOBAL ATTRIBUTES //
////////////////////////////
function HTMLGlobalAttributes() {
  const myGlobalAttributes = {
    accesskey: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>accesskey</b>='<em>myAccessKey</em>'&gt;</code></div> -->",

    class:
      "<div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>class</b>='<em>myClass</em>'&gt;</code>" +
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

    contenteditable: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>contenteditable</b>='<em>myContentEdible</em>'&gt;</code></div> -->",
    data: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>data-*</b>='<em>myData</em>'&gt;</code></div> -->",

    direction:
      "<div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>dir</b>='<em>myDirection</em>'&gt;</code>" +
      "<div>The <code>dir</code> attribute specifies the text direction of the element's content</div>" +
      "<div><code>ltr</code> &rarr; [Default] Specifies left-to-right text direction</div>" +
      "<div><code>rtl</code> &rarr; Specifies right-to-left text direction</div>" +
      "<div><code>auto</code> &rarr; Let the browser figure out the text direction, based on the content (Only recommended if the text direction is unknown)</div>" +
      "</div>",

    draggable: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>draggable</b>='<em>myDraggable</em>'&gt;</code></div> -->",
    enterkeyhint: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>enterkeyhint</b>='<em>myEnterKeyHint</em>'&gt;</code></div> -->",
    hidden: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>hidden</b>='<em>myHidden</em>'&gt;</code></div> -->",

    identifier:
      "<div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>id</b>='<em>myId</em>'&gt;</code>" +
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

    inert: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>inert</b>='<em>myInert</em>'&gt;</code></div> -->",
    inputmode: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>inputmode</b>='<em>myInputMode</em>'&gt;</code></div> -->",

    language:
      "<div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>lang</b>='<em><a href='https://www.w3schools.com/tags/ref_language_codes.asp' target='_blank'>HTML Language Codes</a></em>'&gt;</code>" +
      "<div>The <code>lang</code> attribute specifies the language of the element's content</div>" +
      "<div>Common examples are <code>'en'</code> for English, <code>'fr'</code> for French, and so on</div>" +
      "</div>",

    popover: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>popover</b>='<em>myPopOver</em>'&gt;</code></div> -->",
    spellcheck: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>spellcheck</b>='<em>mySpellCheck</em>'&gt;</code></div> -->",

    style:
      "<div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>style</b>='<em><a href='Notes-CSS.html' target='_blank'>CSS Properties</a></em>'&gt;</code>" +
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

    tabindex: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>tabindex</b>='<em>myTabIndex</em>'&gt;</code></div> -->",

    title:
      "<div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>title</b>='<em>myTitle</em>'&gt;</code>" +
      "<div>The <code>title</code> attribute specifies extra information about an element</div>" +
      "<div>The information is most often shown as a tooltip text when the mouse moves over the element</div>" +
      "</div>",

    translate: "<!-- <div class='Box-Attributes'><code>&lt;<em>MyElement</em> <b>translate</b>='<em>myTranslate</em>'&gt;</code></div> -->"
  };
  return myGlobalAttributes;
}

///////////////////////////
// HTML EVENT ATTRIBUTES //
///////////////////////////
function HTMLEventAttributes() {
  const myEventAttributes = {
    windows:
      "<div class='Box-Attributes'><code><em>Windows Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onafterprint</b>='<em>MyFunction</em>()'&gt;</code>   = Script to be run after the document is printed</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onbeforeprint</b>='<em>MyFunction</em>()'&gt;</code>  = Script to be run before the document is printed</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onbeforeunload</b>='<em>MyFunction</em>()'&gt;</code> = Script to be run when the document is about to be unloaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onerror</b>='<em>MyFunction</em>()'&gt;</code>        = Script to be run when an error occurs</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onhashchange</b>='<em>MyFunction</em>()'&gt;</code>   = Script to be run when there has been changes to the anchor part of the a URL</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onload</b>='<em>MyFunction</em>()'&gt;</code>         = Fires after the page is finished loading</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmessage</b>='<em>MyFunction</em>()'&gt;</code>      = Script to be run when the message is triggered</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onoffline</b>='<em>MyFunction</em>()'&gt;</code>      = Script to be run when the browser starts to work offline</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ononline</b>='<em>MyFunction</em>()'&gt;</code>       = Script to be run when the browser starts to work online</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpagehide</b>='<em>MyFunction</em>()'&gt;</code>     = Script to be run when a user navigates away from a page</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpageshow</b>='<em>MyFunction</em>()'&gt;</code>     = Script to be run when a user navigates to a page</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpopstate</b>='<em>MyFunction</em>()'&gt;</code>     = Script to be run when the window's history changes</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onresize</b>='<em>MyFunction</em>()'&gt;</code>       = Fires when the browser window is resized</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onstorage</b>='<em>MyFunction</em>()'&gt;</code>      = Script to be run when a Web Storage area is updated</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onunload</b>='<em>MyFunction</em>()'&gt;</code>       = Fires once a page has unloaded (or the browser window has been closed)</div>" +
      "</div>",
    
    form:
      "<div class='Box-Attributes'><code><em>Form Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onblur</b>='<em>MyFunction</em>()'&gt;</code>        = Fires the moment that the element loses focus</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onchange</b>='<em>MyFunction</em>()'&gt;</code>      = Fires the moment when the value of the element is changed</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncontextmenu</b>='<em>MyFunction</em>()'&gt;</code> = Script to be run when a context menu is triggered</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onfocus</b>='<em>MyFunction</em>()'&gt;</code>       = Fires the moment when the element gets focus</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oninput</b>='<em>MyFunction</em>()'&gt;</code>       = Script to be run when an element gets user input</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oninvalid</b>='<em>MyFunction</em>()'&gt;</code>     = Script to be run when an element is invalid</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onreset</b>='<em>MyFunction</em>()'&gt;</code>       = Fires when the Reset button in a form is clicked</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onsearch</b>='<em>MyFunction</em>()'&gt;</code>      = Fires when the user writes something in a search field</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onselect</b>='<em>MyFunction</em>()'&gt;</code>      = Fires after some text has been selected in an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onsubmit</b>='<em>MyFunction</em>()'&gt;</code>      = Fires when a form is submitted</div>" +
      "</div>",

    keyboard:
      "<div class='Box-Attributes'><code><em>Keyboard Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onkeydown</b>='<em>MyFunction</em>()'&gt;</code>  = Fires when a user is pressing a key</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onkeypress</b>='<em>MyFunction</em>()'&gt;</code> = Fires when a user presses a key</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onkeyup</b>='<em>MyFunction</em>()'&gt;</code>    = Fires when a user releases a key</div>" +
      "</div>",

    mouse:
      "<div class='Box-Attributes'><code><em>Mouse Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onclick</b>='<em>MyFunction</em>()'&gt;</code>      = Fires on a mouse click on the element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondblclick</b>='<em>MyFunction</em>()'&gt;</code>   = Fires on a mouse double-click on the element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmousedown</b>='<em>MyFunction</em>()'&gt;</code>  = Fires when a mouse button is pressed down on an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmousemove</b>='<em>MyFunction</em>()'&gt;</code>  = Fires when the mouse pointer is moving while it is over an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmouseout</b>='<em>MyFunction</em>()'&gt;</code>   = Fires when the mouse pointer moves out of an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmouseover</b>='<em>MyFunction</em>()'&gt;</code>  = Fires when the mouse pointer moves over an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmouseup</b>='<em>MyFunction</em>()'&gt;</code>    = Fires when a mouse button is released over an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onmousewheel</b>='<em>MyFunction</em>()'&gt;</code> = Deprecated. Use the onwheel attribute instead</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onwheel</b>='<em>MyFunction</em>()'&gt;</code>      = Fires when the mouse wheel rolls up or down over an element</div>" +
      "</div>",

    drag:
      "<div class='Box-Attributes'><code><em>Drag Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondrag</b>='<em>MyFunction</em>()'&gt;</code>      = Script to be run when an element is dragged</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragend</b>='<em>MyFunction</em>()'&gt;</code>   = Script to be run at the end of a drag operation</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragenter</b>='<em>MyFunction</em>()'&gt;</code> = Script to be run when an element has been dragged to a valid drop target</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragleave</b>='<em>MyFunction</em>()'&gt;</code> = Script to be run when an element leaves a valid drop target</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragover</b>='<em>MyFunction</em>()'&gt;</code>  = Script to be run when an element is being dragged over a valid drop target</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondragstart</b>='<em>MyFunction</em>()'&gt;</code> = Script to be run at the start of a drag operation</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondrop</b>='<em>MyFunction</em>()'&gt;</code>	     = Script to be run when dragged element is being dropped</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onscroll</b>='<em>MyFunction</em>()'&gt;</code>	   = Script to be run when an element's scrollbar is being scrolled</div>" +
      "</div>",

    clipboard:
      "<div class='Box-Attributes'><code><em>Clipboard Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncopy</b>='<em>MyFunction</em>()'&gt;</code>  = Fires when the user copies the content of an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncut</b>='<em>MyFunction</em>()'&gt;</code>   = Fires when the user cuts the content of an element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpaste</b>='<em>MyFunction</em>()'&gt;</code> = Fires when the user pastes some content in an element</div>" +
      "</div>",

    media:
      "<div class='Box-Attributes'><code><em>Media Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>onabort</b>='<em>MyFunction</em>()'&gt;</code>          = Script to be run on abort</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncanplay</b>='<em>MyFunction</em>()'&gt;</code>        = Script to be run when a file is ready to start playing (when it has buffered enough to begin)</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncanplaythrough</b>='<em>MyFunction</em>()'&gt;</code> = Script to be run when a file can be played all the way to the end without pausing for buffering</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>oncuechange</b>='<em>MyFunction</em>()'&gt;</code>      = Script to be run when the cue changes in a <code>&lt;track&gt;</code> element</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ondurationchange</b>='<em>MyFunction</em>()'&gt;</code> = Script to be run when the length of the media changes</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onemptied</b>='<em>MyFunction</em>()'&gt;</code>        = Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onended</b>='<em>MyFunction</em>()'&gt;</code>          = Script to be run when the media has reach the end (a useful event for messages like 'thanks for listening')</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onerror</b>='<em>MyFunction</em>()'&gt;</code>          = Script to be run when an error occurs when the file is being loaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onloadeddata</b>='<em>MyFunction</em>()'&gt;</code>     = Script to be run when media data is loaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onloadedmetadata</b>='<em>MyFunction</em>()'&gt;</code> = Script to be run when meta data (like dimensions and duration) are loaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onloadstart</b>='<em>MyFunction</em>()'&gt;</code>      = Script to be run just as the file begins to load before anything is actually loaded</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onpause</b>='<em>MyFunction</em>()'&gt;</code>          = Script to be run when the media is paused either by the user or programmatically</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onplay</b>='<em>MyFunction</em>()'&gt;</code>           = Script to be run when the media is ready to start playing</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onplaying</b>='<em>MyFunction</em>()'&gt;</code>        = Script to be run when the media actually has started playing</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onprogress</b>='<em>MyFunction</em>()'&gt;</code>       = Script to be run when the browser is in the process of getting the media data</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onratechange</b>='<em>MyFunction</em>()'&gt;</code>     = Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode)</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onseeked</b>='<em>MyFunction</em>()'&gt;</code>         = Script to be run when the seeking attribute is set to false indicating that seeking has ended</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onseeking</b>='<em>MyFunction</em>()'&gt;</code>        = Script to be run when the seeking attribute is set to true indicating that seeking is active</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onstalled</b>='<em>MyFunction</em>()'&gt;</code>        = Script to be run when the browser is unable to fetch the media data for whatever reason</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onsuspend</b>='<em>MyFunction</em>()'&gt;</code>        = Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>ontimeupdate</b>='<em>MyFunction</em>()'&gt;</code>     = Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media)</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onvolumechange</b>='<em>MyFunction</em>()'&gt;</code>   = Script to be run each time the volume is changed which (includes setting the volume to 'mute')</div>" +
      "<div><code>&lt;<em>MyElement</em> <b>onwaiting</b>='<em>MyFunction</em>()'&gt;</code>        = Script to be run when the media has paused but is expected to resume (like when the media pauses to buffer more data)</div>" +
      "</div>",

    misc:
      "<div class='Box-Attributes'><code><em>Miscellaneous Event Attributes</em></code>" +
      "<div><code>&lt;<em>MyElement</em> <b>ontoggle</b>='<em>MyFunction</em>()'&gt;</code> = Fires when the user opens or closes the <code>&lt;details&gt;</code> element</div>" +
      "</div>"
  };
  return myEventAttributes;
}

////////////////////////
// BOOLEAN ATTRIBUTES //
////////////////////////
function BooleanAttributes() {
  const myBoolean = {
    myChecked:
      "<div class='Box-Attributes'>" +
      "<div>The <code>checked</code> attribute specifies that the specfied element should be pre-selected (checked) when the page loads" +
      "<div>The <code>checked</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>The <code>checked</code> attribute can be used with <code>&lt;input type='checkbox'&gt;</code> and <code>&lt;input type='radio'&gt;</code></div>" +
      "<div>The <code>checked</code> attribute can also be set after the page load, with a JavaScript</div>" +
      "</div>",

    myDisabled:
      "<div class='Box-Attributes'>" +
      "<div>The <code>disabled</code> attribute specifies that a group of specified/related elements should be disabled" +
      "<div>The <code>disabled</code> attribute can be applied to <code>&lt;fieldset&gt;, &lt;input&gt;</code></div>" +
      "<div>A disabled element is unusable and un-clickable</div>" +
      "<div>The <code>disabled</code> attribute can be set to keep a user from using the elements until some other condition has been met (like selecting a checkbox, etc.)</div>" +
      "<div>Then, a JavaScript could remove the disabled value, and make the element usable again</div>" +
      "</div>",

    myMultiple:
      "<div class='Box-Attributes'>" +
      "<div>The <code>multiple</code> attribute specifies that the user is allowed to enter more than one value in the specified element" +
      "<div>The <code>multiple</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>The <code>multiple</code> attribute works with the following input types: email, and file</div>" +
      "<div>For <code>&lt;input type='file'&gt;</code> to select multiple files, hold down the <kbd>CTRL</kbd> or <kbd>SHIFT</kbd> key while selecting</div>" +
      "<div>For <code>&lt;input type='email'&gt;</code> separate each email with a comma; <code>mail@example.com, mail2@example.com, mail3@example.com</code> in the email field</div>" +
      "</div>",

    myReadonly:
      "<div class='Box-Attributes'>" +
      "<div>The <code>readonly</code> attribute specifies that the specified element is read-only" +
      "<div>The <code>readonly</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>A read-only input field cannot be modified (however, a user can tab to it, highlight it, and copy the text from it)</div>" +
      "<div>The <code>readonly</code> attribute can be set to keep a user from changing the value until some other conditions have been met (like selecting a checkbox, etc.)</div>" +
      "<div>Then, a JavaScript can remove the readonly value, and make the input field editable</div>" +
      "<div>A form will still submit an input field that is readonly, but will not submit an input field that is disabled</div>" +
      "</div>",

    myRequired:
      "<div class='Box-Attributes'>" +
      "<div>The <code>required</code> attribute specifies that the element must be filled out before submitting the form" +
      "<div>The <code>required</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>The <code>required</code> attribute works with the following input types: text, search, url, tel, email, password, date pickers, number, checkbox, radio, and file</div>" +
      "</div>"
  };
  return myBoolean;
}

//////////////////////////
// DIMENSION ATTRIBUTES //
//////////////////////////
function DimensionAttributes(){
  const myDimensions = {
    myHeight:
      "<div class='Box-Attributes'>" +
      "<div>The <code>height</code> attribute specifies the height of the specified element</div>" +
      "<div>The <code>height</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>The height attribute is used only with <code>&lt;input type='image'&gt;</code></div>" +
      "<div>Always specify both the <code>height</code> and <code>width</code> attributes for images</div>" +
      "<div>If height and width are set, the space required for the image is reserved when the page is loaded</div>" +
      "<div>However, without these attributes, the browser does not know the size of the image, and cannot reserve the appropriate space to it</div>" +
      "<div>The effect will be that the page layout will change during loading (while the images load)</div>" +
      "</div>",

    mySize:
      "<div class='Box-Attributes'>" +
      "<div>The <code>size</code> attribute specifies the visible width, in characters, of the specified element</div>" +
      "<div>The <code>size</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>The <code>size</code> attribute works with the following input types: text, search, tel, url, email, and password</div>" +
      "</div>",

    myWidth:
      "<div class='Box-Attributes'>" +
      "<div>The <code>width</code> attribute specifies the width of the specified element</div>" +
      "<div>The <code>width</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>The <code>width</code> attribute is used only with <code>&lt;input type='image'&gt;</code></div>" +
      "<div>Always specify both the <code>height</code> and <code>width</code> attributes for images</div>" +
      "<div>If height and width are set, the space required for the image is reserved when the page is loaded</div>" +
      "<div>However, without these attributes, the browser does not know the size of the image, and cannot reserve the appropriate space to it</div>" +
      "<div>The effect will be that the page layout will change during loading (while the images load)</div>" +
      "</div>"
  };
  return myDimensions;
}

//////////////////////
// VALUE ATTRIBUTES //
//////////////////////
function ValueAttributes(){
  const myVal = {
    myMax:
      "<div class='Box-Attributes'>" +
      "<div>The <code>max</code> attribute specifies the maximum value for a specified element</div>" +
      "<div>The <code>max</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>Use the <code>max</code> attribute together with the <code>min</code> attribute to create a range of legal values</div>" +
      "<div>The <code>max</code> and <code>min</code> attributes works with the following input types: number, range, date, datetime-local, month, time and week</div>" +
      "</div>",

    myMaxlength:
      "<div class='Box-Attributes'>" +
      "<div>The <code>maxlength</code> attribute specifies the maximum number of characters allowed in the specified element</div>" +
      "<div>The <code>maxlength</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myMin:
      "<div class='Box-Attributes'>" +
      "<div>The <code>min</code> attribute specifies the minimum value for a specified element</div>" +
      "<div>The <code>min</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>Use the <code>min</code> attribute together with the <code>max</code> attribute to create a range of legal values</div>" +
      "<div>The <code>max</code> and <code>min</code> attributes works with the following input types: number, range, date, datetime-local, month, time and week</div>" +
      "</div>",

    myMinlength:
      "<div class='Box-Attributes'>" +
      "<div>The <code>minlength</code> attribute specifies the minimum number of characters required in the specified element</div>" +
      "<div>The <code>minlength</code> attribute can be applied to <code>&lt;input&gt;</code></div>" +
      "<div>The <code>minlength</code> attribute can be used with the following input type: text, search, url, tel, email, and password</div>" +
      "</div>",

    myPattern:
      "<div class='Box-Attributes'>" +
      "<div><code>pattern</code</div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myStep:
      "<div class='Box-Attributes'>" +
      "<div><code>step</code</div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myValue:
      "<div class='Box-Attributes'>" +
      "<div><code>value</code</div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>"
  };
  return myVal;
}

//////////////////////////////
// UNCATEGORIZED ATTRIBUTES //
//////////////////////////////
function kiv() {
  const kiv = {
    myAccept:
      "<div class='Box-Attributes'>" +
      "<div><code>accept</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myAcceptCharset:
      "<div class='Box-Attributes'>" +
      "<div><code>accept-charset</code></div>" +
      "<div>Applies to <code>&lt;form&gt;</code></div>" +
      "</div>",

    myAction:
      "<div class='Box-Attributes'>" +
      "<div><code>action</code></div>" +
      "<div>Applies to <code>&lt;form&gt;</code></div>" +
      "</div>",

    myAlternate:
      "<div class='Box-Attributes'>" +
      "<div><code>alternate</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myAutocomplete:
      "<div class='Box-Attributes'>" +
      "<div><code>autocomplete</code></div>" +
      "<div>Applies to <code>&lt;form&gt;, &lt;input&gt;</code></div>" +
      "</div>",

    myAutofocus:
      "<div class='Box-Attributes'>" +
      "<div><code>autofocus</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myDirectionName:
      "<div class='Box-Attributes'>" +
      "<div><code>dirname</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myEnctype:
      "<div class='Box-Attributes'>" +
      "<div><code>enctype</code></div>" +
      "<div>Applies to <code>&lt;form&gt;</code></div>" +
      "</div>",
    
    myFor:
      "<div class='Box-Attributes'>" +
      "<div>The <code>&lt;for&gt;</code> attribute specifies which form element a specified element is bound to</div>" +
      "<div>The <code>&lt;for&gt;</code> attribute can be applied to <code>&lt;label&gt;</code></div>" +
      "<div>The <code>for</code> attribute of <code>&lt;label&gt;</code> must be equal to the <code>id</code> attribute of the related element to bind them together</div>" +
      "<div>Example &rarr; <code>&lt;<em>MyElement1</em> for='<em>MyForId</em>'&gt; = &lt;<em>MyElement2</em> id='<em>MyForId</em>'&gt;</code></div>" +
      "</div>",

    myForm:
      "<div class='Box-Attributes'>" +
      "<div>The <code>form</code> attribute specifies the form the specified element belongs to</div>" +
      "<div>The <code>form</code> attribute can be applied to <code>&lt;fieldset&gt;, &lt;label&gt;, &lt;input&gt;</code></div>" +
      "<div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
      "<div>Example &rarr; <code>&lt;<em>MyElement</em> form='<em>MyFormId</em>'&gt; = &lt;form id='<em>MyFormId</em>'&gt;</code></div>" +
      "</div>",

    myFormaction:
      "<div class='Box-Attributes'>" +
      "<div><code>formaction</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myFormenctype:
      "<div class='Box-Attributes'>" +
      "<div><code>formenctype</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myFormmethod:
      "<div class='Box-Attributes'>" +
      "<div><code>formmethod</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myFormnovalidate:
      "<div class='Box-Attributes'>" +
      "<div><code>formnovalidate</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myFormtarget:
      "<div class='Box-Attributes'>" +
      "<div><code>formtarget</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myList:
      "<div class='Box-Attributes'>" +
      "<div><code>list</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myMethod:
      "<div class='Box-Attributes'>" +
      "<div><code>method</code></div>" +
      "<div>Applies to <code>&lt;form&gt;</code></div>" +
      "</div>",

    myName:
      "<div class='Box-Attributes'>" +
      "<div>The <code>name</code> attribute specifies a name for a specified element</div>" +
      "<div>The <code>name</code> attribute can be aplied to <code>&lt;form&gt;, &lt;fieldset&gt;, &lt;input&gt;</code></div>" +
      "<div>The <code>name</code> attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted</div>" +
      "</div>",

    myNovalidate:
      "<div class='Box-Attributes'>" +
      "<div><code>novalidate</code></div>" +
      "<div>Applies to <code>&lt;form&gt;</code></div>" +
      "</div>",

    myPlaceholder:
      "<div class='Box-Attributes'>" +
      "<div><code>placeholder</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myPopovertarget:
      "<div class='Box-Attributes'>" +
      "<div><code>popovertarget</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myPopovertargetaction:
      "<div class='Box-Attributes'>" +
      "<div><code>popovertargetaction</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myRel:
      "<div class='Box-Attributes'>" +
      "<div><code>rel</code></div>" +
      "<div>Applies to <code>&lt;form&gt;</code></div>" +
      "</div>",

    myTarget:
      "<div class='Box-Attributes'>" +
      "<div><code>target</code></div>" +
      "<div>Applies to <code>&lt;form&gt;</code></div>" +
      "</div>",

    mySource:
      "<div class='Box-Attributes'>" +
      "<div><code>src</code></div>" +
      "<div>Applies to <code>&lt;input&gt;</code></div>" +
      "</div>",

    myType:
      "<div class='Box-Attributes'>" +
      "<div>The <code>type</code> attribute specifies the type of the specified element to display</div>" +
      "<div>The <code>type</code> attribute  can be applied to <code>&lt;input&gt;</code></div>" +
      "<div> Related <code><em>MyValue</em></code>" +
      "<div><code>button</code>         = Defines a clickable button (mostly used with a JavaScript to activate a script)</div>" +
      "<div><code>checkbox</code>       = Defines a checkbox</div>" +
      "<div><code>color</code>          = Defines a color picker</div>" +
      "<div><code>date</code>           = Defines a date control (year, month, day (no time))</div>" +
      "<div><code>datetime-local</code> = Defines a date and time control (year, month, day, time (no timezone)</div>" +
      "<div><code>email</code>          = Defines a field for an e-mail address</div>" +
      "<div><code>file</code>           = Defines a file-select field and a 'Browse' button (for file uploads)</div>" +
      "<div><code>hidden</code>         = Defines a hidden input field</div>" +
      "<div><code>image</code>          = Defines an image as the submit button</div>" +
      "<div><code>month</code>          = Defines a month and year control (no timezone)</div>" +
      "<div><code>number</code>         = Defines a field for entering a number</div>" +
      "<div><code>password</code>       = Defines a password field</div>" +
      "<div><code>radio</code>          = Defines a radio button</div>" +
      "<div><code>range</code>          = Defines a range control (like a slider control)</div>" +
      "<div><code>reset</code>          = Defines a reset button</div>" +
      "<div><code>search</code>         = Defines a text field for entering a search string</div>" +
      "<div><code>submit</code>         = Defines a submit button</div>" +
      "<div><code>tel</code>            = Defines a field for entering a telephone number</div>" +
      "<div><code>text</code>           = [Default] Defines a single-line text field</div>" +
      "<div><code>time</code>           = Defines a control for entering a time (no timezone)</div>" +
      "<div><code>url</code>            = Defines a field for entering a URL</div>" +
      "<div><code>week</code>           = Defines a week and year control (no timezone)</div>" +
      "<div>If the <code>type</code> attribute is not specified, the default type is 'text'</div>" +
      "</div> </div>"
  };
  return kiv;
}

//////////////
// FORM TAG //
//////////////
function FormTag() {
  let myVisibility = document.getElementById("Box-Elements");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Elements").innerHTML =
      "<h3><code>&lt;form&gt; <em>My Contents</em> &lt;/form&gt;</code></h3>" +
      "<div>The <code>&lt;form&gt;</code> tag is used to create an HTML form for user input</div>" +

      "<div class='Box-Attributes'>Related Attribute(s)" +
      "<div onclick='FormGlobalAttributes()'><code><em>HTML Global Attributes</em></code> <div id='Form-Global-Attributes'></div> </div>" +
      "<div onclick='FormEventAttributes()'><code><em>HTML Event Attributes</em></code> <div id='Form-Event-Attributes'></div> </div>" +
      "<div onclick='FormAcceptCharsetAttributes()'><code>&lt;form <b>accept-charset</b>='<em>MyValue</em>'&gt;</code> <div id='Form-Accept-Charset-Attributes'></div> </div>" +
      "<div onclick='FormActionAttributes()'><code>&lt;form <b>action</b>='<em>MyValue</em>'&gt;</code> <div id='Form-Action-Attributes'></div> </div>" +
      "<div onclick='FormAutocompleteAttributes()'><code>&lt;form <b>autocomplete</b>='<em>MyValue</em>'&gt;</code> <div id='Form-Autocomplete-Attributes'></div> </div>" +
      "<div onclick='FormEnctypeAttributes()'><code>&lt;form <b>enctype</b>='<em>MyValue</em>'&gt;</code> <div id='Form-Enctype-Attributes'></div> </div>" +
      "<div onclick='FormMethodAttributes()'><code>&lt;form <b>method</b>='<em>MyValue</em>'&gt;</code> <div id='Form-Method-Attributes'></div> </div>" +
      "<div onclick='FormNameAttributes()'><code>&lt;form <b>name</b>='<em>MyName</em>'&gt;</code> <div id='Form-Name-Attributes'></div> </div>" +
      "<div onclick='FormNovalidateAttributes()'><code>&lt;form <b>novalidate</b>='<em>MyValue</em>'&gt;</code> <div id='Form-Novalidate-Attributes'></div> </div>" +
      "<div onclick='FormRelAttributes()'><code>&lt;form <b>rel</b>='<em>MyValue</em>'&gt;</code> <div id='Form-Rel-Attributes'></div> </div>" +
      "<div onclick='FormTargetAttributes()'><code>&lt;form <b>target</b>='<em>MyValue</em>'&gt;</code> <div id='Form-Target-Attributes'></div> </div>" +
      "</div>" +

      "<div>Default CSS Setting(s)" +
      "<div><code>form { display: block; margin-top: 0em; }</code></div>" +
      "</div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FORM GLOBAL ATTRIBUTES //
function FormGlobalAttributes() {
  let myVisibility = document.getElementById("Form-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Global-Attributes").innerHTML =
      HTMLGlobalAttributes().accesskey + HTMLGlobalAttributes().class + HTMLGlobalAttributes().contenteditable + HTMLGlobalAttributes().data + HTMLGlobalAttributes().direction +
      HTMLGlobalAttributes().draggable + HTMLGlobalAttributes().enterkeyhint + HTMLGlobalAttributes().hidden + HTMLGlobalAttributes().identifier + HTMLGlobalAttributes().inert +
      HTMLGlobalAttributes().inputmode + HTMLGlobalAttributes().language + HTMLGlobalAttributes().popover + HTMLGlobalAttributes().spellcheck + HTMLGlobalAttributes().style +
      HTMLGlobalAttributes().tabindex + HTMLGlobalAttributes().title + HTMLGlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM EVENT ATTRIBUTES //
function FormEventAttributes() {
  let myVisibility = document.getElementById("Form-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Event-Attributes").innerHTML =
      HTMLEventAttributes().windows + HTMLEventAttributes().form + HTMLEventAttributes().keyboard + HTMLEventAttributes().mouse + HTMLEventAttributes().drag +
      HTMLEventAttributes().clipboard + HTMLEventAttributes().media + HTMLEventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM ACCEPT-CHARSET ATTRIBUTES //
function FormAcceptCharsetAttributes() {
  let myVisibility = document.getElementById("Form-Accept-Charset-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Accept-Charset-Attributes").innerHTML = kiv().myAcceptCharset;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM ACTION ATTRIBUTES //
function FormActionAttributes() {
  let myVisibility = document.getElementById("Form-Action-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Action-Attributes").innerHTML = kiv().myAction;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM AUTOCOMPLETE ATTRIBUTES //
function FormAutocompleteAttributes() {
  let myVisibility = document.getElementById("Form-Autocomplete-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Autocomplete-Attributes").innerHTML = kiv().myAutocomplete;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM ENCTYPE ATTRIBUTES //
function FormEnctypeAttributes() {
  let myVisibility = document.getElementById("Form-Enctype-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Enctype-Attributes").innerHTML = kiv().myEnctype;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM METHOD ATTRIBUTES //
function FormMethodAttributes() {
  let myVisibility = document.getElementById("Form-Method-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Method-Attributes").innerHTML = kiv().myMethod;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM NAME ATTRIBUTES //
function FormNameAttributes() {
  let myVisibility = document.getElementById("Form-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Name-Attributes").innerHTML = kiv().myName;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM NOVALIDATE ATTRIBUTES //
function FormNovalidateAttributes() {
  let myVisibility = document.getElementById("Form-Novalidate-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Novalidate-Attributes").innerHTML = kiv().myNovalidate;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM REL ATTRIBUTES //
function FormRelAttributes() {
  let myVisibility = document.getElementById("Form-Rel-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Rel-Attributes").innerHTML = kiv().myRel;
  }
  else { myVisibility.style.display = "none"; }
}

// FORM TARGET ATTRIBUTES //
function FormTargetAttributes() {
  let myVisibility = document.getElementById("Form-Target-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Target-Attributes").innerHTML = kiv().myTarget;
  }
  else { myVisibility.style.display = "none"; }
}

//////////////////
// FIELDSET TAG //
//////////////////
function FieldsetTag() {
  let myVisibility = document.getElementById("Box-Elements");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Elements").innerHTML =
    "<h3><code>&lt;fieldset&gt; <em>My Contents</em> &lt;/fieldset&gt;</code></h3>" +
    "<div>The <code>&lt;fieldset&gt;</code> tag is used to group related elements in a form</div>" +
    "<div>The <code>&lt;fieldset&gt;</code> tag draws a box around the related elements</div>" +

    "<div class='Box-Attributes'>Related Attribute(s)" +
    "<div onclick='FieldsetGlobalAttributes()'><code><em>HTML Global Attributes</em></code> <div id='Fieldset-Global-Attributes'></div> </div>" +
    "<div onclick='FieldsetEventAttributes()'><code><em>HTML Event Attributes</em></code> <div id='Fieldset-Event-Attributes'></div> </div>" +
    "<div onclick='FieldsetDisabledAttributes()'><code>&lt;fieldset <b>disabled</b>&gt;</code> <div id='Fieldset-Disabled-Attributes'></div> </div>" +
    "<div onclick='FieldsetFormAttributes()'><code>&lt;fieldset <b>form</b>='<em>MyFormId</em>'&gt;</code> <div id='Fieldset-Form-Attributes'></div> </div>" +
    "<div onclick='FieldsetNameAttributes()'><code>&lt;fieldset <b>name</b>='<em>MyName</em>'&gt;</code> <div id='Fieldset-Name-Attributes'></div> </div>" +
    "</div>" +

    "<div>Default CSS Setting(s)" +
    "<div><code>fieldset {" +
    "<div>display: block;</div>" +
    "<div>margin: 0 2px;</div>" +
    "<div>padding: 0.35em 0.75em 0.625em;</div>" +
    "<div>border: 2px groove (internal value);</div>" +
    "}</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// FIELDSET GLOBAL ATTRIBUTES //
function FieldsetGlobalAttributes() {
  let myVisibility = document.getElementById("Fieldset-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Global-Attributes").innerHTML =
      HTMLGlobalAttributes().accesskey + HTMLGlobalAttributes().class + HTMLGlobalAttributes().contenteditable + HTMLGlobalAttributes().data + HTMLGlobalAttributes().direction +
      HTMLGlobalAttributes().draggable + HTMLGlobalAttributes().enterkeyhint + HTMLGlobalAttributes().hidden + HTMLGlobalAttributes().identifier + HTMLGlobalAttributes().inert +
      HTMLGlobalAttributes().inputmode + HTMLGlobalAttributes().language + HTMLGlobalAttributes().popover + HTMLGlobalAttributes().spellcheck + HTMLGlobalAttributes().style +
      HTMLGlobalAttributes().tabindex + HTMLGlobalAttributes().title + HTMLGlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

// FIELDSET EVENT ATTRIBUTES //
function FieldsetEventAttributes() {
  let myVisibility = document.getElementById("Fieldset-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Event-Attributes").innerHTML =
      HTMLEventAttributes().windows + HTMLEventAttributes().form + HTMLEventAttributes().keyboard + HTMLEventAttributes().mouse + HTMLEventAttributes().drag +
      HTMLEventAttributes().clipboard + HTMLEventAttributes().media + HTMLEventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// FIELDSET DISABLED ATTRIBUTES //
function FieldsetDisabledAttributes() {
  let myVisibility = document.getElementById("Fieldset-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Disabled-Attributes").innerHTML = BooleanAttributes().myDisabled;
  }
  else { myVisibility.style.display = "none"; }
}

// FIELDSET FORM ATTRIBUTES //
function FieldsetFormAttributes() {
  let myVisibility = document.getElementById("Fieldset-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Form-Attributes").innerHTML = kiv().myForm;
  }
  else { myVisibility.style.display = "none"; }
}

// FIELDSET NAME ATTRIBUTES //
function FieldsetNameAttributes() {
  let myVisibility = document.getElementById("Fieldset-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Name-Attributes").innerHTML = kiv().myName;
  }
  else { myVisibility.style.display = "none"; }
}

////////////////
// LEGEND TAG //
////////////////
function LegendTag() {
  let myVisibility = document.getElementById("Box-Elements");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Elements").innerHTML =
    "<h3><code>&lt;legend&gt; <em>My Text</em> &lt;/legend&gt;</code></h3>" +
    "<div>The <code>&lt;legend&gt;</code> tag defines a caption for the <code>&lt;fieldset&gt;</code> element</div>" +

    "<div class='Box-Attributes'>Related Value(s)" +
    "<div onclick='LegendGlobalAttributes()'><code><em>HTML Global Attributes</em></code> <div id='Legend-Global-Attributes'></div> </div>" +
    "<div onclick='LegendEventAttributes()'><code><em>HTML Event Attributes</em></code> <div id='Legend-Event-Attributes'></div> </div>" +
    "</div>" +

    "<div>Default CSS Setting(s)" +
    "<div><code>legend {" +
    "<div>display: block;</div>" +
    "<div>padding: 0 2px;</div>" +
    "<div>border: none;</div>" +
    "}</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// LEGEND GLOBAL ATTRIBUTES //
function LegendGlobalAttributes() {
  let myVisibility = document.getElementById("Legend-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Legend-Global-Attributes").innerHTML =
    HTMLGlobalAttributes().accesskey + HTMLGlobalAttributes().class + HTMLGlobalAttributes().contenteditable + HTMLGlobalAttributes().data + HTMLGlobalAttributes().direction +
    HTMLGlobalAttributes().draggable + HTMLGlobalAttributes().enterkeyhint + HTMLGlobalAttributes().hidden + HTMLGlobalAttributes().identifier + HTMLGlobalAttributes().inert +
    HTMLGlobalAttributes().inputmode + HTMLGlobalAttributes().language + HTMLGlobalAttributes().popover + HTMLGlobalAttributes().spellcheck + HTMLGlobalAttributes().style +
    HTMLGlobalAttributes().tabindex + HTMLGlobalAttributes().title + HTMLGlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

// LEGEND EVENT ATTRIBUTES //
function LegendEventAttributes() {
  let myVisibility = document.getElementById("Legend-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Legend-Event-Attributes").innerHTML =
    HTMLEventAttributes().windows + HTMLEventAttributes().form + HTMLEventAttributes().keyboard + HTMLEventAttributes().mouse + HTMLEventAttributes().drag +
    HTMLEventAttributes().clipboard + HTMLEventAttributes().media + HTMLEventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

///////////////
// LABEL TAG //
///////////////
function LabelTag() {
  let myVisibility = document.getElementById("Box-Elements");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Elements").innerHTML =
    "<h3><code>&lt;label&gt; <em>My Text</em> &lt;/label&gt;</code></h3>" +
    "<div>The <code>&lt;label&gt;</code> tag defines a label for several specified elements" +
    "<div><code>&lt;input type='checkbox'&gt;</code></div>" +
    "<div><code>&ltinput type='color'&gt;</code></div>" +
    "<div><code>&ltinput type='date'&gt;</code></div>" +
    "<div><code>&ltinput type='datetime-local'&gt;</code></div>" +
    "<div><code>&ltinput type='email'&gt;</code></div>" +
    "<div><code>&ltinput type='file'&gt;</code></div>" +
    "<div><code>&ltinput type='month'&gt;</code></div>" +
    "<div><code>&ltinput type='number'&gt;</code></div>" +
    "<div><code>&ltinput type='password'&gt;</code></div>" +
    "<div><code>&ltinput type='radio'&gt;</code></div>" +
    "<div><code>&ltinput type='range'&gt;</code></div>" +
    "<div><code>&ltinput type='search'&gt;</code></div>" +
    "<div><code>&ltinput type='tel'&gt;</code></div>" +
    "<div><code>&ltinput type='text'&gt;</code></div>" +
    "<div><code>&ltinput type='time'&gt;</code></div>" +
    "<div><code>&ltinput type='url'&gt;</code></div>" +
    "<div><code>&ltinput type='week'&gt;</code></div>" +
    "<div><code>&lt;meter&gt;</code></div>" +
    "<div><code>&lt;progress&gt;</code></div>" +
    "<div><code>&lt;select&gt;</code></div>" +
    "<div><code>&lt;textarea&gt;</code></div>" +
    "</div>" +
    "<div>Screen reader users (will read out loud the label, when the user is focused on the element)</div>" +
    "<div>Users who have difficulty clicking on very small regions (such as checkboxes)</div>" +
    "<div>When a user clicks the text within the <code>&lt;label&gt;</code> element, it toggles the input (this increases the hit area)</div>" +

    "<div class='Box-Attributes'>Related Value(s)" +
    "<div onclick='LabelGlobalAttributes()'><code><em>HTML Global Attributes</em></code> <div id='Label-Global-Attributes'></div> </div>" +
    "<div onclick='LabelEventAttributes()'><code><em>HTML Event Attributes</em></code> <div id='Label-Event-Attributes'></div> </div>" +
    "<div onclick='LabelForAttributes()'><code>&lt;label <b>for</b>='<em>MyForId</em>'&gt;</code> <div id='Label-For-Attributes'></div> </div>" +
    "<div onclick='LabelFormAttributes()'><code>&lt;label <b>form</b>='<em>MyFormId</em>'&gt;</code> <div id='Label-Form-Attributes'></div> </div>" +
    "</div>" +

    "<div>Default CSS Setting(s)" +
    "<div><code>label { cursor: default; }</code></div>";
  }
  else { myVisibility.style.display = "none"; }
}

// LABEL GLOBAL ATTRIBUTES //
function LabelGlobalAttributes() {
  let myVisibility = document.getElementById("Label-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Label-Global-Attributes").innerHTML =
    HTMLGlobalAttributes().accesskey + HTMLGlobalAttributes().class + HTMLGlobalAttributes().contenteditable + HTMLGlobalAttributes().data + HTMLGlobalAttributes().direction +
    HTMLGlobalAttributes().draggable + HTMLGlobalAttributes().enterkeyhint + HTMLGlobalAttributes().hidden + HTMLGlobalAttributes().identifier + HTMLGlobalAttributes().inert +
    HTMLGlobalAttributes().inputmode + HTMLGlobalAttributes().language + HTMLGlobalAttributes().popover + HTMLGlobalAttributes().spellcheck + HTMLGlobalAttributes().style +
    HTMLGlobalAttributes().tabindex + HTMLGlobalAttributes().title + HTMLGlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

// LABEL EVENT ATTRIBUTES //
function LabelEventAttributes() {
  let myVisibility = document.getElementById("Label-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Label-Event-Attributes").innerHTML =
    HTMLEventAttributes().windows + HTMLEventAttributes().form + HTMLEventAttributes().keyboard + HTMLEventAttributes().mouse + HTMLEventAttributes().drag +
    HTMLEventAttributes().clipboard + HTMLEventAttributes().media + HTMLEventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// LABEL FOR ATTRIBUTES //
function LabelForAttributes() {
  let myVisibility = document.getElementById("Label-For-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Label-For-Attributes").innerHTML = kiv().myFor;
  }
  else { myVisibility.style.display = "none"; }
}

// LABEL FORM ATTRIBUTES //
function LabelFormAttributes() {
  let myVisibility = document.getElementById("Label-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Label-Form-Attributes").innerHTML = kiv().myForm;
  }
  else { myVisibility.style.display = "none"; }
}

///////////////
// INPUT TAG //
///////////////
function InputTag() {
  let myVisibility = document.getElementById("Box-Elements");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Box-Elements").innerHTML =
    "<h3><code>&lt;input&gt;</code></h3>" +
    "<div>The <code>&lt;input&gt;</code> tag specifies an input field where the user can enter data</div>" +

    "<div class='Box-Attributes'>Related Value(s)" +
    "<div onclick='InputGlobalAttributes()'><code><em>HTML Global Attributes</em></code> <div id='Input-Global-Attributes'></div> </div>" +
    "<div onclick='InputEventAttributes()'><code><em>HTML Event Attributes</em></code> <div id='Input-Event-Attributes'></div> </div>" +
    "<div onclick='InputAcceptAttributes()'><code>&lt;input <b>accept</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Accept-Attributes'></div> </div>" +
    "<div onclick='InputAlternateAttributes()'><code>&lt;input <b>alt</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Alternate-Attributes'></div> </div>" +
    "<div onclick='InputAutocompleteAttributes()'><code>&lt;input <b>autocomplete</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Autocomplete-Attributes'></div> </div>" +
    "<div onclick='InputAutofocusAttributes()'><code>&lt;input <b>autofocus</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Autofocus-Attributes'></div> </div>" +
    "<div onclick='InputCheckedAttributes()'><code>&lt;input <b>checked</b>&gt;</code> <div id='Input-Checked-Attributes'></div> </div>" +
    "<div onclick='InputDirectionNameAttributes()'><code>&lt;input <b>dirname</b>='<em>MyValue</em>'&gt;</code> <div id='Input-DirectionName-Attributes'></div> </div>" +
    "<div onclick='InputDisabledAttributes()'><code>&lt;input <b>disabled</b>&gt;</code> <div id='Input-Disabled-Attributes'></div> </div>" +
    "<div onclick='InputFormAttributes()'><code>&lt;input <b>form</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Form-Attributes'></div> </div>" +
    "<div onclick='InputFormactionAttributes()'><code>&lt;input <b>formaction</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Formaction-Attributes'></div> </div>" +
    "<div onclick='InputFormenctypeAttributes()'><code>&lt;input <b>formenctype</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Formenctype-Attributes'></div> </div>" +
    "<div onclick='InputFormmethodAttributes()'><code>&lt;input <b>formmethod</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Formmethod-Attributes'></div> </div>" +
    "<div onclick='InputFormnovalidateAttributes()'><code>&lt;input <b>formnovalidate</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Formnovalidate-Attributes'></div> </div>" +
    "<div onclick='InputFormtargetAttributes()'><code>&lt;input <b>formtarget</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Formtarget-Attributes'></div> </div>" +
    "<div onclick='InputHeightAttributes()'><code>&lt;input <b>height</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Height-Attributes'></div> </div>" +
    "<div onclick='InputListAttributes()'><code>&lt;input <b>list</b>='<em>MyValue</em>'&gt;</code> <div id='Input-List-Attributes'></div> </div>" +
    "<div onclick='InputMaxAttributes()'><code>&lt;input <b>max</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Max-Attributes'></div> </div>" +
    "<div onclick='InputMaxlengthAttributes()'><code>&lt;input <b>maxlength</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Maxlength-Attributes'></div> </div>" +
    "<div onclick='InputMinAttributes()'><code>&lt;input <b>min</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Min-Attributes'></div> </div>" +
    "<div onclick='InputMinlengthAttributes()'><code>&lt;input <b>minlength</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Minlength-Attributes'></div> </div>" +
    "<div onclick='InputMultipleAttributes()'><code>&lt;input <b>multiple</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Multiple-Attributes'></div> </div>" +
    "<div onclick='InputNameAttributes()'><code>&lt;input <b>name</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Name-Attributes'></div> </div>" +
    "<div onclick='InputPatternAttributes()'><code>&lt;input <b>pattern</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Pattern-Attributes'></div> </div>" +
    "<div onclick='InputPlaceholderAttributes()'><code>&lt;input <b>placeholder</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Placeholder-Attributes'></div> </div>" +
    "<div onclick='InputPopovertargetAttributes()'><code>&lt;input <b>popovertarget</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Popovertarget-Attributes'></div> </div>" +
    "<div onclick='InputPopovertargetactionAttributes()'><code>&lt;input <b>popovertargetaction</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Popovertargetaction-Attributes'></div> </div>" +
    "<div onclick='InputReadonlyAttributes()'><code>&lt;input <b>readonly</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Readonly-Attributes'></div> </div>" +
    "<div onclick='InputRequiredAttributes()'><code>&lt;input <b>required</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Required-Attributes'></div> </div>" +
    "<div onclick='InputSizeAttributes()'><code>&lt;input <b>size</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Size-Attributes'></div> </div>" +
    "<div onclick='InputSourceAttributes()'><code>&lt;input <b>src</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Source-Attributes'></div> </div>" +
    "<div onclick='InputStepAttributes()'><code>&lt;input <b>step</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Step-Attributes'></div> </div>" +
    "<div onclick='InputTypeAttributes()'><code>&lt;input <b>type</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Type-Attributes'></div> </div>" +
    "<div onclick='InputValueAttributes()'><code>&lt;input <b>value</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Value-Attributes'></div> </div>" +
    "<div onclick='InputWidthAttributes()'><code>&lt;input <b>width</b>='<em>MyValue</em>'&gt;</code> <div id='Input-Width-Attributes'></div> </div>" +
    "</div>" +

    "<div>Default CSS Setting(s) <div><code>NONE</code></div> </div>";
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT GLOBAL ATTRIBUTES //
function InputGlobalAttributes() {
  let myVisibility = document.getElementById("Input-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Global-Attributes").innerHTML =
    HTMLGlobalAttributes().accesskey + HTMLGlobalAttributes().class + HTMLGlobalAttributes().contenteditable + HTMLGlobalAttributes().data + HTMLGlobalAttributes().direction +
    HTMLGlobalAttributes().draggable + HTMLGlobalAttributes().enterkeyhint + HTMLGlobalAttributes().hidden + HTMLGlobalAttributes().identifier + HTMLGlobalAttributes().inert +
    HTMLGlobalAttributes().inputmode + HTMLGlobalAttributes().language + HTMLGlobalAttributes().popover + HTMLGlobalAttributes().spellcheck + HTMLGlobalAttributes().style +
    HTMLGlobalAttributes().tabindex + HTMLGlobalAttributes().title + HTMLGlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT EVENT ATTRIBUTES //
function InputEventAttributes() {
  let myVisibility = document.getElementById("Input-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Event-Attributes").innerHTML =
    HTMLEventAttributes().windows + HTMLEventAttributes().form + HTMLEventAttributes().keyboard + HTMLEventAttributes().mouse + HTMLEventAttributes().drag +
    HTMLEventAttributes().clipboard + HTMLEventAttributes().media + HTMLEventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT ACCEPT ATTRIBUTES //
function InputAcceptAttributes() {
  let myVisibility = document.getElementById("Input-Accept-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Accept-Attributes").innerHTML = kiv().myAccept;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT ALTERNATE ATTRIBUTES //
function InputAlternateAttributes() {
  let myVisibility = document.getElementById("Input-Alternate-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Alternate-Attributes").innerHTML = kiv().myAlternate;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT AUTOCOMPLETE ATTRIBUTES //
function InputAutocompleteAttributes() {
  let myVisibility = document.getElementById("Input-Autocomplete-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Autocomplete-Attributes").innerHTML = kiv().myAutocomplete;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT AUTOFOCUS ATTRIBUTES //
function InputAutofocusAttributes() {
  let myVisibility = document.getElementById("Input-Autofocus-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Autofocus-Attributes").innerHTML = kiv().myAutofocus;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT CHECKED ATTRIBUTES //
function InputCheckedAttributes() {
  let myVisibility = document.getElementById("Input-Checked-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Checked-Attributes").innerHTML = BooleanAttributes().myChecked;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT DIRECTIONNAME ATTRIBUTES //
function InputDirectionNameAttributes() {
  let myVisibility = document.getElementById("Input-DirectionName-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-DirectionName-Attributes").innerHTML = kiv().myDirectionName;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT DISABLED ATTRIBUTES //
function InputDisabledAttributes() {
  let myVisibility = document.getElementById("Input-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Disabled-Attributes").innerHTML = BooleanAttributes().myDisabled;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT FORM ATTRIBUTES //
function InputFormAttributes() {
  let myVisibility = document.getElementById("Input-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Form-Attributes").innerHTML = kiv().myForm;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT FORMACTION ATTRIBUTES //
function InputFormactionAttributes() {
  let myVisibility = document.getElementById("Input-Formaction-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formaction-Attributes").innerHTML = kiv().myFormaction;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT FORMENCTYPE ATTRIBUTES //
function InputFormenctypeAttributes() {
  let myVisibility = document.getElementById("Input-Formenctype-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formenctype-Attributes").innerHTML = kiv().myFormenctype;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT FORMMETHOD ATTRIBUTES //
function InputFormmethodAttributes() {
  let myVisibility = document.getElementById("Input-Formmethod-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formmethod-Attributes").innerHTML = kiv().myFormmethod;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT FORMNOVALIDATE ATTRIBUTES //
function InputFormnovalidateAttributes() {
  let myVisibility = document.getElementById("Input-Formnovalidate-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formnovalidate-Attributes").innerHTML = kiv().myFormnovalidate;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT FORMTARGET ATTRIBUTES //
function InputFormtargetAttributes() {
  let myVisibility = document.getElementById("Input-Formtarget-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formtarget-Attributes").innerHTML = kiv().myFormtarget;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT HEIGHT ATTRIBUTES //
function InputHeightAttributes() {
  let myVisibility = document.getElementById("Input-Height-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Height-Attributes").innerHTML = DimensionAttributes().myHeight;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT LIST ATTRIBUTES //
function InputListAttributes() {
  let myVisibility = document.getElementById("Input-List-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-List-Attributes").innerHTML = kiv().myList;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT MAX ATTRIBUTES //
function InputMaxAttributes() {
  let myVisibility = document.getElementById("Input-Max-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Max-Attributes").innerHTML = ValueAttributes().myMax;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT MAXLENGTH ATTRIBUTES //
function InputMaxlengthAttributes() {
  let myVisibility = document.getElementById("Input-Maxlength-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Maxlength-Attributes").innerHTML = ValueAttributes().myMaxlength;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT MIN ATTRIBUTES //
function InputMinAttributes() {
  let myVisibility = document.getElementById("Input-Min-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Min-Attributes").innerHTML = ValueAttributes().myMin;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT MINLENGTH ATTRIBUTES //
function InputMinlengthAttributes() {
  let myVisibility = document.getElementById("Input-Minlength-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Minlength-Attributes").innerHTML = ValueAttributes().myMinlength;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT MULTIPLE ATTRIBUTES //
function InputMultipleAttributes() {
  let myVisibility = document.getElementById("Input-Multiple-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Multiple-Attributes").innerHTML = BooleanAttributes().myMultiple;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT NAME ATTRIBUTES //
function InputNameAttributes() {
  let myVisibility = document.getElementById("Input-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Name-Attributes").innerHTML = kiv().myName;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT PATTERN ATTRIBUTES //
function InputPatternAttributes() {
  let myVisibility = document.getElementById("Input-Pattern-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Pattern-Attributes").innerHTML = ValueAttributes().myPattern;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT PLACEHOLDER ATTRIBUTES //
function InputPlaceholderAttributes() {
  let myVisibility = document.getElementById("Input-Placeholder-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Placeholder-Attributes").innerHTML = kiv().myPlaceholder;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT POPOVERTARGET ATTRIBUTES //
function InputPopovertargetAttributes() {
  let myVisibility = document.getElementById("Input-Popovertarget-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Popovertarget-Attributes").innerHTML = kiv().myPopovertarget;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT POPOVERTARGETACTION ATTRIBUTES //
function InputPopovertargetactionAttributes() {
  let myVisibility = document.getElementById("Input-Popovertargetaction-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Popovertargetaction-Attributes").innerHTML = kiv().myPopovertargetaction;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT READONLY ATTRIBUTES //
function InputReadonlyAttributes() {
  let myVisibility = document.getElementById("Input-Readonly-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Readonly-Attributes").innerHTML = BooleanAttributes().myReadonly;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT REQUIRED ATTRIBUTES //
function InputRequiredAttributes() {
  let myVisibility = document.getElementById("Input-Required-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Required-Attributes").innerHTML = BooleanAttributes().myRequired;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT SIZE ATTRIBUTES //
function InputSizeAttributes() {
  let myVisibility = document.getElementById("Input-Size-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Size-Attributes").innerHTML = DimensionAttributes().mySize;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT SOURCE ATTRIBUTES //
function InputSourceAttributes() {
  let myVisibility = document.getElementById("Input-Source-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Source-Attributes").innerHTML = kiv().mySource;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT STEP ATTRIBUTES //
function InputStepAttributes() {
  let myVisibility = document.getElementById("Input-Step-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Step-Attributes").innerHTML = ValueAttributes().myStep;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT TYPE ATTRIBUTES //
function InputTypeAttributes() {
  let myVisibility = document.getElementById("Input-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Type-Attributes").innerHTML = kiv().myType;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT VALUE ATTRIBUTES //
function InputValueAttributes() {
  let myVisibility = document.getElementById("Input-Value-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Value-Attributes").innerHTML = ValueAttributes().myValue;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT WIDTH ATTRIBUTES //
function InputWidthAttributes() {
  let myVisibility = document.getElementById("Input-Width-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Width-Attributes").innerHTML = DimensionAttributes().myWidth;
  }
  else { myVisibility.style.display = "none"; }
}












//////////////////////
// HTML DECLARATION //
//////////////////////
function HTMLDeclaration() {
  let myVisibility = document.getElementById("HTML-Declaration");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

//////////////
// HTML TAG //
//////////////
function HTMLTag() {
    let myVisibility = document.getElementById("HTML-Tag");
    if (myVisibility.style.display === "none") {
      myVisibility.style.display = "block";
    }
    else { myVisibility.style.display = "none"; }
  }