jQuery(document).ready(function($) {
	

$(document).ready(function() {

	/* --- Smooth slide navigation on click --- */

	var headerHeight = $('header').outerHeight();

	$('.slide-section').click(function(e) {
		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 1000);

		e.preventDefault();
	})
	
	/* --- Sticky navigation ---*/

	// define variables
	var navOffset, scrollPos = 0;
	
	// add utility wrapper elements for positioning
	$("nav").wrap('<div class="nav-placeholder"></div>');
	$("nav").wrapInner('<div class="nav-inner"></div>');
	$(".nav-inner").wrapInner('<div class="nav-inner-most"></div>');
	
	// function to run on page load and window resize
	function stickyUtility() {
		
		// only update navOffset if it is not currently using fixed position
		if (!$("nav").hasClass("fixed")) {
			navOffset = $("nav").offset().top;
		}
		
		// apply matching height to nav wrapper div to avoid awkward content jumps
		$(".nav-placeholder").height($("nav").outerHeight());
		
	} // end stickyUtility function
	
	// run on page load
	stickyUtility();
	
	// run on window resize
	$(window).resize(function() {
		stickyUtility();
	});
	
	// run on scroll event
	$(window).scroll(function() {
		
		scrollPos = $(window).scrollTop();
		
		if (scrollPos >= navOffset) {
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
		
	});
	/* --- END Sticky navigation ---*/


	/* ---- Modal Window (nav) ---- */

	$(".hamburgerIcon").click(function() 
	{
		$(".contentModal").slideDown(250);
	});

	$(".closeModal, .goThere").click(function(){
		$(".contentModal").slideUp(250);
	});


	/* ---- END Modal Window (nav) ---- */

	/*--- Google Maps --- */

    $('.googleMaps').click(function () {
        $('.googleMaps iframe').css("pointer-events", "auto");
    });
    
    $( ".googleMaps" ).mouseleave(function() {
      $('.googleMaps iframe').css("pointer-events", "none"); 
    });

    /*--- END Google Maps --- */

	
});


	/* --- Menu navigation for media q --- */
/*	jQuery(".hide").click(function() {
		
		jQuery(".nav-menu").slideToggle(400, function() {
			jQuery(this).toggleClass("nav-expanded").css('display', '');
		});
		
	});*/
	/*--- END Menu navigation for media q --- */


});

