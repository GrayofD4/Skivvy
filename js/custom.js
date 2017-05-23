jQuery(document).ready(function($) {

// MOBILE TOGGLE
	$('#mobile-nav').slideUp(0); $('#mobile-toggle').click(function() { $('#mobile-nav').slideToggle(400); });
	$('#mobile-nav .menu-item-has-children .sub-menu').slideUp(0);$('#mobile-nav .menu-item-has-children > a').click(function(event) {event.preventDefault();$('#mobile-nav .menu-opened').removeClass('menu-opened').children('.sub-menu').slideUp(400);var parentLI = $(this).parent('li');$(parentLI).addClass('menu-opened').children('.sub-menu').slideToggle(400);});
	
});
