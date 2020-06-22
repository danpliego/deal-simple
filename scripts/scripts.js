
$( document ).ready(function() {

  // add active class to selected item in menu

    $('.view-more-button').click(function() {
      $(this).toggleClass('btn-primary');
      $(this).toggleClass('btn-default');
      $(this).children('.view-more-text').toggleClass('d-none');
    })
});

