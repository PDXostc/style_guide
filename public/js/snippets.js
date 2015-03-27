var imports = {
  switches: document.getElementById('switches-snippets').import,
  structure: document.getElementById('structure-snippets').import,
  sliders: document.getElementById('sliders-snippets').import,
  typography: document.getElementById('typography-snippets').import,
  buttons: document.getElementById('buttons-snippets').import,
  boxes: document.getElementById('boxes-snippets').import,
  tables: document.getElementById('tables-snippets').import,
  forms: document.getElementById('forms-snippets').import,
  scrolling: document.getElementById('scrolling-snippets').import
}

var snippets = {
  structure: {
    structureHTML: { templateId: "structure-html", targetId: "#structure .html-complete code" },
    structureHTMLBody: { templateId: "structure-html-body", targetId: "#structure .html-body code" },
    structureHTMLBase: { templateId: "structure-html-center-panel", targetId: "#structure .html-center-panel code" },
    structureHTMLContent: { templateId: "structure-html-content", targetId: "#structure .html-content code" },
  },
  switches: {
    switchesHTML: { templateId: "switches-html", targetId: "#switches .html code" },
    switchesJS: { templateId: "switches-js", targetId: "#switches .js code" },
    switchesHTMLHighlights: { templateId: "switches-html-highlights", targetId: "#switches .html code.highlights" },
    switchesJSHighlights: { templateId: "switches-js-highlights", targetId: "#switches .js code.highlights" }
  },
  sliders: {
    vertSlidersHTML: { templateId: "vertical-slider-snippet", targetId: "#vertical-sliders .html code" }, 
    horizSlidersHTML: { templateId: "horizontal-slider-snippet", targetId: "#horizontal-sliders .html code" }, 
    vertSlidersCSS: { templateId: "vertical-slider-css-snippet", targetId: "#vertical-sliders .css code" }, 
    horizSlidersCSS: { templateId: "horizontal-slider-css-snippet", targetId: "#horizontal-sliders .css code" }, 
    horizButtonSlidersHTML: { templateId: "horiz-button-slider-html-snippet", targetId: "#button-sliders .html code" }, 
    horizButtonSlidersCSS: { templateId: "horiz-button-slider-css-snippet", targetId: "#button-sliders .css code" } 
  },
  typography: {
    customClasses: { templateId: "custom-class-snippet", targetId: "#other-text #custom-classes" },
    headingsHTML: { templateId: "headings-html-snippet", targetId: "#heading-content code" }
  },
  buttons: {
    classButtonsHTML: { templateId: "button-class-html-snippet", targetId: "#button-class code" },
    elementButtonsHTML: { templateId: "button-element-html-snippet", targetId: "#button-element code" }
  },
  boxes: {
    variationsHTML: { templateId: "box-variations-html-snippet", targetId: "#box-variations .html code" },
    outlineHTML: { templateId: "box-outline-html-snippet", targetId: "#box-outline .html code" },
    inshadowHTML: { templateId: "box-inshadow-html-snippet", targetId: "#box-inshadow .html code" },
    outshadowHTML: { templateId: "box-outshadow-html-snippet", targetId: "#box-outshadow .html code" },
    infillHTML: { templateId: "box-infill-html-snippet", targetId: "#box-infill .html code" },
  },
  tables: {
    basicHTML: { templateId: "basic-table-html-snippet", targetId: "#basic-table .html code" },
    customClassHTML: { templateId: "custom-table-class-html-snippet", targetId: "#custom-tables-class .html code" },
    customColumnWidthCSS: { templateId: "custom-column-widths-css-snippet", targetId: "#custom-column-widths .css code" },
    customrowStylesCSS: { templateId: "custom-row-styles-css-snippet", targetId: "#custom-row-styles .css code" },
    customGraphicSymbolsCSS: { templateId: "custom-graphic-symbols-css-snippet", targetId: "#custom-cell-graphics #html-symbols code" },
    customGraphicImagesCSS: { templateId: "custom-graphic-images-css-snippet", targetId: "#custom-cell-graphics #cell-images code" }
  },
  forms: {
    stackedLabelInputHTML: { templateId: "stacked-labeled-input-html", targetId: "#stacked-labeled-inputs .html code" },
    rightLabelInputHTML: { templateId: "right-aligned-labeled-input-html", targetId: "#right-aligned-labeled-inputs .html code" },
    leftLabelInputHTML: { templateId: "left-aligned-labeled-input-html", targetId: "#left-aligned-labeled-inputs .html code" },
    colorLabelInputHTML: { templateId: "color-labeled-inputs-html", targetId: "#color-inputs .html code" },
  },
  scrolling: {
    scrollingHTML: { templateId: "scrolling-html-snippet", targetId: "#scrolling-content .html code" },
    scrollingCSS: { templateId: "scrolling-css-snippet", targetId: "#scrolling-content .css code" }
  }
};

function Snippet(snippetImport, id) {
  this.snippet = snippetImport.getElementById(id);
  this.snippetContent = document.importNode(this.snippet.content, true);
}

function loadSnippets(htmlImport, snippetObj) {
  for (snippetInfo in snippetObj) {
    var snippetIds = snippetObj[snippetInfo];
    var snippet = new Snippet(htmlImport, snippetIds.templateId);
    $(snippetIds.targetId).html(snippet.snippetContent);
  }
}

var init = function() {
  $("#introduction").load("introduction.html", function() {
    $("#table-of-contents").load("nav_primary.html");
  });
  // $("#structure").load("structure.html", function() {
    // loadSnippets( imports["structure"], snippets["structure"] );
  // });
  $("#boxes").load("boxes.html", function() {
    loadSnippets( imports["boxes"], snippets["boxes"] );
  });
  $("nav.primary ul").load("nav_primary.html");
  $("nav.secondary").load("nav_secondary.html");
  $("#typography").load("typography.html", function() {
    loadSnippets( imports["typography"], snippets["typography"] );
  });
  $("#colors").load("colors.html");
  $("#modifiers").load("modifiers.html");
  $("#controls").load("controls.html", function() {
    $("#sliders").load("sliders.html", function() {
      loadSnippets( imports["sliders"], snippets["sliders"] );
    });
    $("#buttons").load("buttons.html", function() {
      loadSnippets( imports["buttons"], snippets["buttons"] );
    });
    $("#switches").load("switches.html", function() {
      loadSnippets( imports["switches"], snippets["switches"] );
    });
    $("#scrolling-content").load("scrolling_content.html", function() {
        loadSnippets( imports["scrolling"], snippets["scrolling"] );
    });
  });
  // $("#icons").load("icons.html");
  $("#css-guidelines").load("cssguidelines.html");
  $("#html-guidelines").load("htmlguidelines.html");
  $("#supporting-documents").load("supportdocs.html");
  $("#specifications").load("specifications.html");
  $("#forms").load("forms.html", function() {
      loadSnippets( imports["forms"], snippets["forms"] );
  });
  $("#tables").load("tables.html", function() {
      loadSnippets( imports["tables"], snippets["tables"] );
  });
}

$(document).ready(init);