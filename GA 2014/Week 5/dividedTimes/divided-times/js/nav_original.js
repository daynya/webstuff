$(document).ready(function() {

	/**click listener for the primary nav**/
	$('#primary-nav a').click(function(e) {

		/**prevents default action of click(open new window)**/
		e.preventDefault();

		/**sets variable as target for link that is clicked on**/
		var target = $(this).attr('href');

		/**remove the active class from siblings of what was clicked on, toggle class on anything active**/
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active');

		/**if a nav item has a class of active, and slide-down has a class of open, 
		hide that, and remove the class of open and add it to the target.
		Show the clicked link, add the open class; hide the sibling that was open, and remove it's open class.
		Slide it down.
		When toggled to not active, slide up/hide**/
		
		if ($(this).parent().hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .open').hide().removeClass('open');
				$(target).show().addClass('open');	

			} else {
				$('#slide-down .open').hide().removeClass('open');
				$(target).show().addClass('open').siblings().hide().removeClass('open');
				$('#slide-down').slideDown(150);
			}

		} else {
			$('#slide-down').slideUp(150, function(){
				$('#slide-down .open').hide().removeClass('open');
			});
		}
	});
});				