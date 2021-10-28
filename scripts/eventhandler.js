function toggleMenu(element) {
	element.classList.toggle("change"); //No I18N
}

jQuery(document).ready(function(){
	jQuery('#contact').on('click',function(){
			window.scrollTo(0,document.body.scrollHeight);
	});
});
