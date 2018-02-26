import "jquery";
import "popper.js";
import "bootstrap";

$(function () {
  $(".site-menu-toggler").click(function () {
    $("body").toggleClass("menu-open");
    return false;
  })
});
