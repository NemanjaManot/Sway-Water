
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



	/* ---  Show/hide text on starting paralax --- */

	var showHide = $("#showHide");
	var pos = showHide.position();
	$(window).scroll(function () {
	   	var windowpos = $(window).scrollTop();
	   	if (windowpos >= (pos.top - 500)) {
	   		$(".waterFor").fadeIn(500);
	   	}	
	   	else {
	     	$(".waterFor").fadeOut(500);
	   	}
	});

	
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



 	   /* --- Underline navigation list on 'that' position ---*/
	var whatPos = $("#whatIsSway").position();
	var flavorsPos = $("#flavors").position();
	var processPos = $("#process").position();
	var storyPos = $("#ourStory").position();
	var locationsPos = $("#whereFindUs").position();
	var contactPos = $("#contact").position();

	$(window).scroll(function() {
		if( $(this).scrollTop() > whatPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.whatIsSwayClass').addClass('current');
	  	}
		if( $(this).scrollTop() > flavorsPos.top-100) {
			$('a').removeClass('current');
	    	$('.flavorsClass').addClass('current');
	  	}
	  	if( $(this).scrollTop() > processPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.processClass').addClass('current');
	  	}
	  	if( $(this).scrollTop() > storyPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.ourStoryClass').addClass('current');
	  	}
	  	if( $(this).scrollTop() > locationsPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.whereFindUsClass').addClass('current');
	  	}
	  	if( $(this).scrollTop() > contactPos.top-100) {
	  		$('a').removeClass('current');
	    	$('.contactClass').addClass('current');
	  	}
	});
 	   /* --- END Underline navigation list on 'that' position ---*/



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




