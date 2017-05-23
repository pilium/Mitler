var $menu = $("#my-menu").mmenu({
	extensions: [
		'theme-black', 'effect-menu-slide', 'pagedim-black'
	],
	navbar: {
		title: '<img src="img/logo-1.svg" alt="Салон красоты">'
	},
	offCanvas: {
		position: 'right'
	}
});
var $icon = $("#my-icon");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});

API.bind( "open:finish", function() {
   setTimeout(function() {
      $icon.addClass( "is-active" );
   }, 5);
});
API.bind( "close:finish", function() {
   setTimeout(function() {
      $icon.removeClass( "is-active" );
   }, 100);
});
