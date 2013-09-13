function appInit() {
  jQuery(document).ready(function() {
    var e = jQuery(".js"), t = e.width(), n = "840", r = "1000", i = '<div id="agency-nav" class="two-of-3" role="complementary">';
    i += "<ul>";
    i += '<li class="top-agency tfs-item"><a href="http://texasforestservice.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Forest Service</span></a></li>';
    i += '<li class="top-agency tvmdl-item"><a href="http://tvmdl.tamu.edu/"><span class="state-agency-name">Texas A&amp;M Veterinary Medical Diagnostics Laboratory</span></a></li>';
    i += '<li class="top-agency ext-item"><a href="http://agrilifeextension.tamu.edu/"><span class="state-agency-name">Texas A&amp;M AgriLife Extension Service</span></a></li>';
    i += '<li class="top-agency res-item"><a href="http://agriliferesearch.tamu.edu/""><span class="state-agency-name">Texas A&amp;M AgriLife Research</span></a></li>';
    i += '<li class="top-agency agrilife-item"><a href="http://agrilife.org/"><span class="state-agency-name">Texas A&amp;M AgriLife</span></a></li>';
    i += "</ul>";
    i += "</div><!-- #agency-nav -->";
    var s = '<div id="agency-nav-container"></div>', o = '<div id="bg-image-container"></div>';
    if ($(window).width() > r) {
      $("#drop-nav").append(s);
      $("#agency-nav-container").append(i);
      $(".utility-nav").addClass("show-nav");
      $(".utility-nav").appendTo("#wrapper");
      $("#wrapper").append(o);
      var u = $(".embed").attr("data-src");
      $(".embed").html('<script type="text/javascript" src="' + u + '"></script>');
    }
    $(window).width() < r ? $("body").addClass("mobile") : $("body").addClass("desktop");
    jQuery(window).resize(function() {
      if (e.width() !== t) {
        t = e.width();
        if (t < n) {
          $("body").addClass("mobile");
          $("#agency-nav-container").remove();
          $(".utility-nav").appendTo("#access");
          $(".touch .sf-with-ul").click(function() {
            $(this).find(".sub-menu").hide.slideToggle("medium");
          });
        } else {
          $("#agency-nav").show();
          $("body").addClass("desktop");
          $("#agency-nav-container").remove();
          $("#drop-nav").append(s);
          $("#agency-nav-container").append(i);
          $(".utility-nav").addClass("show-nav");
          $(".utility-nav").appendTo("#wrapper");
        }
      }
    });
    $(".touch .sf-with-ul").click(function() {
      $(this).find(".sub-menu").hide.slideToggle("medium");
    });
    $(".no-touch .menu-header .sf-menu").superfish({
      delay: 200,
      animation: {
        opacity: "show",
        height: "show"
      },
      speed: 250
    });
    $(".no-touch .menu-header .sf-menu li").hover(function() {
      $(this).find("ul.sub-menu .menu-item a").stop(!0, !0).css({
        right: "-15px",
        opacity: "0"
      }).animate({
        right: "0",
        opacity: "1",
        easing: "easeInExpo"
      }, 400);
    }, function() {
      $(this).find("ul.sub-menu .menu-item a").stop(!0, !0).css({
        right: "0",
        opacity: "1"
      }).animate({
        right: "-15px",
        opacity: "0",
        easing: "easeInExpo"
      }, 300);
    });
    $(".button").wrap('<div class="button-wrap" />');
    var a = null;
    $(".widget_nav_menu.widget-container .sub-menu").hide();
    $(".widget_nav_menu.widget-container .menu-item").hover(function() {
      var e = this;
      a = setTimeout(function() {
        a = null;
        $(e).has("ul").addClass("down");
        $(e).children("ul").delay(50).slideDown("medium", function() {});
      }, 500);
    }, function() {
      if (a) {
        clearTimeout(a);
        a = null;
      }
      $(this).has("ul").removeClass("down");
      $(this).children("ul").delay(50).slideUp("medium", function() {});
    });
  });
}

function homepageInit() {
  jQuery("#challenge-high1").fitText(.6);
  jQuery("#challenge-high2").fitText(.45);
  jQuery("#challenge-stem1").fitText(1.01);
  jQuery("#challenge-stem2").fitText(.9);
  jQuery("#challenge-grand1").fitText(.3);
  jQuery("#challenge-grand2").fitText(.56);
  jQuery("#challenge-diversity").fitText(.49);
  jQuery("#challenge-accountability").fitText(.8);
  jQuery("#challenge-international1").fitText(.73);
  jQuery("#challenge-international2").fitText(.48);
  jQuery("#former-students1").fitText(.285);
  jQuery("#former-students2").fitText(.353);
  jQuery("#current-students1").fitText(.33);
  jQuery("#current-students2").fitText(.36);
  jQuery("#future-students1").fitText(.27);
  jQuery("#future-students2").fitText(.353);
  jQuery("#faculty-staff1").fitText(.315);
  jQuery("#faculty-staff2").fitText(.218);
  jQuery("#giving1").fitText(.24);
}

var Modernizr, path = "/wp-content/themes/college-2013/";

Modernizr.load([ {
  load: [ path + "js/presentational-ck.js" ],
  complete: function() {
    window.jQuery || Modernizr.load(path + "js/libs/jquery-1.7.2.min.js");
    appInit();
    homepageInit();
  }
} ]);