/*
*	This handles the body classes for off-canvas actions
*	Regex Help Here: http://ext.ag/WeinOg
*/function appInit(){jQuery(document).ready(function(){var e=jQuery(".js"),t=e.width(),n="840",r="1000",i='<div id="agency-nav" class="two-of-3" role="complementary">';i+="<ul>";i+='<li class="top-agency tfs-item"><a href="http://texasforestservice.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Forest Service</span></a></li>';i+='<li class="top-agency tvmdl-item"><a href="http://tvmdl.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Veterinary Medical Diagnostics Laboratory</span></a></li>';i+='<li class="top-agency ext-item"><a href="http://agrilifeextension.tamu.edu/"><span class="state-agency-name">Texas A&amp;M AgriLife Extension Service</span></a></li>';i+='<li class="top-agency res-item"><a href="http://agriliferesearch.tamu.edu/""><span class="state-agency-name">Texas A&amp;M AgriLife Research</span></a></li>';i+='<li class="top-agency agrilife-item"><a href="http://agrilife.org/"><span class="state-agency-name">Texas A&amp;M AgriLife</span></a></li>';i+="</ul>";i+="</div><!-- #agency-nav -->";var s='<div id="agency-nav-container"></div>',o='<div id="bg-image-container"></div>';if($(window).width()>r){$("#drop-nav").append(s);$("#agency-nav-container").append(i);$(".utility-nav").addClass("show-nav");$(".utility-nav").appendTo("#wrapper");$("#wrapper").append(o);var u=$(".embed").attr("data-src");$(".embed").html('<script type="text/javascript" src="'+u+'"></script>')}$(window).width()<r?$("body").addClass("mobile"):$("body").addClass("desktop");jQuery(window).resize(function(){if(e.width()!==t){t=e.width();if(t<n){$("body").addClass("mobile");$("#agency-nav-container").remove();$(".utility-nav").appendTo("#access");$(".touch .sf-with-ul").click(function(){$(this).find(".sub-menu").hide.slideToggle("medium")})}else{$("#agency-nav").show();$("body").addClass("desktop");$("#agency-nav-container").remove();$("#drop-nav").append(s);$("#agency-nav-container").append(i);$(".utility-nav").addClass("show-nav");$(".utility-nav").appendTo("#wrapper")}}});$(".touch .sf-with-ul").click(function(){$(this).find(".sub-menu").hide.slideToggle("medium")});jQuery(".no-touch .menu-header .sf-menu").superfish({delay:200,animation:{opacity:"show",height:"show"},speed:250});$(".no-touch .menu-header .sf-menu li").hover(function(){$(this).find("ul.sub-menu .menu-item a").stop(!0,!0).css({right:"-15px",opacity:"0"}).animate({right:"0",opacity:"1",easing:"easeInExpo"},400)},function(){$(this).find("ul.sub-menu .menu-item a").stop(!0,!0).css({right:"0",opacity:"1"}).animate({right:"-15px",opacity:"0",easing:"easeInExpo"},300)});$(".button").wrap('<div class="button-wrap" />');var a=null;$(".widget_nav_menu.widget-container .sub-menu").hide();$(".widget_nav_menu.widget-container .menu-item").hover(function(){var e=this;a=setTimeout(function(){a=null;$(e).has("ul").addClass("down");$(e).children("ul").delay(50).slideDown("medium",function(){})},500)},function(){if(a){clearTimeout(a);a=null}$(this).has("ul").removeClass("down");$(this).children("ul").delay(50).slideUp("medium",function(){})})})}function homepageInit(){jQuery("#challenge-high1").fitText(.6);jQuery("#challenge-high2").fitText(.45);jQuery("#challenge-stem1").fitText(1.01);jQuery("#challenge-stem2").fitText(.9);jQuery("#challenge-grand1").fitText(.3);jQuery("#challenge-grand2").fitText(.56);jQuery("#challenge-diversity").fitText(.49);jQuery("#challenge-accountability").fitText(.8);jQuery("#challenge-international1").fitText(.73);jQuery("#challenge-international2").fitText(.48)}var changeActive=function(){var e=document.getElementById("page-body");e.className.match(/(?:^|\s)not-active(?!\S)/)?e.className=e.className.replace(/(?:^|\s)not-active(?!\S)/g," active-sidebar"):e.className.match(/(?:^|\s)active-sidebar(?!\S)/)&&(e.className=e.className.replace(/(?:^|\s)active-sidebar(?!\S)/g," not-active"))};window.onload=function(){var e=document.getElementById("menu-button");e.onclick=function(e){changeActive();e.preventDefault()}};window.onresize=function(){var e=document.getElementById("page-body");e.className=e.className.replace(/(?:^|\s)active-sidebar(?!\S)/g," not-active")};var Modernizr,path="/wp-content/themes/college-2013/";Modernizr.load([{load:[path+"js/presentational-ck.js"],complete:function(){window.jQuery||Modernizr.load(path+"js/libs/jquery-1.7.2.min.js");appInit();homepageInit()}}]);var kmrSimpleTabs={sbContainerClass:"simpleTabs",sbNavClass:"simpleTabsNavigation",sbContentClass:"simpleTabsContent",sbCurrentNavClass:"current",sbCurrentTabClass:"currentTab",sbIdPrefix:"tabber",init:function(){if(!document.getElementsByTagName)return!1;if(!document.getElementById)return!1;var e=document.getElementsByTagName("div");for(var t=0;t<e.length;t++)if(e[t].className==kmrSimpleTabs.sbContainerClass){e[t].setAttribute("id",kmrSimpleTabs.sbIdPrefix+[t]);var n=e[t].getAttribute("id"),r=e[t].getElementsByTagName("ul");for(var i=0;i<r.length;i++)if(r[i].className==kmrSimpleTabs.sbNavClass){var s=r[i].getElementsByTagName("a");for(var o=0;o<s.length;o++){s[o].setAttribute("id",n+"_a_"+o);if(kmrSimpleTabs.readCookie("simpleTabsCookie")){var u=kmrSimpleTabs.readCookie("simpleTabsCookie").split("_"),a=u[1],f=u[2];s[o].parentNode.parentNode.parentNode.getAttribute("id")==kmrSimpleTabs.sbIdPrefix+a?s[o].getAttribute("id")==kmrSimpleTabs.sbIdPrefix+a+"_a_"+f?s[o].className=kmrSimpleTabs.sbCurrentNavClass:s[o].className="":s[0].className=kmrSimpleTabs.sbCurrentNavClass}else s[0].className=kmrSimpleTabs.sbCurrentNavClass;s[o].onclick=function(){kmrSimpleTabs.setCurrent(this,"simpleTabsCookie");return!1}}}var l=e[t].getElementsByTagName("div"),c=0;for(var h=0;h<l.length;h++)if(l[h].className==kmrSimpleTabs.sbContentClass){l[h].setAttribute("id",n+"_div_"+[c]);if(kmrSimpleTabs.readCookie("simpleTabsCookie")){var u=kmrSimpleTabs.readCookie("simpleTabsCookie").split("_"),a=u[1],f=u[2];l[h].parentNode.getAttribute("id")==kmrSimpleTabs.sbIdPrefix+a?l[h].getAttribute("id")==kmrSimpleTabs.sbIdPrefix+a+"_div_"+f?l[h].className=kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass:l[h].className=kmrSimpleTabs.sbContentClass:l[0].className=kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass}else l[0].className=kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass;c++}}},setCurrent:function(e,t){this.eraseCookie(t);var n=e.parentNode.parentNode.parentNode.getAttribute("id"),r=n+"_a_",i=e.getAttribute("id").replace(r,""),s=e.parentNode.parentNode.getElementsByTagName("a");for(var o=0;o<s.length;o++)s[o].className="";e.className=kmrSimpleTabs.sbCurrentNavClass;var u=document.getElementById(n).getElementsByTagName("div"),a=new RegExp(kmrSimpleTabs.sbContentClass);for(var f=0;f<u.length;f++)a.test(u[f].className)&&(u[f].className=kmrSimpleTabs.sbContentClass);document.getElementById(n+"_div_"+i).className=kmrSimpleTabs.sbContentClass+" "+kmrSimpleTabs.sbCurrentTabClass;var l=new RegExp(kmrSimpleTabs.sbIdPrefix),c=n.replace(l,"");this.createCookie(t,"simpleTabsCookie_"+c+"_"+i,1)},createCookie:function(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);var i="; expires="+r.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"},readCookie:function(e){var t=e+"=",n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null},eraseCookie:function(e){this.createCookie(e,"",-1)},addLoadEvent:function(e){var t=window.onload;typeof window.onload!="function"?window.onload=e:window.onload=function(){t&&t();e()}}};kmrSimpleTabs.addLoadEvent(kmrSimpleTabs.init);