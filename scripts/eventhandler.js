function toggleMenu(element) {
	element.classList.toggle("change"); //No I18N
}

jQuery(document).ready(function(){
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  		return new bootstrap.Tooltip(tooltipTriggerEl)
	});
	var userAgent  = navigator.userAgent;
	var isMobile = false;
	var $mb_service = jQuery('.services-mob');
	var $service = jQuery('.services');
	if(userAgent.indexOf("Android")!=-1 ||  userAgent.indexOf("iPhone")!=-1 ||  userAgent.indexOf("iPad")!=-1 ){
		$service.hide();
		$mb_service.show();
		idSetter($mb_service,'.cctv-mob');
	}else{
		$service.show();
		$mb_service.hide();
		idSetter($service,'.service');
	}
});

function idSetter($container,el){
	var nav_ids = ['cctv','ipvr','biometric','voip'];
		$container.find(el).each(function(index,el){    			
			jQuery(el).attr('id',nav_ids[index]);
		});
}

function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

function sendEmail(params){

	var email_params = {
		from_name:document.getElementById("fq_name").value,
		to_name:document.getElementById("fq_email").value,
		message:document.getElementById("msg").value
	}
	if(email_params.from_name != '' && email_params.to_name != '' && email_params.message != ''){
			emailjs.send('service_2i0sskz','template_mm8012i',email_params).then(function(res){
				jQuery('.alert-success').fadeIn().delay(3000).fadeOut();
				document.getElementById("fq_name").value = '';
				document.getElementById("fq_email").value = '';
				document.getElementById("msg").value = '';
			});
	}else{
		jQuery('.alert-danger').fadeIn().delay(2500).fadeOut();
	}

}