  $(window).on('load',function() {
    $('.preloader').delay(1000).fadeOut('slow');
  });


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
$('select').selectize();
//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
        $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
        $(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
  $('.top').click(function() {
    $('html,body').stop().animate({scrollTop: 0}, 'slow', 'swing')
  });

  $(document).ready(function() {
    $('.reviews').owlCarousel({
      loop: true,
      items: 1,
      smartSpeed: 700,
      nav: false,
      autoHeight: true,
      dots: true
  });
  $('.partner').owlCarousel({
    loop: true,
    items: 4,
    smartSpeed: 700,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'
    ],
    margin: 20,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
})

});
