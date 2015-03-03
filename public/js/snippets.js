var imports = {
  switches: document.getElementById('switches-snippets').import,
  structure: document.getElementById('structure-snippets').import,
  sliders: document.getElementById('sliders-snippets').import,
  typography: document.getElementById('typography-snippets').import,
  buttons: document.getElementById('buttons-snippets').import,
  boxes: document.getElementById('boxes-snippets').import
}

var snippets = {
  structure: {
    structureHTML: { templateId: "structure-html", targetId: "#structure .html-complete code" },
    structureHTMLBody: { templateId: "structure-html-body", targetId: "#structure .html-body code" },
    structureHTMLBase: { templateId: "structure-html-base", targetId: "#structure .html-base code" },
    structureHTMLContent: { templateId: "structure-html-content", targetId: "#structure .html-content code" },
    structureCSS: { templateId: "structure-css", targetId: "#structure .css code" }
  },
  switches: {
    switchesHTML: { templateId: "switches-html", targetId: "#switches .html code" },
    switchesCSS: { templateId: "switches-css", targetId: "#switches .css code" },
    switchesJS: { templateId: "switches-js", targetId: "#switches .js code" },
    switchesHTMLHighlights: { templateId: "switches-html-highlights", targetId: "#switches .html code.highlights" },
    switchesJSHighlights: { templateId: "switches-js-highlights", targetId: "#switches .js code.highlights" }
  },
  sliders: {
    vertSlidersHTML: { templateId: "vertical-slider-snippet", targetId: "#vertical-sliders .html code" }, 
    horizSlidersHTML: { templateId: "horizontal-slider-snippet", targetId: "#horizontal-sliders .html code" }, 
    vertSlidersCSS: { templateId: "vertical-slider-css-snippet", targetId: "#vertical-sliders .css code" }, 
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
    variationsCSS: { templateId: "box-variations-css-snippet", targetId: "#box-variations .css code" },
    outlineHTML: { templateId: "box-outline-html-snippet", targetId: "#box-outline .html code" },
    outlineCSS: { templateId: "box-outline-css-snippet", targetId: "#box-outline .css code" },
    inshadowHTML: { templateId: "box-inshadow-html-snippet", targetId: "#box-inshadow .html code" },
    inshadowCSS: { templateId: "box-inshadow-css-snippet", targetId: "#box-inshadow .css code" },
    outshadowHTML: { templateId: "box-outshadow-html-snippet", targetId: "#box-outshadow .html code" },
    outshadowCSS: { templateId: "box-outshadow-css-snippet", targetId: "#box-outshadow .css code" },
    infillHTML: { templateId: "box-infill-html-snippet", targetId: "#box-infill .html code" },
    infillCSS: { templateId: "box-infill-css-snippet", targetId: "#box-infill .css code" }
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
  $("#structure").load("structure.html", function() {
    loadSnippets( imports["structure"], snippets["structure"] );
  });
  $("#boxes").load("boxes.html", function() {
    loadSnippets( imports["boxes"], snippets["boxes"] );
  });
  $("nav.primary ul").load("nav_primary.html");
  $("nav.secondary").load("nav_secondary.html");
  $("#typography").load("typography.html", function() {
    loadSnippets( imports["typography"], snippets["typography"] );
  });
  $("#colors").load("colors.html");
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
  });
  $("#icons").load("icons.html");
  $("#css-guidelines").load("cssguidelines.html");
  $("#html-guidelines").load("htmlguidelines.html");
  $("#supporting-documents").load("supportdocs.html");
  $("#forms").load("forms.html");
  $("#tables").load("tables.html");
}

$(document).ready(init);