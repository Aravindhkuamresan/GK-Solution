jQuery(".mobmenu-slide,.menu-open").on('click touchstart', function(e) {
	e.stopPropagation();
}); 
jQuery('.menu-open, a.contactus').click(function(e) {
	var $overlay = jQuery('.mobmenu-slide, .ovrly');  //no i18n
	if ($overlay.hasClass('active')) {
		$overlay.removeClass('active');
	}else {	
		$overlay.addClass('active');
	}
});
function toggleMenu(element) {
	element.classList.toggle("change"); //No I18N
}