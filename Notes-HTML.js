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

///////////////////////////////////
// HTML MISCELLANEOUS ATTRIBUTES //
///////////////////////////////////
function MiscellaneousAttributes() {
  const myMiscellaneous = {
    media:
      "<div class=\"Box-Attributes\">" +
      "  <div>The <code>media</code> attribute specifies what media/device the CSS style is optimized for</div>" +
      "  <div>This attribute is used to specify that the style is for special devices (like iPhone), speech or print media</div>" +
      "  <table>" +
      "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td rowspan=\"10\"><code><em>Device</em></code></td></tr>" +
      "    <tr><td><code><b>all</b></code><br><b>[Default]</b> Suitable for all devices</td></tr>" +
      "    <tr><td><code><b>aural</b></code><br>Specifies for speech synthesizers</td></tr>" +
      "    <tr><td><code><b>braille</b></code><br>Specifies for braille feedback devices</td></tr>" +
      "    <tr><td><code><b>handheld</b></code><br>Specifies for handheld devices (small screen, limited bandwidth)</td></tr>" +
      "    <tr><td><code><b>projection</b></code><br>Specifies for projectors</td></tr>" +
      "    <tr><td><code><b>print</b></code><br>Specifies for print preview mode/printed pages</td></tr>" +
      "    <tr><td><code><b>screen</b></code><br>Specifies for computer screens</td></tr>" +
      "    <tr><td><code><b>tty</b></code>Specifies for teletypes and similar media using a fixed-pitch character grid</td></tr>" +
      "    <tr><td><code><b>tv</b></code><br>Specifies for television type devices (low resolution, limited scroll ability)</td></tr>" +
      "    <tr><td rowspan=\"4\"><code><em>Operator</em></code></td></tr>" +
      "    <tr><td><code><b>and</b></code><br>Specifies an AND operator</td></tr>" +
      "    <tr><td><code><b>not</b></code><br>Specifies an NOT operator</td></tr>" +
      "    <tr><td><code><b>,</b></code><br>Specifies an OR operator</td></tr>" +
      "    <tr><td rowspan=\"14\"><code><em>Value</em></code></td></tr>" +
      "    <tr><td><code><b>width</b></code><br>" +
      "            Specifies the width of the targeted display area<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (min-<b>width</b>:500px)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>height</b></code><br>" +
      "            Specifies the height of the targeted display area<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (max-<b>height</b>:700px)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>device-width</b></code><br>" +
      "            Specifies the width of the target display/paper<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (<b>device-width</b>:500px)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>device-height</b></code><br>" +
      "            Specifies the height of the target display/paper<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (<b>device-height</b>:500px)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>orientation</b></code><br>" +
      "            Specifies the orientation of the target display/paper<br>" +
      "            <code>\"portrait\"</code> and <code>\"landscape\"</code> are one of the related variations for orientation<br>" +
      "            Example; <code>&lt;style media=\"all and (<b>orientation</b>:landscape)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>aspect-ratio</b></code><br>" +
      "            Specifies the width/height ratio of the targeted display area<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (<b>aspect-ratio</b>:16/9)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>device-aspect-ratio</b></code><br>" +
      "            Specifies the device-width/device-height ratio of the target display/paper<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (<b>device-aspect-ratio</b>:16/9)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>color</b></code><br>" +
      "            Specifies the bits per color of target display<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (<b>color</b>:3)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>color-index</b></code><br>" +
      "            Specifies the bits per color of target display<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (min-<b>color-index</b>:255)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>monochrome</b></code><br>" +
      "            Specifies the bits per pixel in a monochrome frame buffer<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"screen and (<b>monochrome</b>:2)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>resolution</b></code><br>" +
      "            Specifies the pixel density (dpi or dpcm) of the target display/paper<br>" +
      "            <code>\"min-\"</code> and <code>\"max-\"</code> prefixes can be used<br>" +
      "            Example; <code>&lt;style media=\"print and (<b>resolution</b>:300dpi)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>scan</b></code><br>" +
      "            Specifies scanning method of a tv display<br>" +
      "            <code>\"progressive\"</code> and <code>\"interlace\"</code> are one of the related variations for scan<br>" +
      "            Example; <code>&lt;style media=\"tv and (<b>scan</b>:interlace)\"&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td><code><b>grid</b></code><br>" +
      "            Specifies if the output device is grid or bitmap<br>" +
      "            <code>\"1\"</code> for grid and <code>\"0\"</code> for otherwise<br>" +
      "            Example; <code>&lt;style media=\"handheld and (<b>grid</b>:1)\"&gt;</code>" +
      "    </td></tr>" +
      "  </table>" +
      "</div>",

    type:
      "<div class=\"Box-Attributes\">" +
      "  <div>Test</div>" +
      "</div>",

    xmlns:
      "<div class=\"Box-Attributes\">" +
      "  <div>The <code>xmlns</code> attribute specifies the xml namespace for a document</div>" +
      "  <table>" +
      "    <tr><th><code>myValue</code></th><th>DESCRIPTION(S)</th></tr>" +
      "    <tr><td rowspan=\"3\"><code>http://www.w3.org/1999/xhtml</code></td><td><b>[Default]</b> Specifies the namespace to use (for XHTML documents)</td></tr>" +
      "    <tr><td>" +
      "      <b>Applied tag(s)</b><br>" +
      "      <code>&lt;html&gt;</code>" +
      "    </td></tr>" +
      "    <tr><td>" +
      "      <b>Optional to include <code>xmlns</code> attribute</b><br>" +
      "      The <code>xmlns</code> attribute is optional in HTML5, required in XHTML, and invalid in HTML 4.01<br>" +
      "      The HTML validator at <a href=\"http://w3.org\" target=\"_blank\" title=\"World Wide Web Consortium\">W3C</a> does not complain when the <code>xmlns</code> attribute is missing in an XHTML document<br>" +
      "      The namespace will be added to the <code>&lt;html&gt;</code> tag even if user do not include it anyway" +
      "    </td></tr>" +
      "  </table>" +
      "</div>"
  };
  return myMiscellaneous;
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
    document.getElementById("HTML-Xmlns-Attributes").innerHTML = MiscellaneousAttributes().xmlns;
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
    document.getElementById("Style-Media-Attributes").innerHTML = MiscellaneousAttributes().media;
  }
  else { myVisibility.style.display = "none"; }
}

function StyleTypeAttributes() {
  let myVisibility = document.getElementById("Style-Type-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Style-Type-Attributes").innerHTML = MiscellaneousAttributes().type;
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

function BaseEventAttributes() {
  let myVisibility = document.getElementById("Base-Event-Attributes");
  if (myVisibility.style.display === "none") {
    myVisibility.style.display = "block";
    document.getElementById("Base-Event-Attributes").innerHTML =
      EventAttributes().windows + EventAttributes().form + EventAttributes().keyboard + EventAttributes().mouse + EventAttributes().drag +
      EventAttributes().clipboard + EventAttributes().media + EventAttributes().misc;
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
    document.getElementById("Time-Datetime-Attributes").innerHTML = TimeAttributes().datetime;
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