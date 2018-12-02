$(document).ready(function() {
	$('#menu-icon').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('nav').stop(true, true).slideToggle(600);


	});
});