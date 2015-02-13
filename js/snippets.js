var imports = {
  switches: document.getElementById('switches-snippets').import,
  structure: document.getElementById('structure-snippets').import
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
  $("#introduction").load("introduction.html");
  $("#structure").load("structure.html", function() {
    loadSnippets( imports["structure"], snippets["structure"] );
  });
  $("#boxes").load("boxes.html");
  $("nav.primary").load("nav_primary.html");
  $("nav.secondary").load("nav_secondary.html");
  $("#typography").load("typography.html");
  $("#colors").load("colors.html");
  $("#controls").load("controls.html", function() {
    $("#sliders").load("sliders.html");
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