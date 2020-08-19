import AOS from "aos";

$(function () {
  let $filter = $(".extensions-filter input"),
      $groups = $(".extensions-group"),
      $cards = $(".extensions-list-block .extension-info"),
      $alert = $(".extensions-list-block .alert"),
      selectedFilters = [];



  $filter.change(function () {
    selectedFilters = [];

    $filter.filter(":checked").each(function () {
      selectedFilters.push($(this).attr("name"));
    });
    selectedFilters = ".e-" + selectedFilters.join(", .e-");

    $cards.removeClass("deselected").not(selectedFilters).addClass("deselected");

    $groups.each(function () {
      $(this).toggleClass("empty", ($(this).find(".extension-info:not(.deselected)").length === 0));
    });

    $alert.toggleClass("d-none", ($groups.filter(":not(.empty)").length > 0));

    AOS.refresh();
  })
});
