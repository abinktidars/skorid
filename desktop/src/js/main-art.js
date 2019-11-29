$(document).ready(function() {
	//love toggle
	$('.js-btn-love').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).toggleClass("art-tools__link--liked");
	});
	//share
	$('.js-btn-share').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		$('#js-box-share').toggleClass("art-share--hide");
	});
	$(document).click(function() {
		$('#js-box-share').addClass("art-share--hide");
	});

});
