/*! College-2013 2014-02-12 */
!function(a){a.fn.superfish=function(b){var c=a.fn.superfish,d=c.c,e=a(['<span class="',d.arrowClass,'"> &#187;</span>'].join("")),f=function(){var b=a(this),c=h(b);clearTimeout(c.sfTimer),b.showSuperfishUl().siblings().hideSuperfishUl()},g=function(){var b=a(this),d=h(b),e=c.op;clearTimeout(d.sfTimer),d.sfTimer=setTimeout(function(){e.retainPath=a.inArray(b[0],e.$path)>-1,b.hideSuperfishUl(),e.$path.length&&b.parents(["li.",e.hoverClass].join("")).length<1&&f.call(e.$path)},e.delay)},h=function(a){var b=a.parents(["ul.",d.menuClass,":first"].join(""))[0];return c.op=c.o[b.serial],b},i=function(a){a.addClass(d.anchorClass).append(e.clone())};return this.each(function(){var e=this.serial=c.o.length,h=a.extend({},c.defaults,b);h.$path=a("li."+h.pathClass,this).slice(0,h.pathLevels).each(function(){a(this).addClass([h.hoverClass,d.bcClass].join(" ")).filter("li:has(ul)").removeClass(h.pathClass)}),c.o[e]=c.op=h,a("li:has(ul)",this)[a.fn.hoverIntent&&!h.disableHI?"hoverIntent":"hover"](f,g).each(function(){h.autoArrows&&i(a(">a:first-child",this))}).not("."+d.bcClass).hideSuperfishUl();var j=a("a",this);j.each(function(a){var b=j.eq(a).parents("li");j.eq(a).focus(function(){f.call(b)}).blur(function(){g.call(b)})}),h.onInit.call(this)}).each(function(){var b=[d.menuClass];!c.op.dropShadows||a.browser.msie&&a.browser.version<7||b.push(d.shadowClass),a(this).addClass(b.join(" "))})};var b=a.fn.superfish;b.o=[],b.op={},b.IE7fix=function(){var c=b.op;a.browser.msie&&a.browser.version>6&&c.dropShadows&&void 0!==c.animation.opacity&&this.toggleClass(b.c.shadowClass+"-off")},b.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"},b.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:!0,dropShadows:!0,disableHI:!1,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}},a.fn.extend({hideSuperfishUl:function(){var c=b.op,d=c.retainPath===!0?c.$path:"";c.retainPath=!1;var e=a(["li.",c.hoverClass].join(""),this).add(this).not(d).removeClass(c.hoverClass).find(">ul").hide().css("visibility","hidden");return c.onHide.call(e),this},showSuperfishUl:function(){var a=b.op,c=this.addClass(a.hoverClass).find(">ul:hidden").css("visibility","visible");return b.IE7fix.call(c),a.onBeforeShow.call(c),c.animate(a.animation,a.speed,function(){b.IE7fix.call(c),a.onShow.call(c)}),this}})}(jQuery),function(a){function b(b,c,d,e){var f=b.text().split(c),g="";f.length&&(a(f).each(function(a,b){g+='<span class="'+d+(a+1)+'">'+b+"</span>"+e}),b.empty().append(g))}var c={init:function(){return this.each(function(){b(a(this),"","char","")})},words:function(){return this.each(function(){b(a(this)," ","word"," ")})},lines:function(){return this.each(function(){var c="eefec303079ad17405c889e092e105b0";b(a(this).children("br").replaceWith(c).end(),c,"line","")})}};a.fn.lettering=function(b){return b&&c[b]?c[b].apply(this,[].slice.call(arguments,1)):"letters"!==b&&b?(a.error("Method "+b+" does not exist on jQuery.lettering"),this):c.init.apply(this,[].slice.call(arguments,0))}}(jQuery),function(a){a.fn.fitVids=function(){var b=document.createElement("div"),c=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return b.className="fit-vids-style",b.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",c.parentNode.insertBefore(b,c),this.each(function(){var b=["iframe[src^='http://player.vimeo.com']","iframe[src^='http://www.youtube.com']","iframe[src^='http://www.kickstarter.com']","object","embed"],c=a(this).find(b.join(","));c.each(function(){var b=a(this),c="OBJECT"==this.tagName?b.attr("height"):b.height(),d=c/b.width();b.wrap('<div class="fluid-width-video-wrapper" />').parent(".fluid-width-video-wrapper").css("padding-top",100*d+"%"),b.removeAttr("height").removeAttr("width")})})}}(jQuery),function(a){a.fn.fitText=function(b,c){var d=b||1,e=a.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},c);return this.each(function(){var b=a(this),c=function(){b.css("font-size",Math.max(Math.min(b.width()/(10*d),parseFloat(e.maxFontSize)),parseFloat(e.minFontSize)))};c(),a(window).on("resize",c)})}}(jQuery);