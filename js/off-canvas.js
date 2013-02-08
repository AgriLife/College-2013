/*
*	This handles the body classes for off-canvas actions
*	Regex Help Here: http://ext.ag/WeinOg
*/

var changeActive = function() {
	var page = document.getElementById("page-body");

	if ( page.className.match(/(?:^|\s)not-active(?!\S)/) ) {
		page.className = page.className.replace( /(?:^|\s)not-active(?!\S)/g , ' active-sidebar' );
	} else if ( page.className.match(/(?:^|\s)active-sidebar(?!\S)/) ) {
		page.className = page.className.replace( /(?:^|\s)active-sidebar(?!\S)/g , ' not-active' );
	}
};

window.onload = function() {
	var sidebar_button = document.getElementById("menu-button");
	sidebar_button.onclick = function(event) {
		changeActive();
		event.preventDefault();
	};

};

window.onresize = function() {
	var page = document.getElementById("page-body");
	page.className = page.className.replace( /(?:^|\s)active-sidebar(?!\S)/g , ' not-active' );
};