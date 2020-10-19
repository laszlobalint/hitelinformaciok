(function ($) {
  ('use strict');

  const pxShow = 300;
  const fadeInTime = 400;
  const fadeOutTime = 400;

  $(window).load(function () {
    $('#loader').fadeOut('slow', function () {
      $('#preloader').delay(300).fadeOut('slow');
    });
  });

  $(window).on('scroll', function () {
    let y = $(window).scrollTop(),
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
      if (jQuery(window).scrollTop() >= pxShow) {
        jQuery('#go-top').fadeIn(fadeInTime);
      } else {
        jQuery('#go-top').fadeOut(fadeOutTime);
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
    if (nav.hasClass('mobile')) {
      $('#menu-toggle').toggleClass('is-clicked');
      $('#main-navigation').fadeOut();
    }
  });

  // PLACEHOLDER PLUGIN SETTINGS AND MAILCHIMP TRANSLATION
  $('input, textarea, select').placeholder();
  let mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d';

  $('#mc-form').ajaxChimp({
    language: 'es',
    url: mailChimpURL,
  });
  $.ajaxChimp.translations.es = {
    submit: 'Submitting...',
    0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
    1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
    2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    5: '<i class="fa fa-warning"></i> E-mail address is not valid.',
  };
})(jQuery);
