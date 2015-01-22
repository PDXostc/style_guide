var switchesSnippets = document.getElementById('switches-snippets').import;
var structureSnippets = document.getElementById('structure-snippets').import;

function Snippet(snippetImport, id) {
  this.snippet = snippetImport.getElementById(id);
  this.snippetContent = document.importNode(this.snippet.content, true);
}

function loadSwitchesSnippets() {
  var switchesHTMLClasses = new Snippet(switchesSnippets, 'switches-html-classes');
  var switchesHTML = new Snippet(switchesSnippets, 'switches-html');
  var switchesCSS = new Snippet(switchesSnippets, 'switches-css');
  var switchesJS = new Snippet(switchesSnippets, 'switches-js');

  $("#switches .html-classes code").html(switchesHTMLClasses.snippetContent);
  $("#switches .html code").html(switchesHTML.snippetContent);
  $("#switches .css code").html(switchesCSS.snippetContent);
  $("#switches .js code").html(switchesJS.snippetContent);
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