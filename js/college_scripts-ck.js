/*! College-2013 2015-05-04 */
!function(a){function b(){jQuery(document).ready(function(){var b=jQuery(".js"),c=b.width(),d="840",e="1000",f='<div id="agency-nav" class="two-of-3" role="complementary">';f+="<ul>",f+='<li class="top-agency tfs-item"><a href="http://texasforestservice.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Forest Service</span></a></li>',f+='<li class="top-agency tvmdl-item"><a href="http://tvmdl.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Veterinary Medical Diagnostics Laboratory</span></a></li>',f+='<li class="top-agency ext-item"><a href="http://agrilifeextension.tamu.edu/"><span class="state-agency-name">Texas A&amp;M AgriLife Extension Service</span></a></li>',f+='<li class="top-agency res-item"><a href="http://agriliferesearch.tamu.edu/""><span class="state-agency-name">Texas A&amp;M AgriLife Research</span></a></li>',f+='<li class="top-agency agrilife-item"><a href="http://agrilife.org/"><span class="state-agency-name">Texas A&amp;M AgriLife</span></a></li>',f+="</ul>",f+="</div><!-- #agency-nav -->";var g='<div id="agency-nav-container"></div>';if(a(window).width()>e){a("#drop-nav").append(g),a("#agency-nav-container").append(f),a(".utility-nav").addClass("show-nav"),a(".utility-nav").appendTo("#wrapper");var h=a("#bg-image-container").attr("data-src");a("#bg-image-container").attr("style","background-image:url("+h+");")}a("body").addClass(a(window).width()<e?"mobile":"desktop"),jQuery(window).resize(function(){b.width()!==c&&(c=b.width(),d>c?(a("body").addClass("mobile"),a("#agency-nav-container").remove(),a(".utility-nav").appendTo("#access"),a(".touch .sf-with-ul").click(function(){a(this).find(".sub-menu").hide.slideToggle("medium")})):(a("#agency-nav").show(),a("body").addClass("desktop"),a("#agency-nav-container").remove(),a("#drop-nav").append(g),a("#agency-nav-container").append(f),a(".utility-nav").addClass("show-nav"),a(".utility-nav").appendTo("#wrapper")))}),a(".touch .sf-with-ul").click(function(){a(this).find(".sub-menu").hide.slideToggle("medium")}),a(".no-touch .menu-header .sf-menu").superfish({delay:200,animation:{opacity:"show",height:"show"},speed:250}),a(".no-touch .menu-header .sf-menu li").hover(function(){a(this).find("ul.sub-menu .menu-item a").stop(!0,!0).css({right:"-15px",opacity:"0"}).animate({right:"0",opacity:"1",easing:"easeInExpo"},400)},function(){a(this).find("ul.sub-menu .menu-item a").stop(!0,!0).css({right:"0",opacity:"1"}).animate({right:"-15px",opacity:"0",easing:"easeInExpo"},300)}),a(".button").wrap('<div class="button-wrap" />')})}function c(){jQuery("#challenge-high1").fitText(.6),jQuery("#challenge-high2").fitText(.45),jQuery("#challenge-stem1").fitText(1.01),jQuery("#challenge-stem2").fitText(.9),jQuery("#challenge-grand1").fitText(.3),jQuery("#challenge-grand2").fitText(.56),jQuery("#challenge-diversity").fitText(.49),jQuery("#challenge-accountability").fitText(.8),jQuery("#challenge-international1").fitText(.73),jQuery("#challenge-international2").fitText(.48),jQuery("#former-students1").fitText(.39),jQuery("#former-students2").fitText(.49),jQuery("#current-students1").fitText(.45),jQuery("#current-students2").fitText(.49),jQuery("#future-students1").fitText(.37),jQuery("#future-students2").fitText(.49),jQuery("#faculty-staff1").fitText(.44),jQuery("#faculty-staff2").fitText(.29),jQuery("#giving1").fitText(.321)}var d,e="/wp-content/themes/college-2013/";window.Modernizr.load([{load:[e+"js/presentational-ck.js"],complete:function(){window.jQuery||d.load(e+"js/libs/jquery-1.7.2.min.js"),b(),c()}}])}(jQuery),function(a){a("#menu-button").on("click",function(){return a("body").toggleClass("active-sidebar"),a("body.active-sidebar #content-wrap").on("click",function(){a("body").removeClass("active-sidebar"),a("body.active-sidebar #content-wrap").off("click")}),!1})}(jQuery);