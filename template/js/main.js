(function ($) {
  'use strict';

  // PRELOADER
  $(window).load(function () {
    $('#loader').fadeOut('slow', function () {
      $('#preloader').delay(300).fadeOut('slow');
    });
  });

  // STICKY NAVIGATION
  $(window).on('scroll', function () {
    let y = $(window).scrollTop(),
      topBar = $('header');
    if (y > 1) {
      topBar.addClass('sticky');
    } else {
      topBar.removeClass('sticky');
    }
  });

  // MOBILE MENU
  let toggleButton = $('.menu-toggle'),
    nav = $('.main-navigation');

  toggleButton.on('click', function (event) {
    event.preventDefault();
    toggleButton.toggleClass('is-clicked');
    nav.slideToggle();
  });
  if (toggleButton.is(':visible')) nav.addClass('mobile');

  $(window).resize(function () {
    if (toggleButton.is(':visible')) nav.addClass('mobile');
    else nav.removeClass('mobile');
  });

  $('#main-nav-wrap li a').on('click', function () {
    if (nav.hasClass('mobile')) {
      toggleButton.toggleClass('is-clicked');
      nav.fadeOut();
    }
  });

  // HIGHLIGHT CURRENT IN NAVIGATION BAR
  let sections = $('section'),
    navigation_links = $('#main-nav-wrap li a');
  sections.waypoint({
    handler: function (direction) {
      let active_section;
      active_section = $('section#' + this.element.id);
      if (direction === 'up') active_section = active_section.prev();
      let active_link = $('#main-nav-wrap a[href="#' + active_section.attr('id') + '"]');
      navigation_links.parent().removeClass('current');
      active_link.parent().addClass('current');
    },
    offset: '25%',
  });

  // FLEXSLIDER
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

  // SMOOTH SCROLLING
  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    let target = this.hash,
      $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        'swing',
        function () {
          window.location.hash = target;
        },
      );
  });

  // PLACEHOLDER PLUGIN SETTINGS
  $('input, textarea, select').placeholder();
  let mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d';

  $('#mc-form').ajaxChimp({
    language: 'es',
    url: mailChimpURL,
  });

  // MAILCHIMP TRANSLATION
  $.ajaxChimp.translations.es = {
    submit: 'Submitting...',
    0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
    1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
    2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    5: '<i class="fa fa-warning"></i> E-mail address is not valid.',
  };

  // FITVIDS
  $('.fluid-video-wrapper').fitVids();

  // MODAL POPUP
  $('.video-link a').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: 'mfp-fade',
  });

  $(document).on('click', '.close-popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // BACK TO TOP
  let pxShow = 300;
  let fadeInTime = 400;
  let fadeOutTime = 400;

  // SHOW OR HIDE STICKY FOOTER BUTTON
  jQuery(window).scroll(function () {
    if (!$('#header-search').hasClass('is-visible')) {
      if (jQuery(window).scrollTop() >= pxShow) {
        jQuery('#go-top').fadeIn(fadeInTime);
      } else {
        jQuery('#go-top').fadeOut(fadeOutTime);
      }
    }
  });
})(jQuery);
