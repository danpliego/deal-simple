
$( document ).ready(function() {

  // add active class to selected item in menu

    $('.view-more-button').click(function() {
      $(this).toggleClass('btn-primary');
      $(this).toggleClass('btn-default');
      $(this).children('.view-more-text').toggleClass('d-none');
    });

    $('.dropdown-menu').on("click.bs.dropdown", function (e) {
      e.stopPropagation();
    });

    $('.toggle-reserve').click(function() {
      $('.reserve-modal').fadeIn();
    });


    $('.reserve-modal-backdrop').click(function() {
      $('.reserve-modal').fadeOut();
    });

});
