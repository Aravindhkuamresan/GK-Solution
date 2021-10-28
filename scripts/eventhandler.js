function toggleMenu(element) {
	element.classList.toggle("change"); //No I18N
}

jQuery(document).ready(function(){
	jQuery('#contact').on('click',function(){
			jQuery("html, body").animate({ scrollTop:document.body.scrollHeight},"fast");
	});
	jQuery('#home').on('click',function(){
			 jQuery("html, body").animate({ scrollTop: 0},"fast");
	});
});
