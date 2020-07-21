
$( document ).ready(function() {

    // add active class to selected item in menu

    $('.view-more-button').click(function() {
      $(this).toggleClass('btn-primary');
      $(this).toggleClass('btn-default');
      $(this).children('.view-more-text').toggleClass('d-none');
    });


    // change icon when toggle flight card

    $('.view-more-flight-button').click(function() {
      $(this).closest('.flight-result').toggleClass('flight-result-open');
    });

    // make dropdowns not close on click

    $('.dropdown-menu').on("click.bs.dropdown", function (e) {
      e.stopPropagation();
    });

    // toggle reserve modal

    $('.toggle-reserve').click(function() {
      $('.reserve-modal').fadeIn();
    });

    $('.reserve-modal-backdrop').click(function() {
      $('.reserve-modal').fadeOut();
    });

    // Google location autocomplete

    $('input.auto-complete').each(function () {
     console.log("Initialized auto complete on ", this)
     $(this).geocomplete({
       onChange: function(addr, suggested) {
         console.log("Location auto complete: ", addr, suggested)
       },
       onNoResult: function(addr) {
         console.log("Location no completion: ", addr)
       }
     })
    });

});
