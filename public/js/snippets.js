var imports = {
  switches: document.getElementById('switches-snippets').import,
  structure: document.getElementById('structure-snippets').import,
  sliders: document.getElementById('sliders-snippets').import,
  typography: document.getElementById('typography-snippets').import
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
    horizButtonSlidersHTML: { templateId: "horiz-button-slider-html-snippet", targetId: "#button-sliders .html code" } 
  },
  typography: {
    customClasses: { templateId: "custom-class-snippet", targetId: "#other-text #custom-classes" }
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
  $("#boxes").load("boxes.html");
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
    $("#buttons").load("buttons.html");
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