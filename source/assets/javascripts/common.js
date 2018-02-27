import "jquery";
import "popper.js";
import "bootstrap";
import Headroom from "headroom.js";

$(function () {
  $(".site-menu-toggler").click(function () {
    $("body").toggleClass("menu-open");
    return false;
  });


  // construct an instance of Headroom, passing the element
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
});
