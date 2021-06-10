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

    $( ".extensions-filter__navbar__nav .nav-item:nth-last-of-type(-n+7)").appendTo( $( ".js-hidden-groups" ) );

    $(".js-more").click(function(){
      $(".extensions-filter__navbar__nav .nav-item:nth-last-of-type(-n+7)").toggle();
    });

    // $('#sales').click(function() {
    //   $('#grid li:hidden').slice(0, 5).slideDown();
    // });
  })


  $( ".extensions-filter__navbar__nav .nav-item:nth-last-of-type(-n+7)").appendTo( $( ".js-hidden-groups" ) );
});
