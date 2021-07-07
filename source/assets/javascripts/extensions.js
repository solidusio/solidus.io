$(function () {
  let $filter = $(".extensions-filter__input"),
      $groups = $(".extensions-group"),
      $cards = $(".extensions-list-block .extensions-group:not(.most-popular) .extension-info"),
      $alert = $(".extensions-list-block .alert"),
      $mostPopular = $(".extensions-list-block .extensions-group.most-popular"),
      //$mostPopularFilter = $("#filter-most-popular"),
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
      $mostPopular.addClass("empty");
    });
  
    //$mostPopular.toggleClass("empty", ($groups.filter(":not(.empty)").length > 0));
    $alert.toggleClass("d-none", ($groups.filter(":not(.empty)").length > 0));
  });

  // $mostPopularFilter.click(function () {
  //   $mostPopular.toggleClass("selected");
  // });

  var $hiddenGroups = $( ".extensions-filter__navbar__nav .nav-item:nth-last-of-type(-n+7)");
    
  $(".js-more").click(function() {
    $hiddenGroups.addClass("show");
    $(this).hide();
  });
});
