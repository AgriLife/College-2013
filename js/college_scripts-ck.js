jQuery(document).ready(function($) {

    //set the initial values
    
    var detector = jQuery('.js');
    var compareWidth = detector.width();
	var smallScreen = '840';
	var bigScreen = '1000';
	var logoRama = '<div id="agency-nav" class="two-of-3" role="complementary">';
	logoRama	+= '<ul>';
	logoRama	+= '<li class="top-agency tfs-item"><a href="http://agrilife.org/agrilife-agencies/tfs-home/"><span class="state-agency-name">Texas A&amp;M Forest Service</span></a></li>';
	logoRama	+= '<li class="top-agency tvmdl-item"><a href="http://agrilife.org/agrilife-agencies/tvmdl-home/"><span class="state-agency-name">Texas A&amp;M Veterinary Medical Diagnostics Laboratory</span></a></li>';
	logoRama	+= '<li class="top-agency ext-item"><a href="http://agrilife.org/agrilife-agencies/extension-home/"><span class="state-agency-name">Texas A&amp;M AgriLife Extension Service</span></a></li>';
	logoRama	+= '<li class="top-agency res-item"><a href="http://agrilife.org/agrilife-agencies/research-home/"><span class="state-agency-name">Texas A&amp;M AgriLife Research</span></a></li>';
	logoRama	+= '<li class="top-agency agrilife-item"><a href="http://agrilife.org/agrilife-agencies/college-home/"><span class="state-agency-name">Texas A&amp;M College of Agriculture and Life Sciences</span></a></li>';
	logoRama	+= '</ul>';
	logoRama	+= '</div><!-- #agency-nav -->';

	//alert($(window).width());

	if ($(window).width() > bigScreen) {
		$("#drop-nav").append(logoRama);
	}

	if ($(window).width() < bigScreen) {
		$("body").addClass("mobile");
	}
	else {
		$("body").addClass("desktop");
	}

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

	/*
	if ($(window).width() < smallScreen) {
		$("body").addClass("one-column");
	}
	else {
		$("body").addClass("two-column");
	}
	*/
	

	

	// Credit: http://webdeveloper2.com/2011/06/trigger-javascript-on-css3-media-query-change/
    jQuery(window).resize(function(){
        //compare everytime the window resize event fires
        if(detector.width()!==compareWidth){

            //a change has occurred so update the comparison variable
            compareWidth = detector.width();

			if (compareWidth < smallScreen) {
				//$("body").removeClass("two-column").addClass("one-column");
				//$('#access, .searchform').hide();
				$('#agency-nav').hide();
			}
			else {
				//$("body").removeClass("one-column").addClass("two-column");
				//$('#access, .searchform').show();
				$('#agency-nav').show();
				// @todo: If #agency-nav does not exist append
			}
			
			if (compareWidth >= smallScreen) {
				//$('#access, .searchform').show();
				$('#agency-nav').show();
				// @todo: If #agency-nav does not exist append
			}
        }

    });
/*
	if ($(window).width() < 1024) {
		$("body").addClass("mobile");
	}
	else {
		$("body").addClass("desktop");
	}
*/

  

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

});

/* **********************************************
     Begin off-canvas.js
********************************************** */

/*
*	This handles the body classes for off-canvas actions
*	Regex Help Here: http://ext.ag/WeinOg
*/

var changeActive = function() {
	var page = document.getElementById("page-body");

	if ( page.className.match(/(?:^|\s)not-active(?!\S)/) ) {
		page.className = page.className.replace( /(?:^|\s)not-active(?!\S)/g , ' active-sidebar' );
	} else if ( page.className.match(/(?:^|\s)active-sidebar(?!\S)/) ) {
		page.className = page.className.replace( /(?:^|\s)active-sidebar(?!\S)/g , ' not-active' );
	}
};

window.onload = function() {
	var sidebar_button = document.getElementById("menu-button");
	sidebar_button.onclick = function(event) {
		changeActive();
		event.preventDefault();
	};

};

window.onresize = function() {
	var page = document.getElementById("page-body");
	page.className = page.className.replace( /(?:^|\s)active-sidebar(?!\S)/g , ' not-active' );
};

/* **********************************************
     Begin superfish-menu.js
********************************************** */

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) {
					addArrow( $('>a:first-child',this) );
				}
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) {
				menuClasses.push(c.shadowClass);
			}
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!==undefined) {
			this.toggleClass(sf.c.shadowClass+'-off');
		}
	};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				//sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);

/* **********************************************
     Begin lettering.js
********************************************** */

/*!
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);

/* **********************************************
     Begin fitvids.js
********************************************** */

/*! 
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

$.fn.fitVids = function() {
    var div = document.createElement('div'),
    ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div, ref);

    return this.each(function() {
        var selectors = [
        "iframe[src^='http://player.vimeo.com']",
        "iframe[src^='http://www.youtube.com']",
        "iframe[src^='http://www.kickstarter.com']",
        "object",
        "embed"
        ];

        var $allVideos = $(this).find(selectors.join(','));

        $allVideos.each(function() {
            var $this = $(this),
            height = this.tagName == 'OBJECT' ? $this.attr('height') : $this.height(),
            aspectRatio = height / $this.width();
            $this.wrap('<div class="fluid-width-video-wrapper" />').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + "%");
            $this.removeAttr('height').removeAttr('width');
        });
    });

}
})( jQuery );