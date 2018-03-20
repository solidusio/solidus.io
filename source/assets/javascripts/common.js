import "jquery";
import "popper.js";
import "bootstrap";
import NoUiSlider from "nouislider";
import Headroom from "headroom.js";
import numeral from "numeral";
import AOS from "aos";

$(function () {
  //Menu toggler functionality
  $(".site-menu-toggler").click(function () {
    $("body").toggleClass("menu-open");
    return false;
  });


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

  //Prevent invalid form submit
  $("body").on("submit", ".needs-validation", function (event) {
    if (this[0].checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    $(this).addClass('was-validated');
  });


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
    duration: 600
  });
});
