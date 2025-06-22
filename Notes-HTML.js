////////////////////////////
// HTML GLOBAL ATTRIBUTES //
////////////////////////////
function GlobalAttributes() {
  const myGlobalAttributes = {
    accesskey:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>accesskey</b>=\"<em>myAccessKey</em>\"&gt;</code>" +
      "  <div>The <code>accesskey</code> attribute specifies a shortcut key to activate/focus an element</div>" +
      "  <div>The <code>accesskey</code> attribute value must be a single character (a letter or a digit)</div>" +
      "  <table>" +
      "    <tr><th><code>myAccessKey</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td rowspan=\"3\"><code><em>Character</em></code></td>" +
      "        <td>Any single character that specifies the shortcut key to activate/focus the element<br>" +
      "            Example: <code>accesskey=\"<b>S</b>\", accesskey=\"<b>s</b>\", accesskey=\"<b>4</b>\"</code>, etc." +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Applies additional key</b><br>" +
      "      Using <code>accesskey</code> is difficult because they may conflict with other key standards in the browser<br>" +
      "      To avoid this problem, most browsers will use <code>accesskey</code> only if pressed together with their own additional key<br>" +
      "      &rarr; Chrome, Safari, Edge, IE, Opera 15+: <code><kbd>ALT</kbd> + <em>Character</em></code><br>" +
      "      &rarr; Opera prior version 15: <code><kbd>SHIFT</kbd> + <kbd>ESC</kbd> + <em>Character</em></code><br>" +
      "      &rarr; Firefox: <code><kbd>ALT</kbd> + <kbd>SHIFT</kbd> + <em>Character</em></code>" +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Not applicable for all international languages</b><br>" +
      "      Adapting <code>accesskey</code> to all international languages are difficult<br>" +
      "      The <code>accesskey</code> value may not be present on all keyboards<br>" +
      "      Therefore, it is advised not to use <code>accesskey</code>" +
      "    </td></tr>" +
      "  </table>" +
      "</div>",

    class:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>class</b>=\"<em>myClass</em>\"&gt;</code>" +
      "  <div>The <code>class</code> attribute specifies one or more class names for an element</div>" +
      "  <table>" +
      "    <tr><th><code>myClass</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td rowspan=\"4\"><code><em>String</em></code></td>" +
      "        <td>Specifies one or more class names for an element<br>" +
      "            Example; <code>class=\"<b>myClass</b>\", class=\"<b>Total</b>\", class=\"<b>National-3</b>\",</code> etc." +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Naming convention for class</b><br>" +
      "      The class names must begin with a letter A-Z or a-z<br>" +
      "      The class names can be followed by:<br>" +
      "      &rarr; Letters (A-Za-z): <code>myClass</code><br>" +
      "      &rarr; Digits (0-9): <code>myClass2</code><br>" +
      "      &rarr; Hyphens (\"-\"): <code>my-Class</code><br>" +
      "      &rarr; Underscores (\"_\"): <code>my_Class</code>" +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Syntax of writing multiple classes for an element</b><br>" +
      "      To specify multiple classes, separate the class names with a space<br>" +
      "      This allows users to combine several CSS classes for one HTML element<br>" +
      "      Example; <code>&lt;<em>myElement</em> class=\"<b>myClass1 myClass2 myClass3</b>\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Mostly used as node</b><br>" +
      "      The <code>class</code> attribute is mostly used to point to a class in a style sheet<br>" +
      "      It can also be used by a JavaScript (via the HTML DOM) to make changes to HTML elements with a specified class" +
      "    </td></tr>" +
      "  </table>" +
      "</div>",

    contenteditable:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>contenteditable</b>=\"<em>myContentEditable</em>\"&gt;</code>" +
      "  <div>The <code>contenteditable</code> attribute specifies whether the content of an element is editable or not</div>" +
      "  <div>When the <code>contenteditable</code> attribute is not set on an element, the element will inherit it from its parent</div>" +
      "  <table>" +
      "    <tr><th><code>myContentEditable</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code>true</code></td><td>Specifies that the element is editable</td></tr>" +
      "    <tr><td><code>false</code></td><td>Specifies that the element is not editable</td></tr>" +
      "  </table>" +
      "</div>",

    data:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>data-*</b>=\"<em>myData</em>\"&gt;</code>" +
      "  <div>The <code>data-*</code> attributes is used to store custom data private to the page or application</div>" +
      "  <div>The <code>data-*</code> attributes gives user the ability to embed custom data attributes on all HTML elements</div>" +
      "  <div>The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience</div>" +
      "  <div>This is done without any Ajax calls or server-side database queries</div>" +
      "  <table>" +
      "    <tr><th><code>myData</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td rowspan=\"2\"><code><em>String</em></code></td>" +
      "        <td>Specifies the value of the attribute<br>" +
      "            Example; <code>data-<em>mammal</em>=\"<b>Horse</b>\", data-<em>bird</em>=\"<b>Owl</b>\", data-<em>number</em>=\"<b>5</b>\"</code>, etc." +
      "    </td></tr>" +
      "    <tr><td><b>All parts of the attribute</b><br>" +
      "      The <code>data-*</code> attributes consist of two parts:<br>" +
      "      &rarr; The <code>*</code> should not contain any uppercase letters, and must be at least one character long after the prefix <code>\"data-\"</code><br>" +
      "      &rarr; The value <code><em>myData</em></code> can be any string" +
      "    </td></tr>" +
      "  </table>" +
      "</div>",

    direction:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>dir</b>=\"<em>myDirection</em>\"&gt;</code>" +
      "  <div>The <code>dir</code> attribute specifies the text direction of the element's content</div>" +
      "  <table>" +
      "    <tr><th><code>myDirection</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code>ltr</code></td><td><b>[Default]</b> Specifies left-to-right text direction</td></tr>" +
      "    <tr><td><code>rtl</code></td><td>Specifies right-to-left text direction</td></tr>" +
      "    <tr><td><code>auto</code></td><td>Let the browser figure out the text direction, based on the content<br>" +
      "            (Only recommended if the text direction is unknown)" +
      "    </td></tr>" +
      "  </table>" +
      "</div>",

    draggable:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>draggable</b>=\"<em>myDraggable</em>\"&gt;</code>" +
      "  <div>The <code>draggable</code> attribute specifies whether an element is draggable or not</div>" +
      "  <div>Links and images are draggable by default</div>" +
      "  <div></div>The <code>draggable</code> attribute is often used in drag and drop operations" +
      "  <table>" +
      "    <tr><th><code>myDraggable</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code>true</code></td><td>Specifies that the element is draggable</td></tr>" +
      "    <tr><td><code>false</code></td><td>Specifies that the element is not draggable</td></tr>" +
      "    <tr><td><code>auto</code></td><td>Uses the default behavior of the browser</td></tr>" +
      "  </table>" +
      "</div>",

    enterkeyhint:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>enterkeyhint</b>=\"<em>myEnterKeyHint</em>\"&gt;</code>" +
      "  <div>The <code>enterkeyhint</code> attribute allows user to change the appearance of the \"<kbd>Enter</kbd>\" key on a virtual keyboard</div>" +
      "  <table>" +
      "    <tr><th><code>myEnterKeyHint</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code>done</code></td><td>The enter key says \"Done\"</td></tr>" +
      "    <tr><td><code>enter</code></td><td>The enter key says \"Enter\"</td></tr>" +
      "    <tr><td><code>go</code></td><td>The enter key says \"Go\"</td></tr>" +
      "    <tr><td><code>next</code></td><td>The enter key says \"Next\"</td></tr>" +
      "    <tr><td><code>previous</code></td><td>The enter key says \"Previous\"</td></tr>" +
      "    <tr><td><code>search</code></td><td>The enter key says \"Search\"</td></tr>" +
      "    <tr><td><code>send</code></td><td>The enter key says \"Send\"</td></tr>" +
      "  </table>" +
      "</div>",

    hidden:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>hidden</b>&gt;</code>" +
      "  <div>The <code>hidden</code> attribute is a boolean attribute, which specifies that an element is not yet, or is no longer, relevant</div>" +
      "  <div>Browsers should not display elements that have the <code>hidden</code> attribute specified</div>" +
      "  <div>The <code>hidden</code> attribute can also be used to keep a user from seeing an element until some other condition has been met</div>" +
      "  <div>Then, a JavaScript could remove the <code>hidden</code> attribute, and make the element visible</div>" +
      "</div>",

    identifier:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>id</b>=\"<em>myId</em>\"&gt;</code>" +
      "  <div>The <code>id</code> attribute specifies a unique id for an HTML element</div>" +
      "  <table>" +
      "    <tr><th><code>myId</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td rowspan=\"4\"><code><em>String</em></code></td>" +
      "        <td>Specifies a unique id for the element<br>" +
      "            Example; <code>id=\"<b>myId</b>\", id=\"<b>Grade</b>\", class=\"<b>Team-5</b>\",</code> etc." +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Naming convention for id</b><br>" +
      "      The identifier names must begin with a letter A-Z or a-z<br>" +
      "      The identifier names can be followed by:<br>" +
      "      &rarr; Letters (A-Za-z): <code>myId</code><br>" +
      "      &rarr; Digits (0-9): <code>myId2</code><br>" +
      "      &rarr; Hyphens (\"-\"): <code>my-Id</code><br>" +
      "      &rarr; Underscores (\"_\"): <code>my_Id</code>" +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Unique id</b><br>" +
      "      The value must be unique within the HTML document, which only one specific id can exist in the document" +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Mostly used as node</b><br>" +
      "      The <code>id</code> attribute is mostly used to point to an id in a style sheet<br>" +
      "      It can also be used by a JavaScript (via the HTML DOM) to make changes to HTML elements with a specified id" +
      "    </td></tr>" +
      "  </table>" +
      "</div>",

    inert:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>inert</b>&gt;</code>" +
      "  <div>The <code>inert</code> attribute is a boolean attribute, which disables an element and all the elements inside</div>" +
      "  <div>The elements are still visible, but they have no function (Eg: buttons and links cannot be clicked, input fields are disabled, etc.)</div>" +
      "  <div>The elements are also ignored by screen readers</div>" +
      "</div>",

    inputmode:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>inputmode</b>=\"<em>myInputMode</em>\"&gt;</code>" +
      "  <div>The <code>inputmode</code> attribute allows user to change the appearance of the keyboard on a phone or tablet (any device with a virtual keyboard)</div>" +
      "  <table>" +
      "    <tr><th><code>myInputMode</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code>decimal</code></td><td>Numeric only keyboard, usually also a comma key</td></tr>" +
      "    <tr><td><code>email</code></td><td>Text keyboard, with keys typically for e-mail addresses like <kbd>@</kbd></td></tr>" +
      "    <tr><td><code>none</code></td><td>No keyboard should appear</td></tr>" +
      "    <tr><td><code>numeric</code></td><td>Numeric only keyboard</td></tr>" +
      "    <tr><td><code>search</code></td><td>Text keyboard, usually the <kbd>Enter</kbd> key says <kbd>Go</kbd></td></tr>" +
      "    <tr><td><code>tel</code></td><td>Numeric only keyboard, usually also with <kbd>+, *, #</kbd> keys</td></tr>" +
      "    <tr><td><code>text</code></td><td><b>[Default]</b> Text keyboard</td></tr>" +
      "    <tr><td><code>url</code></td><td>Text keyboard, with keys typically for web addresses like <kbd>[.], [/], [.com]</kbd></td></tr>" +
      "  </table>" +
      "</div>",

    language:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>lang</b>=\"<em>myLanguage</em>\"&gt;</code>" +
      "  <div>The <code>lang</code> attribute specifies the language of the element's content</div>" +
      "  <div>Common examples are <code>\"en\"</code> for English, <code>\"fr\"</code> for French, and so on</div>" +
      "  <table>" +
      "    <tr><th><code>myLanguage</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code><a href=\"https://www.w3schools.com/tags/ref_language_codes.asp\" target=\"_blank\"><em>HTML Language Codes</em></a></code></td>" +
      "        <td>Specifies the language code for the element's content</td>" +
      "    </tr>" +
      "  </table>" +
      "</div>",

    popover:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>popover</b>&gt;</code>" +
      "  <div>The <code>popover</code> attribute is a boolean attribute, which defines an element as a popover element</div>" +
      "  <div>When it is invoked, it will be placed on top of the content, not interfere with the position of other HTML elements</div>" +
      "  <div>A <code>popover</code> element will be invisible until it is invoked by another element</div>" +
      "  <div>The other element must have a <code>popovertarget</code> attribute where the value refers to the popover element's id</div>" +
      "  <div>The popover element will be placed on top of all other content, and by clicking the popovertarget element, the popover element will toggle between showing and hiding</div>" +
      "</div>",

    spellcheck:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>spellcheck</b>=\"<em>mySpellCheck</em>\"&gt;</code>" +
      "  <div>The <code>spellcheck</code> attribute specifies whether the element is to have its spelling and grammar checked or not</div>" +
      "  <div>The following can be spellchecked; text values in input elements (not include password), text in textarea elements, text in editable elements</div>" +
      "  <table>" +
      "    <tr><th><code>mySpellCheck</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code>true</code></td><td>The element is to have its spelling and grammar checked</td></tr>" +
      "    <tr><td><code>false</code></td><td>The element is not to be checked</td></tr>" +
      "  </table>" +
      "</div>",

    style:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>style</b>=\"<em>myStyle</em>\"&gt;</code>" +
      "  <div>The <code>style</code> attribute specifies an inline style for an element</div>" +
      "  <table>" +
      "    <tr><th><code>myStyle</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td rowspan=\"3\"><code><a href=\"Notes-CSS.html\" target=\"_blank\"><em>CSS Properties</em></a></code></td>" +
      "        <td>Specifies an inline style for an element</td>" +
      "    </tr>" +
      "    <tr><td>" +
      "      <b>Syntax of writing multiple properties and values</b><br>" +
      "      One or more CSS properties and values separated by semicolons<br>" +
      "      Example, <code>&lt;<em>myElement</em> style=\"<b>color:blue; text-align:center;</b>\"&gt;" +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Overrides any style set globally</b><br>" +
      "      The <code>style</code> attribute will override any style set globally, like styles specified in the <code>&lt;style&gt;</code> tag or in an external style sheet<br>" +
      "      The <code>style</code> attribute can be used on any HTML element" +
      "    </td></tr>" +
      "  </table>" +
      "</div>",

    tabindex:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>tabindex</b>=\"<em>myTabIndex</em>\"&gt;</code>" +
      "  <div>The <code>tabindex</code> attribute specifies the tab order of an element (when the \"tab\" button is used for navigating)</div>" +
      "  <div>The <code>tabindex</code> attribute can be used on any HTML element</div>" +
      "  <table>" +
      "    <tr><th><code>myTabIndex</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code><em>Number</em></code></td><td>Specifies the tabbing order of the element (1 is first)</td></tr>" +
      "  </table>" +
      "</div>",

    title:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>title</b>=\"<em>myTitle</em>\"&gt;</code>" +
      "  <div>The <code>title</code> attribute specifies extra information about an element</div>" +
      "  <div>The information is most often shown as a tooltip text when the mouse moves over the element</div>" +
      "  <table>" +
      "    <tr><th><code>myTitle</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code><em>String</em></code></td><td>A tooltip text for an element</td></tr>" +
      "  </table>" +
      "</div>",

    translate:
      "<div class=\"Box-Attributes\"><code>&lt;<em>MyElement</em> <b>translate</b>=\"<em>myTranslate</em>\"&gt;</code>" +
      "  <div>The <code>translate</code> attribute specifies whether the content of an element should be translated or not</div>" +
      "  <table>" +
      "    <tr><th><code>myTranslate</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td><code><em>yes</em></code></td><td>Specifies that the content of the element should be translated</td></tr>" +
      "    <tr><td><code><em>no</em></code></td><td>Specifies that the content of the element must not be translated</td></tr>" +
      "  </table>" +
      "</div>"
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

/////////////////////////////
// HTML BOOLEAN ATTRIBUTES //
/////////////////////////////
function BooleanAttributes() {
  /* LIST OF RELATED ELEMENTS */
  const myRelatedElements = {
    async         : "<div>Applied tag(s): <code>&lt;script&gt;</code></div>",
    autofocus     : "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;</code></div>",
    checked       : "<div>Applied tag(s): <code>&lt;input&gt;</code></div>",
    defer         : "<div>Applied tag(s): <code>&lt;script&gt;</code></div>",
    disabled      : "<div>Applied tag(s): <code>&lt;button&gt;, &lt;fieldset&gt;, &lt;input&gt;, &lt;optgroup&gt;, &lt;option&gt;, &lt;select&gt;, &lt;textarea&gt;</code></div>",
    formnovalidate: "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;</code></div>",
    ismap         : "<div>Applied tag(s): <code>&lt;img&gt;</code></div>",
    multiple      : "<div>Applied tag(s): <code>&lt;input&gt;, &lt;select&gt;</code></div>",
    novalidate    : "<div>Applied tag(s): <code>&lt;form&gt;</code></div>",
    readonly      : "<div>Applied tag(s): <code>&lt;input&gt;, &lt;textarea&gt;</code></div>",
    required      : "<div>Applied tag(s): <code>&lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;</code></div>",
    reversed      : "<div>Applied tag(s): <code>&lt;ol&gt;</code></div>",
    selected      : "<div>Applied tag(s): <code>&lt;option&gt;</code></div>"
  };

  /* NOTES OF BOOLEAN ATTRIBUTES */
  const Disabled = {
    Description:
      "A disabled element is unusable and un-clickable<br>" +
      "The <code>disabled</code> attribute can be set to keep a user from using the element until some other condition has been met (like selecting a checkbox, etc.)<br>" +
      "Then, a JavaScript could remove the disabled value, and make the element usable again"
  };

  const Parse = {
    Insight1:
      "<b>Required to include <code>src</code> attribute</b><br>" +
      "These <code>async</code> and <code>defer</code> attributes are only for external scripts and should only be used if the <code>src</code> attribute is present",
    Insight2:
      "<b>Several ways an external script can be executed</b><br>" +
      "If <code>async</code> is present: The script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes)<br>" +
      "If <code>defer</code> is present (without <code>async</code>): The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing<br>" +
      "If neither <code>async</code> or <code>defer</code> is present: The script is downloaded and executed immediately, blocking parsing until the script is completed"
  };

  /* LIST OF BOOLEAN ATTRIBUTES */
  const myBoolean = {
    async: {
      scriptelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>async</code> attribute of the <code>&lt;script&gt;</code> tag specifies the script will be downloaded in parallel to parsing the page, and executed as soon as it is available</div>" +
        "  <div>The parsing of the page is interrupted once the script is downloaded completely, and then the script is executed, before the parsing of the rest of the page continues</div>" +
        "  <div>" + Parse.Insight1 + "</div>" +
        "  <div>" + Parse.Insight2 + "</div>" +
           myRelatedElements.async +
        "</div>"
    },

    autofocus: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>autofocus</code> attribute of the <code>&lt;button&gt;</code> tag specifies that a button should automatically get focus when the page loads</div>" +
           myRelatedElements.autofocus +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>autofocus</code> attribute of the <code>&lt;input&gt;</code> tag specifies that an <code>&lt;input&gt;</code> element should automatically get focus when the page loads</div>" +
           myRelatedElements.autofocus +
        "</div>",

      selectelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>autofocus</code> attribute of the <code>&lt;select&gt;</code> tag specifies that the drop-down list should automatically get focus when the page loads</div>" +
           myRelatedElements.autofocus +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>autofocus</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies the text area should automatically get focus when the page loads</div>" +
           myRelatedElements.autofocus +
        "</div>"
    },

    checked: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>checked</code> attribute of the <code>&lt;input&gt;</code> tag specifies that an <code>&lt;input&gt;</code> element should be pre-selected (checked) when the page loads</div>" +
        "  <div>The checked attribute can be used with <code>&lt;input type=\"checkbox\"&gt; and &lt;input type=\"radio\"&gt;</code></div>" +
        "  <div>The checked attribute can also be set after the page load, with a JavaScript</div>" +
           myRelatedElements.checked +
        "</div>"
    },

    defer: {
      scriptelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>defer</code> attribute of the <code>&lt;script&gt;</code> tag specifies the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing</div>" +
        "  <div>" + Parse.Insight1 + "</div>" +
        "  <div>" + Parse.Insight2 + "</div>" +
           myRelatedElements.defer +
        "</div>"
    },

    disabled: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>disabled</code> attribute of the <code>&lt;button&gt;</code> tag specifies that the button should be disabled</div>" +
        "  <div>" + Disabled.Description + "</div>" +
           myRelatedElements.disabled +
        "</div>",

      fieldsetelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>disabled</code> attribute of the <code>&lt;fieldset&gt;</code> tag specifies that a group of related form elements (a fieldset) should be disabled</div>" +
        "  <div>" + Disabled.Description + "</div>" +
           myRelatedElements.disabled +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>disabled</code> attribute of the <code>&lt;input&gt;</code> tag specifies the <code>&lt;input&gt;</code> element should be disabled</div>" +
        "  <div>" + Disabled.Description + "</div>" +
        "  <div>Disabled <code>&lt;input&gt;</code> elements in a form will not be submitted</div>" +
           myRelatedElements.disabled +
        "</div>",

      optgroupelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>disabled</code> attribute of the <code>&lt;optgroup&gt;</code> tag specifies that an option-group should be disabled</div>" +
        "  <div>" + Disabled.Description + "</div>" +
           myRelatedElements.disabled +
        "</div>",

      optionelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>disabled</code> attribute of the <code>&lt;option&gt;</code> tag specifies that an option should be disabled</div>" +
        "  <div>" + Disabled.Description + "</div>" +
           myRelatedElements.disabled +
        "</div>",

      selectelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>disabled</code> attribute of the <code>&lt;select&gt;</code> tag specifies that the drop-down list should be disabled</div>" +
        "  <div>" + Disabled.Description + "</div>" +
           myRelatedElements.disabled +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>disabled</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies that the text area should be disabled</div>" +
        "  <div>" + Disabled.Description + "</div>" +
           myRelatedElements.disabled +
        "</div>"
    },

    formnovalidate: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formnovalidate</code> attribute of the <code>&lt;button&gt;</code> tag specifies that the form-data should not be validated on submission</div>" +
        "  <div>The <code>formnovalidate</code> attribute overrides the <code>novalidate</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formnovalidate</code> attribute can be used with <code>type=\"submit\"</code></div>" +
           myRelatedElements.formnovalidate +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formnovalidate</code> attribute of the <code>&lt;input&gt;</code> tag specifies the input element should not be validated when submitted</div>" +
        "  <div>The <code>formnovalidate</code> attribute overrides the <code>novalidate</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formnovalidate</code> attribute can be used with <code>type=\"submit\"</code></div>" +
           myRelatedElements.formnovalidate +
        "</div>"
    },

    ismap: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>ismap</code> attribute of the <code>&lt;img&gt;</code> tag specifies that the image is part of a server-side image map (an image map is an image with clickable areas)</div>" +
        "  <div>When clicking on a server-side image map, the click coordinates are sent to the server as a URL query string</div>" +
        "  <div>The <code>ismap</code> attribute is allowed only if the <code>&lt;img&gt;</code> element is a descendant of an <code>&lt;a&gt;</code> element with a valid <code>href</code> attribute</div>" +
           myRelatedElements.ismap +
        "</div>"
    },

    multiple: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>multiple</code> attribute of the <code>&lt;input&gt;</code> tag specifies that the user is allowed to enter more than one value in the input element</div>" +
        "  <div>The <code>multiple</code> attribute works with the following input types: email, and file</div>" +
        "  <div>For <code>&lt;input type=\"file\"&gt;</code>: To select multiple files, hold down the <kbd>CTRL</kbd> or <kbd>SHIFT</kbd> key while selecting</div>" +
        "  <div>For <code>&lt;input type=\"email\"&gt;</code>: Separate each email with a comma, like: mail@example.com, mail2@example.com, mail3@example.com in the email field</div>" +
           myRelatedElements.multiple +
        "</div>",

      selectelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>multiple</code> attribute of the <code>&lt;select&gt;</code> tag specifies multiple options can be selected at once</div>" +
        "  <div>Selecting multiple options vary in different operating systems and browsers</div>" +
        "  <div>For windows: Hold down the <kbd>CTRL</kbd> button to select multiple options</div>" +
        "  <div>For Mac: Hold down the <kbd>COMMAND</kbd> button to select multiple options</div>" +
        "  <div>Since there are different way of doing this and the user have to be informed that multiple selection is available, it is more user-friendly to use checkboxes instead</div>" +
           myRelatedElements.multiple +
        "</div>"
    },

    novalidate: {
      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>novalidate</code> attribute of the <code>&lt;form&gt;</code> tag specifies that the form-data (input) should not be validated when submitted</div>" +
           myRelatedElements.novalidate +
        "</div>"
    },

    readonly: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>readonly</code> attribute of the <code>&lt;input&gt;</code> tag specifies that an input field is read-only</div>" +
        "  <div>A read-only input field cannot be modified, however, a user can tab to it, highlight it, and copy the text from it</div>" +
        "  <div>The <code>readonly</code> attribute can be set to keep a user from changing the value until some other conditions have been met (like selecting a checkbox, etc.)</div>" +
        "  <div>Then, a JavaScript can remove the readonly value, and make the input field editable</div>" +
        "  <div>A form will still submit an input field that is readonly, but will not submit an input field that is disabled</div>" +
           myRelatedElements.readonly +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>readonly</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies that a text area field is read-only</div>" +
        "  <div>A read-only text area field cannot be modified, however, a user can tab to it, highlight it, and copy the text from it</div>" +
        "  <div>The <code>readonly</code> attribute can be set to keep a user from using a text area until some other condition has been met (like selecting a checkbox, etc.)</div>" +
        "  <div>Then, a JavaScript can remove the readonly value, and make the text area field editable</div>" +
           myRelatedElements.readonly +
        "</div>"
    },

    required: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>required</code> attribute of the <code>&lt;input&gt;</code> tag specifies that an input field must be filled out before submitting the form</div>" +
        "  <div>The <code>required</code> attribute works with the following input types: text, search, url, tel, email, password, date pickers, number, checkbox, radio, and file</div>" +
           myRelatedElements.required +
        "</div>",

      selectelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>required</code> attribute of the <code>&lt;select&gt;</code> tag specifies that a drop-dwon list field must be filled out before submitting the form</div>" +
           myRelatedElements.required +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>required</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies that a text area field must be filled out before submitting the form</div>" +
           myRelatedElements.required +
        "</div>"
    },

    reversed: {
      olelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>reversed</code> attribute of the <code>&lt;ol&gt;</code> tag specifies that the list order should be descending instead of ascending</div>" +
           myRelatedElements.reversed +
        "</div>"
    },

    selected: {
      optionelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>selected</code> attribute of the <code>&lt;option&gt;</code> tag specifies that an option should be pre-selected when the page loads</div>" +
        "  <div>The pre-selected option will be displayed first in the drop-down list</div>" +
        "  <div>The <code>selected</code> attribute can also be set after the page loads, with a JavaScript</div>" +
           myRelatedElements.selected +
        "</div>"
    },
  };
  return myBoolean;
}

///////////////////////////////
// HTML CHARACTER ATTRIBUTES //
///////////////////////////////
function CharacterAttributes(){
  /* LIST OF RELATED ELEMENTS */
  const myRelatedElements = {
    accept_charset: "<div>Applied tag(s): <code>&lt;form&gt;</code></div>",
    charset       : "<div>Applied tag(s): <code>&lt;meta&gt;</code></div>",
  };

  /* NOTES OF CHARACTER ATTRIBUTES */
  const Character = {
    Description1:
      "Specifies the character encoding<br>" +
      "In theory, any character encoding can be used, but no browser understands all of them<br>" +
      "The more widely a character encoding is used, the better the chance that a browser will understand it<br>" +
      "The HTML5 specification encourages web developers to use the UTF-8 character set<br>" +
      "The character set covers almost all of the characters and symbols in the world<br>" +
      "<code>UTF-8</code> represents character encoding for Unicode<br>" +
      "<code>ISO-8859-1</code> represents character encoding for the Latin alphabet"
  };

  /* LIST OF CHARACTER ATTRIBUTES */
  const myCharacter = {
    accept_charset: {
      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>accept-charset</code> attribute of the <code>&lt;form&gt;</code> tag specifies the character encodings that are to be used for the form submission</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Character Set</em></code></td><td>" + Character.Description1 + "</td></tr>" +
        "  </table>" +
           myRelatedElements.accept_charset +
        "</div>"
    },

    charset: {
      metaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>charset</code> attribute of the <code>&lt;meta&gt;</code> tag specifies the character encoding for the HTML document</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Character Set</em></code></td><td>" + Character.Description1 + "</td></tr>" +
        "  </table>" +
           myRelatedElements.charset +
        "</div>"
    }
  };

  return myCharacter;
}

///////////////////////////////
// HTML DIMENSION ATTRIBUTES //
///////////////////////////////
function DimensionAttributes() {
  /* LIST OF RELATED ELEMENTS */
  const myRelatedElements = {
    cols  : "<div>Applied tag(s): <code>&lt;textarea&gt;</code></div>",
    height: "<div>Applied tag(s): <code>&lt;img&gt;, &lt;input&gt;</code></div>",
    rows  : "<div>Applied tag(s): <code>&lt;textarea&gt;</code></div>",
    size  : "<div>Applied tag(s): <code>&lt;input&gt;, &lt;select&gt;</code></div>",
    width : "<div>Applied tag(s): <code>&lt;img&gt;, &lt;input&gt;</code></div>"
  };

  /* NOTES OF DIMENSION ATTRIBUTES */
  const Dimension = {
    Description1:
      "Always specify both the <code>height</code> and <code>width</code> attributes for images<br>" +
      "If height and width are set, the space required for the image is reserved when the page is loaded<br>" +
      "However, without these attributes, the browser does not know the size of the image, and cannot reserve the appropriate space to it<br>" +
      "The effect will be that the page layout will change during loading (while the images load)",

    Description2:
      "Downsizing a large image with the <code>height, width</code> attributes forces a user to download the large image (even if it looks small on the page)<br>" +
      "To avoid this, rescale the image with a program before using it on a page"
  };

  const Select = 
    "The number of visible options in the drop-down list<br>" +
    "Default value is 1<br>" +
    "If the <code>multiple</code> attribute is present, the default value is 4";

  /* LIST OF DIMENSION ATTRIBUTES */
  const myDimension = {
    cols: {
      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>cols</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies the visible width of a text area</div>" +
        "  <div>The size of a text area can also be set by the CSS <code>height</code> and <code>width</code> properties</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the width of the text area<br>Default value is 20</td></tr>" +
        "  </table>" +
           myRelatedElements.cols +
        "</div>"
    },

    height: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>height</code> attribute of the <code>&lt;img&gt;</code> tag specifies the height of an image element</div>" +
        "  <div>" + Dimension.Description2 + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Pixels</em></code></td><td>The height in pixels<br>Example; <code>&lt;img <b>height</b>=\"100\"&gt;</code></td></tr>" +
        "  </table>" +
           myRelatedElements.height +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>height</code> attribute of the <code>&lt;input&gt;</code> tag specifies the height of the input element</div>" +
        "  <div>The <code>height</code> attribute is used only with <code>&lt;input type=\"image\"&gt;</code></div>" +
        "  <div>" + Dimension.Description1  + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Pixels</em></code></td><td>The height in pixels<br>Example; <code>&lt;input <b>height</b>=\"100\"&gt;</code></td></tr>" +
        "  </table>" +
           myRelatedElements.height +
        "</div>"
    },

    rows: {
      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>rows</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies the visible height of a text area</div>" +
        "  <div>The size of a text area can also be set by the CSS <code>height</code> and <code>width</code> properties</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the height of the text area<br>Default value is 2</td></tr>" +
        "  </table>" +
           myRelatedElements.rows +
        "</div>"
    },

    size: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>size</code> attribute of the <code>&lt;input&gt;</code> tag specifies the visible width, in characters, of an input element</div>" +
        "  <div>The <code>size</code> attribute works with the following input types: text, search, tel, url, email, and password</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the width of an input element, in characters<br>Default value is 20</td></tr>" +
        "  </table>" +
           myRelatedElements.size +
        "</div>",

      selectelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>size</code> attribute of the <code>&lt;select&gt;</code> tag specifies the number of visible options in a drop-down list</div>" +
        "  <div>If the value of the <code>size</code> attribute is greater than 1, but lower than the total number of options in the list, " +
        "       the browser will add a scroll bar to indicate that there are more options to view" +
        "  </div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>" + Select + "</td></tr>" +
        "  </table>" +
           myRelatedElements.size +
        "</div>"
    },

    width: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>width</code> attribute of the <code>&lt;img&gt;</code> tag specifies the width of the img element</div>" +
        "  <div>" + Dimension.Description2  + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Pixels</em></code></td><td>The width in pixels<br>Example; <code>&lt;img <b>width</b>=\"100\"&gt;</code></td></tr>" +
        "  </table>" +
           myRelatedElements.width +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>width</code> attribute of the <code>&lt;input&gt;</code> tag specifies the width of the input element</div>" +
        "  <div>The <code>width</code> attribute is used only with <code>&lt;input type=\"image\"&gt;</code></div>" +
        "  <div>" + Dimension.Description1  + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Pixels</em></code></td><td>The width in pixels<br>Example; <code>&lt;input <b>width</b>=\"100\"&gt;</code></td></tr>" +
        "  </table>" +
           myRelatedElements.width +
        "</div>"
    }
  };
  return myDimension;
}

///////////////////////////////
// HTML HYPERLINK ATTRIBUTES //
///////////////////////////////
function HyperlinkAttributes() {
  /* LIST OF RELATED ELEMENTS */
  const myRelatedElements = {
    action    : "<div>Applied tag(s): <code>&lt;form&gt;</code></div>",
    cite      : "<div>Applied tag(s): <code>&lt;blockquote&gt;, &lt;del&gt;, &lt;ins&gt;, &lt;q&gt;</code></div>",
    formaction: "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;</code></div>",
    formtarget: "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;</code></div>",
    href      : "<div>Applied tag(s): <code>&lt;a&gt;, &lt;area&gt;, &lt;base&gt;, &lt;link&gt;</code></div>",
    longdesc  : "<div>Applied tag(s): <code>&lt;img&gt;</code></div>",
    target    : "<div>Applied tag(s): <code>&lt;a&gt;, &lt;area&gt;, &lt;base&gt;, &lt;form&gt;</code></div>",
    src       : "<div>Applied tag(s): <code>&lt;img&gt;, &lt;input&gt;, &lt;script&gt;</code></div>",
    srcset    : "<div>Applied tag(s): <code>&lt;img&gt;</code></div>"
  };

  /* NOTES OF HYPERLINK ATTRIBUTES */
  const Target = {
    Blank     : "Opens the link in a new window or tab",
    Frame_Name: "Opens the linked document in the named iframe",
    Parent    : "Opens the link in the parent frame",
    Self      : "<b>[Default]</b> Opens the link in the same frame as it was clicked",
    Top       : "Opens the link in the full body of the window"
  };

  const URL = {
    Absolute: "Points/Refers to another website<br>Example; <code>http://www.example.com</code>",
    Id      : "Link to an element with a specified id within the page<br>Example; <code>#myId</code>",
    Relative: "Points/Refers to a page within a website<br>Example; <code>example.html</code>"
  };

  /* LIST OF HYPERLINK ATTRIBUTES */
  const myHyperlink = {
    action: {
      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>action</code> attribute of the <code>&lt;form&gt;</code> tag specifies where to send the form-data when a form is submitted</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.action +
        "</div>"
    },

    cite: {
      blockquoteelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>cite</code> attribute of the <code>&lt;blockquote&gt;</code> tag specifies the source of a quotation</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.cite +
        "</div>",

      deleteelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>cite</code> attribute of the <code>&lt;del&gt;</code> tag specifies a URL to a document that explains the reason why the text was deleted/changed</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.cite +
        "</div>",

      insertelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>cite</code> attribute of the <code>&lt;ins&gt;</code> tag specifies a URL to a document that explains the reason why the text was inserted/changed</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.cite +
        "</div>",

      quoteelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>cite</code> attribute of the <code>&lt;q&gt;</code> tag specifies the source URL of a quote</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.cite +
        "</div>"
    },

    formaction: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formaction</code> attribute of the <code>&lt;button&gt;</code> tag specifies where to send the form-data when a form is submitted</div>" +
        "  <div>The <code>formaction</code> attribute overrides the <code>action</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formaction</code> attribute is used with <code>type=\"submit\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.formaction +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formaction</code> attribute of the <code>&lt;input&gt;</code> tag specifies the URL of the file that will process the input control when the form is submitted</div>" +
        "  <div>The <code>formaction</code> attribute overrides the <code>action</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formaction</code> attribute is used with <code>type=\"submit\" and type=\"image\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.formaction +
        "</div>"
    },

    formtarget: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formtarget</code> attribute of the <code>&lt;button&gt;</code> tag specifies where to display the response after submitting the form</div>" +
        "  <div>The <code>formtarget</code> attribute overrides the <code>target</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formtarget</code> attribute is used with <code>type=\"submit\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>_blank</code></td><td>" + Target.Blank + "</td></tr>" +
        "    <tr><td><code>_parent</code></td><td>" + Target.Parent + "</td></tr>" +
        "    <tr><td><code>_self</code></td><td>" + Target.Self + "</td></tr>" +
        "    <tr><td><code>_top</code></td><td>" + Target.Top + "</td></tr>" +
        "    <tr><td><code><em>Frame Name</em></code></td><td>" + Target.Frame_Name + "</td></tr>" +
        "  </table>" +
           myRelatedElements.formtarget +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formtarget</code> attribute of the <code>&lt;input&gt;</code> tag specifies a name or a keyword that indicates where to display the response that is received after submitting the form</div>" +
        "  <div>The <code>formtarget</code> attribute overrides the <code>target</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formtarget</code> attribute is used with <code>type=\"submit\" and type=\"image\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>_blank</code></td><td>" + Target.Blank + "</td></tr>" +
        "    <tr><td><code>_parent</code></td><td>" + Target.Parent + "</td></tr>" +
        "    <tr><td><code>_self</code></td><td>" + Target.Self + "</td></tr>" +
        "    <tr><td><code>_top</code></td><td>" + Target.Top + "</td></tr>" +
        "    <tr><td><code><em>Frame Name</em></code></td><td>" + Target.Frame_Name + "</td></tr>" +
        "  </table>" +
           myRelatedElements.formtarget +
        "</div>"
    },

    href: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>href</code> attribute of the <code>&lt;a&gt;</code> tag specifies the URL of the page the link goes to</div>" +
        "  <div>If the <code>href</code> attribute is not present, the <code>&lt;a&gt;</code> tag will not be a hyperlink</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Relative URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "    <tr><td><code><em>Specified ID</em></code></td><td>" + URL.Id + "</td></tr>" +
        "  </table>" +
           myRelatedElements.href +
        "</div>",

      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>href</code> attribute of the <code>&lt;area&gt;</code> tag specifies the hyperlink target for the area</div>" +
        "  <div>If the <code>href</code> attribute is not present, the <code>&lt;area&gt;</code> tag is not a hyperlink</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Relative URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "    <tr><td><code><em>Specified ID</em></code></td><td>" + URL.Id + "</td></tr>" +
        "  </table>" +
           myRelatedElements.href +
        "</div>",

      baseelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>href</code> attribute of the <code>&lt;base&gt;</code> tag specifies the base URL for all relative URLs on a page</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "  </table>" +
           myRelatedElements.href +
        "</div>",

      linkelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>href</code> attribute of the <code>&lt;link&gt;</code> tag specifies the location (URL) of the external resource (most often a style sheet file)</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.href +
        "</div>"
    },

    longdesc: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>longdesc</code> attribute of the <code>&lt;img&gt;</code> tag specifies a hyperlink to a detailed description of an image</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "    <tr><td><code><em>Specified ID</em></code></td><td>" + URL.Id + "</td></tr>" +
        "  </table>" +
           myRelatedElements.longdesc +
        "</div>"
    },

    src: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>src</code> attribute of the <code>&lt;img&gt;</code> tag specifies the URL of the image</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.src +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>src</code> attribute of the <code>&lt;input&gt;</code> tag specifies the URL of the image to use as a submit button</div>" +
        "  <div>The <code>src</code> attribute can only be used with (and is required for) <code>&lt;input type=\"image\"&gt;</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.src +
        "</div>",

      scriptelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>src</code> attribute of the <code>&lt;script&gt;</code> tag specifies the URL of an external script file</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Absolute + "</td></tr>" +
        "    <tr><td><code><em>Absolute URL</em></code></td><td>" + URL.Relative + "</td></tr>" +
        "  </table>" +
           myRelatedElements.src +
        "</div>"
    },

    srcset: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>srcset</code> attribute of the <code>&lt;img&gt;</code> tag specifies a list of image files to use in different situations</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>URL List</em></code></td><td>Specifies a list of image files to use in different situations</td></tr>" +
        "  </table>" +
           myRelatedElements.srcset +
        "</div>"
    },

    target: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>target</code> attribute of the <code>&lt;a&gt;</code> tag specifies where to open the linked document</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>_blank</code></td><td>" + Target.Blank + "</td></tr>" +
        "    <tr><td><code>_parent</code></td><td>" + Target.Parent + "</td></tr>" +
        "    <tr><td><code>_self</code></td><td>" + Target.Self + "</td></tr>" +
        "    <tr><td><code>_top</code></td><td>" + Target.Top + "</td></tr>" +
        "    <tr><td><code><em>Frame Name</em></code></td><td>" + Target.Frame_Name + "</td></tr>" +
        "  </table>" +
           myRelatedElements.target +
        "</div>",

      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>target</code> attribute of the <code>&lt;area&gt;</code> tag specifies where to open the linked document</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>_blank</code></td><td>" + Target.Blank + "</td></tr>" +
        "    <tr><td><code>_parent</code></td><td>" + Target.Parent + "</td></tr>" +
        "    <tr><td><code>_self</code></td><td>" + Target.Self + "</td></tr>" +
        "    <tr><td><code>_top</code></td><td>" + Target.Top + "</td></tr>" +
        "    <tr><td><code><em>Frame Name</em></code></td><td>" + Target.Frame_Name + "</td></tr>" +
        "  </table>" +
           myRelatedElements.target +
        "</div>",

      baseelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>target</code> attribute of the <code>&lt;base&gt;</code> tag specifies the default target for all hyperlinks and forms in the page</div>" +
        "  <div>This attribute can be overridden by using the <code>target</code> attribute for each hyperlink/form</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>_blank</code></td><td>" + Target.Blank + "</td></tr>" +
        "    <tr><td><code>_parent</code></td><td>" + Target.Parent + "</td></tr>" +
        "    <tr><td><code>_self</code></td><td>" + Target.Self + "</td></tr>" +
        "    <tr><td><code>_top</code></td><td>" + Target.Top + "</td></tr>" +
        "  </table>" +
           myRelatedElements.target +
        "</div>",

      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>target</code> attribute of the <code>&lt;form&gt;</code> tag specifies a name or a keyword that indicates where to display the response that is received after submitting the form</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>_blank</code></td><td>" + Target.Blank + "</td></tr>" +
        "    <tr><td><code>_parent</code></td><td>" + Target.Parent + "</td></tr>" +
        "    <tr><td><code>_self</code></td><td>" + Target.Self + "</td></tr>" +
        "    <tr><td><code>_top</code></td><td>" + Target.Top + "</td></tr>" +
        "    <tr><td><code><em>Frame Name</em></code></td><td>" + Target.Frame_Name + "</td></tr>" +
        "  </table>" +
           myRelatedElements.target +
        "</div>"
    }
  };
  return myHyperlink;
}

/////////////////////////////
// HTML NETWORK ATTRIBUTES //
/////////////////////////////
function NetworkAttributes() {
  /* LIST OF RELATED ELEMENTS */
  const myRelatedElements = {
    crossorigin   : "<div>Applied tag(s): <code>&lt;img&gt;, &lt;link&gt;, &lt;script&gt;</code></div>",
    enctype       : "<div>Applied tag(s): <code>&lt;form&gt;</code></div>",
    formenctype   : "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;</code></div>",
    formmethod    : "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;</code></div>",
    http_equiv    : "<div>Applied tag(s): <code>&lt;meta&gt;</code></div>",
    integrity     : "<div>Applied tag(s): <code>&lt;script&gt;</code></div>",
    method        : "<div>Applied tag(s): <code>&lt;form&gt;</code></div>",
    ping          : "<div>Applied tag(s): <code>&lt;a&gt;</code></div>",
    referrerpolicy: "<div>Applied tag(s): <code>&lt;a&gt;, &lt;area&gt;, &lt;img&gt;, &lt;link&gt;, &lt;script&gt;</code></div>"
  };

  /* NOTES OF NETWORK ATTRIBUTES */
  const Crossorigin = {
    Anonymous:
      "Specifies the mode of the CORS request<br>" +
      "A cross-origin request is performed where no credentials are sent",
    CORS:
      "<abbr title=\"Cross-Origin Resource Sharing\">CORS</abbr> is a mechanism that allows resources on a webpage to be requested from another domain outside their own domain<br>" +
      "Resources could be anything like style sheets, iframes, images, fonts, or scripts<br>" +
      "CORS defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request<br>" +
      "CORS allows servers to specify who can access the assets on the server, among many other things<br>" +
      "The opposite of cross-origin requests is same-origin requests<br>" +
      "This means that a webpage can only interact with other documents that are also on the same server<br>" +
      "This policy enforces that documents that interact with each other must have the same origin (domain)",
    Use_Credentials:
      "Specifies the mode of the CORS request<br>" +
      "A cross-origin request is performed where credentials are sent (Eg; a cookie, a certificate, a HTTP Basic authentication)"
  };

  const Enctype = {
    Application: "<b>[Default]</b> All characters are encoded before sent<br> Spaces are converted to \"+\" symbols, and special characters are converted to ASCII HEX values",
    Multipart  : "This value is necessary if the user will upload a file through the form",
    Text       : "<b>[Not recommended]</b> Sends data without any encoding at all"
  };

  const Custom_URL =
    "Specifies the URL to be notified if the user follows the hyperlink<br>" +
    " Must be a space separated list of one or more valid URLs";

  const HTTP_Equiv = {
    Content_Security_Policy:
      "Specifies a content policy for the document<br>" +
      "<code>&lt;meta <b>http-equiv</b>=\"content-security-policy\" content=\"default-src- 'self'\"&gt;</code>",
    Content_Type:
      "Specifies the character encoding for the document<br>" +
      "<code>&lt;meta <b>http-equiv</b>=\"content-type\" content=\"text/html; charset=UTF-8\"&gt;</code>",
    Default_Style:
      "Specified the preferred style sheet to use<br>" +
      "<code>&lt;meta <b>http-equiv</b>=\"default-style\" content=\"<em>Any document's preferred stylesheet</em>\"&gt;</code><br>" +
      "The value of the <code>content</code> attribute above must match the value of the <code>title</code> attribute on a <code>&lt;link&gt;</code> element in the same document<br>" +
      "Alternatively, it must match the value of the <code>title</code> attribute on a <code>&lt;style&gt;</code> element in the same document",
    Refresh:
      "Defines a time interval for the document to refresh itself<br>" +
      "<code>&lt;meta <b>http-equiv</b>=\"refresh\" content=\"300\"&gt;</code><br>" +
      "The value \"refresh\" should be used carefully, as it takes the control of a page away from the user<br>" +
      "Using \"refresh\" will cause a failure in <a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\">W3C's Web Content Accessibility Guidelines</a>",
  };

  const Integrity = {
    File_Hashing:
      "The file hashing value of the external script file<br>" +
      "User can use an online <a href=\"https://www.srihash.org/\" target=\"_blank\">SRI Hash Generator</a> to generate integrity hashes",
    SRI:
      "<abbr title=\"Subresource Integrity\">SRI</abbr> is a W3C specification that allows web developers to ensure that resources hosted on third-party servers have not been altered<br>" +
      "Use of SRI is recommended<br>" +
      "When using SRI, the webpage holds the hash and the server holds the file<br>" +
      "The browser downloads the file, then checks it, to make sure that it is a match with the hash in the <code>integrity</code> attribute<br>" +
      "If it matches, the file is used, and if not, the file is blocked"
  };

  const Method = {
    Dialog:
      "When the form is inside a <code>&lt;dialog&gt;</code> element, it closes the dialog and causes a submit event to be executed on submission, " +
      "without submitting data or clearing the form",
    Get:
      "<b>[Default]</b> Appends the form-data to the URL in name/value pairs (<code>URL?name=value&name=value</code>)<br>" +
      "The length of a URL is limited (about 3000 characters)<br>" +
      "<b>Never</b> use <code>get</code> to send sensitive data! (will be visible in the URL)<br>" +
      "Useful for form submissions where a user wants to bookmark the result<br>" +
      "<code>get</code> is better for non-secure data, like query strings in Google",
    Post:
      "Sends the form-data as an HTTP post transaction<br>" +
      "Appends form-data inside the body of the HTTP request (data is not shown in URL)<br>" +
      "Has no size limitations<br>" +
      "Form submissions with <code>post</code> cannot be bookmarked"
  };

  const Referrerpolicy = {
    No_Referrer:
      "No referrer information will be sent along with a request",
    No_Referrer_When_Downgrade:
      "<b>[Default]</b> The referrer header will not be sent to origins without HTTPS",
    Origin:
      "Send only scheme, host, and port to the request client",
    Origin_When_Cross_Origin:
      "For cross-origin requests: Send only scheme, host, and port<br>" +
      "For same-origin requests: Also include the path",
    Same_Origin:
      "For same-origin requests: Referrer info will be sent<br>" +
      "For cross-origin requests: No referrer info will be sent",
    Strict_Origin:
      "Only send referrer info if the security level is the same (e.g. HTTPS to HTTPS)<br>" +
      "Do not send to a less secure destination (e.g. HTTPS to HTTP)",
    Strict_Origin_When_Cross_Origin:
      "Send full path when performing a same-origin request<br>" +
      "Send only origin when the security level stays the same (e.g. HTTPS to HTTPS)" +
      "Send no header to a less secure destination (HTTPS to HTTP)",
    Unsafe_URL:
      "Send origin, path and query string (but not fragment, password, or username)<br>" +
      "This value is considered unsafe"
  };

  /* LIST OF NETWORK ATTRIBUTES */
  const myNetwork = {
    crossorigin: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>crossorigin</code> attribute of the <code>&lt;img&gt;</code> tag allows images from third-party sites that allow cross-origin access to be used with canvas</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>anonymous</code></td><td>" + Crossorigin.Anonymous + "</td></tr>" +
        "    <tr><td><code>use-credentials</code></td><td>" + Crossorigin.Use_Credentials + "</td></tr>" +
        "  </table>" +
           myRelatedElements.crossorigin +
        "</div>",

      linkelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>crossorigin</code> attribute of the <code>&lt;link&gt;</code> tag specifies the mode of the request to an HTTP CORS Request</div>" +
        "  <div>" + Crossorigin.CORS + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>anonymous</code></td><td>" + Crossorigin.Anonymous + "</td></tr>" +
        "    <tr><td><code>use-credentials</code></td><td>" + Crossorigin.Use_Credentials + "</td></tr>" +
        "  </table>" +
           myRelatedElements.crossorigin +
        "</div>",

      scriptelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>crossorigin</code> attribute of the <code>&lt;script&gt;</code> tag specifies the mode of the request to an HTTP CORS Request</div>" +
        "  <div>" + Crossorigin.CORS + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>anonymous</code></td><td>" + Crossorigin.Anonymous + "</td></tr>" +
        "    <tr><td><code>use-credentials</code></td><td>" + Crossorigin.Use_Credentials + "</td></tr>" +
        "  </table>" +
           myRelatedElements.crossorigin +
        "</div>"
    },

    enctype: {
      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>enctype</code> attribute of the <code>&lt;form&gt;</code> tag specifies how the form-data should be encoded when submitting it to the server</div>" +
        "  <div>The <code>enctype</code> attribute can be used only if <code>method=\"post\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>application/x-www-form-urlencoded</code></td><td>" + Enctype.Application + "</td></tr>" +
        "    <tr><td><code>multipart/form-data</code></td><td>" + Enctype.Multipart + "</td></tr>" +
        "    <tr><td><code>text/plain</code></td><td>" + Enctype.Text + "</td></tr>" +
        "  </table>" +
           myRelatedElements.enctype +
        "</div>"
    },

    formenctype: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formenctype</code> attribute of the <code>&lt;button&gt;</code> tag specifies how form-data should be encoded before sending it to a server</div>" +
        "  <div>The <code>formenctype</code> attribute overrides the <code>enctype</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formenctype</code> attribute is used with <code>type=\"submit\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>application/x-www-form-urlencoded</code></td><td>" + Enctype.Application + "</td></tr>" +
        "    <tr><td><code>multipart/form-data</code></td><td>" + Enctype.Multipart + "</td></tr>" +
        "    <tr><td><code>text/plain</code></td><td>" + Enctype.Text + "</td></tr>" +
        "  </table>" +
           myRelatedElements.formenctype +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formenctype</code> attribute of the <code>&lt;input&gt;</code> tag specifies how the form-data should be encoded when submitting it to the server</div>" +
        "  <div>The <code>formenctype</code> attribute overrides the <code>enctype</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formenctype</code> attribute is used with <code>type=\"submit\" and type=\"image\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>application/x-www-form-urlencoded</code></td><td>" + Enctype.Application + "</td></tr>" +
        "    <tr><td><code>multipart/form-data</code></td><td>" + Enctype.Multipart + "</td></tr>" +
        "    <tr><td><code>text/plain</code></td><td>" + Enctype.Text + "</td></tr>" +
        "  </table>" +
           myRelatedElements.formenctype +
        "</div>"
    },

    formmethod: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formmethod</code> attribute of the <code>&lt;button&gt;</code> tag specifiesthe HTTP method for sending form-data to the action URL</div>" +
        "  <div>The <code>formmethod</code> attribute overrides the <code>method</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formmethod</code> attribute can be used with <code>type=\"submit\"</code></div>" +
        "  <div>The form-data can be sent as URL variables (with <code>method=\"get\"</code>) or as HTTP post transaction (with <code>method=\"post\"</code>)</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>get</code></td><td>" + Method.Get + "</td></tr>" +
        "    <tr><td><code>post</code></td><td>" + Method.Post + "</td></tr>" +
        "  </table>" +
           myRelatedElements.formmethod +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>formmethod</code> attribute of the <code>&lt;input&gt;</code> tag specifiesthe HTTP method for sending form-data to the action URL</div>" +
        "  <div>The <code>formmethod</code> attribute overrides the <code>method</code> attribute of the <code>&lt;form&gt;</code> element</div>" +
        "  <div>The <code>formmethod</code> attribute can be used with <code>type=\"submit\" and type=\"image\"</code></div>" +
        "  <div>The form-data can be sent as URL variables (with <code>method=\"get\"</code>) or as HTTP post transaction (with <code>method=\"post\"</code>)</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>get</code></td><td>" + Method.Get + "</td></tr>" +
        "    <tr><td><code>post</code></td><td>" + Method.Post + "</td></tr>" +
        "  </table>" +
           myRelatedElements.formmethod +
        "</div>"
    },

    http_equiv: {
      metaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>http-equiv</code> attribute of the <code>&lt;meta&gt;</code> tag provides an HTTP header for the information/value of the <code>content</code> attribute</div>" +
        "  <div>The <code>http-equiv</code> attribute can be used to simulate an HTTP response header</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>content-security-policy</code></td><td>" + HTTP_Equiv.Content_Security_Policy + "</td></tr>" +
        "    <tr><td><code>content-type</code></td><td>" + HTTP_Equiv.Content_Type + "</td></tr>" +
        "    <tr><td><code>default-style</code></td><td>" + HTTP_Equiv.Default_Style + "</td></tr>" +
        "    <tr><td><code>refresh</code></td><td>" + HTTP_Equiv.Refresh + "</td></tr>" +
        "  </table>" +
           myRelatedElements.http_equiv +
        "</div>"
    },

    integrity: {
      scriptelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>integrity</code> attribute of the <code>&lt;script&gt;</code> tag allows a browser to check the fetched script to ensure that the code is never loaded if the source has been manipulated</div>" +
        "  <div>" + Integrity.SRI + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>File Hash</em></code></td><td>" + Integrity.File_Hashing + "</td></tr>" +
        "  </table>" +
           myRelatedElements.integrity +
        "</div>"
    },

    http_equiv: {
      metaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>http-equiv</code> attribute of the <code>&lt;meta&gt;</code> tag provides an HTTP header for the information/value of the <code>content</code> attribute</div>" +
        "  <div>The <code>http-equiv</code> attribute can be used to simulate an HTTP response header</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>content-security-policy</code></td><td>" + HTTP_Equiv.Content_Security_Policy + "</td></tr>" +
        "    <tr><td><code>content-type</code></td><td>" + HTTP_Equiv.Content_Type + "</td></tr>" +
        "    <tr><td><code>default-style</code></td><td>" + HTTP_Equiv.Default_Style + "</td></tr>" +
        "    <tr><td><code>refresh</code></td><td>" + HTTP_Equiv.Refresh + "</td></tr>" +
        "  </table>" +
           myRelatedElements.http_equiv +
        "</div>"
    },

    method: {
      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>method</code> attribute of the <code>&lt;form&gt;</code> tag specifies how to send form-data that specified in the <code>action</code> attribute to the page</div>" +
        "  <div>The form-data can be sent as URL variables (with <code>method=\"get\"</code>) or as HTTP post transaction (with <code>method=\"post\"</code>)</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>dialog</code></td><td>" + Method.Dialog + "</td></tr>" +
        "    <tr><td><code>get</code></td><td>" + Method.Get + "</td></tr>" +
        "    <tr><td><code>post</code></td><td>" + Method.Post + "</td></tr>" +
        "  </table>" +
           myRelatedElements.method +
        "</div>"
    },

    ping: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>ping</code> attribute of the <code>&lt;a&gt;</code> tag specifies a list of URLs to be notified if the user follows the hyperlink</div>" +
        "  <div>When the user clicks on the hyperlink, the <code>ping</code> attribute will send a short HTTP POST request to the specified URL</div>" +
        "  <div>This attribute is useful for monitoring/tracking</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>URL</em></code></td><td>" + Custom_URL + "</td></tr>" +
        "  </table>" +
           myRelatedElements.ping +
        "</div>"
    },

    referrerpolicy: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>referrerpolicy</code> attribute of the <code>&lt;a&gt;</code> tag specifies which referrer information to send when user clicks on the hyperlink</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>no-referrer</code></td><td>" + Referrerpolicy.No_Referrer + "</td></tr>" +
        "    <tr><td><code>no-referrer-when-downgrade</code></td><td>" + Referrerpolicy.No_Referrer_When_Downgrade + "</td></tr>" +
        "    <tr><td><code>origin</code></td><td>" + Referrerpolicy.Origin + "</td></tr>" +
        "    <tr><td><code>origin-when-cross-origin</code></td><td>" + Referrerpolicy.Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>same-origin</code></td><td>" + Referrerpolicy.Same_Origin + "</td></tr>" +
        "    <tr><td><code>strict-origin</code></td><td>" + Referrerpolicy.Strict_Origin + "</td></tr>" +
        "    <tr><td><code>strict-origin-when-cross-origin</code></td><td>" + Referrerpolicy.Strict_Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>unsafe-url</code></td><td>" + Referrerpolicy.Unsafe_URL + "</td></tr>" +
        "  </table>" +
           myRelatedElements.referrerpolicy +
        "</div>",

      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>referrerpolicy</code> attribute of the <code>&lt;area&gt;</code> tag specifies which referrer information to send when the user clicks on the hyperlink</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>no-referrer</code></td><td>" + Referrerpolicy.No_Referrer + "</td></tr>" +
        "    <tr><td><code>no-referrer-when-downgrade</code></td><td>" + Referrerpolicy.No_Referrer_When_Downgrade + "</td></tr>" +
        "    <tr><td><code>origin</code></td><td>" + Referrerpolicy.Origin + "</td></tr>" +
        "    <tr><td><code>origin-when-cross-origin</code></td><td>" + Referrerpolicy.Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>same-origin</code></td><td>" + Referrerpolicy.Same_Origin + "</td></tr>" +
        "    <tr><td><code>strict-origin-when-cross-origin</code></td><td>" + Referrerpolicy.Strict_Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>unsafe-url</code></td><td>" + Referrerpolicy.Unsafe_URL + "</td></tr>" +
        "  </table>" +
           myRelatedElements.referrerpolicy +
        "</div>",

      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>referrerpolicy</code> attribute of the <code>&lt;img&gt;</code> tag specifies which referrer information to use when fetching an image</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>no-referrer</code></td><td>" + Referrerpolicy.No_Referrer + "</td></tr>" +
        "    <tr><td><code>no-referrer-when-downgrade</code></td><td>" + Referrerpolicy.No_Referrer_When_Downgrade + "</td></tr>" +
        "    <tr><td><code>origin</code></td><td>" + Referrerpolicy.Origin + "</td></tr>" +
        "    <tr><td><code>origin-when-cross-origin</code></td><td>" + Referrerpolicy.Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>unsafe-url</code></td><td>" + Referrerpolicy.Unsafe_URL + "</td></tr>" +
        "  </table>" +
           myRelatedElements.referrerpolicy +
        "</div>",

      linkelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>referrerpolicy</code> attribute of the <code>&lt;link&gt;</code> tag specifies which referrer information to send when fetching an iframe</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>no-referrer</code></td><td>" + Referrerpolicy.No_Referrer + "</td></tr>" +
        "    <tr><td><code>no-referrer-when-downgrade</code></td><td>" + Referrerpolicy.No_Referrer_When_Downgrade + "</td></tr>" +
        "    <tr><td><code>origin</code></td><td>" + Referrerpolicy.Origin + "</td></tr>" +
        "    <tr><td><code>origin-when-cross-origin</code></td><td>" + Referrerpolicy.Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>same-origin</code></td><td>" + Referrerpolicy.Same_Origin + "</td></tr>" +
        "    <tr><td><code>strict-origin</code></td><td>" + Referrerpolicy.Strict_Origin + "</td></tr>" +
        "    <tr><td><code>strict-origin-when-cross-origin</code></td><td>" + Referrerpolicy.Strict_Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>unsafe-url</code></td><td>" + Referrerpolicy.Unsafe_URL + "</td></tr>" +
        "  </table>" +
           myRelatedElements.referrerpolicy +
        "</div>",

      scriptelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>referrerpolicy</code> attribute of the <code>&lt;script&gt;</code> tag specifies which referrer information to send when fetching a script</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>no-referrer</code></td><td>" + Referrerpolicy.No_Referrer + "</td></tr>" +
        "    <tr><td><code>no-referrer-when-downgrade</code></td><td>" + Referrerpolicy.No_Referrer_When_Downgrade + "</td></tr>" +
        "    <tr><td><code>origin</code></td><td>" + Referrerpolicy.Origin + "</td></tr>" +
        "    <tr><td><code>origin-when-cross-origin</code></td><td>" + Referrerpolicy.Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>same-origin</code></td><td>" + Referrerpolicy.Same_Origin + "</td></tr>" +
        "    <tr><td><code>strict-origin</code></td><td>" + Referrerpolicy.Strict_Origin + "</td></tr>" +
        "    <tr><td><code>strict-origin-when-cross-origin</code></td><td>" + Referrerpolicy.Strict_Origin_When_Cross_Origin + "</td></tr>" +
        "    <tr><td><code>unsafe-url</code></td><td>" + Referrerpolicy.Unsafe_URL + "</td></tr>" +
        "  </table>" +
           myRelatedElements.referrerpolicy +
        "</div>"
    }
  };
  return myNetwork;
}

//////////////////////////
// HTML TIME ATTRIBUTES //
//////////////////////////
function TimeAttributes() {
  /* LIST OF RELATED ELEMENTS */
  const myRelatedElements = {
    datetime: "<div>Applied tag(s): <code>&lt;del&gt;, &lt;ins&gt;, &lt;time&gt;</code></div>"
  };

  /* NOTES OF TIME ATTRIBUTES */
  const Datetime = {
    Description1:
      "<code><em>YYYY</em></code> = Represents year (Example; <code>2009</code>)<br>" +
      "<code><em>MM</em></code> = Represents month (Example; <code>01</code> for January)<br>" +
      "<code><em>DD</em></code> = Represents day of the month (Example; <code>08</code>)<br>" +
      "<code><em>T</em></code> = Represents a separator (<b>Required</b> if time also specified)<br>" +
      "<code><em>hh</em></code> = Represents hour (Example; <code>22</code> for 10PM)<br>" +
      "<code><em>mm</em></code> = Represents minute (Example; <code>35</code>)<br>" +
      "<code><em>ss</em></code> = Represents second (Example; <code>41</code>)<br>" +
      "<code><em>TZD</em></code> = Time Zone Designator (Z denotes Zulu, also known as Greenwich Meridian Time, GMT)",
    Description2:
      "<code><em>P</em></code> = Represents a prefix for \"period\"<br>" +
      "<code><em>T</em></code> = Represents a separator (<b>Required</b> if time also specified)<br>" +
      "<code><em>D</em></code> = Represents a prefix for \"days\"<br>" +
      "<code><em>H</em></code> = Represents a prefix for \"hours\"<br>" +
      "<code><em>M</em></code> = Represents a prefix for \"minutes\"<br>" +
      "<code><em>S</em></code> = Represents a prefix for \"seconds\"<br>"
  };

  /* LIST OF TIME ATTRIBUTES */
  const myTime = {
    datetime: {
      deleteelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>datetime</code> attribute of the <code>&lt;del&gt;</code> tag specifies the date and time of when the text was deleted/changed</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>YYYY-MM-DDThh:mm:ssTZD</code></td><td>" + Datetime.Description1  + "</td></tr>" +
        "  </table>" +
           myRelatedElements.datetime +
        "</div>",

      insertelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>datetime</code> attribute of the <code>&lt;ins&gt;</code> tag specifies the date and time of when the text was inserted/changed</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>YYYY-MM-DDThh:mm:ssTZD</code></td><td>" + Datetime.Description1  + "</td></tr>" +
        "  </table>" +
           myRelatedElements.datetime +
        "</div>",

      timeelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>datetime</code> attribute of the <code>&lt;time&gt;</code> tag specifies a machine-readable format of a time element</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>YYYY-MM-DDThh:mm:ssTZD</code></td><td>" + Datetime.Description1  + "</td></tr>" +
        "    <tr><td><code>PTDHMS</code></td><td>" + Datetime.Description2  + "</td></tr>" +
        "  </table>" +
           myRelatedElements.datetime +
        "</div>"
    }
  };
  return myTime;
}

///////////////////////////
// HTML VALUE ATTRIBUTES //
///////////////////////////
function ValueAttributes() {
  /* LIST OF RELATED ELEMENTS */
  const myRelatedElements = {
    high     : "<div>Applied tag(s): <code>&lt;meter&gt;</code></div>",
    low      : "<div>Applied tag(s): <code>&lt;meter&gt;</code></div>",
    max      : "<div>Applied tag(s): <code>&lt;input&gt;, &lt;meter&gt;, &lt;progress&gt;</code></div>",
    maxlength: "<div>Applied tag(s): <code>&lt;input&gt;, &lt;textarea&gt;</code></div>",
    min      : "<div>Applied tag(s): <code>&lt;input&gt;, &lt;meter&gt;</code></div>",
    minlength: "<div>Applied tag(s): <code>&lt;input&gt;</code></div>",
    optimum  : "<div>Applied tag(s): <code>&lt;meter&gt;</code></div>",
    pattern  : "<div>Applied tag(s): <code>&lt;input&gt;</code></div>",
    step     : "<div>Applied tag(s): <code>&lt;input&gt;</code></div>",
    value    : "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;, &lt;li&gt;, &lt;meter&gt;, &lt;option&gt;, &lt;progress&gt;</code></div>"
  };

  /* NOTES OF VALUE ATTRIBUTES */
  const Floating_Point =
    "A floating point number that specifies how much work the task requires in total before it can be considered complete<br>" +
    "Default value is 1";

  const Value = {
    Min_Max_Description: "It is recommended to use the <code>min</code> and <code>max</code> attributes together to create a range of legal values",
    Min_Max_Input      : "The <code>min</code> and <code>max</code> attributes works with the following input types: number, range, date, datetime-local, month, time and week"
  };

  /* LIST OF VALUE ATTRIBUTES */
  const myValue = {
    high: {
      meterelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>high</code> attribute of the <code>&lt;meter&gt;</code> tag specifies the range where the gauge's value is considered to be a high value</div>" +
        "  <div>The <code>high</code> attribute value must be less than the <code>max</code> attribute value, and it also must be greater than the <code>low, min</code> attribute values</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies a floating point number that is considered to be a high value</td></tr>" +
        "  </table>" +
           myRelatedElements.high +
        "</div>"
    },

    low: {
      meterelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>low</code> attribute of the <code>&lt;meter&gt;</code> tag specifies the range where the gauge's value is considered to be a low value</div>" +
        "  <div>The <code>low</code> attribute value must be greater than the <code>min</code> attribute value, and it also must be less than the <code>high, max</code> attribute values</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies a floating point number that is considered to be a low value</td></tr>" +
        "  </table>" +
           myRelatedElements.high +
        "</div>"
    },

    max: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>max</code> attribute of the <code>&lt;input&gt;</code> tag specifies the maximum value for an input element</div>" +
        "  <div>" + Value.Min_Max_Description + "</div>" +
        "  <div>" + Value.Min_Max_Input + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the maximum value allowed</td></tr>" +
        "    <tr><td><code><em>Date</em></code></td><td>Specifies the maximum date allowed</td></tr>" +
        "  </table>" +
           myRelatedElements.max +
        "</div>",

      meterelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>max</code> attribute of the <code>&lt;meter&gt;</code> tag specifies the upper bound of the gauge</div>" +
        "  <div>The <code>max</code> attribute value must be greater than the <code>min</code> attribute value</div>" +
        "  <div>If unspecified, the default value is 1</div>" +
        "  <div>The <code>max</code> attribute, together with the <code>min</code> attribute, specifies the full range of the gauge</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>" + Floating_Point + "</td></tr>" +
        "  </table>" +
           myRelatedElements.max +
        "</div>",

      progresselement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>max</code> attribute of the <code>&lt;progress&gt;</code> tag specifies how much work the task requires in total</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>" + Floating_Point + "</td></tr>" +
        "  </table>" +
           myRelatedElements.max +
        "</div>"
    },

    maxlength: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>maxlength</code> attribute of the <code>&lt;input&gt;</code> tag specifies the maximum number of characters allowed in the input element</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the maximum of characters allowed<br>Default value is 524288</td></tr>" +
        "  </table>" +
           myRelatedElements.maxlength +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>maxlength</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies the maximum number of characters allowed in the text area element</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the maximum of characters allowed<br>Default value is 524288</td></tr>" +
        "  </table>" +
           myRelatedElements.maxlength +
        "</div>"
    },

    min: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>min</code> attribute of the <code>&lt;input&gt;</code> tag specifies the minimum value for an input element</div>" +
        "  <div>" + Value.Min_Max_Description + "</div>" +
        "  <div>" + Value.Min_Max_Input + "</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the maximum value allowed</td></tr>" +
        "    <tr><td><code><em>Date</em></code></td><td>Specifies the maximum date allowed</td></tr>" +
        "  </table>" +
           myRelatedElements.min +
        "</div>",

      meterelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>min</code> attribute of the <code>&lt;meter&gt;</code> tag specifies the lower bound of the gauge</div>" +
        "  <div>The <code>min</code> attribute value must be less than the <code>max</code> attribute value</div>" +
        "  <div>If unspecified, the default value is 0</div>" +
        "  <div>The <code>min</code> attribute, together with the <code>max</code> attribute, specifies the full range of the gauge</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>" + Floating_Point + "</td></tr>" +
        "  </table>" +
           myRelatedElements.min +
        "</div>"
    },

    minlength: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>minlength</code> attribute of the <code>&lt;input&gt;</code> tag specifies the minimum number of characters required in the input element</div>" +
        "  <div>The <code>minlength</code> attribute can be used with input type: text, search, url, tel, email, and password</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the minimum of characters required</td></tr>" +
        "  </table>" +
           myRelatedElements.minlength +
        "</div>"
    },

    optimum: {
      meterelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>optimum</code> attribute of the <code>&lt;meter&gt;</code> tag specifies the range where the gauge's value is considered to be an optimal value</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies a floating point number that is the optimal value of the gauge</td></tr>" +
        "  </table>" +
           myRelatedElements.optimum +
        "</div>"
    },

    pattern: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>pattern</code> attribute of the <code>&lt;input&gt;</code> tag specifies a regular expression that the input element's value is checked against on form submission</div>" +
        "  <div>The <code>pattern</code> attribute works with the following input types: text, date, search, url, tel, email, and password</div>" +
        "  <div><b>Recommended</b> to use <code>title</code> attribute to describe the pattern to help the user</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Regular Expression</em></code></td><td>Specifies a regular expression that the input element's value is checked against</td></tr>" +
        "  </table>" +
           myRelatedElements.pattern +
        "</div>"
    },

    step: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>step</code> attribute of the <code>&lt;input&gt;</code> tag specifies the interval between legal numbers in an input element</div>" +
        "  <div>Example; if <code>step=\"3\"</code>, legal numbers could be -3, 0, 3, 6, etc.</div>" +
        "  <div>The <code>step</code> attribute can be used together with the <code>min</code> and <code>max</code> attributes to create a range of legal values</div>" +
        "  <div>The <code>step</code> attribute works with the following input types: number, range, date, datetime-local, month, time and week</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the interval between legal numbers in the input field<br>Default is 1</td></tr>" +
        "  </table>" +
           myRelatedElements.step +
        "</div>"
    },

    value: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>value</code> attribute of the <code>&lt;button&gt;</code> tag specifies the initial value for a button in an HTML form</div>" +
        "  <div>In a form, the button and its value is only submitted if the button itself was used to submit the form</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>The initial value of the button</td></tr>" +
        "  </table>" +
           myRelatedElements.value +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>value</code> attribute of the <code>&lt;input&gt;</code> tag specifies the value of an input element</div>" +
        "  <div>For <code>\"button\", \"reset\", \"submit\"</code> &rarr; It defines the text on the button</div>" +
        "  <div>For <code>\"text\", \"password\", \"hidden\"</code> &rarr; It defines the initial (default) value of the input field</div>" +
        "  <div>For <code>\"checkbox\", \"radio\", \"image\"</code> &rarr; It defines the value associated with the input (this is also the value that is sent on submit)</div>" +
        "  <div>The <code>value</code> attribute cannot be used with <code>&lt;input type=\"file\"&gt;</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>Specifies the value of the input element</td></tr>" +
        "  </table>" +
           myRelatedElements.value +
        "</div>",

      lielement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>value</code> attribute of the <code>&lt;li&gt;</code> tag specifies the value of a list item</div>" +
        "  <div>The following list items will increment from that number</div>" +
        "  <div>The value must be a number and can only be used in ordered lists</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the value of the list item</td></tr>" +
        "  </table>" +
           myRelatedElements.value +
        "</div>",

      meterelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>value</code> attribute of the <code>&lt;meter&gt;</code> tag specifies the current, or \"measured\" value of the gauge</div>" +
        "  <div>The <code>value</code> attribute must be between the <code>min</code> and <code>max</code> attribute values</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td><b>Required</b>Specifies a floating point number that is the current value of the gauge</td></tr>" +
        "  </table>" +
           myRelatedElements.value +
        "</div>",

      optionelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>value</code> attribute of the <code>&lt;option&gt;</code> tag specifies the value to be sent to a server when a form is submitted</div>" +
        "  <div>The content between the opening and closing of <code>&lt;option&gt;</code> tags is what the browsers will display in a drop-down list</div>" +
        "  <div>However, the value of the <code>value</code> attribute is what will be sent to the server when a form is submitted</div>" +
        "  <div>If the <code>value</code> attribute is not specified, the content will be passed as a value instead</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>The value to be sent to the server</td></tr>" +
        "  </table>" +
           myRelatedElements.value +
        "</div>",

      progresselement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>value</code> attribute of the <code>&lt;progress&gt;</code> tag specifies how much of the task has been completed</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>A floating point number that specifies how much work the task requires in total before it can be considered complete</td></tr>" +
        "  </table>" +
           myRelatedElements.value +
        "</div>"
    }
  };
  return myValue;
}

///////////////////////////////////
// HTML MISCELLANEOUS ATTRIBUTES //
///////////////////////////////////
function MiscellaneousAttributes() {
  /* LIST OF RELATED ELEMENTS */
  const myRelatedElements = {
    abbr               : "<div>Applied tag(s): <code>&lt;th&gt;</code></div>",
    accept             : "<div>Applied tag(s): <code>&lt;input&gt;</code></div>",
    alt                : "<div>Applied tag(s): <code>&lt;area&gt;, &lt;img&gt;, &lt;input&gt;</code></div>",
    autocomplete       : "<div>Applied tag(s): <code>&lt;form&gt;, &lt;input&gt;</code></div>",
    colspan            : "<div>Applied tag(s): <code>&lt;td&gt;, &lt;th&gt;</code></div>",
    content            : "<div>Applied tag(s): <code>&lt;meta&gt;</code></div>",
    coords             : "<div>Applied tag(s): <code>&lt;area&gt;</code></div>",
    dirname            : "<div>Applied tag(s): <code>&lt;input&gt;, &lt;textarea&gt;</code></div>",
    download           : "<div>Applied tag(s): <code>&lt;a&gt;, &lt;area&gt;</code></div>",
    for                : "<div>Applied tag(s): <code>&lt;label&gt;, &lt;output&gt;</code></div>",
    form               : "<div>Applied tag(s): <code>&lt;button&gt;, &lt;fieldset&gt;, &lt;input&gt;, &lt;label&gt;, &lt;meter&gt;, &lt;output&gt;, &lt;select&gt;, &lt;textarea&gt;</code></div>",
    headers            : "<div>Applied tag(s): <code>&lt;td&gt;, &lt;th&gt;</code></div>",
    hreflang           : "<div>Applied tag(s): <code>&lt;a&gt;, &lt;area&gt;, &lt;link&gt;</code></div>",
    label              : "<div>Applied tag(s): <code>&lt;optgroup&gt;, &lt;option&gt;</code></div>",
    list               : "<div>Applied tag(s): <code>&lt;input&gt;</code></div>",
    loading            : "<div>Applied tag(s): <code>&lt;img&gt;</code></div>",
    media              : "<div>Applied tag(s): <code>&lt;a&gt;, &lt;area&gt;, &lt;link&gt;, &lt;style&gt;</code></div>",
    name               : "<div>Applied tag(s): <code>&lt;button&gt;, &lt;fieldset&gt;, &lt;form&gt;, &lt;map&gt;, &lt;input&gt;, &lt;meta&gt;, &lt;output&gt;, &lt;select&gt;, &lt;textarea&gt;</code></div>",
    nomodule           : "<div>Applied tag(s): <code>&lt;script&gt;</code></div>",
    placeholder        : "<div>Applied tag(s): <code>&lt;input&gt;, &lt;textarea&gt;</code></div>",
    popovertarget      : "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;</code></div>",
    popovertargetaction: "<div>Applied tag(s): <code>&lt;button&gt;, &lt;input&gt;</code></div>",
    rel                : "<div>Applied tag(s): <code>&lt;a&gt;, &lt;area&gt;, &lt;form&gt;, &lt;link&gt;</code></div>",
    rowspan            : "<div>Applied tag(s): <code>&lt;td&gt;, &lt;th&gt;</code></div>",
    scope              : "<div>Applied tag(s): <code>&lt;th&gt;</code></div>",
    shape              : "<div>Applied tag(s): <code>&lt;area&gt;</code></div>",
    sizes              : "<div>Applied tag(s): <code>&lt;img&gt;, &lt;link&gt;</code></div>",
    span               : "<div>Applied tag(s): <code>&lt;col&gt;, &lt;colgroup&gt;</code></div>",
    start              : "<div>Applied tag(s): <code>&lt;ol&gt;</code></div>",
    type               : "<div>Applied tag(s): <code>&lt;a&gt;, &lt;area&gt;, &lt;button&gt;, &lt;input&gt;, &lt;link&gt;, &lt;ol&gt;, &lt;script&gt;, &lt;style&gt;</code></div>",
    usemap             : "<div>Applied tag(s): <code>&lt;img&gt;</code></div>",
    wrap               : "<div>Applied tag(s): <code>&lt;textarea&gt;</code></div>",
    xlmns              : "<div>Applied tag(s): <code>&lt;html&gt;</code></div>"
  };

  /* NOTES OF MISCELLANEOUS ATTRIBUTES */
  const Accept = {
    Audio:
      "The user can pick all sound files",
    File_Extension:
      "Specify the file extension(s) the user can pick from<br>" +
      "Example; <code><em>myFile</em>.gif, <em>myFile</em>.jpg, <em>myFile</em>.png, <em>myFile</em>.doc, etc.</code>",
    Image:
      "The user can pick all image files",
    Media_Type:
      "A valid media type, with no parameters",
    Video:
      "The user can pick all video files"
  };

  const Alternate_Text = 
    "Specifies an alternate text for an image<br>" +
    "The text should describe the image if the image contains information<br>" +
    "The text should explain where the link goes if the image is inside an <code>a</code> element" +
    "Use <code>alt=\"\"</code> if the image is only for decoration";

  const Autocomplete = {
    Additional_Name       : "Expects the middle name",
    Address_Line1         : "Expects the first line of the street address",
    Address_Line2         : "Expects the second line of the street address",
    Address_Line3         : "Expects the third line of the street address",
    Address_Level1        : "Expects the first level of the address (Example; the county)",
    Address_Level2        : "Expects the second level of the address (Example; the city)",
    Address_Level3        : "Expects the third level of the address",
    Address_Level4        : "Expects the fourth level of the address",
    Birthday              : "Expects the full birthday date",
    Birthday_Day          : "Expects the day of the birthday date",
    Birthday_Month        : "Expects the month of the birthday date",
    Birthday_Year         : "Expects the year of the birthday date",
    CC_Additional_Name    : "Expects the credit card owner's middle name",
    CC_CSC                : "Expects the CVC code",
    CC_Expiration         : "Expects the credit card's expiration date",
    CC_Expiration_Month   : "Expects the credit card's expiration month",
    CC_Expiration_Year    : "Expects the credit card's expiration year",
    CC_Family_Name        : "Expects the credit card owner's full name",
    CC_Given_Name         : "Expects the credit card owner's first name",
    CC_Name               : "Expects the credit card owner's full name",
    CC_Number             : "Expects the credit card's number",
    CC_Type               : "Expects the credit card's type of payment",
    Country               : "Expects the country code",
    Country_Name          : "Expects the country name",
    Current_Password      : "Expects the current password",
    Email                 : "Expects the email address",
    Family_Name           : "Expects the last name",
    Given_Name            : "Expects the first name",
    Honoric_Prefix        : "Expects the title (Example; \"Mr.\", \"Ms.\", etc.)",
    Honoric_Suffix        : "Expects the suffix (Example; \"IV\", \"Jr.\", \"3\", etc.)",
    IMPP                  : "Expects the url of an instant messaging protocol endpoint",
    Language              : "Expects the preferred language",
    Name                  : "Expects the full name",
    New_Password          : "Expects a new password",
    Nickname              : "Expects the nickname",
    Off                   : "The browser does not automatically complete entries, the user must enter a value into each field for every use",
    On                    : "<b>[Default]</b> The browser will automatically complete values based on values that the user has entered before",
    One_Time_Code         : "Expects a one time code for verification etc.",
    Organization          : "Expects the company name",
    Organization_Title    : "Expects the job title",
    Photo                 : "Expects an image",
    Postal_Code           : "Expects the post code",
    Sex                   : "Expects the gender",
    Street_Address        : "Expects the full street address",
    Telephone             : "Expects the full phone number",
    Telephone_Area_Code   : "Expects the area code of the phone number",
    Telephone_Country_Code: "Expects the country code of the phone number",
    Telephone_Extension   : "Expects the extension code of the phone number",
    Telephone_Local       : "Expects the phone number with no country code and no area code",
    Telephone_Local_Prefix: "Expects the local prefix of the phone number",
    Telephone_Local_Suffix: "Expects the local suffix of the phone number",
    Telephone_National    : "Expects the phone number with no country code",
    Transaction_Amount    : "Expects a number, the amount",
    Transaction_Currency  : "Expects the currency",
    URL                   : "Expects a web address",
    Username              : "Expects the username"
  };

  const Coordinates = {
    Rectangle:
      "Specifies the coordinates of the top-left and bottom-right corner of the rectangle (<code>shape=\"rect\"</code>)",
    Circle:
      "Specifies the coordinates of the circle center and the radius (<code>shape=\"circle\"</code>)",
    Polygon:
      "Specifies the coordinates of the edges of the polygon<br>" +
      "If the first and last coordinate pairs are not the same, the browser will add the last coordinate pair to close the polygon (<code>shape=\"poly\"</code>)"
  };

  const Download = {
    Description:
      "<b>[Optional]</b> Specifies the new filename for the downloaded file<br>" +
      "There are no restrictions on allowed values, and the browser will automatically detect the correct file extension and add it to the file (.img, .pdf, .txt, .html, etc.)<br>" +
      "If the value is omitted, the original filename is used<br>" +
      "Downloaded file will use custom name: <code>&lt;a href=\"<em>OriginalFile</em>.jpg\" download=\"<em>CustomFile</em>\"&gt; &lt;img src=\"<em>OriginalFile</em>.jpg\"&gt; &lt;/a&gt;</code><br>" +
      "Downloaded file will use original name: <code>&lt;a href=\"<em>OriginalFile</em>.jpg\" download&gt; &lt;img src=\"<em>OriginalFile</em>.jpg\"&gt; &lt;/a&gt;</code>",
  };

  const Input = {
    Button:
      "Defines a clickable button (mostly used with a JavaScript to activate a script)",
    Checkbox:
      "Defines a checkbox<br>" +
      "The checkbox is shown as a square box that is ticked (checked) when activated<br>" +
      "Checkboxes are used to let a user select one or more options of a limited number of choices<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Color:
      "Defines a color picker<br>" +
      "The default value is <code>#000000</code> (black)<br>" +
      "The value must be in seven-character hexadecimal notation<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Date:
      "Defines a date control (year, month, day - no time specified)<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Datetime_Local:
      "Defines a date and time control (year, month, day, time - no timezone specified<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Email:
      "Defines a field for an e-mail address<br>" +
      "The input value is automatically validated to ensure it is a properly formatted e-mail address<br>" +
      "To define an e-mail field that allows multiple e-mail addresses, add the <code>multiple</code> attribute<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    File:
      "Defines a file-select field and a \"Browse\" button (for file uploads)<br>" +
      "To define a file-select field that allows multiple files to be selected, add the <code>multiple</code> attribute<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Hidden:
      "Defines a hidden input field<br>" +
      "A hidden field lets web developers include data that cannot be seen or modified by users when a form is submitted<br>" +
      "A hidden field often stores what database record that needs to be updated when the form is submitted<br>" +
      "While the value is not displayed to the user in the page's content, it is visible (and can be edited) using any browser's developer tools or \"View Source\" functionality<br>" +
      "Do not use hidden inputs as a form of security",
    Image:
      "Defines an image as the submit button<br>" +
      "The path to the image is specified in the <code>src</code> attribute",
    Month:
      "Defines a month and year control (no timezone specified)<br>" +
      "The format is <code><em>YYYY-MM</em></code><br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Number:
      "Defines a field for entering a number<br>" +
      "Use the <code>min, max, step, value</code> attributes to specify the restictions needed<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Password:
      "Defines a password field (characters are masked)<br>" +
      "Any forms involving sensitive information like passwords should be served over HTTPS<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Radio:
      "Defines a radio button<br>" +
      "Radio buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options)<br>" +
      "Only one radio button in a group can be selected at the same time<br>" +
      "The radio group must share the same name (the value of the <code>name</code> attribute) to be treated as a group<br>" +
      "Once the radio group is created, selecting any radio button in that group automatically deselects any other selected radio button in the same group<br>" +
      "User can have as many radio groups on a page as needed, as long as each group has its own name<br>" +
      "The <code>value</code> attribute defines the unique value associated with each radio button<br>" +
      "The value is not shown to the user, but is the value that is sent to the server on \"submit\" to identify which radio button that was selected<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Range:
      "Defines a range control (like a slider control)<br>" +
      "Default range is 0 to 100, however the <code>min, max, step, value</code> attributes can be used to specify the restictions needed<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Reset:
      "Defines a reset button which resets all form values to its initial values<br>" +
      "<b>Avoid</b> reset buttons in forms as tt is frustrating for users if they click them by mistake",
    Search:
      "Defines a text field for entering a search string<br>" +
      "The most common name for search inputs is q<br>" +
      "Remember to set a name for the search field, otherwise nothing will be submitted<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Submit:
      "Defines a submit button which submits all form values to a form-handler<br>" +
      "The form-handler is typically a server page with a script for processing the input data<br>" +
      "The form-handler is specified in the form's <code>action</code> attribute",
    Telephone:
      "Defines a field for entering a telephone number<br>" +
      "Browsers that do not support <code>tel</code> fall back to being a standard <code>text</code> input" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Text:
      "<b>[Default]</b> Defines a single-line text field<br>" +
      "The default width of the text field is 20 characters<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Time:
      "Defines a control for entering a time (no timezone specified)<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    URL:
      "Defines a field for entering a URL<br>" +
      "The input value is automatically validated before the form can be submitted<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
    Week:
      "Defines a week and year control (no timezone specified)<br>" +
      "It is <b>recommended</b> to add the <code>&lt;label&gt;</code> tag for best accessibility practices",
  };

  const Loading = {
    Eager: "<b>[Default]</b> Loads an image immediately",
    Lazy : "Defer loading of images until some conditions are met<br>Add this attribute only to images which are positioned below the fold"
  };

  const Media = {
    Device_All:
      "<b><code>all</code></b><br>Used for all media type devices",
    Device_Aural:
      "<b><code>aural</code></b><br>Used for speech synthesizers",
    Device_Braille:
      "<b><code>braille</code></b><br>Used for braille feedback devices",
    Device_Handheld:
      "<b><code>handheld</code></b><br>Used for handheld devices (small screen, limited bandwidth)",
    Device_Print:
      "<b><code>print</code></b><br>Used for print preview mode/printed pages",
    Device_Projection:
      "<b><code>projection</code></b><br>Used for projectors",
    Device_Screen:
      "<b><code>screen</code></b><br>Used for computer screens, tablets, smart-phones, etc.",
    Device_Speech:
      "<b><code>speech</code></b><br>Used for screenreaders that \"reads\" the page out loud",
    Device_Teletype:
      "<b><code>tty</code></b><br>Used for teletypes and similar media using a fixed-pitch character grid",
    Device_Television:
      "<b><code>tv</code></b><br>Used for television type devices (low resolution, limited scroll ability)",
    Operator_And:
      "<b><code>and</code></b><br>Specifies an AND operator",
    Operator_Not:
      "<b><code>not</code></b><br>Specifies a NOT operator",
    Operator_Or:
      "<b><code>,</code></b><br>Specifies an OR operator",
    Value_Aspect_Ratio:
      "<b><code>aspect-ratio</code></b><br>" +
      "Specifies the width/height ratio of the targeted display area<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (<b>aspect-ratio</b>:16/9)\"&gt;</code>",
    Value_Color:
      "<b><code>color</code></b><br>" +
      "Specifies the bits per color of target display<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (min-<b>color</b>:3)\"&gt;</code>",
    Value_Color_Index:
      "<b><code>color-index</code></b><br>" +
      "Specifies the number of colors the target display can handle<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (min-<b>color-index</b>:255)\"&gt;</code>",
    Value_Device_Aspect_Ratio:
      "<b><code>device-aspect-ratio</code></b><br>" +
      "Specifies the device-width/device-height ratio of the target display/paper<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (<b>device-aspect-ratio</b>:16/9)\"&gt;</code>",
    Value_Device_Height:
      "<b><code>device-height</code></b><br>" +
      "Specifies the height of the target display/paper<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (<b>device-height</b>:500px)\"&gt;</code>",
    Value_Device_Width:
      "<b><code>device-width</code></b><br>" +
      "Specifies the width of the target display/paper<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (<b>device-width</b>:500px)\"&gt;</code>",
    Value_Grid:
      "<b><code>grid</code></b><br>" +
      "Specifies if the output device is grid or bitmap<br>" +
      "<code>\"1\"</code> for grid and <code>\"0\"</code> for otherwise<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"handheld and (<b>grid</b>:1)\"&gt;</code>",
    Value_Height:
      "<b><code>height</code></b><br>" +
      "Specifies the height of the  targeted display area<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (max-<b>height</b>:700px)\"&gt;</code>",
    Value_Monochrome:
      "<b><code>monochrome</code></b><br>" +
      "Specifies the bits per pixel in a monochrome frame buffer<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (<b>monochrome</b>:2)\"&gt;</code>",
    Value_Orientation:
      "<b><code>orientation</code></b><br>" +
      "Specifies the orientation of the target display/paper<br>" +
      "<code>\"portrait\"</code> and <code>\"landscape\"</code> are one of the related variations for orientation<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"all and (<b>orientation</b>:landscape)\"&gt;</code>",
    Value_Resolution:
      "<b><code>resolution</code></b><br>" +
      "Specifies the pixel density (dpi or dpcm) of the target display/paper<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"print and (<b>resolution</b>:300dpi)\"&gt;</code>",
    Value_Scan:
      "<b><code>scan</code></b><br>" +
      "Specifies scanning method of a tv display<br>" +
      "<code>\"progressive\"</code> and <code>\"interlace\"</code> are one of the related variations for scan<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"tv and (<b>scan</b>:interlace)\"&gt;</code>",
    Value_Width:
      "<b><code>width</code></b><br>" +
      "Specifies the width of the targeted display area<br>" +
      "<code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "Example; <code>&lt;<em>MyElement</em> media=\"screen and (min-<b>width</b>:500px)\"&gt;</code>"
  };

  const Name = {
    Application_Name:
      "Specifies the name of the Web application that the page represents",
    Author:
      "Specifies the name of the author of the document<br>" +
      "Example; <code>&lt;meta <b>name</b>=\"author\" content=\"<em>Author's Name</em>\"&gt;</code>",
    Description:
      "Specifies a description of the page<br>" +
      "Search engines can pick up this description to show with the results of searches<br>" +
      "Example; <code>&lt;meta <b>name</b>=\"description\" content=\"<em>The Description</em>\"&gt;</code>",
    Generator:
      "Specifies one of the software packages used to generate the document (not used on hand-authored pages)<br>" +
      "Example; <code>&lt;meta <b>name</b>=\"generator\" content=\"FrontPage 4.0\"&gt;</code>",
    Keywords:
      "Specifies a comma-separated list of keywords - relevant to the page<br>" +
      "Informs search engines what the page is about<br>" +
      "Example; <code>&lt;meta <b>name</b>=\"keywords\" content=\"HTML, CSS, JavaScript\"&gt;</code>",
    Viewport:
      "Controls the viewport (the user's visible area of a web page)<br>" +
      "Example; <code>&lt;meta <b>name</b>=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code>"
  };

  const PopOverTargetAction = {
    Hide  : "The popover element is hidden when user click the button",
    Show  : "The popover element is showed when user click the button",
    Toggle: "<b>[Default]</b> The popover element is toggled between hidding and showing when user click the button"
  };

  const Relation = {
    Alternate:
      "Provides a link to an alternate version of the document (i.e. print page, translated or mirror)",
    Author:
      "Provides a link to the author of the document",
    Bookmark:
      "Provides permanent URL for bookmarking",
    DNS_Prefetch:
      "Specifies that the browser should preemptively perform DNS resolution for the target resource's origin",
    External:
      "Indicates that the referenced document is not part of the same site as the current document",
    Help:
      "Provides a link to a help document",
    Icon:
      "Imports an icon to represent the document",
    License:
      "Provides a link to copyright information for the document",
    Next:
      "Provides a link to the next document in the series",
    Nofollow:
      "Links to an unendorsed document, like a paid link<br>" +
      "(This is used by Google, to specify that the Google search spider should not follow that link)",
    Noopener:
      "Requires that any browsing context created by following the hyperlink must not have an opener browsing context",
    Noreferrer:
      "Makes the referrer unknown; no referer header will be included when the user clicks the hyperlink",
    Pingback:
      "Provides the address of the pingback server that handles pingbacks to the current document",
    Preconnect:
      "Specifies that the browser should preemptively connect to the target resource's origin",
    Prefetch:
      "Specifies that the browser should preemptively fetch and cache the target resource as it is likely to be required for a follow-up navigation",
    Preload:
      "Specifies that the browser agent must preemptively fetch and cache the target resource for current navigation " +
      "according to the destination given by the <code>as</code> attribute",
    Prerender:
      "Specifies that the browser should pre-render (load) the specified webpage in the background<br>" +
      " So, if the user navigates to this page, it speeds up the page load (because the page is already loaded)<br>" +
      "<b>Warning!</b> This wastes the user's bandwidth!<br>" +
      "Only use prerender if the webpage is required at some point in the user's journey",
    Prev:
      "Indicates that the document is a part of a series, and that the previous document in the series is the referenced document",
    Search:
      "Provides a link to a resource that can be used to search through the current document and its related pages",
    Stylesheet:
      "Imports a style sheet",
    Tag:
      "A tag (keyword) for the current document"
  };

  const Type = {
    IANA_Media_Type:
      "Refer \"<a href=\"https://www.iana.org/assignments/media-types/media-types.xhtml\" target=\"_blank\"><code>IANA Media Type</code></a>\" " +
      "for a complete list of standard media types",
    Link:
      "Specifies the media type of the linked document<br>" +
      "The default link type is <code>text/css</code><br>",
    Script:
      "Specifies the type of the script<br>" +
      "The default script type is <code>text/javascript</code><br>",
    Style:
      "Specifies the Internet media type of the style sheet<br>" +
      "The default style type is <code>text/css</code>, which indicates that the content is CSS<br>"
  };

  const Wrap = {
    Hard: "The text in the textarea is wrapped (contains newlines) when submitted in a form<br>When <code>hard</code> is used, the <code>cols</code> attribute must be specified",
    Soft: "<b>[Default]</b> The text in the textarea is not wrapped when submitted in a form"
  };

  const XMLNS = {
    Description:
      "<b>[Default]</b> Specifies the namespace to use (for XHTML documents)",
    Insight1:
      "<b>Optional to include <code>xmlns</code> attribute</b><br>" +
      "The <code>xmlns</code> attribute is optional in HTML5, required in XHTML, and invalid in HTML 4.01<br>" +
      "The HTML validator at <a href=\"http://w3.org\" target=\"_blank\" title=\"World Wide Web Consortium\">W3C</a> does not complain " +
      "when the <code>xmlns</code> attribute is missing in an XHTML document<br>" +
      "The namespace will be added to the <code>&lt;html&gt;</code> tag even if user do not include it anyway"
  };

  /* LIST OF MISCELLANEOUS ATTRIBUTES */
  const myMiscellaneous = {
    abbr: {
      thelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>abbr</code> attribute of the <code>&lt;th&gt;</code> tag specifies a shorter version of the content in a header cell</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>A short description of the header cell content</td></tr>" +
        "  </table>" +
           myRelatedElements.abbr +
        "</div>"
    },

    accept: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>accept</code> attribute of the <code>&lt;input&gt;</code> tag specifies a filter for what file types the user can pick from the file input dialog box</div>" +
        "  <div>The <code>accept</code> attribute can only be used with <code>&lt;input type=\"file\"&gt;</code></div>" +
        "  <div>Do not use this attribute as a validation tool because file uploads should be validated on the server</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>audio/*</code></td><td>" + Accept.Audio + "</td></tr>" +
        "    <tr><td><code>video/*</code></td><td>" + Accept.Video + "</td></tr>" +
        "    <tr><td><code>image/*</code></td><td>" + Accept.Image + "</td></tr>" +
        "    <tr><td><code><em>File Extension</em></code></td><td>" + Accept.File_Extension + "</td></tr>" +
        "    <tr><td><code><em>Media Type</em></code></td><td>" + Accept.Media_Type + "<br>" + Type.IANA_Media_Type + "</td></tr>" +
        "  </table>" +
           myRelatedElements.accept +
        "</div>"
    },

    alt: {
      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>alt</code> attribute of the <code>&lt;area&gt;</code> tag specifies an alternate text for an area, if the image cannot be displayed</div>" +
        "  <div>The <code>alt</code> attribute provides alternative information for an image if a user for some reason cannot view it</div>" +
        "  <div>One of the reason might be due to slow connection, an error in the <code>src</code> attribute, or if the user uses a screen reader</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>" + Alternate_Text + "</td></tr>" +
        "  </table>" +
           myRelatedElements.alt +
        "</div>",

      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>alt</code> attribute of the <code>&lt;img&gt;</code> tag specifies an alternate text for an image, if the image cannot be displayed</div>" +
        "  <div>The <code>alt</code> attribute provides alternative information for an image if a user for some reason cannot view it</div>" +
        "  <div>One of the reason might be due to slow connection, an error in the <code>src</code> attribute, or if the user uses a screen reader</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>" + Alternate_Text + "</td></tr>" +
        "  </table>" +
           myRelatedElements.alt +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>alt</code> attribute of the <code>&lt;input&gt;</code> tag specifies an alternate text for the user if the file cannot be viewed for some reason</div>" +
        "  <div>It might be due to slow connection, an error in the <code>src</code> attribute, or if the user uses a screen reader</div>" +
        "  <div>The <code>alt</code> attribute can only be used with <code>&lt;input type=\"image\"&gt;</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies an alternate text for the image's input</td></tr>" +
        "  </table>" +
           myRelatedElements.alt +
        "</div>"
    },

    autocomplete: {
      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>autocomplete</code> attribute of the <code>&lt;form&gt;</code> tag specifies whether a form should have autocomplete on or off</div>" +
        "  <div>When autocomplete is on, the browser automatically complete values based on values that the user has entered before</div>" +
        "  <div>It is possible to have autocomplete \"on\" for the form, and \"off\" for specific input fields, or vice versa</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>on</code></td><td>" + Autocomplete.On + "</td></tr>" +
        "    <tr><td><code>off</code></td><td>" + Autocomplete.Off + "</td></tr>" +
        "  </table>" +
           myRelatedElements.autocomplete +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>autocomplete</code> attribute of the <code>&lt;input&gt;</code> tag specifies if browsers should try to predict the value of an input field or not</div>" +
        "  <div>User can also specify which type of expected value in the input field</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>on</code></td><td>" + Autocomplete.On + "</td></tr>" +
        "    <tr><td><code>off</code></td><td>" + Autocomplete.Off + "</td></tr>" +
        "    <tr><td><code>address-line1</code></td><td>" + Autocomplete.Address_Line1 + "</td></tr>" +
        "    <tr><td><code>address-line2</code></td><td>" + Autocomplete.Address_Line2 + "</td></tr>" +
        "    <tr><td><code>address-line3</code></td><td>" + Autocomplete.Address_Line3 + "</td></tr>" +
        "    <tr><td><code>address-level1</code></td><td>" + Autocomplete.Address_Level1 + "</td></tr>" +
        "    <tr><td><code>address-level2</code></td><td>" + Autocomplete.Address_Level2 + "</td></tr>" +
        "    <tr><td><code>address-level3</code></td><td>" + Autocomplete.Address_Level3 + "</td></tr>" +
        "    <tr><td><code>address-level4</code></td><td>" + Autocomplete.Address_Level4 + "</td></tr>" +
        "    <tr><td><code>street-address</code></td><td>" + Autocomplete.Street_Address + "</td></tr>" +
        "    <tr><td><code>country</code></td><td>" + Autocomplete.Country + "</td></tr>" +
        "    <tr><td><code>country-name</code></td><td>" + Autocomplete.Country_Name + "</td></tr>" +
        "    <tr><td><code>postal-code</code></td><td>" + Autocomplete.Postal_Code + "</td></tr>" +
        "    <tr><td><code>name</code></td><td>" + Autocomplete.Name + "</td></tr>" +
        "    <tr><td><code>additional-name</code></td><td>" + Autocomplete.Additional_Name + "</td></tr>" +
        "    <tr><td><code>family-name</code></td><td>" + Autocomplete.Family_Name + "</td></tr>" +
        "    <tr><td><code>given-name</code></td><td>" + Autocomplete.Given_Name + "</td></tr>" +
        "    <tr><td><code>honoric-prefix</code></td><td>" + Autocomplete.Honoric_Prefix + "</td></tr>" +
        "    <tr><td><code>honoric-suffix</code></td><td>" + Autocomplete.Honoric_Suffix + "</td></tr>" +
        "    <tr><td><code>nickname</code></td><td>" + Autocomplete.Nickname + "</td></tr>" +
        "    <tr><td><code>organization-title</code></td><td>" + Autocomplete.Organization_Title + "</td></tr>" +
        "    <tr><td><code>username</code></td><td>" + Autocomplete.Username + "</td></tr>" +
        "    <tr><td><code>new-password</code></td><td>" + Autocomplete.New_Password + "</td></tr>" +
        "    <tr><td><code>current-password</code></td><td>" + Autocomplete.Current_Password + "</td></tr>" +
        "    <tr><td><code>bday</code></td><td>" + Autocomplete.Birthday + "</td></tr>" +
        "    <tr><td><code>bday-day-name</code></td><td>" + Autocomplete.Birthday_Day + "</td></tr>" +
        "    <tr><td><code>bday-month</code></td><td>" + Autocomplete.Birthday_Month + "</td></tr>" +
        "    <tr><td><code>bday-year</code></td><td>" + Autocomplete.Birthday_Year + "</td></tr>" +
        "    <tr><td><code>sex</code></td><td>" + Autocomplete.Sex + "</td></tr>" +
        "    <tr><td><code>one-time-code</code></td><td>" + Autocomplete.One_Time_Code + "</td></tr>" +
        "    <tr><td><code>organization</code></td><td>" + Autocomplete.Organization + "</td></tr>" +
        "    <tr><td><code>cc-name</code></td><td>" + Autocomplete.CC_Name + "</td></tr>" +
        "    <tr><td><code>cc-given-name</code></td><td>" + Autocomplete.CC_Given_Name + "</td></tr>" +
        "    <tr><td><code>cc-additional-name</code></td><td>" + Autocomplete.CC_Additional_Name + "</td></tr>" +
        "    <tr><td><code>cc-family-name</code></td><td>" + Autocomplete.CC_Family_Name + "</td></tr>" +
        "    <tr><td><code>cc-number</code></td><td>" + Autocomplete.CC_Number + "</td></tr>" +
        "    <tr><td><code>cc-exp</code></td><td>" + Autocomplete.CC_Expiration + "</td></tr>" +
        "    <tr><td><code>cc-exp-month</code></td><td>" + Autocomplete.CC_Expiration_Month + "</td></tr>" +
        "    <tr><td><code>cc-exp-year</code></td><td>" + Autocomplete.CC_Expiration_Year + "</td></tr>" +
        "    <tr><td><code>cc-csc</code></td><td>" + Autocomplete.CC_CSC + "</td></tr>" +
        "    <tr><td><code>cc-type</code></td><td>" + Autocomplete.CC_Type + "</td></tr>" +
        "    <tr><td><code>transaction-currency</code></td><td>" + Autocomplete.Transaction_Currency + "</td></tr>" +
        "    <tr><td><code>transaction-amount</code></td><td>" + Autocomplete.Transaction_Amount + "</td></tr>" +
        "    <tr><td><code>language</code></td><td>" + Autocomplete.Language + "</td></tr>" +
        "    <tr><td><code>url</code></td><td>" + Autocomplete.URL + "</td></tr>" +
        "    <tr><td><code>email</code></td><td>" + Autocomplete.Email + "</td></tr>" +
        "    <tr><td><code>photo</code></td><td>" + Autocomplete.Photo + "</td></tr>" +
        "    <tr><td><code>tel</code></td><td>" + Autocomplete.Telephone + "</td></tr>" +
        "    <tr><td><code>tel-country-code</code></td><td>" + Autocomplete.Telephone_Country_Code + "</td></tr>" +
        "    <tr><td><code>tel-national</code></td><td>" + Autocomplete.Telephone_National + "</td></tr>" +
        "    <tr><td><code>tel-area-code</code></td><td>" + Autocomplete.Telephone_Area_Code + "</td></tr>" +
        "    <tr><td><code>tel-local</code></td><td>" + Autocomplete.Telephone_Local + "</td></tr>" +
        "    <tr><td><code>tel-local-prefix</code></td><td>" + Autocomplete.Telephone_Local_Prefix + "</td></tr>" +
        "    <tr><td><code>tel-local-suffix</code></td><td>" + Autocomplete.Telephone_Local_Suffix + "</td></tr>" +
        "    <tr><td><code>tel-extension</code></td><td>" + Autocomplete.Telephone_Extension + "</td></tr>" +
        "    <tr><td><code>impp</code></td><td>" + Autocomplete.IMPP + "</td></tr>" +
        "  </table>" +
           myRelatedElements.autocomplete +
        "</div>"
    },

    colspan: {
      tdelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>colspan</code> attribute of the <code>&lt;td&gt;</code> tag defines the number of columns a data cell should span</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the number of columns a data cell should span</td></tr>" +
        "  </table>" +
           myRelatedElements.colspan +
        "</div>",

      thelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>colspan</code> attribute of the <code>&lt;th&gt;</code> tag defines the number of columns a header cell should span</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Sets the number of columns a header cell should span</td></tr>" +
        "  </table>" +
           myRelatedElements.colspan +
        "</div>"
    },

    content: {
      metaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>content</code> attribute of the <code>&lt;meta&gt;</code> tag specifies the value associated with the <code>http-equiv</code> or <code>name</code> attribute</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Text</em></code></td>" +
        "        <td>The content of the meta information<br>" +
        "            Example; <code>&lt;meta name=\"description\" <b>content</b>=\"Front End Development\"&gt;</code><br>" +
        "            Example; <code>&lt;meta http-equiv=\"refresh\" <b>content</b>=\"300\"&gt;</code>" +
        "    </td></tr>" +
        "  </table>" +
           myRelatedElements.content +
        "</div>"
    },

    coords: {
      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>accept</code> attribute of the <code>&lt;area&gt;</code> tag specifies the coordinates of an area in an image map</div>" +
        "  <div>The <code>accept</code> attribute is used together with the <code>shape</code> attribute to specify the size, shape, and placement of an area</div>" +
        "  <div>The coordinates of the top-left corner of an area are 0,0</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>x<sub>1</sub>,y<sub>1</sub>,x<sub>2</sub>,y<sub>2</sub></em></code></td><td>" + Coordinates.Rectangle + "</td></tr>" +
        "    <tr><td><code><em>x,y,radius</em></code></td><td>" + Coordinates.Circle + "</td></tr>" +
        "    <tr><td><code><em>x<sub>1</sub>,y<sub>1</sub>,x<sub>2</sub>,y<sub>2</sub>,...,x<sub>n</sub>,y<sub>n</sub></em></code></td><td>" + Coordinates.Polygon + "</td></tr>" +
        "  </table>" +
           myRelatedElements.coords +
        "</div>"
    },

    dirname: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>dirname</code> attribute of the <code>&lt;input&gt;</code> tag enables the submission of the text direction of the input field</div>" +
        "  <div>The <code>dirname</code> attribute's value is always the name of the input field, followed by <code>\".dir\"</code></div>" +
        "  <div>Example; <code>&lt;input name=\"<em>myName</em>\" <b>dirname</b>=\"<em>myName</em>.dir\"&gt;</code></div>" +
           myRelatedElements.dirname +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>dirname</code> attribute of the <code>&lt;textarea&gt;</code> tag enables the submission of the text direction of the text area</div>" +
        "  <div>The <code>dirname</code> attribute's value is always the name of the text area field, followed by <code>\".dir\"</code></div>" +
        "  <div>Example; <code>&lt;textarea name=\"<em>myName</em>\" <b>dirname</b>=\"<em>myName</em>.dir\"&gt;</code></div>" +
           myRelatedElements.dirname +
        "</div>"
    },

    download: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>download</code> attribute of the <code>&lt;a&gt;</code> tag specifies that the file will be downloaded when a user clicks on the hyperlink</div>" +
        "  <div>The file specified must has <code>href</code> attribute for <code>download</code> attribute to be working</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>File Name</em></code></td><td>" + Download.Description + "</td></tr>" +
        "  </table>" +
           myRelatedElements.download +
        "</div>",

      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>download</code> attribute of the <code>&lt;area&gt;</code> tag specifies that the target will be downloaded when a user clicks on the hyperlink</div>" +
        "  <div>The file specified must has <code>href</code> attribute for <code>download</code> attribute to be working</div>" +
        "  <div>The optional value of the <code>download</code> attribute will be the new name of the file after it is downloaded</div>" +
        "  <div>There are no restrictions on allowed values, and the browser will automatically detect the correct file extension and add it to the file (.img, .pdf, .txt, .html, etc.)</div>" +
        "  <div>If the value is omitted, the original filename is used</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>File Name</em></code></td><td><b>[Optional]</b> Specifies the new filename for the downloaded file</td></tr>" +
        "  </table>" +
           myRelatedElements.download +
        "</div>"
    },

    for: {
      labelelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>for</code> attribute of the <code>&lt;label&gt;</code> tag specifies which specified element a label is bound to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a specified element in the same document</div>" +
        "  <div>Example; <code>&lt;input id=\"<em>MyInput</em>\"&gt; &lt;label <b>for</b>=\"<em>MyInput</em>\"&gt;&lt;/label&gt;</code></div>" +
        "  <div>A label can also be bound to an element by placing the element inside the <code>&lt;label&gt;</code> element</div>" +
        "  <div>Example; <code>&lt;label&gt; &lt;input&gt; &lt;/label&gt;</code></div>" +
           myRelatedElements.for +
        "</div>",

      outputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>for</code> attribute of the <code>&lt;output&gt;</code> tag specifies the relationship between the result of the calculation, and the elements used in the calculation</div>" +
           myRelatedElements.for +
        "</div>"
    },

    form: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>form</code> attribute of the <code>&lt;button&gt;</code> tag specifies the form the button belongs to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
        "  <div>Example; <code>&lt;form id=\"<em>MyForm</em>\"&gt;&lt;/form&gt; &lt;button <b>form</b>=\"<em>MyForm</em>\"&gt;&lt;/button&gt;</code></div>" +
           myRelatedElements.form +
        "</div>",

      fieldsetelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>form</code> attribute of the <code>&lt;fieldset&gt;</code> tag specifies the form the fieldset belongs to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
        "  <div>Example; <code>&lt;form id=\"<em>MyForm</em>\"&gt;&lt;/form&gt; &lt;fieldset <b>form</b>=\"<em>MyForm</em>\"&gt;&lt;/fieldset&gt;</code></div>" +
           myRelatedElements.form +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>form</code> attribute of the <code>&lt;input&gt;</code> tag specifies the form the input belongs to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
        "  <div>Example; <code>&lt;form id=\"<em>MyForm</em>\"&gt;&lt;/form&gt; &lt;input <b>form</b>=\"<em>MyForm</em>\"&gt;</code></div>" +
           myRelatedElements.form +
        "</div>",

      labelelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>form</code> attribute of the <code>&lt;label&gt;</code> tag specifies the form the label belongs to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
        "  <div>Example; <code>&lt;form id=\"<em>MyForm</em>\"&gt;&lt;/form&gt; &lt;label <b>form</b>=\"<em>MyForm</em>\"&gt;&lt;/label&gt;</code></div>" +
           myRelatedElements.form +
        "</div>",

      meterelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>form</code> attribute of the <code>&lt;meter&gt;</code> tag specifies the form the meter belongs to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
        "  <div>Example; <code>&lt;form id=\"<em>MyForm</em>\"&gt;&lt;/form&gt; &lt;meter <b>form</b>=\"<em>MyForm</em>\"&gt;&lt;/meter&gt;</code></div>" +
           myRelatedElements.form +
        "</div>",

      outputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>form</code> attribute of the <code>&lt;output&gt;</code> tag specifies the form the output belongs to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
        "  <div>Example; <code>&lt;form id=\"<em>MyForm</em>\"&gt;&lt;/form&gt; &lt;output <b>form</b>=\"<em>MyForm</em>\"&gt;&lt;/output&gt;</code></div>" +
           myRelatedElements.form +
        "</div>",

      selectelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>form</code> attribute of the <code>&lt;select&gt;</code> tag specifies the form the drop-down list belongs to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
        "  <div>Example; <code>&lt;form id=\"<em>MyForm</em>\"&gt;&lt;/form&gt; &lt;select <b>form</b>=\"<em>MyForm</em>\"&gt;&lt;/select&gt;</code></div>" +
           myRelatedElements.form +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>form</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies the form the text area belongs to</div>" +
        "  <div>The value of this attribute must be equal to the <code>id</code> attribute of a <code>&lt;form&gt;</code> element in the same document</div>" +
        "  <div>Example; <code>&lt;form id=\"<em>MyForm</em>\"&gt;&lt;/form&gt; &lt;textarea <b>form</b>=\"<em>MyForm</em>\"&gt;&lt;/textarea&gt;</code></div>" +
           myRelatedElements.form +
        "</div>"
    },

    headers: {
      tdelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>headers</code> attribute of the <code>&lt;td&gt;</code> tag specifies one or more header cells a data cell is related to</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>Specifies a space-separated list of id's to one or more header cells the data cell is related to</td></tr>" +
        "  </table>" +
           myRelatedElements.headers +
        "</div>",

      thelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>headers</code> attribute of the <code>&lt;th&gt;</code> tag specifies one or more header cells a header cell is related to</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>Specifies a space-separated list of id's to one or more header cells the header cell is related to</td></tr>" +
        "  </table>" +
           myRelatedElements.headers +
        "</div>"
    },

    hreflang: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>hreflang</code> attribute of the <code>&lt;a&gt;</code> tag specifies the language of the linked document</div>" +
        "  <div>It is <b>recommended</b> to be only used if the <code>href</code> attribute is set</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><a href=\"https://www.w3schools.com/tags/ref_language_codes.asp\" target=\"_blank\"><em>HTML Language Codes</em></a></code></td>" +
        "        <td>Specifies the language code for the linked's document</td>" +
        "    </tr>" +
        "  </table>" +
           myRelatedElements.hreflang +
        "</div>",

      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>hreflang</code> attribute of the <code>&lt;area&gt;</code> tag specifies the language of the target URL in the area</div>" +
        "  <div>This attribute is purely advisory and only used if the <code>href</code> attribute is set</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><a href=\"https://www.w3schools.com/tags/ref_language_codes.asp\" target=\"_blank\"><em>HTML Language Codes</em></a></code></td>" +
        "        <td>Specifies the language code for the linked's document</td>" +
        "    </tr>" +
        "  </table>" +
           myRelatedElements.hreflang +
        "</div>",

      linkelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>hreflang</code> attribute of the <code>&lt;link&gt;</code> tag specifies the language of the text in the linked document</div>" +
        "  <div>It is <b>recommended</b> to be only used if the <code>href</code> attribute is set</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><a href=\"https://www.w3schools.com/tags/ref_language_codes.asp\" target=\"_blank\"><em>HTML Language Codes</em></a></code></td>" +
        "        <td>Specifies the language code for the linked's document</td>" +
        "    </tr>" +
        "  </table>" +
           myRelatedElements.hreflang +
        "</div>"
    },

    label: {
      optgroupelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>label</code> attribute of the <code>&lt;optgroup&gt;</code> tag specifies a label for an option-group</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>Specifies a label/description for the option-group</td></tr>" +
        "  </table>" +
           myRelatedElements.label +
        "</div>",

      optionelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>label</code> attribute of the <code>&lt;option&gt;</code> tag specifies a shorter version of an option</div>" +
        "  <div>The shorter version will be displayed in the drop-down list</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>A shorter version for the option</td></tr>" +
        "  </table>" +
           myRelatedElements.label +
        "</div>"
    },

    list: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>list</code> attribute of the <code>&lt;input&gt;</code> tag refers to a <code>&lt;datalist&gt;</code> element that contains pre-defined options for an <code>&lt;input&gt;</code> element</div>" +
        "  <div>Example; <code>&lt;input <b>list</b>=\"<em>myDatalist</em>\"&gt; &lt;datalist id=\"<em>myDatalist</em>\"&gt;&lt;/datalist&gt;</code></div>" +
           myRelatedElements.list +
        "</div>"
    },

    loading: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>loading</code> attribute of the <code>&lt;img&gt;</code> tag specifies whether a browser should load an image immediately or to defer loading of off-screen images until for example the user scrolls near them</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>eager</code></td><td>" + Loading.Eager + "</td></tr>" +
        "    <tr><td><code>lazy</code></td><td>" + Loading.Lazy + "</td></tr>" +
        "  </table>" +
           myRelatedElements.loading +
        "</div>"
    },

    media: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "<div>The <code>media</code> attribute of the <code>&lt;a&gt;</code> tag specifies what media/device the linked document is optimized for</div>" +
        "<div>This attribute is mostly used with CSS style sheets to specify different styles for different media types</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td rowspan=\"4\"><code><em>Operator</em></code></td></tr>" +
        "    <tr><td>" + Media.Operator_And + "</td></tr>" +
        "    <tr><td>" + Media.Operator_Not + "</td></tr>" +
        "    <tr><td>" + Media.Operator_Or + "</td></tr>" +
        "    <tr><td rowspan=\"11\"><code><em>Device</em></code></td></tr>" +
        "    <tr><td>" + Media.Device_All + "</td></tr>" +
        "    <tr><td>" + Media.Device_Aural + "</td></tr>" +
        "    <tr><td>" + Media.Device_Braille + "</td></tr>" +
        "    <tr><td>" + Media.Device_Handheld + "</td></tr>" +
        "    <tr><td>" + Media.Device_Print + "</td></tr>" +
        "    <tr><td>" + Media.Device_Projection + "</td></tr>" +
        "    <tr><td>" + Media.Device_Screen + "</td></tr>" +
        "    <tr><td>" + Media.Device_Speech + "</td></tr>" +
        "    <tr><td>" + Media.Device_Teletype + "</td></tr>" +
        "    <tr><td>" + Media.Device_Television + "</td></tr>" +
        "    <tr><td rowspan=\"14\"><code><em>Value</em></code></td></tr>" +
        "    <tr><td>" + Media.Value_Aspect_Ratio + "</td></tr>" +
        "    <tr><td>" + Media.Value_Color + "</td></tr>" +
        "    <tr><td>" + Media.Value_Color_Index + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Aspect_Ratio + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Height + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Width + "</td></tr>" +
        "    <tr><td>" + Media.Value_Grid + "</td></tr>" +
        "    <tr><td>" + Media.Value_Height + "</td></tr>" +
        "    <tr><td>" + Media.Value_Monochrome + "</td></tr>" +
        "    <tr><td>" + Media.Value_Orientation + "</td></tr>" +
        "    <tr><td>" + Media.Value_Resolution + "</td></tr>" +
        "    <tr><td>" + Media.Value_Scan + "</td></tr>" +
        "    <tr><td>" + Media.Value_Width + "</td></tr>" +
        "  </table>" +
           myRelatedElements.media +
        "</div>",

      areaelement:
        "<div class=\"Box-Attributes\">" +
        "<div>The <code>media</code> attribute of the <code>&lt;area&gt;</code> tag specifies what media/device the linked document is optimized for</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td rowspan=\"4\"><code><em>Operator</em></code></td></tr>" +
        "    <tr><td>" + Media.Operator_And + "</td></tr>" +
        "    <tr><td>" + Media.Operator_Not + "</td></tr>" +
        "    <tr><td>" + Media.Operator_Or + "</td></tr>" +
        "    <tr><td rowspan=\"10\"><code><em>Device</em></code></td></tr>" +
        "    <tr><td>" + Media.Device_All + "</td></tr>" +
        "    <tr><td>" + Media.Device_Aural + "</td></tr>" +
        "    <tr><td>" + Media.Device_Braille + "</td></tr>" +
        "    <tr><td>" + Media.Device_Handheld + "</td></tr>" +
        "    <tr><td>" + Media.Device_Print + "</td></tr>" +
        "    <tr><td>" + Media.Device_Projection + "</td></tr>" +
        "    <tr><td>" + Media.Device_Screen + "</td></tr>" +
        "    <tr><td>" + Media.Device_Teletype + "</td></tr>" +
        "    <tr><td>" + Media.Device_Television + "</td></tr>" +
        "    <tr><td rowspan=\"14\"><code><em>Value</em></code></td></tr>" +
        "    <tr><td>" + Media.Value_Aspect_Ratio + "</td></tr>" +
        "    <tr><td>" + Media.Value_Color + "</td></tr>" +
        "    <tr><td>" + Media.Value_Color_Index + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Aspect_Ratio + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Height + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Width + "</td></tr>" +
        "    <tr><td>" + Media.Value_Grid + "</td></tr>" +
        "    <tr><td>" + Media.Value_Height + "</td></tr>" +
        "    <tr><td>" + Media.Value_Monochrome + "</td></tr>" +
        "    <tr><td>" + Media.Value_Orientation + "</td></tr>" +
        "    <tr><td>" + Media.Value_Resolution + "</td></tr>" +
        "    <tr><td>" + Media.Value_Scan + "</td></tr>" +
        "    <tr><td>" + Media.Value_Width + "</td></tr>" +
        "  </table>" +
           myRelatedElements.media +
        "</div>",

      linkelement:
        "<div class=\"Box-Attributes\">" +
        "<div>The <code>media</code> attribute of the <code>&lt;link&gt;</code> tag specifies what media/device the target resource is optimized for</div>" +
        "<div>This attribute is mostly used with CSS style sheets to specify different styles for different media types</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td rowspan=\"4\"><code><em>Operator</em></code></td></tr>" +
        "    <tr><td>" + Media.Operator_And + "</td></tr>" +
        "    <tr><td>" + Media.Operator_Not + "</td></tr>" +
        "    <tr><td>" + Media.Operator_Or + "</td></tr>" +
        "    <tr><td rowspan=\"11\"><code><em>Device</em></code></td></tr>" +
        "    <tr><td>" + Media.Device_All + "</td></tr>" +
        "    <tr><td>" + Media.Device_Aural + "</td></tr>" +
        "    <tr><td>" + Media.Device_Braille + "</td></tr>" +
        "    <tr><td>" + Media.Device_Handheld + "</td></tr>" +
        "    <tr><td>" + Media.Device_Print + "</td></tr>" +
        "    <tr><td>" + Media.Device_Projection + "</td></tr>" +
        "    <tr><td>" + Media.Device_Screen + "</td></tr>" +
        "    <tr><td>" + Media.Device_Speech + "</td></tr>" +
        "    <tr><td>" + Media.Device_Teletype + "</td></tr>" +
        "    <tr><td>" + Media.Device_Television + "</td></tr>" +
        "    <tr><td rowspan=\"14\"><code><em>Value</em></code></td></tr>" +
        "    <tr><td>" + Media.Value_Aspect_Ratio + "</td></tr>" +
        "    <tr><td>" + Media.Value_Color + "</td></tr>" +
        "    <tr><td>" + Media.Value_Color_Index + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Aspect_Ratio + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Height + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Width + "</td></tr>" +
        "    <tr><td>" + Media.Value_Grid + "</td></tr>" +
        "    <tr><td>" + Media.Value_Height + "</td></tr>" +
        "    <tr><td>" + Media.Value_Monochrome + "</td></tr>" +
        "    <tr><td>" + Media.Value_Orientation + "</td></tr>" +
        "    <tr><td>" + Media.Value_Resolution + "</td></tr>" +
        "    <tr><td>" + Media.Value_Scan + "</td></tr>" +
        "    <tr><td>" + Media.Value_Width + "</td></tr>" +
        "  </table>" +
           myRelatedElements.media +
        "</div>",

      styleelement:
        "<div class=\"Box-Attributes\">" +
        "<div>The <code>media</code> attribute of the <code>&lt;style&gt;</code> tag specifies what media/device the CSS style is optimized for</div>" +
        "<div>This attribute is used to specify that the style is for special devices (like iPhone), speech or print media</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td rowspan=\"4\"><code><em>Operator</em></code></td></tr>" +
        "    <tr><td>" + Media.Operator_And + "</td></tr>" +
        "    <tr><td>" + Media.Operator_Not + "</td></tr>" +
        "    <tr><td>" + Media.Operator_Or + "</td></tr>" +
        "    <tr><td rowspan=\"11\"><code><em>Device</em></code></td></tr>" +
        "    <tr><td>" + Media.Device_All + "</td></tr>" +
        "    <tr><td>" + Media.Device_Aural + "</td></tr>" +
        "    <tr><td>" + Media.Device_Braille + "</td></tr>" +
        "    <tr><td>" + Media.Device_Handheld + "</td></tr>" +
        "    <tr><td>" + Media.Device_Print + "</td></tr>" +
        "    <tr><td>" + Media.Device_Projection + "</td></tr>" +
        "    <tr><td>" + Media.Device_Screen + "</td></tr>" +
        "    <tr><td>" + Media.Device_Speech + "</td></tr>" +
        "    <tr><td>" + Media.Device_Teletype + "</td></tr>" +
        "    <tr><td>" + Media.Device_Television + "</td></tr>" +
        "    <tr><td rowspan=\"14\"><code><em>Value</em></code></td></tr>" +
        "    <tr><td>" + Media.Value_Aspect_Ratio + "</td></tr>" +
        "    <tr><td>" + Media.Value_Color + "</td></tr>" +
        "    <tr><td>" + Media.Value_Color_Index + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Aspect_Ratio + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Height + "</td></tr>" +
        "    <tr><td>" + Media.Value_Device_Width + "</td></tr>" +
        "    <tr><td>" + Media.Value_Grid + "</td></tr>" +
        "    <tr><td>" + Media.Value_Height + "</td></tr>" +
        "    <tr><td>" + Media.Value_Monochrome + "</td></tr>" +
        "    <tr><td>" + Media.Value_Orientation + "</td></tr>" +
        "    <tr><td>" + Media.Value_Resolution + "</td></tr>" +
        "    <tr><td>" + Media.Value_Scan + "</td></tr>" +
        "    <tr><td>" + Media.Value_Width + "</td></tr>" +
        "  </table>" +
           myRelatedElements.media +
        "</div>"
    },

    name: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;button&gt;</code> tag specifies the name for a button</div>" +
        "  <div>The <code>name</code> attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted</div>" +
        "  <div>Several <code>&lt;button&gt;</code> elements can share the same name</div>" +
        "  <div>This allows user to have several buttons with equal names, which can submit different values when used in a form</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies the name of the button</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>",

      fieldsetelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;fieldset&gt;</code> tag specifies the name for a fieldset</div>" +
        "  <div>The <code>name</code> attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies the name of the fieldset</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>",

      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;form&gt;</code> tag specifies the name of a form</div>" +
        "  <div>The <code>name</code> attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies the name of the form</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;input&gt;</code> tag specifies the name of an input</div>" +
        "  <div>The <code>name</code> attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted</div>" +
        "  <div>Only form elements with a <code>name</code> attribute will have their values passed when submitting a form</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies the name of the input</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>",

      mapelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;map&gt;</code> tag specifies the name for an image map</div>" +
        "  <div>The <code>name</code> attribute is associated with the <code>&lt;img&gt;</code>'s <code>usemap</code> attribute and creates a relationship between the image and the map</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies the name of the image map</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>",

      metaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;meta&gt;</code> tag specifies the name for the metadata</div>" +
        "  <div>The <code>name</code> attribute specifies a name for the information/value of the <code>content</code> attribute</div>" +
        "  <div>If the <code>http-equiv</code> attribute is set, the <code>name</code> attribute should not be set</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>application-name</code></td><td>" + Name.Application_Name + "</td></tr>" +
        "    <tr><td><code>author</code></td><td>" + Name.Author + "</td></tr>" +
        "    <tr><td><code>description</code></td><td>" + Name.Description + "</td></tr>" +
        "    <tr><td><code>generator</code></td><td>" + Name.Generator + "</td></tr>" +
        "    <tr><td><code>keywords</code></td><td>" + Name.Keywords + "</td></tr>" +
        "    <tr><td><code>viewport</code></td><td>" + Name.Viewport + "</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>",

      outputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;output&gt;</code> tag specifies the name for an output</div>" +
        "  <div>The <code>name</code> attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies the name of the output</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>",

      selectelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;select&gt;</code> tag specifies the name for a drop-down list</div>" +
        "  <div>The <code>name</code> attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies the name of the drop-down list</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>name</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies the name for a text area</div>" +
        "  <div>The <code>name</code> attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>String</code></td><td>Specifies the name of the textarea</td></tr>" +
        "  </table>" +
           myRelatedElements.name +
        "</div>"
    },

    nomodule: {
      scriptelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>nomodule</code> attribute of the <code>&lt;script&gt;</code> tag specifies the script should not be executed in browsers supporting ES2015 modules</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>true</code></td><td>The script should be executed in browsers supporting ES2015 modules</td></tr>" +
        "    <tr><td><code>false</code></td><td>The script should not be executed in browsers supporting ES2015 modules</td></tr>" +
        "  </table>" +
           myRelatedElements.nomodule +
        "</div>"
    },

    placeholder: {
      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>placeholder</code> attribute of the <code>&lt;input&gt;</code> tag specifies a short hint that describes the expected value of an input field</div>" +
        "  <div>The short hint is displayed in the input field before the user enters a value</div>" +
        "  <div>The <code>placeholder</code> attribute works with the following input types: text, search, url, number, tel, email, and password</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>Specifies a short hint that describes the expected value of the input field</td></tr>" +
        "  </table>" +
           myRelatedElements.placeholder +
        "</div>",

      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>placeholder</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies a short hint that describes the expected value of a text area field</div>" +
        "  <div>The short hint is displayed in the text area field before the user enters a value</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>String</em></code></td><td>Specifies a short hint that describes the expected value of the text area field</td></tr>" +
        "  </table>" +
           myRelatedElements.placeholder +
        "</div>"
    },

    popovertarget: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>popovertarget</code> attribute of the <code>&lt;button&gt;</code> tag specifies the <code>popover</code> element with the specified id, and toggle between showing and hiding it</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>ID</em></code></td><td>The id of the popover element related to this button</td></tr>" +
        "  </table>" +
           myRelatedElements.popovertarget +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>popovertarget</code> attribute of the <code>&lt;input&gt;</code> tag specifies the <code>popover</code> element with the specified id, and toggle between showing and hiding it</div>" +
        "  <div>The <code>popovertarget</code> only works when <code>type=\"button\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>ID</em></code></td><td>The id of the popover element related to this button</td></tr>" +
        "  </table>" +
           myRelatedElements.popovertarget +
        "</div>"
    },

    popovertargetaction: {
      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>popovertargetaction</code> attribute of the <code>&lt;button&gt;</code> tag allows user to define what happens when the button is clicked</div>" +
        "  <div>If the <code>popovertargetaction</code> attribute is not specified, the default \"toggle\" value will be used</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>hide</code></td><td>" + PopOverTargetAction.Hide + "</td></tr>" +
        "    <tr><td><code>show</code></td><td>" + PopOverTargetAction.Show + "</td></tr>" +
        "    <tr><td><code>toggle</code></td><td>" + PopOverTargetAction.Toggle + "</td></tr>" +
        "  </table>" +
           myRelatedElements.popovertargetaction +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>popovertargetaction</code> attribute of the <code>&lt;input&gt;</code> tag allows user to define what happens when the button is clicked</div>" +
        "  <div>The <code>popovertargetaction</code> only works when <code>type=\"button\"</code></div>" +
        "  <div>If the <code>popovertargetaction</code> attribute is not specified, the default \"toggle\" value will be used</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>hide</code></td><td>" + PopOverTargetAction.Hide + "</td></tr>" +
        "    <tr><td><code>show</code></td><td>" + PopOverTargetAction.Show + "</td></tr>" +
        "    <tr><td><code>toggle</code></td><td>" + PopOverTargetAction.Toggle + "</td></tr>" +
        "  </table>" +
           myRelatedElements.popovertargetaction +
        "</div>"
    },

    rel: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>rel</code> attribute of the <code>&lt;a&gt;</code> tag specifies the relationship between the current document and the linked document/resource</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>alternate</code></td><td>" + Relation.Alternate + "</td></tr>" +
        "    <tr><td><code>author</code></td><td>" + Relation.Author + "</td></tr>" +
        "    <tr><td><code>bookmark</code></td><td>" + Relation.Bookmark + "</td></tr>" +
        "    <tr><td><code>external</code></td><td>" + Relation.External + "</td></tr>" +
        "    <tr><td><code>help</code></td><td>" + Relation.Help + "</td></tr>" +
        "    <tr><td><code>license</code></td><td>" + Relation.License + "</td></tr>" +
        "    <tr><td><code>next</code></td><td>" + Relation.Next + "</td></tr>" +
        "    <tr><td><code>nofollow</code></td><td>" + Relation.Nofollow + "</td></tr>" +
        "    <tr><td><code>noopener</code></td><td>" + Relation.Noopener + "</td></tr>" +
        "    <tr><td><code>noreferrer</code></td><td>" + Relation.Noreferrer + "</td></tr>" +
        "    <tr><td><code>prev</code></td><td>" + Relation.Prev + "</td></tr>" +
        "    <tr><td><code>search</code></td><td>" + Relation.Search + "</td></tr>" +
        "    <tr><td><code>tag</code></td><td>" + Relation.Tag + "</td></tr>" +
        "  </table>" +
           myRelatedElements.rel +
        "</div>",

      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>rel</code> attribute of the <code>&lt;area&gt;</code> tag specifies the relationship between the current document and the linked document</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>alternate</code></td><td>" + Relation.Alternate + "</td></tr>" +
        "    <tr><td><code>author</code></td><td>" + Relation.Author + "</td></tr>" +
        "    <tr><td><code>bookmark</code></td><td>" + Relation.Bookmark + "</td></tr>" +
        "    <tr><td><code>help</code></td><td>" + Relation.Help + "</td></tr>" +
        "    <tr><td><code>license</code></td><td>" + Relation.License + "</td></tr>" +
        "    <tr><td><code>next</code></td><td>" + Relation.Next + "</td></tr>" +
        "    <tr><td><code>nofollow</code></td><td>" + Relation.Nofollow + "</td></tr>" +
        "    <tr><td><code>noreferrer</code></td><td>" + Relation.Noreferrer + "</td></tr>" +
        "    <tr><td><code>prev</code></td><td>" + Relation.Prefetch + "</td></tr>" +
        "    <tr><td><code>prev</code></td><td>" + Relation.Prev + "</td></tr>" +
        "    <tr><td><code>search</code></td><td>" + Relation.Search + "</td></tr>" +
        "    <tr><td><code>tag</code></td><td>" + Relation.Tag + "</td></tr>" +
        "  </table>" +
           myRelatedElements.rel +
        "</div>",

      formelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>rel</code> attribute of the <code>&lt;form&gt;</code> tag specifies the relationship between the current document and the linked document</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>external</code></td><td>" + Relation.External + "</td></tr>" +
        "    <tr><td><code>help</code></td><td>" + Relation.Help + "</td></tr>" +
        "    <tr><td><code>license</code></td><td>" + Relation.License + "</td></tr>" +
        "    <tr><td><code>next</code></td><td>" + Relation.Next + "</td></tr>" +
        "    <tr><td><code>nofollow</code></td><td>" + Relation.Nofollow + "</td></tr>" +
        "    <tr><td><code>noopener</code></td><td>" + Relation.Noopener + "</td></tr>" +
        "    <tr><td><code>noreferrer</code></td><td>" + Relation.Noreferrer + "</td></tr>" +
        "    <tr><td><code>prev</code></td><td>" + Relation.Prev + "</td></tr>" +
        "    <tr><td><code>search</code></td><td>" + Relation.Search + "</td></tr>" +
        "  </table>" +
           myRelatedElements.rel +
        "</div>",

      linkelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>rel</code> attribute of the <code>&lt;link&gt;</code> tag specifies the relationship between the current document and the linked document/resource</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>alternate</code></td><td>" + Relation.Alternate + "</td></tr>" +
        "    <tr><td><code>author</code></td><td>" + Relation.Author + "</td></tr>" +
        "    <tr><td><code>dns-prefetch</code></td><td>" + Relation.DNS_Prefetch + "</td></tr>" +
        "    <tr><td><code>help</code></td><td>" + Relation.Help + "</td></tr>" +
        "    <tr><td><code>icon</code></td><td>" + Relation.Icon + "</td></tr>" +
        "    <tr><td><code>license</code></td><td>" + Relation.License + "</td></tr>" +
        "    <tr><td><code>next</code></td><td>" + Relation.Next + "</td></tr>" +
        "    <tr><td><code>pingback</code></td><td>" + Relation.Pingback + "</td></tr>" +
        "    <tr><td><code>preconnect</code></td><td>" + Relation.Preconnect + "</td></tr>" +
        "    <tr><td><code>prefetch</code></td><td>" + Relation.Prefetch + "</td></tr>" +
        "    <tr><td><code>preload</code></td><td>" + Relation.Preload + "</td></tr>" +
        "    <tr><td><code>prerender</code></td><td>" + Relation.Prerender + "</td></tr>" +
        "    <tr><td><code>prev</code></td><td>" + Relation.Prev + "</td></tr>" +
        "    <tr><td><code>search</code></td><td>" + Relation.Search + "</td></tr>" +
        "    <tr><td><code>stylesheet</code></td><td>" + Relation.Stylesheet + "</td></tr>" +
        "  </table>" +
           myRelatedElements.rel +
        "</div>"
    },

    rowspan: {
      tdelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>rowspan</code> attribute of the <code>&lt;td&gt;</code> tag specifies the number of rows a data cell should span</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Sets the number of rows a data cell should span</td></tr>" +
        "  </table>" +
           myRelatedElements.rowspan +
        "</div>",

      thelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>rowspan</code> attribute of the <code>&lt;th&gt;</code> tag specifies the number of rows a header cell should span</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Sets the number of rows a header cell should span</td></tr>" +
        "  </table>" +
           myRelatedElements.rowspan +
        "</div>"
    },

    scope: {
      thelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>scope</code> attribute of the <code>&lt;th&gt;</code> tag specifies whether a header cell is a header for a column, row, or group of columns or rows</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>col</code></td><td>Specifies that the cell is a header for a column</td></tr>" +
        "    <tr><td><code>colgroup</code></td><td>Specifies that the cell is a header for a group of columns</td></tr>" +
        "    <tr><td><code>row</code></td><td>Specifies that the cell is a header for a row</td></tr>" +
        "    <tr><td><code>rowgroup</code></td><td>Specifies that the cell is a header for a group of rows</td></tr>" +
        "  </table>" +
           myRelatedElements.scope +
        "</div>"
    },

    shape: {
      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>shape</code> attribute of the <code>&lt;area&gt;</code> tag specifies the shape of an area</div>" +
        "  <div>The <code>shape</code> attribute is used together with the <code>coords</code> attribute to specify the size, shape, and placement of an area</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>default</code></td><td>Specifies the entire region</td></tr>" +
        "    <tr><td><code>circle</code></td><td>Defines a circular region</td></tr>" +
        "    <tr><td><code>polygon</code></td><td>Defines a polygonal region</td></tr>" +
        "    <tr><td><code>rect</code></td><td>Defines a rectangular region</td></tr>" +
        "  </table>" +
           myRelatedElements.shape +
        "</div>"
    },

    sizes: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>sizes</code> attribute of the <code>&lt;img&gt;</code> tag specifies image sizes for different page layouts</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Sizes</em></code></td><td>Specifies image sizes for different page layouts</td></tr>" +
        "  </table>" +
           myRelatedElements.sizes +
        "</div>",

      linkelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>sizes</code> attribute of the <code>&lt;link&gt;</code> tag specifies the sizes of icons for visual media</div>" +
        "  <div>This attribute is only used if <code>rel=\"icon\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Height</em>x<em>Width</em></code></td>" +
        "        <td>Specifies one or more sizes for the linked icon<br>" +
        "            The height and width values are separated by an \"x\" or \"X\"<br>" +
        "            Example of 1 size; <code>&lt;rel=\"icon\" href=\"favicon.png\" <b>sizes</b>=\"16x16\" type=\"image/png\"&gt;</code><br>" +
        "            Example of 2 sizes; <code>&lt;rel=\"icon\" href=\"favicon.png\" <b>sizes</b>=\"16x16 32x32\" type=\"image/png\"&gt;</code>" +
        "    </td></tr>" +
        "    <tr><td><code>any</code></td>" +
        "        <td>Specifies that the icon is scalable (like an SVG image)<br>" +
        "            Example; <code>&lt;rel=\"icon\" href=\"icon.svg\" <b>sizes</b>=\"any\" type=\"image/svg+xml\"&gt;</code>" +
        "    </td></tr>" +
        "  </table>" +
           myRelatedElements.sizes +
        "</div>"
    },

    span: {
      colelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>span</code> attribute of the <code>&lt;col&gt;</code> tag defines the number of columns a <code>&lt;col&gt;</code> element should span</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Sets the number of columns a <code>col</code> should span</td></tr>" +
        "  </table>" +
           myRelatedElements.span +
        "</div>",

      colgroupelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>span</code> attribute of the <code>&lt;colgroup&gt;</code> tag defines the number of columns a <code>&lt;colgroup&gt;</code> element should span</div>" +
        "  <div>To define different properties to a column within a <code>&lt;colgroup&gt;</code>, use the <code>&lt;col&gt;</code> tag within the <code>&lt;colgroup&gt;</code> tag</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Sets the number of columns a column group should span</td></tr>" +
        "  </table>" +
           myRelatedElements.span +
        "</div>"
    },

    start: {
      olelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>start</code> attribute of the <code>&lt;ol&gt;</code> tag specifies the start value of the first list item in an ordered list</div>" +
        "  <div>This value is always an integer, even when the numbering type is letters or romans</div>" +
        "  <div>Example, to start counting list items from the letter \"c\" or the roman number \"iii\", use <code>&lt;ol start=\"3\"&gt;</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Number</em></code></td><td>Specifies the start value of the first list item in the ordered list</td></tr>" +
        "  </table>" +
           myRelatedElements.start +
        "</div>"
    },

    type: {
      anchorelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>type</code> attribute of the <code>&lt;a&gt;</code> tag specifies the media type of the linked document/resource</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Link Type</em></code></td><td>" + Type.Link + Type.IANA_Media_Type + "</td></tr>" +
        "  </table>" +
           myRelatedElements.type +
        "</div>",

      areaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>type</code> attribute of the <code>&lt;area&gt;</code> tag specifies the Internet media type (formerly known as MIME type) of the target URL</div>" +
        "  <div>This attribute is only used if the <code>href</code> attribute is set</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Media Type</em></code></td><td>" + Type.Link + Type.IANA_Media_Type + "</td></tr>" +
        "  </table>" +
           myRelatedElements.type +
        "</div>",

      buttonelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>type</code> attribute of the <code>&lt;button&gt;</code> tag specifies the type of button</div>" +
        "  <div>Always specify the type attribute for the <code>&lt;button&gt;</code> element</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>button</code></td><td>The button is a clickable button</td></tr>" +
        "    <tr><td><code>submit</code></td><td>The button is a submit button (submits form-data)</td></tr>" +
        "    <tr><td><code>reset</code></td><td>The button is a reset button (resets the form-data to its initial values)</td></tr>" +
        "  </table>" +
           myRelatedElements.type +
        "</div>",

      inputelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>type</code> attribute of the <code>&lt;input&gt;</code> tag specifies the type of input element to display</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>button</code></td><td>" + Input.Button + "</td></tr>" +
        "    <tr><td><code>checkbox</code></td><td>" + Input.Checkbox + "</td></tr>" +
        "    <tr><td><code>color</code></td><td>" + Input.Color + "</td></tr>" +
        "    <tr><td><code>date</code></td><td>" + Input.Date + "</td></tr>" +
        "    <tr><td><code>datetime-local</code></td><td>" + Input.Datetime_Local + "</td></tr>" +
        "    <tr><td><code>email</code></td><td>" + Input.Email + "</td></tr>" +
        "    <tr><td><code>file</code></td><td>" + Input.File + "</td></tr>" +
        "    <tr><td><code>hidden</code></td><td>" + Input.Hidden + "</td></tr>" +
        "    <tr><td><code>image</code></td><td>" + Input.Image + "</td></tr>" +
        "    <tr><td><code>month</code></td><td>" + Input.Month + "</td></tr>" +
        "    <tr><td><code>number</code></td><td>" + Input.Number + "</td></tr>" +
        "    <tr><td><code>password</code></td><td>" + Input.Password + "</td></tr>" +
        "    <tr><td><code>radio</code></td><td>" + Input.Radio + "</td></tr>" +
        "    <tr><td><code>range</code></td><td>" + Input.Range + "</td></tr>" +
        "    <tr><td><code>reset</code></td><td>" + Input.Reset + "</td></tr>" +
        "    <tr><td><code>search</code></td><td>" + Input.Search + "</td></tr>" +
        "    <tr><td><code>submit</code></td><td>" + Input.Submit + "</td></tr>" +
        "    <tr><td><code>tel</code></td><td>" + Input.Telephone + "</td></tr>" +
        "    <tr><td><code>text</code></td><td>" + Input.Text + "</td></tr>" +
        "    <tr><td><code>time</code></td><td>" + Input.Time + "</td></tr>" +
        "    <tr><td><code>url</code></td><td>" + Input.URL + "</td></tr>" +
        "    <tr><td><code>week</code></td><td>" + Input.Week + "</td></tr>" +
        "  </table>" +
           myRelatedElements.type +
        "</div>",

      linkelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>type</code> attribute of the <code>&lt;link&gt;</code> tag specifies the media type of the linked document/resource</div>" +
        "  <div>The most common value of type is <code>\"text/css\"</code></div>" +
        "  <div>If the <code>type</code> attribute is omitted, the browser will look at the <code>rel</code> attribute to guess the correct type</div>" +
        "  <div>So, if <code>rel=\"stylesheet\"</code>, the browser will assume the type is <code>\"text/css\"</code></div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Script Type</em></code></td><td>" + Type.Link + Type.IANA_Media_Type + "</td></tr>" +
        "  </table>" +
           myRelatedElements.type +
        "</div>",

      olelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>type</code> attribute of the <code>&lt;ol&gt;</code> tag specifies the kind of marker to use in the list (letters or numbers)</div>" +
        "  <div>The CSS list-style-type property offers more types than the <code>type</code> attribute</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>1</code></td><td><b>[Default]</b> Decimal numbers (1, 2, 3, 4, ...)</td></tr>" +
        "    <tr><td><code>a</code></td><td>Alphabetically ordered list, lowercase (a, b, c, d, ...)</td></tr>" +
        "    <tr><td><code>A</code></td><td>Alphabetically ordered list, uppercase (A, B, C, D, ...)</td></tr>" +
        "    <tr><td><code>i</code></td><td>Roman numbers, lowercase (i, ii, iii, iv, ...)</td></tr>" +
        "    <tr><td><code>I</code></td><td>Roman numbers, uppercase (I, II, III, IV), ...</td></tr>" +
        "  </table>" +
           myRelatedElements.type +
        "</div>",

      scriptelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>type</code> attribute of the <code>&lt;script&gt;</code> tag specifies the type of the script</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Script Type</em></code></td><td>" + Type.Script + Type.IANA_Media_Type + "</td></tr>" +
        "  </table>" +
           myRelatedElements.type +
        "</div>",

      styleelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>type</code> attribute of the <code>&lt;style&gt;</code> tag specifies the Internet media type (formerly known as MIME type)</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>Internet Media Type</em></code></td><td>" + Type.Style + Type.IANA_Media_Type + "</td></tr>" +
        "  </table>" +
           myRelatedElements.type +
        "</div>"
    },

    usemap: {
      imgelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>usemap</code> attribute of the <code>&lt;img&gt;</code> tag specifies an image as a client-side image map (an image map is an image with clickable areas)</div>" +
        "  <div>The <code>usemap</code> attribute is associated with a <code>&lt;map&gt;</code> element's <code>name</code> attribute, and creates a relationship between the <code>&lt;img&gt;</code> and the <code>&lt;map&gt;</code></div>" +
        "  <div>The <code>usemap</code> attribute cannot be used if the <code>&lt;img&gt;</code> element is a descendant of an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> elemen</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code><em>#MapName</em></code></td><td>Specifies the name of the map element with prefix of \"#\"</td></tr>" +
        "  </table>" +
           myRelatedElements.usemap +
        "</div>"
    },

    wrap: {
      textareaelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>wrap</code> attribute of the <code>&lt;textarea&gt;</code> tag specifies how the text in a text area is to be wrapped when submitted in a form</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td><code>soft</code></td><td>" + Wrap.Soft + "</td></tr>" +
        "    <tr><td><code>hard</code></td><td>" + Wrap.Hard + "</td></tr>" +
        "  </table>" +
           myRelatedElements.wrap +
        "</div>"
    },

    xmlns: {
      htmlelement:
        "<div class=\"Box-Attributes\">" +
        "  <div>The <code>xmlns</code> attribute of the <code>&lt;html&gt;</code> tag specifies the xml namespace for a document</div>" +
        "  <table>" +
        "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
        "    <tr><td rowspan=\"2\"><code>http://www.w3.org/1999/xhtml</code></td><td>" + XMLNS.Description +"</td></tr>" +
        "    <tr><td>" + XMLNS.Insight1 + "</td></tr>" +
        "  </table>" +
           myRelatedElements.xlmns +
        "</div>"
    }
  };
  return myMiscellaneous;
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

/////////////////////////
// HTML PAGE STRUCTURE //
/////////////////////////
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

function HTMLXmlnsAttributes() {
  let myVisibility = document.getElementById("HTML-Xmlns-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("HTML-Xmlns-Attributes").innerHTML = MiscellaneousAttributes().xmlns.htmlelement;
  }
  else { myVisibility.style.display = "none"; }
}

// HEAD TAG //
function HeadTag() {
  let myVisibility = document.getElementById("Head-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function HeadGlobalAttributes() {
  let myVisibility = document.getElementById("Head-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Head-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

// TITLE TAG //
function TitleTag() {
  let myVisibility = document.getElementById("Title-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TitleGlobalAttributes() {
  let myVisibility = document.getElementById("Title-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Title-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

// STYLE TAG //
function StyleTag() {
  let myVisibility = document.getElementById("Style-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function StyleGlobalAttributes() {
  let myVisibility = document.getElementById("Style-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Style-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function StyleEventAttributes() {
  let myVisibility = document.getElementById("Style-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Style-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function StyleMediaAttributes() {
  let myVisibility = document.getElementById("Style-Media-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Style-Media-Attributes").innerHTML = MiscellaneousAttributes().media.styleelement;
  }
  else { myVisibility.style.display = "none"; }
}

function StyleTypeAttributes() {
  let myVisibility = document.getElementById("Style-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Style-Type-Attributes").innerHTML = MiscellaneousAttributes().type.styleelement;
  }
  else { myVisibility.style.display = "none"; }
}

// BASE TAG //
function BaseTag() {
  let myVisibility = document.getElementById("Base-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function BaseGlobalAttributes() {
  let myVisibility = document.getElementById("Base-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Base-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function BaseHrefAttributes() {
  let myVisibility = document.getElementById("Base-Href-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Base-Href-Attributes").innerHTML = HyperlinkAttributes().href.baseelement;
  }
  else { myVisibility.style.display = "none"; }
}

function BaseTargetAttributes() {
  let myVisibility = document.getElementById("Base-Target-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Base-Target-Attributes").innerHTML = HyperlinkAttributes().target.baseelement;
  }
  else { myVisibility.style.display = "none"; }
}

// LINK TAG //
function LinkTag() {
  let myVisibility = document.getElementById("Link-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function LinkGlobalAttributes() {
  let myVisibility = document.getElementById("Link-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkEventAttributes() {
  let myVisibility = document.getElementById("Link-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkCrossoriginAttributes() {
  let myVisibility = document.getElementById("Link-Crossorigin-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Crossorigin-Attributes").innerHTML = NetworkAttributes().crossorigin.linkelement;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkHrefAttributes() {
  let myVisibility = document.getElementById("Link-Href-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Href-Attributes").innerHTML = HyperlinkAttributes().href.linkelement;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkHreflangAttributes() {
  let myVisibility = document.getElementById("Link-Hreflang-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Hreflang-Attributes").innerHTML = MiscellaneousAttributes().hreflang.linkelement;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkMediaAttributes() {
  let myVisibility = document.getElementById("Link-Media-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Media-Attributes").innerHTML = MiscellaneousAttributes().media.linkelement;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkReferrerpolicyAttributes() {
  let myVisibility = document.getElementById("Link-Referrerpolicy-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Referrerpolicy-Attributes").innerHTML = NetworkAttributes().referrerpolicy.linkelement;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkRelAttributes() {
  let myVisibility = document.getElementById("Link-Rel-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Rel-Attributes").innerHTML = MiscellaneousAttributes().rel.linkelement;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkSizesAttributes() {
  let myVisibility = document.getElementById("Link-Sizes-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Sizes-Attributes").innerHTML = MiscellaneousAttributes().sizes.linkelement;
  }
  else { myVisibility.style.display = "none"; }
}

function LinkTypeAttributes() {
  let myVisibility = document.getElementById("Link-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Link-Type-Attributes").innerHTML = MiscellaneousAttributes().type.linkelement;
  }
  else { myVisibility.style.display = "none"; }
}

// META TAG //
function MetaTag() {
  let myVisibility = document.getElementById("Meta-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function MetaGlobalAttributes() {
  let myVisibility = document.getElementById("Meta-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meta-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function MetaCharsetAttributes() {
  let myVisibility = document.getElementById("Meta-Charset-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meta-Charset-Attributes").innerHTML = CharacterAttributes().charset.metaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MetaContentAttributes() {
  let myVisibility = document.getElementById("Meta-Content-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meta-Content-Attributes").innerHTML = MiscellaneousAttributes().content.metaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MetaHttpequivAttributes() {
  let myVisibility = document.getElementById("Meta-Httpequiv-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meta-Httpequiv-Attributes").innerHTML = NetworkAttributes().http_equiv.metaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MetaNameAttributes() {
  let myVisibility = document.getElementById("Meta-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meta-Name-Attributes").innerHTML = MiscellaneousAttributes().name.metaelement;
  }
  else { myVisibility.style.display = "none"; }
}

// SCRIPT TAG //
function ScriptTag() {
  let myVisibility = document.getElementById("Script-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptGlobalAttributes() {
  let myVisibility = document.getElementById("Script-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptAsyncAttributes() {
  let myVisibility = document.getElementById("Script-Async-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Async-Attributes").innerHTML = BooleanAttributes().async.scriptelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptCrossoriginAttributes() {
  let myVisibility = document.getElementById("Script-Crossorigin-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Crossorigin-Attributes").innerHTML = NetworkAttributes().crossorigin.scriptelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptDeferAttributes() {
  let myVisibility = document.getElementById("Script-Defer-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Defer-Attributes").innerHTML = BooleanAttributes().defer.scriptelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptIntegrityAttributes() {
  let myVisibility = document.getElementById("Script-Integrity-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Integrity-Attributes").innerHTML = NetworkAttributes().integrity.scriptelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptNomoduleAttributes() {
  let myVisibility = document.getElementById("Script-Nomodule-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Nomodule-Attributes").innerHTML = MiscellaneousAttributes().nomodule.scriptelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptReferrerpolicyAttributes() {
  let myVisibility = document.getElementById("Script-Referrerpolicy-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Referrerpolicy-Attributes").innerHTML = NetworkAttributes().referrerpolicy.scriptelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptSrcAttributes() {
  let myVisibility = document.getElementById("Script-Src-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Src-Attributes").innerHTML = HyperlinkAttributes().src.scriptelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ScriptTypeAttributes() {
  let myVisibility = document.getElementById("Script-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Script-Type-Attributes").innerHTML = MiscellaneousAttributes().type.scriptelement;
  }
  else { myVisibility.style.display = "none"; }
}

// NOSCRIPT TAG //
function NoscriptTag() {
  let myVisibility = document.getElementById("Noscript-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function NoscriptGlobalAttributes() {
  let myVisibility = document.getElementById("Noscript-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Noscript-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

// BODY TAG //
function BodyTag() {
  let myVisibility = document.getElementById("Body-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function BodyGlobalAttributes() {
  let myVisibility = document.getElementById("Body-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Body-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function BodyEventAttributes() {
  let myVisibility = document.getElementById("Body-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Body-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// HEADER TAG //
function HeaderTag() {
  let myVisibility = document.getElementById("Header-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function HeaderGlobalAttributes() {
  let myVisibility = document.getElementById("Header-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Header-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function HeaderEventAttributes() {
  let myVisibility = document.getElementById("Header-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Header-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// MAIN TAG //
function MainTag() {
  let myVisibility = document.getElementById("Main-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function MainGlobalAttributes() {
  let myVisibility = document.getElementById("Main-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Main-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function MainEventAttributes() {
  let myVisibility = document.getElementById("Main-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Main-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// FOOTER TAG //
function FooterTag() {
  let myVisibility = document.getElementById("Footer-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function FooterGlobalAttributes() {
  let myVisibility = document.getElementById("Footer-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Footer-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function FooterEventAttributes() {
  let myVisibility = document.getElementById("Footer-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Footer-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

// NAVIGATE TAG //
function NavTag() {
  let myVisibility = document.getElementById("Nav-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function NavGlobalAttributes() {
  let myVisibility = document.getElementById("Nav-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Nav-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function NavEventAttributes() {
  let myVisibility = document.getElementById("Nav-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Nav-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// ASIDE TAG //
function AsideTag() {
  let myVisibility = document.getElementById("Aside-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function AsideGlobalAttributes() {
  let myVisibility = document.getElementById("Aside-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Aside-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function AsideEventAttributes() {
  let myVisibility = document.getElementById("Aside-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Aside-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// ARTICLE TAG //
function ArticleTag() {
  let myVisibility = document.getElementById("Article-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ArticleGlobalAttributes() {
  let myVisibility = document.getElementById("Article-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Article-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ArticleEventAttributes() {
  let myVisibility = document.getElementById("Article-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Article-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SECTION TAG //
function SectionTag() {
  let myVisibility = document.getElementById("Section-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SectionGlobalAttributes() {
  let myVisibility = document.getElementById("Section-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Section-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SectionEventAttributes() {
  let myVisibility = document.getElementById("Section-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Section-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// DIVISION TAG //
function DivisionTag() {
  let myVisibility = document.getElementById("Division-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function DivisionGlobalAttributes() {
  let myVisibility = document.getElementById("Division-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Division-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DivisionEventAttributes() {
  let myVisibility = document.getElementById("Division-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Division-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SPAN TAG //
function SpanTag() {
  let myVisibility = document.getElementById("Span-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SpanGlobalAttributes() {
  let myVisibility = document.getElementById("Span-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Span-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SpanEventAttributes() {
  let myVisibility = document.getElementById("Span-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Span-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// HEADING GROUP TAG //
function HgroupTag() {
  let myVisibility = document.getElementById("Hgroup-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function HgroupGlobalAttributes() {
  let myVisibility = document.getElementById("Hgroup-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Hgroup-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function HgroupEventAttributes() {
  let myVisibility = document.getElementById("Hgroup-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Hgroup-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// PICTURE TAG //
function PictureTag() {
  let myVisibility = document.getElementById("Picture-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function PictureGlobalAttributes() {
  let myVisibility = document.getElementById("Picture-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Picture-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function PictureEventAttributes() {
  let myVisibility = document.getElementById("Picture-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Picture-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SEARCH TAG //
function SearchTag() {
  let myVisibility = document.getElementById("Search-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SearchGlobalAttributes() {
  let myVisibility = document.getElementById("Search-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Search-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SearchEventAttributes() {
  let myVisibility = document.getElementById("Search-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Search-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SVG TAG //
function SvgTag() {
  let myVisibility = document.getElementById("Svg-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

// TEMPLATE TAG //
function TemplateTag() {
  let myVisibility = document.getElementById("Template-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TemplateGlobalAttributes() {
  let myVisibility = document.getElementById("Template-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Template-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
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

function AnchorDownloadAttributes() {
  let myVisibility = document.getElementById("Anchor-Download-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Download-Attributes").innerHTML = MiscellaneousAttributes().download.anchorelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorHrefAttributes() {
  let myVisibility = document.getElementById("Anchor-Href-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Href-Attributes").innerHTML = HyperlinkAttributes().href.anchorelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorHreflangAttributes() {
  let myVisibility = document.getElementById("Anchor-Hreflang-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Hreflang-Attributes").innerHTML = MiscellaneousAttributes().hreflang.anchorelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorMediaAttributes() {
  let myVisibility = document.getElementById("Anchor-Media-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Media-Attributes").innerHTML = MiscellaneousAttributes().media.anchorelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorPingAttributes() {
  let myVisibility = document.getElementById("Anchor-Ping-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Ping-Attributes").innerHTML = NetworkAttributes().ping.anchorelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorReferrerpolicyAttributes() {
  let myVisibility = document.getElementById("Anchor-Referrerpolicy-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Referrerpolicy-Attributes").innerHTML = NetworkAttributes().referrerpolicy.anchorelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorRelAttributes() {
  let myVisibility = document.getElementById("Anchor-Rel-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Rel-Attributes").innerHTML = MiscellaneousAttributes().rel.anchorelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorTargetAttributes() {
  let myVisibility = document.getElementById("Anchor-Target-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Target-Attributes").innerHTML = HyperlinkAttributes().target.anchorelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AnchorTypeAttributes() {
  let myVisibility = document.getElementById("Anchor-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Anchor-Type-Attributes").innerHTML = MiscellaneousAttributes().type.anchorelement;
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

function AddressGlobalAttributes() {
  let myVisibility = document.getElementById("Address-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Address-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function AddressEventAttributes() {
  let myVisibility = document.getElementById("Address-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Address-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function AbbreviationGlobalAttributes() {
  let myVisibility = document.getElementById("Abbreviation-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Abbreviation-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function AbbreviationEventAttributes() {
  let myVisibility = document.getElementById("Abbreviation-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Abbreviation-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function DefinitionGlobalAttributes() {
  let myVisibility = document.getElementById("Definition-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Definition-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DefinitionEventAttributes() {
  let myVisibility = document.getElementById("Definition-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Definition-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function CiteGlobalAttributes() {
  let myVisibility = document.getElementById("Cite-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Cite-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function CiteEventAttributes() {
  let myVisibility = document.getElementById("Cite-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Cite-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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
    document.getElementById("Quote-Cite-Attributes").innerHTML = HyperlinkAttributes().cite.quoteelement;
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
    document.getElementById("Blockquote-Cite-Attributes").innerHTML = HyperlinkAttributes().cite.blockquoteelement;
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
    document.getElementById("Insert-Cite-Attributes").innerHTML = HyperlinkAttributes().cite.insertelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InsertDatetimeAttributes() {
  let myVisibility = document.getElementById("Insert-Datetime-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Insert-Datetime-Attributes").innerHTML = TimeAttributes().datetime.insertelement;
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
    document.getElementById("Delete-Cite-Attributes").innerHTML = HyperlinkAttributes().cite.deleteelement;
  }
  else { myVisibility.style.display = "none"; }
}

function DeleteDatetimeAttributes() {
  let myVisibility = document.getElementById("Delete-Datetime-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Delete-Datetime-Attributes").innerHTML = TimeAttributes().datetime.deleteelement;
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

function BdiGlobalAttributes() {
  let myVisibility = document.getElementById("Bdi-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Bdi-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function BdiEventAttributes() {
  let myVisibility = document.getElementById("Bdi-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Bdi-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function BdoGlobalAttributes() {
  let myVisibility = document.getElementById("Bdo-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Bdo-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function BdoEventAttributes() {
  let myVisibility = document.getElementById("Bdo-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Bdo-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function TimeGlobalAttributes() {
  let myVisibility = document.getElementById("Time-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Time-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TimeEventAttributes() {
  let myVisibility = document.getElementById("Time-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Time-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function TimeDatetimeAttributes() {
  let myVisibility = document.getElementById("Time-Datetime-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Time-Datetime-Attributes").innerHTML = TimeAttributes().datetime.timeelement;
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

// FORM TAG //
function FormTag() {
  let myVisibility = document.getElementById("Form-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function FormGlobalAttributes() {
  let myVisibility = document.getElementById("Form-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function FormEventAttributes() {
  let myVisibility = document.getElementById("Form-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function FormAcceptCharsetAttributes() {
  let myVisibility = document.getElementById("Form-Accept-Charset-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Accept-Charset-Attributes").innerHTML = CharacterAttributes().accept_charset.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FormActionAttributes() {
  let myVisibility = document.getElementById("Form-Action-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Action-Attributes").innerHTML = HyperlinkAttributes().action.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FormAutocompleteAttributes() {
  let myVisibility = document.getElementById("Form-Autocomplete-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Autocomplete-Attributes").innerHTML = MiscellaneousAttributes().autocomplete.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FormEnctypeAttributes() {
  let myVisibility = document.getElementById("Form-Enctype-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Enctype-Attributes").innerHTML = NetworkAttributes().enctype.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FormMethodAttributes() {
  let myVisibility = document.getElementById("Form-Method-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Method-Attributes").innerHTML = NetworkAttributes().method.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FormNameAttributes() {
  let myVisibility = document.getElementById("Form-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Name-Attributes").innerHTML = MiscellaneousAttributes().name.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FormNovalidateAttributes() {
  let myVisibility = document.getElementById("Form-Novalidate-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Novalidate-Attributes").innerHTML = BooleanAttributes().novalidate.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FormRelAttributes() {
  let myVisibility = document.getElementById("Form-Rel-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Rel-Attributes").innerHTML = MiscellaneousAttributes().rel.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FormTargetAttributes() {
  let myVisibility = document.getElementById("Form-Target-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Form-Target-Attributes").innerHTML = HyperlinkAttributes().target.formelement;
  }
  else { myVisibility.style.display = "none"; }
}

// FIELDSET TAG //
function FieldsetTag() {
  let myVisibility = document.getElementById("Fieldset-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function FieldsetGlobalAttributes() {
  let myVisibility = document.getElementById("Fieldset-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function FieldsetEventAttributes() {
  let myVisibility = document.getElementById("Fieldset-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function FieldsetDisabledAttributes() {
  let myVisibility = document.getElementById("Fieldset-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Disabled-Attributes").innerHTML = BooleanAttributes().disabled.fieldsetelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FieldsetFormAttributes() {
  let myVisibility = document.getElementById("Fieldset-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Form-Attributes").innerHTML = MiscellaneousAttributes().form.fieldsetelement;
  }
  else { myVisibility.style.display = "none"; }
}

function FieldsetNameAttributes() {
  let myVisibility = document.getElementById("Fieldset-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Fieldset-Name-Attributes").innerHTML = MiscellaneousAttributes().name.fieldsetelement;
  }
  else { myVisibility.style.display = "none"; }
}

// LEGEND TAG //
function LegendTag() {
  let myVisibility = document.getElementById("Legend-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function LegendGlobalAttributes() {
  let myVisibility = document.getElementById("Legend-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Legend-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function LegendEventAttributes() {
  let myVisibility = document.getElementById("Legend-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Legend-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// LABEL TAG //
function LabelTag() {
  let myVisibility = document.getElementById("Label-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function LabelGlobalAttributes() {
  let myVisibility = document.getElementById("Label-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Label-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function LabelEventAttributes() {
  let myVisibility = document.getElementById("Label-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Label-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function LabelForAttributes() {
  let myVisibility = document.getElementById("Label-For-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Label-For-Attributes").innerHTML =  MiscellaneousAttributes().for.labelelement;
  }
  else { myVisibility.style.display = "none"; }
}

function LabelFormAttributes() {
  let myVisibility = document.getElementById("Label-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Label-Form-Attributes").innerHTML =  MiscellaneousAttributes().form.labelelement;
  }
  else { myVisibility.style.display = "none"; }
}

// INPUT TAG //
function InputTag() {
  let myVisibility = document.getElementById("Input-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function InputGlobalAttributes() {
  let myVisibility = document.getElementById("Input-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function InputEventAttributes() {
  let myVisibility = document.getElementById("Input-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function InputAcceptAttributes() {
  let myVisibility = document.getElementById("Input-Accept-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Accept-Attributes").innerHTML = MiscellaneousAttributes().accept.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputAltAttributes() {
  let myVisibility = document.getElementById("Input-Alt-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Alt-Attributes").innerHTML = MiscellaneousAttributes().alt.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputAutocompleteAttributes() {
  let myVisibility = document.getElementById("Input-Autocomplete-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Autocomplete-Attributes").innerHTML = MiscellaneousAttributes().autocomplete.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputAutofocusAttributes() {
  let myVisibility = document.getElementById("Input-Autofocus-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Autofocus-Attributes").innerHTML = BooleanAttributes().autofocus.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputCheckedAttributes() {
  let myVisibility = document.getElementById("Input-Checked-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Checked-Attributes").innerHTML = BooleanAttributes().checked.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputDirnameAttributes() {
  let myVisibility = document.getElementById("Input-Dirname-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Dirname-Attributes").innerHTML = MiscellaneousAttributes().dirname.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputDisabledAttributes() {
  let myVisibility = document.getElementById("Input-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Disabled-Attributes").innerHTML = BooleanAttributes().disabled.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputFormAttributes() {
  let myVisibility = document.getElementById("Input-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Form-Attributes").innerHTML = MiscellaneousAttributes().form.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputFormactionAttributes() {
  let myVisibility = document.getElementById("Input-Formaction-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formaction-Attributes").innerHTML = HyperlinkAttributes().formaction.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputFormenctypeAttributes() {
  let myVisibility = document.getElementById("Input-Formenctype-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formenctype-Attributes").innerHTML = NetworkAttributes().formenctype.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputFormmethodAttributes() {
  let myVisibility = document.getElementById("Input-Formmethod-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formmethod-Attributes").innerHTML = NetworkAttributes().formmethod.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputFormnovalidateAttributes() {
  let myVisibility = document.getElementById("Input-Formnovalidate-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formnovalidate-Attributes").innerHTML = BooleanAttributes().formnovalidate.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputFormtargetAttributes() {
  let myVisibility = document.getElementById("Input-Formtarget-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Formtarget-Attributes").innerHTML = HyperlinkAttributes().formtarget.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputHeightAttributes() {
  let myVisibility = document.getElementById("Input-Height-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Height-Attributes").innerHTML = DimensionAttributes().height.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputListAttributes() {
  let myVisibility = document.getElementById("Input-List-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-List-Attributes").innerHTML = MiscellaneousAttributes().list.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputMaxAttributes() {
  let myVisibility = document.getElementById("Input-Max-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Max-Attributes").innerHTML = ValueAttributes().max.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputMaxlengthAttributes() {
  let myVisibility = document.getElementById("Input-Maxlength-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Maxlength-Attributes").innerHTML = ValueAttributes().maxlength.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputMinAttributes() {
  let myVisibility = document.getElementById("Input-Min-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Min-Attributes").innerHTML = ValueAttributes().min.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputMinlengthAttributes() {
  let myVisibility = document.getElementById("Input-Minlength-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Minlength-Attributes").innerHTML = ValueAttributes().minlength.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputMultipleAttributes() {
  let myVisibility = document.getElementById("Input-Multiple-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Multiple-Attributes").innerHTML = BooleanAttributes().multiple.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputNameAttributes() {
  let myVisibility = document.getElementById("Input-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Name-Attributes").innerHTML = MiscellaneousAttributes().name.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputPatternAttributes() {
  let myVisibility = document.getElementById("Input-Pattern-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Pattern-Attributes").innerHTML = ValueAttributes().pattern.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputPlaceholderAttributes() {
  let myVisibility = document.getElementById("Input-Placeholder-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Placeholder-Attributes").innerHTML = MiscellaneousAttributes().placeholder.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputPopovertargetAttributes() {
  let myVisibility = document.getElementById("Input-Popovertarget-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Popovertarget-Attributes").innerHTML = MiscellaneousAttributes().popovertarget.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputPopovertargetactionAttributes() {
  let myVisibility = document.getElementById("Input-Popovertargetaction-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Popovertargetaction-Attributes").innerHTML = MiscellaneousAttributes().popovertargetaction.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputReadonlyAttributes() {
  let myVisibility = document.getElementById("Input-Readonly-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Readonly-Attributes").innerHTML = BooleanAttributes().readonly.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputRequiredAttributes() {
  let myVisibility = document.getElementById("Input-Required-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Required-Attributes").innerHTML = BooleanAttributes().required.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputSizeAttributes() {
  let myVisibility = document.getElementById("Input-Size-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Size-Attributes").innerHTML = DimensionAttributes().size.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputSrcAttributes() {
  let myVisibility = document.getElementById("Input-Src-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Src-Attributes").innerHTML = HyperlinkAttributes().src.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputStepAttributes() {
  let myVisibility = document.getElementById("Input-Step-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Step-Attributes").innerHTML = ValueAttributes().step.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputTypeAttributes() {
  let myVisibility = document.getElementById("Input-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Type-Attributes").innerHTML = MiscellaneousAttributes().type.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputValueAttributes() {
  let myVisibility = document.getElementById("Input-Value-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Value-Attributes").innerHTML = ValueAttributes().value.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function InputWidthAttributes() {
  let myVisibility = document.getElementById("Input-Width-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Input-Width-Attributes").innerHTML = DimensionAttributes().width.inputelement;
  }
  else { myVisibility.style.display = "none"; }
}

// TEXTAREA TAG //
function TextareaTag() {
  let myVisibility = document.getElementById("Textarea-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaGlobalAttributes() {
  let myVisibility = document.getElementById("Textarea-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaEventAttributes() {
  let myVisibility = document.getElementById("Textarea-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaAutofocusAttributes() {
  let myVisibility = document.getElementById("Textarea-Autofocus-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Autofocus-Attributes").innerHTML = BooleanAttributes().autofocus.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaColsAttributes() {
  let myVisibility = document.getElementById("Textarea-Cols-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Cols-Attributes").innerHTML = DimensionAttributes().cols.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaDirnameAttributes() {
  let myVisibility = document.getElementById("Textarea-Dirname-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Dirname-Attributes").innerHTML = MiscellaneousAttributes().dirname.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaDisabledAttributes() {
  let myVisibility = document.getElementById("Textarea-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Disabled-Attributes").innerHTML = BooleanAttributes().disabled.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaFormAttributes() {
  let myVisibility = document.getElementById("Textarea-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Form-Attributes").innerHTML = MiscellaneousAttributes().form.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaMaxlengthAttributes() {
  let myVisibility = document.getElementById("Textarea-Maxlength-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Maxlength-Attributes").innerHTML = ValueAttributes().maxlength.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaNameAttributes() {
  let myVisibility = document.getElementById("Textarea-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Name-Attributes").innerHTML = MiscellaneousAttributes().name.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaPlaceholderAttributes() {
  let myVisibility = document.getElementById("Textarea-Placeholder-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Placeholder-Attributes").innerHTML = MiscellaneousAttributes().placeholder.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaReadonlyAttributes() {
  let myVisibility = document.getElementById("Textarea-Readonly-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Readonly-Attributes").innerHTML = BooleanAttributes().readonly.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaRequiredAttributes() {
  let myVisibility = document.getElementById("Textarea-Required-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Required-Attributes").innerHTML = BooleanAttributes().required.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaRowsAttributes() {
  let myVisibility = document.getElementById("Textarea-Rows-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Rows-Attributes").innerHTML = DimensionAttributes().rows.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TextareaWrapAttributes() {
  let myVisibility = document.getElementById("Textarea-Wrap-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Textarea-Wrap-Attributes").innerHTML = MiscellaneousAttributes().wrap.textareaelement;
  }
  else { myVisibility.style.display = "none"; }
}

// SELECT TAG //
function SelectTag() {
  let myVisibility = document.getElementById("Select-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SelectGlobalAttributes() {
  let myVisibility = document.getElementById("Select-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SelectEventAttributes() {
  let myVisibility = document.getElementById("Select-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function SelectAutofocusAttributes() {
  let myVisibility = document.getElementById("Select-Autofocus-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Autofocus-Attributes").innerHTML = BooleanAttributes().autofocus.selectelement;
  }
  else { myVisibility.style.display = "none"; }
}

function SelectDisabledAttributes() {
  let myVisibility = document.getElementById("Select-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Disabled-Attributes").innerHTML = BooleanAttributes().disabled.selectelement;
  }
  else { myVisibility.style.display = "none"; }
}

function SelectFormAttributes() {
  let myVisibility = document.getElementById("Select-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Form-Attributes").innerHTML = MiscellaneousAttributes().form.selectelement;
  }
  else { myVisibility.style.display = "none"; }
}

function SelectMultipleAttributes() {
  let myVisibility = document.getElementById("Select-Multiple-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Multiple-Attributes").innerHTML = BooleanAttributes().multiple.selectelement;
  }
  else { myVisibility.style.display = "none"; }
}

function SelectNameAttributes() {
  let myVisibility = document.getElementById("Select-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Name-Attributes").innerHTML = MiscellaneousAttributes().name.selectelement;
  }
  else { myVisibility.style.display = "none"; }
}

function SelectRequiredAttributes() {
  let myVisibility = document.getElementById("Select-Required-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Required-Attributes").innerHTML = BooleanAttributes().required.selectelement;
  }
  else { myVisibility.style.display = "none"; }
}

function SelectSizeAttributes() {
  let myVisibility = document.getElementById("Select-Size-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Select-Size-Attributes").innerHTML = DimensionAttributes().size.selectelement;
  }
  else { myVisibility.style.display = "none"; }
}

// OPTION GROUP TAG //
function OptgroupTag() {
  let myVisibility = document.getElementById("Optgroup-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function OptgroupGlobalAttributes() {
  let myVisibility = document.getElementById("Optgroup-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Optgroup-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function OptgroupEventAttributes() {
  let myVisibility = document.getElementById("Optgroup-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Optgroup-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function OptgroupDisabledAttributes() {
  let myVisibility = document.getElementById("Optgroup-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Optgroup-Disabled-Attributes").innerHTML = BooleanAttributes().disabled.optgroupelement;
  }
  else { myVisibility.style.display = "none"; }
}

function OptgroupLabelAttributes() {
  let myVisibility = document.getElementById("Optgroup-Label-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Optgroup-Label-Attributes").innerHTML = MiscellaneousAttributes().label.optgroupelement;
  }
  else { myVisibility.style.display = "none"; }
}

// OPTION TAG //
function OptionTag() {
  let myVisibility = document.getElementById("Option-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function OptionGlobalAttributes() {
  let myVisibility = document.getElementById("Option-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Option-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function OptionEventAttributes() {
  let myVisibility = document.getElementById("Option-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Option-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function OptionDisabledAttributes() {
  let myVisibility = document.getElementById("Option-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Option-Disabled-Attributes").innerHTML = BooleanAttributes().disabled.optionelement;
  }
  else { myVisibility.style.display = "none"; }
}

function OptionLabelAttributes() {
  let myVisibility = document.getElementById("Option-Label-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Option-Label-Attributes").innerHTML = MiscellaneousAttributes().label.optionelement;
  }
  else { myVisibility.style.display = "none"; }
}

function OptionSelectedAttributes() {
  let myVisibility = document.getElementById("Option-Selected-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Option-Selected-Attributes").innerHTML = BooleanAttributes().selected.optionelement;
  }
  else { myVisibility.style.display = "none"; }
}

function OptionValueAttributes() {
  let myVisibility = document.getElementById("Option-Value-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Option-Value-Attributes").innerHTML = ValueAttributes().value.optionelement;
  }
  else { myVisibility.style.display = "none"; }
}

// DATALIST TAG //
function DatalistTag() {
  let myVisibility = document.getElementById("Datalist-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function DatalistGlobalAttributes() {
  let myVisibility = document.getElementById("Datalist-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Datalist-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DatalistEventAttributes() {
  let myVisibility = document.getElementById("Datalist-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Datalist-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// PROGRESS TAG //
function ProgressTag() {
  let myVisibility = document.getElementById("Progress-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ProgressGlobalAttributes() {
  let myVisibility = document.getElementById("Progress-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Progress-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ProgressEventAttributes() {
  let myVisibility = document.getElementById("Progress-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Progress-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function ProgressMaxAttributes() {
  let myVisibility = document.getElementById("Progress-Max-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Progress-Max-Attributes").innerHTML = ValueAttributes().max.progresselement;
  }
  else { myVisibility.style.display = "none"; }
}

function ProgressValueAttributes() {
  let myVisibility = document.getElementById("Progress-Value-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Progress-Value-Attributes").innerHTML = ValueAttributes().value.progresselement;
  }
  else { myVisibility.style.display = "none"; }
}

// METER TAG //
function MeterTag() {
  let myVisibility = document.getElementById("Meter-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function MeterGlobalAttributes() {
  let myVisibility = document.getElementById("Meter-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function MeterEventAttributes() {
  let myVisibility = document.getElementById("Meter-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function MeterFormAttributes() {
  let myVisibility = document.getElementById("Meter-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-Form-Attributes").innerHTML = MiscellaneousAttributes().form.meterelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MeterHighAttributes() {
  let myVisibility = document.getElementById("Meter-High-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-High-Attributes").innerHTML = ValueAttributes().high.meterelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MeterLowAttributes() {
  let myVisibility = document.getElementById("Meter-Low-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-Low-Attributes").innerHTML = ValueAttributes().low.meterelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MeterMaxAttributes() {
  let myVisibility = document.getElementById("Meter-Max-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-Max-Attributes").innerHTML = ValueAttributes().max.meterelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MeterMinAttributes() {
  let myVisibility = document.getElementById("Meter-Min-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-Min-Attributes").innerHTML = ValueAttributes().min.meterelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MeterOptimumAttributes() {
  let myVisibility = document.getElementById("Meter-Optimum-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-Optimum-Attributes").innerHTML = ValueAttributes().optimum.meterelement;
  }
  else { myVisibility.style.display = "none"; }
}

function MeterValueAttributes() {
  let myVisibility = document.getElementById("Meter-Value-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Meter-Value-Attributes").innerHTML = ValueAttributes().value.meterelement;
  }
  else { myVisibility.style.display = "none"; }
}

// OUTPUT TAG //
function OutputTag() {
  let myVisibility = document.getElementById("Output-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function OutputGlobalAttributes() {
  let myVisibility = document.getElementById("Output-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Output-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function OutputEventAttributes() {
  let myVisibility = document.getElementById("Output-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Output-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function OutputForAttributes() {
  let myVisibility = document.getElementById("Output-For-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Output-For-Attributes").innerHTML = MiscellaneousAttributes().for.outputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function OutputFormAttributes() {
  let myVisibility = document.getElementById("Output-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Output-Form-Attributes").innerHTML = MiscellaneousAttributes().form.outputelement;
  }
  else { myVisibility.style.display = "none"; }
}

function OutputNameAttributes() {
  let myVisibility = document.getElementById("Output-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Output-Name-Attributes").innerHTML = MiscellaneousAttributes().name.outputelement;
  }
  else { myVisibility.style.display = "none"; }
}

// BUTTON TAG //
function ButtonTag() {
  let myVisibility = document.getElementById("Button-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonGlobalAttributes() {
  let myVisibility = document.getElementById("Button-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonEventAttributes() {
  let myVisibility = document.getElementById("Button-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonAutofocusAttributes() {
  let myVisibility = document.getElementById("Button-Autofocus-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Autofocus-Attributes").innerHTML = BooleanAttributes().autofocus.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonDisabledAttributes() {
  let myVisibility = document.getElementById("Button-Disabled-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Disabled-Attributes").innerHTML = BooleanAttributes().disabled.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonFormAttributes() {
  let myVisibility = document.getElementById("Button-Form-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Form-Attributes").innerHTML = MiscellaneousAttributes().form.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonFormactionAttributes() {
  let myVisibility = document.getElementById("Button-Formaction-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Formaction-Attributes").innerHTML = HyperlinkAttributes().formaction.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonFormenctypeAttributes() {
  let myVisibility = document.getElementById("Button-Formenctype-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Formenctype-Attributes").innerHTML = NetworkAttributes().formenctype.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonFormmethodAttributes() {
  let myVisibility = document.getElementById("Button-Formmethod-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Formmethod-Attributes").innerHTML = NetworkAttributes().formmethod.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonFormnovalidateAttributes() {
  let myVisibility = document.getElementById("Button-Formnovalidate-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Formnovalidate-Attributes").innerHTML = BooleanAttributes().formnovalidate.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonFormtargetAttributes() {
  let myVisibility = document.getElementById("Button-Formtarget-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Formtarget-Attributes").innerHTML = HyperlinkAttributes().formtarget.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonPopovertargetAttributes() {
  let myVisibility = document.getElementById("Button-Popovertarget-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Popovertarget-Attributes").innerHTML = MiscellaneousAttributes().popovertarget.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonPopovertargetactionAttributes() {
  let myVisibility = document.getElementById("Button-Popovertargetaction-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Popovertargetaction-Attributes").innerHTML = MiscellaneousAttributes().popovertargetaction.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonNameAttributes() {
  let myVisibility = document.getElementById("Button-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Name-Attributes").innerHTML = MiscellaneousAttributes().name.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonTypeAttributes() {
  let myVisibility = document.getElementById("Button-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Type-Attributes").innerHTML = MiscellaneousAttributes().type.buttonelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ButtonValueAttributes() {
  let myVisibility = document.getElementById("Button-Value-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Button-Value-Attributes").innerHTML = ValueAttributes().value.buttonelement;
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

// TABLE TAG //
function TableTag() {
  let myVisibility = document.getElementById("Table-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TableGlobalAttributes() {
  let myVisibility = document.getElementById("Table-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Table-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TableEventAttributes() {
  let myVisibility = document.getElementById("Table-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Table-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// CAPTION TAG //
function CaptionTag() {
  let myVisibility = document.getElementById("Caption-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function CaptionGlobalAttributes() {
  let myVisibility = document.getElementById("Caption-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Caption-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function CaptionEventAttributes() {
  let myVisibility = document.getElementById("Caption-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Caption-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// COLUMN GROUP TAG //
function ColgroupTag() {
  let myVisibility = document.getElementById("Colgroup-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ColgroupGlobalAttributes() {
  let myVisibility = document.getElementById("Colgroup-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Colgroup-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ColgroupEventAttributes() {
  let myVisibility = document.getElementById("Colgroup-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Colgroup-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function ColgroupSpanAttributes() {
  let myVisibility = document.getElementById("Colgroup-Span-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Colgroup-Span-Attributes").innerHTML = MiscellaneousAttributes().span.colgroupelement;
  }
  else { myVisibility.style.display = "none"; }
}

// COLUMN TAG //
function ColTag() {
  let myVisibility = document.getElementById("Col-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ColGlobalAttributes() {
  let myVisibility = document.getElementById("Col-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Col-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ColEventAttributes() {
  let myVisibility = document.getElementById("Col-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Col-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function ColSpanAttributes() {
  let myVisibility = document.getElementById("Col-Span-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Col-Span-Attributes").innerHTML = MiscellaneousAttributes().span.colelement;
  }
  else { myVisibility.style.display = "none"; }
}

// TABLE HEAD TAG //
function TheadTag() {
  let myVisibility = document.getElementById("Thead-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TheadGlobalAttributes() {
  let myVisibility = document.getElementById("Thead-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Thead-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TheadEventAttributes() {
  let myVisibility = document.getElementById("Thead-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Thead-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// TABLE ROW TAG //
function TrTag() {
  let myVisibility = document.getElementById("Tr-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TrGlobalAttributes() {
  let myVisibility = document.getElementById("Tr-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tr-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TrEventAttributes() {
  let myVisibility = document.getElementById("Tr-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tr-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// HEADER CELL TAG //
function ThTag() {
  let myVisibility = document.getElementById("Th-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ThGlobalAttributes() {
  let myVisibility = document.getElementById("Th-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Th-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ThEventAttributes() {
  let myVisibility = document.getElementById("Th-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Th-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function ThAbbrAttributes() {
  let myVisibility = document.getElementById("Th-Abbr-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Th-Abbr-Attributes").innerHTML = MiscellaneousAttributes().abbr.thelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ThColspanAttributes() {
  let myVisibility = document.getElementById("Th-Colspan-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Th-Colspan-Attributes").innerHTML = MiscellaneousAttributes().colspan.thelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ThHeadersAttributes() {
  let myVisibility = document.getElementById("Th-Headers-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Th-Headers-Attributes").innerHTML = MiscellaneousAttributes().headers.thelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ThRowspanAttributes() {
  let myVisibility = document.getElementById("Th-Rowspan-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Th-Rowspan-Attributes").innerHTML = MiscellaneousAttributes().rowspan.thelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ThScopeAttributes() {
  let myVisibility = document.getElementById("Th-Scope-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Th-Scope-Attributes").innerHTML = MiscellaneousAttributes().scope.thelement;
  }
  else { myVisibility.style.display = "none"; }
}

// TABLE BODY TAG //
function TbodyTag() {
  let myVisibility = document.getElementById("Tbody-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TbodyGlobalAttributes() {
  let myVisibility = document.getElementById("Tbody-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tbody-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TbodyEventAttributes() {
  let myVisibility = document.getElementById("Tbody-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tbody-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// DATA CELL TAG //
function TdTag() {
  let myVisibility = document.getElementById("Td-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TdGlobalAttributes() {
  let myVisibility = document.getElementById("Td-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Td-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TdEventAttributes() {
  let myVisibility = document.getElementById("Td-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Td-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function TdColspanAttributes() {
  let myVisibility = document.getElementById("Td-Colspan-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Td-Colspan-Attributes").innerHTML = MiscellaneousAttributes().colspan.tdelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TdHeadersAttributes() {
  let myVisibility = document.getElementById("Td-Headers-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Td-Headers-Attributes").innerHTML = MiscellaneousAttributes().headers.tdelement;
  }
  else { myVisibility.style.display = "none"; }
}

function TdRowspanAttributes() {
  let myVisibility = document.getElementById("Td-Rowspan-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Td-Rowspan-Attributes").innerHTML = MiscellaneousAttributes().rowspan.tdelement;
  }
  else { myVisibility.style.display = "none"; }
}

// TABLE FOOTER TAG //
function TfootTag() {
  let myVisibility = document.getElementById("Tfoot-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TfootGlobalAttributes() {
  let myVisibility = document.getElementById("Tfoot-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tfoot-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TfootEventAttributes() {
  let myVisibility = document.getElementById("Tfoot-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Tfoot-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

// ORDERED LIST TAG //
function OlTag() {
  let myVisibility = document.getElementById("Ol-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function OlGlobalAttributes() {
  let myVisibility = document.getElementById("Ol-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ol-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function OlEventAttributes() {
  let myVisibility = document.getElementById("Ol-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ol-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function OlReversedAttributes() {
  let myVisibility = document.getElementById("Ol-Reversed-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ol-Reversed-Attributes").innerHTML = BooleanAttributes().reversed.olelement;
  }
  else { myVisibility.style.display = "none"; }
}

function OlStartAttributes() {
  let myVisibility = document.getElementById("Ol-Start-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ol-Start-Attributes").innerHTML = MiscellaneousAttributes().start.olelement;
  }
  else { myVisibility.style.display = "none"; }
}

function OlTypeAttributes() {
  let myVisibility = document.getElementById("Ol-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ol-Type-Attributes").innerHTML = MiscellaneousAttributes().type.olelement;
  }
  else { myVisibility.style.display = "none"; }
}

// LIST ITEM TAG //
function LiTag() {
  let myVisibility = document.getElementById("Li-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function LiGlobalAttributes() {
  let myVisibility = document.getElementById("Li-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Li-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function LiEventAttributes() {
  let myVisibility = document.getElementById("Li-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Li-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function LiValueAttributes() {
  let myVisibility = document.getElementById("Li-Value-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Li-Value-Attributes").innerHTML = ValueAttributes().value.lielement;
  }
  else { myVisibility.style.display = "none"; }
}

// UNORDERED LIST TAG //
function UlTag() {
  let myVisibility = document.getElementById("Ul-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function UlGlobalAttributes() {
  let myVisibility = document.getElementById("Ul-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ul-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function UlEventAttributes() {
  let myVisibility = document.getElementById("Ul-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ul-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// MENU TAG //
function MenuTag() {
  let myVisibility = document.getElementById("Menu-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function MenuGlobalAttributes() {
  let myVisibility = document.getElementById("Menu-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Menu-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function MenuEventAttributes() {
  let myVisibility = document.getElementById("Menu-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Menu-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// DESCRIPTION LIST TAG //
function DlTag() {
  let myVisibility = document.getElementById("Dl-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function DlGlobalAttributes() {
  let myVisibility = document.getElementById("Dl-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Dl-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DlEventAttributes() {
  let myVisibility = document.getElementById("Dl-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Dl-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// DESCRIPTION TERM TAG //
function DtTag() {
  let myVisibility = document.getElementById("Dt-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function DtGlobalAttributes() {
  let myVisibility = document.getElementById("Dt-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Dt-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DtEventAttributes() {
  let myVisibility = document.getElementById("Dt-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Dt-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// DESCRIPTION DATA TAG //
function DdTag() {
  let myVisibility = document.getElementById("Dd-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function DdGlobalAttributes() {
  let myVisibility = document.getElementById("Dd-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Dd-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DdEventAttributes() {
  let myVisibility = document.getElementById("Dd-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Dd-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

// FIGURE TAG //
function FigureTag() {
  let myVisibility = document.getElementById("Figure-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function FigureGlobalAttributes() {
  let myVisibility = document.getElementById("Figure-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Figure-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function FigureEventAttributes() {
  let myVisibility = document.getElementById("Figure-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Figure-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// IMAGE TAG //
function ImageTag() {
  let myVisibility = document.getElementById("Image-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function ImageGlobalAttributes() {
  let myVisibility = document.getElementById("Image-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageEventAttributes() {
  let myVisibility = document.getElementById("Image-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageAltAttributes() {
  let myVisibility = document.getElementById("Image-Alt-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Alt-Attributes").innerHTML = MiscellaneousAttributes().alt.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageCrossoriginAttributes() {
  let myVisibility = document.getElementById("Image-Crossorigin-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Crossorigin-Attributes").innerHTML = NetworkAttributes().crossorigin.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageHeightAttributes() {
  let myVisibility = document.getElementById("Image-Height-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Height-Attributes").innerHTML = DimensionAttributes().height.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageIsmapAttributes() {
  let myVisibility = document.getElementById("Image-Ismap-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Ismap-Attributes").innerHTML = BooleanAttributes().ismap.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageLoadingAttributes() {
  let myVisibility = document.getElementById("Image-Loading-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Loading-Attributes").innerHTML = MiscellaneousAttributes().loading.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageLongdescAttributes() {
  let myVisibility = document.getElementById("Image-Longdesc-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Longdesc-Attributes").innerHTML = HyperlinkAttributes().longdesc.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageReferrerpolicyAttributes() {
  let myVisibility = document.getElementById("Image-Referrerpolicy-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Referrerpolicy-Attributes").innerHTML = NetworkAttributes().referrerpolicy.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageSizesAttributes() {
  let myVisibility = document.getElementById("Image-Sizes-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Sizes-Attributes").innerHTML = MiscellaneousAttributes().sizes.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageSrcAttributes() {
  let myVisibility = document.getElementById("Image-Src-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Src-Attributes").innerHTML = HyperlinkAttributes().src.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageSrcsetAttributes() {
  let myVisibility = document.getElementById("Image-Srcset-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Srcset-Attributes").innerHTML = HyperlinkAttributes().srcset.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageUsemapAttributes() {
  let myVisibility = document.getElementById("Image-Usemap-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Usemap-Attributes").innerHTML = MiscellaneousAttributes().usemap.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

function ImageWidthAttributes() {
  let myVisibility = document.getElementById("Image-Width-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Image-Width-Attributes").innerHTML = DimensionAttributes().width.imgelement;
  }
  else { myVisibility.style.display = "none"; }
}

// MAP TAG //
function MapTag() {
  let myVisibility = document.getElementById("Map-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function MapGlobalAttributes() {
  let myVisibility = document.getElementById("Map-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Map-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function MapEventAttributes() {
  let myVisibility = document.getElementById("Map-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Map-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function MapNameAttributes() {
  let myVisibility = document.getElementById("Map-Name-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Map-Name-Attributes").innerHTML = MiscellaneousAttributes().name.mapelement;
  }
  else { myVisibility.style.display = "none"; }
}

// AREA TAG //
function AreaTag() {
  let myVisibility = document.getElementById("Area-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function AreaGlobalAttributes() {
  let myVisibility = document.getElementById("Area-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaEventAttributes() {
  let myVisibility = document.getElementById("Area-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaAltAttributes() {
  let myVisibility = document.getElementById("Area-Alt-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Alt-Attributes").innerHTML = MiscellaneousAttributes().alt.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaCoordsAttributes() {
  let myVisibility = document.getElementById("Area-Coords-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Coords-Attributes").innerHTML = MiscellaneousAttributes().coords.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaDownloadAttributes() {
  let myVisibility = document.getElementById("Area-Download-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Download-Attributes").innerHTML = MiscellaneousAttributes().download.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaHrefAttributes() {
  let myVisibility = document.getElementById("Area-Href-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Href-Attributes").innerHTML = HyperlinkAttributes().href.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaHreflangAttributes() {
  let myVisibility = document.getElementById("Area-Hreflang-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Hreflang-Attributes").innerHTML = MiscellaneousAttributes().hreflang.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaMediaAttributes() {
  let myVisibility = document.getElementById("Area-Media-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Media-Attributes").innerHTML = MiscellaneousAttributes().media.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaReferrerpolicyAttributes() {
  let myVisibility = document.getElementById("Area-Referrerpolicy-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Referrerpolicy-Attributes").innerHTML = NetworkAttributes().referrerpolicy.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaRelAttributes() {
  let myVisibility = document.getElementById("Area-Rel-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Rel-Attributes").innerHTML = MiscellaneousAttributes().rel.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaShapeAttributes() {
  let myVisibility = document.getElementById("Area-Shape-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Shape-Attributes").innerHTML = MiscellaneousAttributes().shape.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaTargetAttributes() {
  let myVisibility = document.getElementById("Area-Target-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Target-Attributes").innerHTML = HyperlinkAttributes().target.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

function AreaTypeAttributes() {
  let myVisibility = document.getElementById("Area-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Area-Type-Attributes").innerHTML = MiscellaneousAttributes().type.areaelement;
  }
  else { myVisibility.style.display = "none"; }
}

// FIGURE CAPTION TAG //
function FigcaptionTag() {
  let myVisibility = document.getElementById("Figcaption-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function FigcaptionGlobalAttributes() {
  let myVisibility = document.getElementById("Figcaption-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Figcaption-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function FigcaptionEventAttributes() {
  let myVisibility = document.getElementById("Figcaption-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Figcaption-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// AUDIO TAG //
function AudioTag() {
  let myVisibility = document.getElementById("Audio-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function AudioGlobalAttributes() {
  let myVisibility = document.getElementById("Audio-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Audio-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function AudioEventAttributes() {
  let myVisibility = document.getElementById("Audio-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Audio-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// SOURCE TAG //
function SourceTag() {
  let myVisibility = document.getElementById("Source-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function SourceGlobalAttributes() {
  let myVisibility = document.getElementById("Source-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Source-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SourceEventAttributes() {
  let myVisibility = document.getElementById("Source-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Source-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// TRACK TAG //
function TrackTag() {
  let myVisibility = document.getElementById("Track-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function TrackGlobalAttributes() {
  let myVisibility = document.getElementById("Track-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Track-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function TrackEventAttributes() {
  let myVisibility = document.getElementById("Track-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Track-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// VIDEO TAG //
function VideoTag() {
  let myVisibility = document.getElementById("Video-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function VideoGlobalAttributes() {
  let myVisibility = document.getElementById("Video-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Video-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function VideoEventAttributes() {
  let myVisibility = document.getElementById("Video-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Video-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

// RUBY TAG //
function RubyTag() {
  let myVisibility = document.getElementById("Ruby-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function RubyGlobalAttributes() {
  let myVisibility = document.getElementById("Ruby-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ruby-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function RubyEventAttributes() {
  let myVisibility = document.getElementById("Ruby-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Ruby-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// RUBY PARANTHESES TAG //
function RpTag() {
  let myVisibility = document.getElementById("Rp-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function RpGlobalAttributes() {
  let myVisibility = document.getElementById("Rp-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Rp-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function RpEventAttributes() {
  let myVisibility = document.getElementById("Rp-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Rp-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}

// RUBY TEXT TAG //
function RtTag() {
  let myVisibility = document.getElementById("Rt-Tag");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
  }
  else { myVisibility.style.display = "none"; }
}

function RtGlobalAttributes() {
  let myVisibility = document.getElementById("Rt-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Rt-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function RtEventAttributes() {
  let myVisibility = document.getElementById("Rt-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Rt-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function DetailsGlobalAttributes() {
  let myVisibility = document.getElementById("Details-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Details-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DetailsEventAttributes() {
  let myVisibility = document.getElementById("Details-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Details-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function SummaryGlobalAttributes() {
  let myVisibility = document.getElementById("Summary-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Summary-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function SummaryEventAttributes() {
  let myVisibility = document.getElementById("Summary-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Summary-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function ObjectGlobalAttributes() {
  let myVisibility = document.getElementById("Object-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Object-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ObjectEventAttributes() {
  let myVisibility = document.getElementById("Object-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Object-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function ParamGlobalAttributes() {
  let myVisibility = document.getElementById("Param-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Param-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function ParamEventAttributes() {
  let myVisibility = document.getElementById("Param-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Param-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function CanvasGlobalAttributes() {
  let myVisibility = document.getElementById("Canvas-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Canvas-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function CanvasEventAttributes() {
  let myVisibility = document.getElementById("Canvas-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Canvas-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function DataGlobalAttributes() {
  let myVisibility = document.getElementById("Data-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Data-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
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

function DialogGlobalAttributes() {
  let myVisibility = document.getElementById("Dialog-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Dialog-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function DialogEventAttributes() {
  let myVisibility = document.getElementById("Dialog-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Dialog-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function EmbedGlobalAttributes() {
  let myVisibility = document.getElementById("Embed-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Embed-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function EmbedEventAttributes() {
  let myVisibility = document.getElementById("Embed-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Embed-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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

function IframeGlobalAttributes() {
  let myVisibility = document.getElementById("Iframe-Global-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Iframe-Global-Attributes").innerHTML =
      GlobalAttributes().accesskey + GlobalAttributes().class + GlobalAttributes().contenteditable + GlobalAttributes().data + GlobalAttributes().direction +
      GlobalAttributes().draggable + GlobalAttributes().enterkeyhint + GlobalAttributes().hidden + GlobalAttributes().identifier + GlobalAttributes().inert +
      GlobalAttributes().inputmode + GlobalAttributes().language + GlobalAttributes().popover + GlobalAttributes().spellcheck + GlobalAttributes().style +
      GlobalAttributes().tabindex + GlobalAttributes().title + GlobalAttributes().translate;
  }
  else { myVisibility.style.display = "none"; }
}

function IframeEventAttributes() {
  let myVisibility = document.getElementById("Iframe-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Iframe-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
  }
  else { myVisibility.style.display = "none"; }
}