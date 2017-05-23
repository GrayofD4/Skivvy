jQuery(document).ready(function($) {

// MOBILE TOGGLE
	$('#mobile-nav').slideUp(0); $('#mobile-toggle').click(function() { $( "#mobile-nav" ).slideToggle(400);console.log("Mobile Toggled"); });
	$('#mobile-nav .menu-item-has-children .sub-menu').slideUp(0);$('#mobile-nav .menu-item-has-children > a').click(function(event) {event.preventDefault();var parentLI = $(this).parent('li');$(parentLI).toggleClass('menu-opened').children('.sub-menu').slideToggle(400);});

});
