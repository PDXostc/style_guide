var apps = {
	fingerprint: { name: "Fingerprint", image: "fingerprint_inactive.png" },
	news: { name: "News", image: "news_inactive.png" },
	browser: { name: "Browser", image: "browser_inactive.png" },
	voiceprint: { name: "Voiceprint", image: "voiceprint_inactive.png"},
	phone: { name: "Phone", image: "phone_inactive.png"},
	navigation: { name: "Navigation", image: "navigation_inactive.png"},
	email: { name: "Email", image: "email_inactive.png"},
	dashboard: { name: "Dashboard", image: "dashboard_inactive.png"},
	musicPlayer: { name: "Music Player", image: "music_player_inactive.png"},
	nfc: { name: "NFC", image: "nfc_inactive.png"},
	demo1: { name: "NoSpacesOverflow", image: "tizen_inactive.png"},
	demo2: { name: "With Spaces Overflow", image: "tizen_inactive.png"}
};


function Template(templateImport, id) {
  this.template = templateImport.getElementById(id);
  this.templateContent = document.importNode(this.template.content, true);
};

function loadAppGrid() {
	var appGridTemplates = document.getElementById('app-grid-templates').import;

	for(app in apps) {
		var template = new Template(appGridTemplates, "app-grid-icon-template");
		var content = template.templateContent;
		var appInfo = apps[app];
		var imagePath = "./images/application_icons/" + appInfo.image;
		content.querySelector("img").setAttribute("src", imagePath);
		content.querySelector(".app-grid-icon-label").textContent = appInfo.name;
		
		$(content).insertBefore("#app-grid-apps #add-another-icon");
	};
};

var init = function() {
	loadAppGrid();
};

$(document).ready(function() {
	init();

	$("#app-grid-button, #settings-button").on("click", function() {
		var layerName = this.id.replace(/-button/, "-layer");
		var layer = document.getElementById(layerName);
		$(layer).toggleClass("hidden");
	});

	$(".close-button").on("click", function() {
		$(this).closest(".layer").addClass("hidden");
	});

	$("#add-another-icon").on("click", function() {
		$(this).clone().empty().removeAttr("id").appendTo("#app-grid-apps");
	});
});