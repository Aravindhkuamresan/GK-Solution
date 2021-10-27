function toggleMenu(element) {
	element.classList.toggle("change"); //No I18N
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("review-content");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides,10000); // Change image every 10 seconds
}
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