
$( document ).ready(function() {

  // add active class to selected item in menu

    $('.menu-item').click(function() {
      $('.menu-item').removeClass('menu-item-active');
      
      if (!$(this).parent().hasClass('menu-drop')) {
        $(this).toggleClass('menu-item-active');
      }
    })

  // show/hide menu in mobile

    $('.menu-toggle').click(function() {
      $('.page-aside').toggleClass('d-none');
    })

  // show/hide menu in mobile

  $('.show-subtitle').click(function() {
    console.log('test')
    $('.section-title-subtitle').toggleClass('d-none');
  })



  // add class to logo container when user scrolls the menu

    $("#menu_container").scroll(function() {
      var scroll = $(this).scrollTop();
      if (scroll >= 10) {
          $('.page-aside').addClass("menu-scrolling");
      } else {
          $('.page-aside').removeClass("menu-scrolling");
      }
    });

  // toggle mass actions

  $('.toggle-mass-actions').click(function() {
    $('.mass-actions').toggleClass('d-none');
  })


  // toggle menu

  $('.toggle-menu').click(function() {
    if ($('.page-main').hasClass('menu-collapsed')) {
      $('.page-main').removeClass('menu-collapsed');
    }

    else {
      $('.page-main').toggleClass('menu-collapsing')
  
      window.setTimeout(function(){
        $('.page-main').toggleClass('menu-collapsing')
        $('.page-main').toggleClass('menu-collapsed');
      }, 300);
    }

  })
});

