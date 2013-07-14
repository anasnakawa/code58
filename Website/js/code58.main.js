// ------------------------------
// code58 main js file
// ------------------------------

// ------------------------------
// table of content
// ------------------------------
// initialize foundation plugins
// hacking orbit
// ------------------------------

(function($) {

	// initialize foundation plugins
	// -----------------------------
	$(document).foundation();

	// hacking orbit
	// -------------
	$('.orbit-container')
		.find('.orbit-prev, .orbit-next')
		.each(function() {
			var $self = $(this)
			, $icon = $('<i/>');

			$icon.addClass( $self.hasClass('orbit-prev') ? 'icon-arrow-left': 'icon-arrow-right' );
			
			$icon.appendTo( $self );
		});

})(jQuery);