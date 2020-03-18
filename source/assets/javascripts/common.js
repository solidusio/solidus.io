import "jquery";
import "popper.js";
import "bootstrap";
import "details-element-polyfill";
import "slick-carousel";
import Headroom from "headroom.js";
import AOS from "aos";
import LazyLoad from "vanilla-lazyload";
const Cookies = require('js-cookie');

var lazyLoadInstance = new LazyLoad;

$(function () {
  // Tab on hover instead of click
  $('.tab-hover[data-mouse="hover"] a').hover(function(){
    $(this).tab('show');
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.relatedTarget).attr('href');
    $(target).removeClass('active');
  });
  
  //Menu toggler functionality
  $(".site-menu-toggler").click(function () {
    $("body").toggleClass("menu-open");
    return false;
  });

  //Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //Sticky header initialization
  let header = document.querySelector(".site-header");
  let headroom  = new Headroom(header, {
    offset: header.offsetHeight,
    classes: {
      initial: "site-header",
      pinned: "site-header--pinned",
      unpinned: "site-header--unpinned",
      top: "site-header--top",
      bottom: "site-header--bottom",
      notTop: "site-header--not-top",
      notBottom: "site-header--scrolled"
    }
  });
  // initialise
  headroom.init();

  //Fade in blocks on scroll
  AOS.init({
    once: true,
    offset: 200,
    duration: 600,
    easing: "ease-in-quart"
  });

  //Show roadmap hidden features on click
  $('.roadmap-use-case__timeline--future').click(function(){
    $(this).children('.roadmap-use-case__timeline--future p').toggle('fast');
  });

  //Remove top bar on click
  if (!Cookies.get('announcement')) {
    $(".top-bar").addClass('top-bar--show');
  }

  $(".top-bar-close").click(function(){
    Cookies.set('announcement', 'true', { expires: 10 });
    $(".top-bar").removeClass('top-bar--show');
  });

  $('[data-toggle="tooltip"]').tooltip();

  //Slick Slider
  $('.carousel-list').slick({
    autoplay: false,
    dots: false,
    speed: 300,
    useTransform: false,
    centerPadding: '60px',
    slidesToShow: 1,
    fade: true
  });
});

$(document).on('aos:in', function(event) {
  var target = $(event.originalEvent.detail);

  if (target.data('start-counter') !== undefined) {
    target.prop('Counter', 0).animate({
      Counter: target.text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  }
});
