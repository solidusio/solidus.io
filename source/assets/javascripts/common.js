import "jquery";
import "popper.js";
import "bootstrap";
import Headroom from "headroom.js";

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
});
