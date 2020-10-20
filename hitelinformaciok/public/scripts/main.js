(function ($) {
  ('use strict');

  $(window).load(function () {
    $('#loader').fadeOut('slow', function () {
      $('#preloader').delay(300).fadeOut('slow');
    });
  });

  $(window).on('scroll', function () {
    const y = $(window).scrollTop(),
      topBar = $('header');
    if (y > 1) {
      topBar.addClass('sticky');
    } else {
      topBar.removeClass('sticky');
    }
  });

  $(window).load(function () {
    $('#testimonial-slider').flexslider({
      namespace: 'flex-',
      controlsContainer: '',
      animation: 'slide',
      controlNav: true,
      directionNav: true,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
      touch: true,
    });
  });

  jQuery(window).scroll(function () {
    if (!$('#header-search').hasClass('is-visible')) {
      if (jQuery(window).scrollTop() >= 300) {
        jQuery('#go-top').fadeIn(400);
      } else {
        jQuery('#go-top').fadeOut(400);
      }
    }
  });

  $(document).on('click', '#menu-toggle', function (event) {
    event.preventDefault();
    $('#menu-toggle').toggleClass('is-clicked');
    $('#main-navigation').slideToggle();
  });

  if ($('#menu-toggle').is(':visible')) $('#main-navigation').addClass('mobile');

  $(window).resize(function () {
    if ($('#menu-toggle').is(':visible')) $('#main-navigation').addClass('mobile');
    else $('#main-navigation').removeClass('mobile');
  });

  $(document).on('click', '#main-nav-wrap li a', function () {
    if ($('#main-navigation').hasClass('mobile')) {
      $('#menu-toggle').toggleClass('is-clicked');
      $('#main-navigation').fadeOut();
    }
  });
})(jQuery);
