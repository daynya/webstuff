function deactivateSiblings(target) {
	$(target).parent().siblings().removeClass('active');
}

function toggleActive(target) {
	$(target).parent().toggleClass('active');
}

function hideNav() {
	$('#slide-down .open').hide().removeClass('open');
}

function openNav(target) {
	$(target).show().addClass('open');
}

function hideSiblings(target) {
	$(target).siblings().hide().removeClass('open');
}
 
function slideDownNav() {
	$('#slide-down').slideDown(150);
}

function slideUpNav() {
	$('#slide-down').slideUp(150);
	hideNav();
}

$(document).ready(function() {

	$('#primary-nav a').click(function(e) {

		var target = $(this).attr('href');

		e.preventDefault();
		deactivateSiblings(this);
		toggleActive(this);
		
		if ($(this).parent().hasClass('active')) {	
			if ($('#slide-down').hasClass('open')) {	
				hideNav();
				openNav(target);

			} else {
				openNav(target);
				hideSiblings(target);
				slideDownNav();
			}

		} else {
			slideUpNav();
		}
	})
});
				