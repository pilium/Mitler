var $menu = $("#my-menu").mmenu({
    extensions: [
      "theme-black", "effect-menu-slide", "pagedim-black"
    ],
    navbar: {
      title: '<img src="img/logo-1.svg" alt="Салон красоты">'
    },
    offCanvas: {
      position: "right"
    }
  }),
  $icon = $("#my-icon"),
  API = $menu.data("mmenu");
$icon.on("click", function() {
  API.open()
}),
API.bind("open:finish", function() {
  setTimeout(function() {
    $icon.addClass("is-active")
  }, 5)
}),
API.bind("close:finish", function() {
  setTimeout(function() {
    $icon.removeClass("is-active")
  }, 100)
}),
$(document).ready(function() {
  function e() {
    $(".carousel-services__item").each(function() {
      var e = $(this),
        i = e.find(".carousel-services__content").outerHeight();
      e.find(".carousel-services__image").css("min-height", i)
    })
  }
  function i() {
    $(".carousel-services__content").equalHeights()
  }
  $(".carousel-services").on("initialized.owl.carousel", function() {
    setTimeout(function() {
      e()
    }, 100)
  }),
  $(".carousel-services").owlCarousel({
    dots: !1,
    smartSpeed: 700,
    navText: [
      '<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'
    ],
    responsiveClass: !0,
    responsive: {
      0: {
        items: 1,
        nav: !0
      },
      800: {
        items: 2,
        nav: !0
      },
      1100: {
        items: 3,
        nav: !0
      }
    }
  }),
  e(),
  i(),
  window.onresize = function() {
    i()
  }
}),
$(".carousel-services__composition .h3").each(function() {
  var e = $(this);
  e.html(e.html().replace(/(\S+)\s*$/, "<span>$1</span>"))
});
