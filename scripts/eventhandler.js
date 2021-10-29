function toggleMenu(element) {
	element.classList.toggle("change"); //No I18N
}

jQuery(document).ready(function(){
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
	/*jQuery('#contact').on('click',function(){
			jQuery("html, body").animate({ scrollTop:document.body.scrollHeight},"fast");
	});
	jQuery('#home').on('click',function(){
			 jQuery("html, body").animate({ scrollTop: 0},"fast");
	});*/
});
