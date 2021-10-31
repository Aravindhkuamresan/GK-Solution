function toggleMenu(element) {
	element.classList.toggle("change"); //No I18N
}

jQuery(document).ready(function(){
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var userAgent  = navigator.userAgent;
	 	var isMobile = false;
		if(userAgent.indexOf("Android")!=-1 ||  userAgent.indexOf("iPhone")!=-1 ||  userAgent.indexOf("iPad")!=-1 ){
			jQuery('.services').hide();
			jQuery('.services-mob').show();
		}else{
			jQuery('.services').show();
			jQuery('.services-mob').hide();
		}
});
