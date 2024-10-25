function myGlobal() {
  const globalInput = {
    myHeight: document.getElementById("Input-Height").value,
    myWidth: document.getElementById("Input-Width").value,
    myPadding: document.getElementById("Input-Padding").value,
    myBorder: document.getElementById("Input-Border").value, 
    myBorderRadius: document.getElementById("Input-Border-Radius").value,
    myMargin: document.getElementById("Input-Margin").value,
    myBoxShadow: document.getElementById("Input-Box-Shadow").value,
    myOutline: document.getElementById("Input-Outline").value,
    myOutlineOffset: document.getElementById("Input-Outline-Offset").value,
    myPosition: document.getElementById("Input-Position").value,
    myTop: document.getElementById("Input-Top").value,
    myRight: document.getElementById("Input-Right").value,
    myBottom: document.getElementById("Input-Bottom").value,
    myLeft: document.getElementById("Input-Left").value,
    myFont: document.getElementById("Input-Font").value,
    myFontStyle: document.getElementById("Input-Font-Style").value,
    myFontVariant: document.getElementById("Input-Font-Variant").value,
    myFontWeight: document.getElementById("Input-Font-Weight").value,
    myFontSize: document.getElementById("Input-Font-Size").value,
    myLineHeight: document.getElementById("Input-Line-Height").value,
    myFontFamily: document.getElementById("Input-Font-Family").value,
    myFontKerning: document.getElementById("Input-Font-Kerning").value,
    myTextAlign: document.getElementById("Input-Text-Align").value,
    myTextAlignLast: document.getElementById("Input-Text-Align-Last").value,
    myTextDecoration: document.getElementById("Input-Text-Decoration").value,
    myTextDecorationLine: document.getElementById("Input-Text-Decoration-Line").value,
    myTextDecorationColor: document.getElementById("Input-Text-Decoration-Color").value,
    myTextDecorationStyle: document.getElementById("Input-Text-Decoration-Style").value,
    myTextDecorationThickness: document.getElementById("Input-Text-Decoration-Thickness").value,
    myTextEmphasis: document.getElementById("Input-Text-Emphasis").value,
    myTextEmphasisStyle: document.getElementById("Input-Text-Emphasis-Style").value,
    myTextEmphasisColor: document.getElementById("Input-Text-Emphasis-Color").value,
    myTextEmphasisPosition: document.getElementById("Input-Text-Emphasis-Position").value,
    myTextIndent: document.getElementById("Input-Text-Indent").value,
    myTextJustify: document.getElementById("Input-Text-Justify").value,
    myDisplay: document.getElementById("Input-Display").value,
    myFlexGrow: document.getElementById("Input-Flex-Grow").value,
    myFlexShrink: document.getElementById("Input-Flex-Shrink").value,
    myFlexBasis: document.getElementById("Input-Flex-Basis").value,
    myFlexDirection: document.getElementById("Input-Flex-Direction").value,
    myFlexWrap: document.getElementById("Input-Flex-Wrap").value,
    myGridTemplateRows: document.getElementById("Input-Grid-Template-Rows").value,
    myGridTemplateColumns: document.getElementById("Input-Grid-Template-Columns").value,
    myGridTemplateAreas: document.getElementById("Input-Grid-Template-Areas").value,
    myGridAutoRows: document.getElementById("Input-Grid-Auto-Rows").value,
    myGridAutoColumns: document.getElementById("Input-Grid-Auto-Columns").value,
    myGridAutoFlow: document.getElementById("Input-Grid-Auto-Flow").value,
    myGridRowStart: document.getElementById("Input-Grid-Row-Start").value,
    myGridColumnStart: document.getElementById("Input-Grid-Column-Start").value,
    myGridRowEnd: document.getElementById("Input-Grid-Row-End").value,
    myGridColumnEnd: document.getElementById("Input-Grid-Column-End").value,
    myJustifyContent: document.getElementById("Input-Justify-Content").value,
    myJustifyItems: document.getElementById("Input-Justify-Items").value,
    myAlignContent: document.getElementById("Input-Align-Content").value,
    myAlignItems: document.getElementById("Input-Align-Items").value,
    myAlignSelf: document.getElementById("Input-Align-Self").value
  };
  return globalInput;
}

//////////////////////////////////
// FONT/TEXT RELATED PROPERTIES //
/////////////////////////////////
function ClickHandlerFont(myInput) { document.getElementById("Output-Font").style.font = myGlobal(myInput).myFont; }
function ClickHandlerFontStyle(myInput) { document.getElementById("Output-Font-Style").style.fontStyle = myGlobal(myInput).myFontStyle; }
function ClickHandlerFontVariant(myInput) { document.getElementById("Output-Font-Variant").style.fontVariant = myGlobal(myInput).myFontVariant; }
function ClickHandlerFontWeight(myInput) { document.getElementById("Output-Font-Weight").style.fontWeight = myGlobal(myInput).myFontWeight; }
function ClickHandlerFontSize(myInput) { document.getElementById("Output-Font-Size").style.fontSize = myGlobal(myInput).myFontSize; }
function ClickHandlerLineHeight(myInput) { document.getElementById("Output-Line-Height").style.lineHeight = myGlobal(myInput).myLineHeight; }
function ClickHandlerFontFamily(myInput) { document.getElementById("Output-Font-Family").style.fontFamily = myGlobal(myInput).myFontFamily; }
function ClickHandlerFontKerning(myInput) { document.getElementById("Output-Font-Kerning").style.fontKerning = myGlobal(myInput).myFontKerning; }
function ClickHandlerTextAlign(myInput) { document.getElementById("Output-Text-Align").style.textAlign = myGlobal(myInput).myTextAlign; }
function ClickHandlerTextAlignLast(myInput) { document.getElementById("Output-Text-Align-Last").style.textAlignLast = myGlobal(myInput).myTextAlignLast; }
function ClickHandlerTextDecoration(myInput) { document.getElementById("Output-Text-Decoration").style.textDecoration = myGlobal(myInput).myTextDecoration; }
function ClickHandlerTextDecorationLine(myInput) { document.getElementById("Output-Text-Decoration-Line").style.textDecorationLine = myGlobal(myInput).myTextDecorationLine; }
function ClickHandlerTextDecorationColor(myInput) { document.getElementById("Output-Text-Decoration-Color").style.textDecorationColor = myGlobal(myInput).myTextDecorationColor; }
function ClickHandlerTextDecorationStyle(myInput) { document.getElementById("Output-Text-Decoration-Style").style.textDecorationStyle = myGlobal(myInput).myTextDecorationStyle; }
function ClickHandlerTextDecorationThickness(myInput) { document.getElementById("Output-Text-Decoration-Thickness").style.textDecorationThickness = myGlobal(myInput).myTextDecorationThickness; }
function ClickHandlerTextEmphasis(myInput) { document.getElementById("Output-Text-Emphasis").style.textEmphasis = myGlobal(myInput).myTextEmphasis; }
function ClickHandlerTextEmphasisStyle(myInput) { document.getElementById("Output-Text-Emphasis-Style").style.textEmphasisStyle = myGlobal(myInput).myTextEmphasisStyle; }
function ClickHandlerTextEmphasisColor(myInput) { document.getElementById("Output-Text-Emphasis-Color").style.textEmphasisColor = myGlobal(myInput).myTextEmphasisColor; }
function ClickHandlerTextEmphasisPosition(myInput) { document.getElementById("Output-Text-Emphasis-Position").style.textEmphasisPosition = myGlobal(myInput).myTextEmphasisPosition; }
function ClickHandlerTextIndent(myInput) { document.getElementById("Output-Text-Indent").style.textIndent = myGlobal(myInput).myTextIndent; }
function ClickHandlerTextJustify(myInput) { document.getElementById("Output-Text-Justify").style.textJustify = myGlobal(myInput).myTextJustify; }

//////////////////////////////////
// BOX MODEL RELATED PROPERTIES //
//////////////////////////////////
function ClickHandlerDisplay(myInput) { document.getElementsByClassName("Parent-Box")[0].style.display = myGlobal(myInput).myDisplay; }
function ClickHandlerFlexGrow(myInput) { document.getElementsByClassName("Child-Box")[0].style.flexGrow = myGlobal(myInput).myFlexGrow; }
function ClickHandlerFlexShrink(myInput) { document.getElementsByClassName("Child-Box")[0].style.flexShrink = myGlobal(myInput).myFlexShrink; }
function ClickHandlerFlexBasis(myInput) { document.getElementsByClassName("Child-Box")[0].style.flexBasis = myGlobal(myInput).myFlexBasis; }
function ClickHandlerFlexDirection(myInput) { document.getElementsByClassName("Parent-Box")[0].style.flexDirection = myGlobal(myInput).myFlexDirection; }
function ClickHandlerFlexWrap(myInput) { document.getElementsByClassName("Parent-Box")[0].style.flexWrap = myGlobal(myInput).myFlexWrap; }
function ClickHandlerGridTemplateRows(myInput) { document.getElementsByClassName("Parent-Box")[0].style.gridTemplateRows = myGlobal(myInput).myGridTemplateRows; }
function ClickHandlerGridTemplateColumns(myInput) { document.getElementsByClassName("Parent-Box")[0].style.gridTemplateColumns = myGlobal(myInput).myGridTemplateColumns; }
function ClickHandlerGridTemplateAreas(myInput) { document.getElementsByClassName("Parent-Box")[0].style.gridTemplateAreas = myGlobal(myInput).myGridTemplateAreas; }
function ClickHandlerGridAutoRows(myInput) { document.getElementsByClassName("Parent-Box")[0].style.gridAutoRows = myGlobal(myInput).myGridAutoRows; }
function ClickHandlerGridAutoColumns(myInput) { document.getElementsByClassName("Parent-Box")[0].style.gridAutoColumns = myGlobal(myInput).myGridAutoColumns; }
function ClickHandlerGridAutoFlow(myInput) { document.getElementsByClassName("Parent-Box")[0].style.gridAutoFlow = myGlobal(myInput).myGridAutoFlow; }
function ClickHandlerGridRowStart(myInput) { document.getElementsByClassName("Child-Box")[0].style.gridRowStart = myGlobal(myInput).myGridRowStart; }
function ClickHandlerGridColumnStart(myInput) { document.getElementsByClassName("Child-Box")[0].style.gridColumnStart = myGlobal(myInput).myGridColumnStart; }
function ClickHandlerGridRowEnd(myInput) { document.getElementsByClassName("Child-Box")[0].style.gridRowEnd = myGlobal(myInput).myGridRowEnd; }
function ClickHandlerGridColumnEnd(myInput) { document.getElementsByClassName("Child-Box")[0].style.gridColumnEnd = myGlobal(myInput).myGridColumnEnd; }
function ClickHandlerJustifyContent(myInput) { document.getElementsByClassName("Parent-Box")[0].style.justifyContent = myGlobal(myInput).myJustifyContent; }
function ClickHandlerJustifyItems(myInput) { document.getElementsByClassName("Parent-Box")[0].style.justifyItems = myGlobal(myInput).myJustifyItems; }
function ClickHandlerAlignContent(myInput) { document.getElementsByClassName("Parent-Box")[0].style.alignContent = myGlobal(myInput).myAlignContent; }
function ClickHandlerAlignItems(myInput) { document.getElementsByClassName("Parent-Box")[0].style.alignItems = myGlobal(myInput).myAlignItems; }
function ClickHandlerAlignSelf(myInput) { document.getElementsByClassName("Parent-Box")[0].style.alignSelf = myGlobal(myInput).myAlignSelf; }

function myBoxModel(myInput) {
  document.getElementById("Box-Model").style.height = myGlobal(myInput).myHeight;
  document.getElementById("Box-Model").style.width = myGlobal(myInput).myWidth;
  document.getElementById("Box-Model").style.padding = myGlobal(myInput).myPadding;
  document.getElementById("Box-Model").style.border = myGlobal(myInput).myBorder;
  document.getElementById("Box-Model").style.borderRadius = myGlobal(myInput).myBorderRadius;
  document.getElementById("Box-Model").style.margin = myGlobal(myInput).myMargin;
  document.getElementById("Box-Model").style.boxShadow = myGlobal(myInput).myBoxShadow;
  document.getElementById("Box-Model").style.outline = myGlobal(myInput).myOutline;
  document.getElementById("Box-Model").style.outlineOffset = myGlobal(myInput).myOutlineOffset;
  document.getElementById("Box-Model").style.position = myGlobal(myInput).myPosition;
  document.getElementById("Box-Model").style.top = myGlobal(myInput).myTop;
  document.getElementById("Box-Model").style.right = myGlobal(myInput).myRight;
  document.getElementById("Box-Model").style.bottom = myGlobal(myInput).myBottom;
  document.getElementById("Box-Model").style.left = myGlobal(myInput).myLeft;
}