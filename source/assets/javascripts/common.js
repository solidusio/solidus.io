import "jquery";
import "popper.js";
import "bootstrap";
import "details-element-polyfill";
import NoUiSlider from "nouislider";
import "slick-carousel";
import Rellax from "rellax";
import Headroom from "headroom.js";
import numeral from "numeral";
import AOS from "aos";
import LazyLoad from "vanilla-lazyload";
const Cookies = require('js-cookie');

//var rellax = new Rellax('.rellax');

var lazyLoadInstance = new LazyLoad;

$(function () {
  // Tab hover
  $('[data-toggle="tab-hover"]').hover( function(){
    $(this).tab('show');
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

  //Price calculation block
  let $slider = $(".cost-calculator .slider"),
  $sliderSales = $(".cost-calculator .js-sales"),
  $sliderTotal = $(".cost-calculator .js-total-cost");

  if($slider.length){
    NoUiSlider.create($slider[0], {
      start: [$slider.data("start")],
      connect: [true, false],
      step: 1000,
      range: {
        'min': $slider.data("min"),
        'max': $slider.data("max")
      }
    });

    $slider[0].noUiSlider.on('update', function(e){
      $sliderSales.html(numeral(e[0]).format('0,0'));
      $sliderTotal.html(numeral(e[0] * 0.02).format('0,0'))
    });
  }

  //Fade in blocks on scroll
  AOS.init({
    once: true,
    offset: 200,
    duration: 600,
    easing: "ease-in-quart"
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
