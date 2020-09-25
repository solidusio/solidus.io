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
  // Fully clickable item
  $(".js-fully-clickable").click(function(e) {
    e.stopPropagation();
    window.location = $(this).find("a").attr("href");
  });

  $('.js-fully-clickable').on("touchstart", function (e) {
      "use strict"; //satisfy the code inspectors
      var link = $(this); //preselect the link
      if (link.hasClass('hover')) {
          return true;
      } else {
          link.addClass("hover");
          $('.js-fully-clickable').not(this).removeClass("hover");
          return false;
      }
  });
  
  // Expand menu on large screens
  $(".expand-use-cases").on("mouseenter", function (event) {
    event.stopPropagation();
    if ($(".expandable").hasClass("show") && (window.matchMedia("(min-width: 1024px)").matches)) {
      $(".use-cases-menu, .expandable").addClass("expanded");
      $(".industries-menu").removeClass("expanded");
    }
  });
  
  $(".expand-industries").on("mouseenter", function (event) {
    event.stopPropagation();
    if ($(".expandable").hasClass("show") && (window.matchMedia("(min-width: 1024px)").matches)) {
      $(".industries-menu, .expandable").addClass("expanded");
      $(".use-cases-menu").removeClass("expanded");
    }
  });

  // Expand menu on small screens
  $(".expand-use-cases").click(function (event) {
    event.stopPropagation();
    if (window.matchMedia("(max-width: 1023px)").matches) {
      $(".use-cases-menu, .expandable").toggleClass("expanded");
      $(this).toggleClass("opened");
    }
  });
  
  $(".expand-industries").click(function (event) {
    event.stopPropagation();
    if (window.matchMedia("(max-width: 1023px)").matches) {
      $(".industries-menu, .expandable").toggleClass("expanded");
      $(this).toggleClass("opened");
    }
  });
  
  // Tab on hover instead of click
  $('.tab-hover[data-mouse="hover"] a').hover(function(){
    $(this).tab('show');
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.relatedTarget).attr('href');
    $(target).removeClass('active');
  });
  
  // Smooth anchor scroll
  $(document).ready(function(){

    var $root = $('html, body');

    $('a[href^="#"]').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $root.animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
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
  $('.roadmap-use-case__timeline--toggleable').click(function(){
    $(this).children('.roadmap-use-case__timeline--toggleable p').toggle('fast');
    $(this).toggleClass('uncollapsed');
  });

  //Remove top bar on click
  if (!Cookies.get('announcement')) {
    $(".top-bar").addClass('top-bar--show');
  }

  $(".top-bar-close").click(function(){
    Cookies.set('announcement', 'true', { expires: 10 });
    $(".top-bar, body").removeClass('top-bar--show');
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
  
  $('.animated-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 0.1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 750,
    arrows: false,
    dots: false,
    cssEase: 'linear',
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
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
