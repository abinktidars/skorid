$(document).ready(function() {
	
//	// trigger sso register 
//	$('#txt_register').magnificPopup({
//		type: 'iframe',
//		closeBtnInside: true,
//        mainClass: 'mfp-with-zoom mfp-img-mobile mfp-sso',
//		alignTop: true,
//	});

	// trigger sso register 
	$('#txt_register').magnificPopup({
		closeBtnInside: true,
        mainClass: 'mfp-with-zoom mfp-img-mobile mfp-sso',
		alignTop: true,
	});
	$("#js-btn-page1").on('click',function(e) {
		e.preventDefault();
		$('#sso_page1').addClass('sso--hide');
		$('#sso_page2').removeClass('sso--hide');
	});
	$("#js-btn-page2").on('click',function(e) {
		e.preventDefault();
		$('#sso_page2').addClass('sso--hide');
		$('#sso_page3').removeClass('sso--hide');
	});
	$("#js-btn-page3").on('click',function(e) {
		e.preventDefault();
		$('#sso_page3').addClass('sso--hide');
		$('#sso_page4').removeClass('sso--hide');
	});
	$(".js-btn-close").click(function(e) {
		e.preventDefault();
		$('#sso_page4').addClass('sso--hide');
		$('#sso_page1').removeClass('sso--hide');
		$.magnificPopup.close();
	});

});
