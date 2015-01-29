var switchesSnippets = document.getElementById('switches-snippets').import;
var structureSnippets = document.getElementById('structure-snippets').import;

function Snippet(snippetImport, id) {
  this.snippet = snippetImport.getElementById(id);
  this.snippetContent = document.importNode(this.snippet.content, true);
}

function loadSwitchesSnippets() {
  var switchesHTML = new Snippet(switchesSnippets, 'switches-html');
  var switchesCSS = new Snippet(switchesSnippets, 'switches-css');
  var switchesJS = new Snippet(switchesSnippets, 'switches-js');
  var switchesHTMLHighlights = new Snippet(switchesSnippets, 'switches-html-highlights');
  var switchesJSHighlights = new Snippet(switchesSnippets, 'switches-js-highlights');

  $("#switches .html code").html(switchesHTML.snippetContent);
  $("#switches .html code.highlights").html(switchesHTMLHighlights.snippetContent);
  $("#switches .css code").html(switchesCSS.snippetContent);
  $("#switches .js code").html(switchesJS.snippetContent);
  $("#switches .js code.highlights").html(switchesJSHighlights.snippetContent);
}

function loadStructureSnippets() {
  var structureHTML = new Snippet(structureSnippets, 'structure-html');
  var structureCSS = new Snippet(structureSnippets, 'structure-css');

  $("#structure .html code").html(structureHTML.snippetContent);
  $("#structure .css code").html(structureCSS.snippetContent);
}

var init = function() {
  loadSwitchesSnippets();
  loadStructureSnippets();
}

$(document).ready(init);