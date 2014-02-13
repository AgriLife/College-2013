/*! College-2013 2014-02-12 */
function appInit(){jQuery(document).ready(function(){var a=jQuery(".js"),b=a.width(),c="840",d="1000",e='<div id="agency-nav" class="two-of-3" role="complementary">';e+="<ul>",e+='<li class="top-agency tfs-item"><a href="http://texasforestservice.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Forest Service</span></a></li>',e+='<li class="top-agency tvmdl-item"><a href="http://tvmdl.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Veterinary Medical Diagnostics Laboratory</span></a></li>',e+='<li class="top-agency ext-item"><a href="http://agrilifeextension.tamu.edu/"><span class="state-agency-name">Texas A&amp;M AgriLife Extension Service</span></a></li>',e+='<li class="top-agency res-item"><a href="http://agriliferesearch.tamu.edu/""><span class="state-agency-name">Texas A&amp;M AgriLife Research</span></a></li>',e+='<li class="top-agency agrilife-item"><a href="http://agrilife.org/"><span class="state-agency-name">Texas A&amp;M AgriLife</span></a></li>',e+="</ul>",e+="</div><!-- #agency-nav -->";var f='<div id="agency-nav-container"></div>',g='<div id="bg-image-container"></div>';if($(window).width()>d){$("#drop-nav").append(f),$("#agency-nav-container").append(e),$(".utility-nav").addClass("show-nav"),$(".utility-nav").appendTo("#wrapper"),$("#wrapper").append(g);var h=$(".embed").attr("data-src");$(".embed").html('<script type="text/javascript" src="'+h+'"></script>')}$("body").addClass($(window).width()<d?"mobile":"desktop"),jQuery(window).resize(function(){a.width()!==b&&(b=a.width(),c>b?($("body").addClass("mobile"),$("#agency-nav-container").remove(),$(".utility-nav").appendTo("#access"),$(".touch .sf-with-ul").click(function(){$(this).find(".sub-menu").hide.slideToggle("medium")})):($("#agency-nav").show(),$("body").addClass("desktop"),$("#agency-nav-container").remove(),$("#drop-nav").append(f),$("#agency-nav-container").append(e),$(".utility-nav").addClass("show-nav"),$(".utility-nav").appendTo("#wrapper")))}),$(".touch .sf-with-ul").click(function(){$(this).find(".sub-menu").hide.slideToggle("medium")}),$(".no-touch .menu-header .sf-menu").superfish({delay:200,animation:{opacity:"show",height:"show"},speed:250}),$(".no-touch .menu-header .sf-menu li").hover(function(){$(this).find("ul.sub-menu .menu-item a").stop(!0,!0).css({right:"-15px",opacity:"0"}).animate({right:"0",opacity:"1",easing:"easeInExpo"},400)},function(){$(this).find("ul.sub-menu .menu-item a").stop(!0,!0).css({right:"0",opacity:"1"}).animate({right:"-15px",opacity:"0",easing:"easeInExpo"},300)}),$(".button").wrap('<div class="button-wrap" />');var i=null;$(".widget_nav_menu.widget-container .sub-menu").hide(),$(".widget_nav_menu.widget-container .menu-item").hover(function(){var a=this;i=setTimeout(function(){i=null,$(a).has("ul").addClass("down"),$(a).children("ul").delay(50).slideDown("medium",function(){})},500)},function(){i&&(clearTimeout(i),i=null),$(this).has("ul").removeClass("down"),$(this).children("ul").delay(50).slideUp("medium",function(){})})})}function homepageInit(){jQuery("#challenge-high1").fitText(.6),jQuery("#challenge-high2").fitText(.45),jQuery("#challenge-stem1").fitText(1.01),jQuery("#challenge-stem2").fitText(.9),jQuery("#challenge-grand1").fitText(.3),jQuery("#challenge-grand2").fitText(.56),jQuery("#challenge-diversity").fitText(.49),jQuery("#challenge-accountability").fitText(.8),jQuery("#challenge-international1").fitText(.73),jQuery("#challenge-international2").fitText(.48),jQuery("#former-students1").fitText(.285),jQuery("#former-students2").fitText(.353),jQuery("#current-students1").fitText(.33),jQuery("#current-students2").fitText(.36),jQuery("#future-students1").fitText(.27),jQuery("#future-students2").fitText(.353),jQuery("#faculty-staff1").fitText(.315),jQuery("#faculty-staff2").fitText(.218),jQuery("#giving1").fitText(.24)}var Modernizr,path="/wp-content/themes/college-2013/";Modernizr.load([{load:[path+"js/presentational-ck.js"],complete:function(){window.jQuery||Modernizr.load(path+"js/libs/jquery-1.7.2.min.js"),appInit(),homepageInit()}}]),$("#menu-button").on("click",function(){return $("body").toggleClass("active-sidebar"),$("body.active-sidebar #content-wrap").on("click",function(){$("body").removeClass("active-sidebar"),$("body.active-sidebar #content-wrap").off("click")}),!1});var kmrSimpleTabs={sbContainerClass:"simpleTabs",sbNavClass:"simpleTabsNavigation",sbContentClass:"simpleTabsContent",sbCurrentNavClass:"current",sbCurrentTabClass:"currentTab",sbIdPrefix:"tabber",init:function(){if(!document.getElementsByTagName)return!1;if(!document.getElementById)return!1;for(var a=document.getElementsByTagName("div"),b=0;b<a.length;b++)if(a[b].className==kmrSimpleTabs.sbContainerClass){a[b].setAttribute("id",kmrSimpleTabs.sbIdPrefix+[b]);for(var c=a[b].getAttribute("id"),d=a[b].getElementsByTagName("ul"),e=0;e<d.length;e++)if(d[e].className==kmrSimpleTabs.sbNavClass)for(var f=d[e].getElementsByTagName("a"),g=0;g<f.length;g++){if(f[g].setAttribute("id",c+"_a_"+g),kmrSimpleTabs.readCookie("simpleTabsCookie")){var h=kmrSimpleTabs.readCookie("simpleTabsCookie").split("_"),i=h[1],j=h[2];f[g].parentNode.parentNode.parentNode.getAttribute("id")==kmrSimpleTabs.sbIdPrefix+i?f[g].className=f[g].getAttribute("id")==kmrSimpleTabs.sbIdPrefix+i+"_a_"+j?kmrSimpleTabs.sbCurrentNavClass:"":f[0].className=kmrSimpleTabs.sbCurrentNavClass}else f[0].className=kmrSimpleTabs.sbCurrentNavClass;f[g].onclick=function(){return kmrSimpleTabs.setCurrent(this,"simpleTabsCookie"),!1}}for(var k=a[b].getElementsByTagName("div"),l=0,m=0;m<k.length;m++)if(k[m].className==kmrSimpleTabs.sbContentClass){if(k[m].setAttribute("id",c+"_div_"+[l]),kmrSimpleTabs.readCookie("simpleTabsCookie")){var h=kmrSimpleTabs.readCookie("simpleTabsCookie").split("_"),i=h[1],j=h[2];k[m].parentNode.getAttribute("id")==kmrSimpleTabs.sbIdPrefix+i?k[m].className=k[m].getAttribute("id")==kmrSimpleTabs.sbIdPrefix+i+"_div_"+j?kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass:kmrSimpleTabs.sbContentClass:k[0].className=kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass}else k[0].className=kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass;l++}}},setCurrent:function(a,b){this.eraseCookie(b);for(var c=a.parentNode.parentNode.parentNode.getAttribute("id"),d=c+"_a_",e=a.getAttribute("id").replace(d,""),f=a.parentNode.parentNode.getElementsByTagName("a"),g=0;g<f.length;g++)f[g].className="";a.className=kmrSimpleTabs.sbCurrentNavClass;for(var h=document.getElementById(c).getElementsByTagName("div"),i=new RegExp(kmrSimpleTabs.sbContentClass),j=0;j<h.length;j++)i.test(h[j].className)&&(h[j].className=kmrSimpleTabs.sbContentClass);document.getElementById(c+"_div_"+e).className=kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass;var k=new RegExp(kmrSimpleTabs.sbIdPrefix),l=c.replace(k,"");this.createCookie(b,"simpleTabsCookie_"+l+"_"+e,1)},createCookie:function(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3);var e="; expires="+d.toGMTString()}else var e="";document.cookie=a+"="+b+e+"; path=/"},readCookie:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null},eraseCookie:function(a){this.createCookie(a,"",-1)},addLoadEvent:function(a){var b=window.onload;window.onload="function"!=typeof window.onload?a:function(){b&&b(),a()}}};kmrSimpleTabs.addLoadEvent(kmrSimpleTabs.init);