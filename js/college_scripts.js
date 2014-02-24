

function appInit() {

jQuery(document).ready(function() {

    //set the initial values

    var detector = jQuery('.js');
    var compareWidth = detector.width();
	var smallScreen = '840';
	var bigScreen = '1000';
	var logoRama = '<div id="agency-nav" class="two-of-3" role="complementary">';
	logoRama	+= '<ul>';
	logoRama	+= '<li class="top-agency tfs-item"><a href="http://texasforestservice.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Forest Service</span></a></li>';
	logoRama	+= '<li class="top-agency tvmdl-item"><a href="http://tvmdl.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Veterinary Medical Diagnostics Laboratory</span></a></li>';
	logoRama	+= '<li class="top-agency ext-item"><a href="http://agrilifeextension.tamu.edu/"><span class="state-agency-name">Texas A&amp;M AgriLife Extension Service</span></a></li>';
	logoRama	+= '<li class="top-agency res-item"><a href="http://agriliferesearch.tamu.edu/""><span class="state-agency-name">Texas A&amp;M AgriLife Research</span></a></li>';
	logoRama	+= '<li class="top-agency agrilife-item"><a href="http://agrilife.org/"><span class="state-agency-name">Texas A&amp;M AgriLife</span></a></li>';
	logoRama	+= '</ul>';
	logoRama	+= '</div><!-- #agency-nav -->';

	var agencyNavContainer = '<div id="agency-nav-container"></div>';
	var bgImageContainer = '<div id="bg-image-container"></div>';

	if ($(window).width() > bigScreen) {

		// Add the agency nav up top
		$("#drop-nav").append(agencyNavContainer);
		$("#agency-nav-container").append(logoRama);

		// 'reveal' the footer toolbar
		$(".utility-nav").addClass("show-nav");
		$(".utility-nav").appendTo("#wrapper");

		// Add background image 
		// @todo: load for screen size draggers
		$("#wrapper").append(bgImageContainer);

		// activate embed class areas
        var src = $('.embed').attr('data-src');
        $('.embed').html('<script type="text/javascript" src="'+src+'"></script>');
	}

	if ($(window).width() < bigScreen) {
		$("body").addClass("mobile");
	}
	else {
		$("body").addClass("desktop");
	}

	// Credit: http://webdeveloper2.com/2011/06/trigger-javascript-on-css3-media-query-change/
    jQuery(window).resize(function(){
        //compare everytime the window resize event fires
        if(detector.width()!==compareWidth){

            //a change has occurred so update the comparison variable
            compareWidth = detector.width();

			if (compareWidth < smallScreen) {

				$("body").addClass("mobile");
				$("#agency-nav-container").remove();

				$(".utility-nav").appendTo("#access");

				// Hide Submenus for smaller screens
				$('.touch .sf-with-ul').click(function() {
					$(this).find('.sub-menu').hide.slideToggle('medium');
				});

			}
			else {

				$('#agency-nav').show();
				$("body").addClass("desktop");

				// Clear Agency Nav and Replace
				$("#agency-nav-container").remove();
				$("#drop-nav").append(agencyNavContainer);
				$("#agency-nav-container").append(logoRama);

				// 'reveal' the footer toolbar
				$(".utility-nav").addClass("show-nav");
				$(".utility-nav").appendTo("#wrapper");

				//$("#drop-nav").append(logoRama);

				//$(".utility-nav").addClass("show-nav");
				//$(".utility-nav").appendTo("#wrapper");
				// @todo: If #agency-nav does not exist append
			}
        }

    });

	// Toggle click for sub-menus on touch screens
	$('.touch .sf-with-ul').click(function() {
		$(this).find('.sub-menu').hide.slideToggle('medium');
	});

	/*
     * Set up the superfish arguments for non-touch screens
     */

    $( '.no-touch .menu-header .sf-menu' ).superfish( {
        delay: 200,   // 0.05 second delay on mouseout
        animation:   { opacity: 'show', height: 'show' },   // fade-in and slide-down animation
        speed: 250 // Dropdown our menu fast
    } );

	//background menu animation for non-touch screens
	$('.no-touch .menu-header .sf-menu li').hover(function() {
		$(this).find('ul.sub-menu .menu-item a').stop(true, true)
		.css({
			right: "-15px",
			opacity: "0"
			})
		.animate({
			right: "0",
			opacity: "1",
			easing:"easeInExpo"
		},400);
	}, function() {
		$(this).find('ul.sub-menu .menu-item a').stop(true, true)
		.css({
			right: "0",
			opacity: "1"
			})
		.animate({
			right: "-15px",
			opacity: "0",
			easing:"easeInExpo"
		},300);
	});

	// Add a border to buttons
	$('.button').wrap('<div class="button-wrap" />');


	// Social Media Directory: Collapse sections
	// @todo: Load only on /social page
	// jQuery(".social-accounts").accordion();

});

} // appInit


function homepageInit() {
	// Style Homepage Buttons

	jQuery("#challenge-high1").fitText(0.6);//, { minFontSize: '20px', maxFontSize: '24px' }); //20px
	jQuery("#challenge-high2").fitText(0.45);//, { minFontSize: '26px', maxFontSize: '29px' }); //26px

	jQuery("#challenge-stem1").fitText(1.01);
	jQuery("#challenge-stem2").fitText(0.90);

	jQuery("#challenge-grand1").fitText(0.3);
	jQuery("#challenge-grand2").fitText(0.56);

	jQuery("#challenge-diversity").fitText(0.49);

	jQuery("#challenge-accountability").fitText(0.8);

	jQuery("#challenge-international1").fitText(0.73);
	jQuery("#challenge-international2").fitText(0.48);

	jQuery("#former-students1").fitText(0.285);
	jQuery('#former-students2').fitText(0.353);

	jQuery("#current-students1").fitText(0.33);
	jQuery("#current-students2").fitText(0.36);

	jQuery("#future-students1").fitText(0.27);
	jQuery("#future-students2").fitText(0.353);

	jQuery("#faculty-staff1").fitText(0.315);
	jQuery("#faculty-staff2").fitText(0.218);

	jQuery("#giving1").fitText(0.24);

	// @todo Load Soliloquy .js here

}


var Modernizr;

// path to WordPress theme
var path = "/wp-content/themes/college-2013/";

// Give Modernizr.load a string, an object, or an array of strings and objects
Modernizr.load([
	{
    load: [ path + 'js/presentational-ck.js'],

    complete: function () {
        // Load a local jQuery if needed
        if ( !window.jQuery ) {
            Modernizr.load(path + 'js/libs/jquery-1.7.2.min.js');
        }
        //jQuery.noConflict();
        appInit();
        homepageInit();
    }
  },
  // Run your analytics after you've already kicked off all the rest
  // of your app.
  // 'post-analytics.js'
]);