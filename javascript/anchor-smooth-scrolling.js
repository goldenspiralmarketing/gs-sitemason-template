$('a[href*=#]:not([href=#])').not($('.lightbox-inline,.lightbox-contact')).click(function(event) {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			setTimeout(function() {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
			}, 50);
		}
		return false;
	}
});