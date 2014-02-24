

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

	// Add a border to buttons
	$('.button').wrap('<div class="button-wrap" />');


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
/*
*	This handles the body classes for off-canvas actions
*/

$('#menu-button').on('click', function() {
    $('body').toggleClass('active-sidebar');

    $('body.active-sidebar #content-wrap').on('click', function() {
        $('body').removeClass('active-sidebar');
        $('body.active-sidebar #content-wrap').off('click');
    });
    return false;
});
/**
 * @version		1.3
 * @package		SimpleTabs
 * @author    Fotis Evangelou - http://nuevvo.com/labs/simpletabs
 * @copyright	Copyright (c) 2009-2011 Fotis Evangelou / Nuevvo Webware Ltd. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

// Main SimpleTabs function
var kmrSimpleTabs = {

	sbContainerClass: "simpleTabs",
	sbNavClass: "simpleTabsNavigation",
	sbContentClass: "simpleTabsContent",
	sbCurrentNavClass: "current",
	sbCurrentTabClass: "currentTab",
	sbIdPrefix: "tabber",	

	init: function(){
		if(!document.getElementsByTagName) return false;
		if(!document.getElementById) return false;
		
		var containerDiv = document.getElementsByTagName("div");
	
		for(var i=0; i<containerDiv.length; i++){
			if (containerDiv[i].className == kmrSimpleTabs.sbContainerClass) {
				
				// assign a unique ID for this tab block and then grab it
				containerDiv[i].setAttribute("id",kmrSimpleTabs.sbIdPrefix+[i]);		
				var containerDivId = containerDiv[i].getAttribute("id");
	
				// Navigation
				var ul = containerDiv[i].getElementsByTagName("ul");
				
				for(var j=0; j<ul.length; j++){
					if (ul[j].className == kmrSimpleTabs.sbNavClass) {
	
						var a = ul[j].getElementsByTagName("a");
						for(var k=0; k<a.length; k++){
							a[k].setAttribute("id",containerDivId+"_a_"+k);
							// get current
							if(kmrSimpleTabs.readCookie('simpleTabsCookie')){
								var cookieElements = kmrSimpleTabs.readCookie('simpleTabsCookie').split("_");
								var curTabCont = cookieElements[1];
								var curAnchor = cookieElements[2];
								if(a[k].parentNode.parentNode.parentNode.getAttribute("id")==kmrSimpleTabs.sbIdPrefix+curTabCont){
									if(a[k].getAttribute("id")==kmrSimpleTabs.sbIdPrefix+curTabCont+"_a_"+curAnchor){
										a[k].className = kmrSimpleTabs.sbCurrentNavClass;
									} else {
										a[k].className = "";
									}
								} else {
									a[0].className = kmrSimpleTabs.sbCurrentNavClass;
								}
							} else {
								a[0].className = kmrSimpleTabs.sbCurrentNavClass;
							}
							
							a[k].onclick = function(){
								kmrSimpleTabs.setCurrent(this,'simpleTabsCookie');
								return false;
							}
						}
					}
				}
	
				// Tab Content
				var div = containerDiv[i].getElementsByTagName("div");
				var countDivs = 0;
				for(var l=0; l<div.length; l++){
					if (div[l].className == kmrSimpleTabs.sbContentClass) {
						div[l].setAttribute("id",containerDivId+"_div_"+[countDivs]);	
						if(kmrSimpleTabs.readCookie('simpleTabsCookie')){
							var cookieElements = kmrSimpleTabs.readCookie('simpleTabsCookie').split("_");
							var curTabCont = cookieElements[1];
							var curAnchor = cookieElements[2];		
							if(div[l].parentNode.getAttribute("id")==kmrSimpleTabs.sbIdPrefix+curTabCont){
								if(div[l].getAttribute("id")==kmrSimpleTabs.sbIdPrefix+curTabCont+"_div_"+curAnchor){
									div[l].className = kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass;
								} else {
									div[l].className = kmrSimpleTabs.sbContentClass;
								}
							} else {
								div[0].className = kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass;
							}
						} else {
							div[0].className = kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass;
						}
						countDivs++;
					}
				}	
	
				// End navigation and content block handling	
			}
		}
	},
	
	// Function to set the current tab
	setCurrent: function(elm,cookie){
		
		this.eraseCookie(cookie);
		
		//get container ID
		var thisContainerID = elm.parentNode.parentNode.parentNode.getAttribute("id");
	
		// get current anchor position
		var regExpAnchor = thisContainerID+"_a_";
		var thisLinkPosition = elm.getAttribute("id").replace(regExpAnchor,"");
	
		// change to clicked anchor
		var otherLinks = elm.parentNode.parentNode.getElementsByTagName("a");
		for(var n=0; n<otherLinks.length; n++){
			otherLinks[n].className = "";
		}
		elm.className = kmrSimpleTabs.sbCurrentNavClass;
		
		// change to associated div
		var otherDivs = document.getElementById(thisContainerID).getElementsByTagName("div");
		var RegExpForContentClass = new RegExp(kmrSimpleTabs.sbContentClass);
		for(var i=0; i<otherDivs.length; i++){
			if ( RegExpForContentClass.test(otherDivs[i].className) ) {
				otherDivs[i].className = kmrSimpleTabs.sbContentClass;
			}
		}
		document.getElementById(thisContainerID+"_div_"+thisLinkPosition).className = kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass;
	
		// get Tabs container ID
		var RegExpForPrefix = new RegExp(kmrSimpleTabs.sbIdPrefix);
		var thisContainerPosition = thisContainerID.replace(RegExpForPrefix,"");
		
		// set cookie
		this.createCookie(cookie,'simpleTabsCookie_'+thisContainerPosition+'_'+thisLinkPosition,1);
	},
	
	// Cookies
	createCookie: function(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	},
	
	readCookie: function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	},
	
	eraseCookie: function(name) {
		this.createCookie(name,"",-1);
	},

	// Loader
	addLoadEvent: function(func) {
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				if (oldonload) {
					oldonload();
				}
				func();
			}
		}
	}
	
	// END
};

// Load SimpleTabs
kmrSimpleTabs.addLoadEvent(kmrSimpleTabs.init);
