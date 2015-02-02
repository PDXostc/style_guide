var imports = {
  switches: document.getElementById('switches-snippets').import,
  structure: document.getElementById('structure-snippets').import
}

var snippets = {
  structure: {
    structureHTML: { templateId: "structure-html", targetId: "#structure .html code" },
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
  $("#structure").load("structure.html", function() {
    loadSnippets( imports["structure"], snippets["structure"] );
  });
  loadSnippets( imports["switches"], snippets["switches"] );
}

$(document).ready(init);