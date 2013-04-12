jQuery(document).ready(function($) {

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

/*
    //  Patch for Mobile Safari's orientation change bug
    //  Based on http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/
	var viewport = $('meta[name="viewport"]');
	var nua = navigator.userAgent;
		if ((nua.match(/iPad/i)) || (nua.match(/iPhone/i)) || (nua.match(/iPod/i))) {
			viewport.attr('content', 'width=device-width, minimum-scale=1.0, maximum-scale=1.0');
		$('body')[0].addEventListener("gesturestart", gestureStart, false);
		}
		function gestureStart() {
			viewport.attr('content', 'width=device-width, minimum-scale=0.25, maximum-scale=1.6');
		}
		
	$.fn.fadeToggle = function(speed, easing, callback) {
       return this.animate({opacity: "toggle"}, speed, easing, callback);
    };
*/


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

// Typekit
/*
	(function() {
		var Typekit;
		var config = {
			kitId: 'bbz1kzh',
			scriptTimeout: 3000
		};
		var h=document.getElementsByTagName("html")[0];
		h.className+=" wf-loading";
		var t=setTimeout(function(){
			h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");
			h.className+=" wf-inactive";},config.scriptTimeout);
		var tk=document.createElement("script"),d=false;
		tk.src='//use.typekit.net/'+config.kitId+'.js';
		tk.type="text/javascript";tk.async="true";
		tk.onload=tk.onreadystatechange=function(){
			var a=this.readyState;
			if(d||a&&a!=="complete"&&a!=="loaded") {
				return;
			}
			d=true;
			clearTimeout(t);
			try{
				Typekit.load(config);
			} catch(b){

			}
		};
		var s=document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(tk,s);
	})();
*/



	// Add a border to buttons
	$('.button').wrap('<div class="button-wrap" />');




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

	// Social Media Directory: Collapse sections
	// @todo: Load only on /social page
	// jQuery(".social-accounts").accordion();


	// Collapse Side Menus
	var timer = null;

	$('.widget_nav_menu.widget-container .sub-menu').hide();

	$('.widget_nav_menu.widget-container .menu-item').hover(
		function() {
			var theElement = this;
			timer = setTimeout(function() {
				timer = null;
				$(theElement).has('ul').addClass('down');
				$(theElement).children('ul').delay(50).slideDown('medium', function() {});
			}, 500);
		},
		function() {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			$(this).has('ul').removeClass('down');
			$(this).children('ul').delay(50).slideUp('medium', function() {});
		}
    );
});