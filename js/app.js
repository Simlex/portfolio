

$(function () {

    $('.navbar__menu--opened').on('click', function() {
        /* $('.navbar__menu--opened').css('display', 'none');
        $('.navbar__menu--closed').removeClass('closed'); */

        $('.navbar__menu--opened').hide();
        $('.navbar__menu--closed').show(100);
        
        $('.navbar-overlay').removeClass('closed');
    });

    $('.navbar-overlay').on('click', function() {
        $('.navbar-overlay').addClass('closed');
        $('.navbar__menu--opened').show(100);
        $('.navbar__menu--closed').hide();
    });
    
    $('.navbar__logo').on('click', function() {
        $('.navbar-overlay').addClass('closed');
        $('.navbar__menu--opened').show(100);
        $('.navbar__menu--closed').hide();
    });
    
    $('.navbar__menu--closed').on('click', function() {
        /* $('.navbar__menu--opened').show();
        $('.navbar__menu--closed').addClass('closed'); */

        $('.navbar__menu--opened').show(100);
        $('.navbar__menu--closed').hide();

        $('.navbar-overlay').addClass('closed');
    });

    /* $('.design__filter').on('mouseenter', function() {
        $('.design__filter--sub').show(100); 
    });
    $('.design__filter').on('mouseleave', function() {
        $('.design__filter--sub').hide(100); 
    }); */
    
    $('.design__filter--main').on('click', function() {
        $('.design__filter--sub').toggle(200); 
    });

    $('.filter-uiux').on('click', function() {

        $('.design__card').show();
        $('.design__card').not('#uiux').hide();

        $('.design__filter--main').text("uiux");
        $('.design__filter--sub').hide(100); 

        $('.design__card').removeAttr('data-aos');

        $('.filter-all').show(); 
        $('.filter-flyer').show(); 
        $('.filter-logo').show(); 
        $('.filter-uiux').hide(); 

    });

    $('.filter-logo').on('click', function() {

        $('.design__card').show();
        $('.design__card').not('#logo').hide();
        
        $('.design__filter--main').text("Logo");
        $('.design__filter--sub').hide(100); 

        $('.design__card').removeAttr('data-aos');

        $('.filter-all').show(); 
        $('.filter-uiux').show(); 
        $('.filter-flyer').show(); 
        $('.filter-logo').hide(); 

    });

    $('.filter-flyer').on('click', function() {

        $('.design__card').show();
        $('.design__card').not('#flyer').hide();
            
            $('.design__filter--main').text("Flyer");
            $('.design__filter--sub').hide(100); 
    
            $('.design__card').removeAttr('data-aos');
    
            $('.filter-all').show(); 
            $('.filter-uiux').show(); 
            $('.filter-flyer').show(); 
            $('.filter-logo').hide(); 

    });

    $('.filter-all').on('click', function() {

            $('.design__card').show();
            
            $('.design__filter--main').text("All");
            $('.design__filter--sub').hide(100); 
    
            $('.design__card').removeAttr('data-aos');
    
            $('.filter-all').hide(); 
            $('.filter-uiux').show(); 
            $('.filter-flyer').show(); 
            $('.filter-logo').show(); 

    });

    function all() {

        $('.design__card').find("*").show();
        
        $('.design__filter--main').text("All");
        $('.design__filter--sub').toggle(100); 

        $('.design__card').removeAttr('data-aos');

        $('.filter-all').hide(); 
        $('.filter-uiux').show(); 
        $('.filter-flyer').show(); 
        $('.filter-logo').show(); 

    }
    
    /* $('.filter-uiux').on('click', function(e) {
        uiux();
    });
    $('.filter-logo').on('click', function(e) {
        logo();
    });
    $('.filter-flyer').on('click', function(e) {
        flyer();
    });
    $('.filter-all').on('click', function(e) {
        all();
    });

    function uiux() {

        $('.design__card').not('#uiux').hide();
        $('#uiux').show();

        $('.design__filter--main').text("uiux");
        $('.design__filter--sub').toggle(100); 

        $('.design__card').removeAttr('data-aos');

        $('.filter-all').show(); 
        $('.filter-flyer').show(); 
        $('.filter-logo').show(); 
        $('.filter-uiux').hide(); 

    }

    function logo() {

            $('.design__card').not('#logo').hide();
            $('#logo').find("*").show();
            
            $('.design__filter--main').text("Logo");
            $('.design__filter--sub').toggle(100); 
    
            $('.design__card').removeAttr('data-aos');
    
            $('.filter-all').show(); 
            $('.filter-uiux').show(); 
            $('.filter-flyer').show(); 
            $('.filter-logo').hide(); 

    }

    function flyer() {

            $('.design__card').not('#flyer').hide();
            $('#flyer').find("*").show();
            
            $('.design__filter--main').text("Flyer");
            $('.design__filter--sub').toggle(100); 
    
            $('.design__card').removeAttr('data-aos');
    
            $('.filter-all').show(); 
            $('.filter-uiux').show(); 
            $('.filter-logo').show(); 
            $('.filter-flyer').hide(); 

    } */

    $('.theme').on('click', function() {
        document.body.classList.toggle('light');
    });
    $('.lightt').on('click', function() {
        $(this).hide();
        $('.dark').fadeIn();
    });
    $('.dark').on('click', function() {
        $(this).hide();
        $('.lightt').fadeIn();
    });
 
});

$(window).scroll(function() {
    var scroll = $(this).scrollTop();
  if (scroll >= 1000) {
    $('.scroll-overlay').fadeIn();
  } else {
    $('.scroll-overlay').fadeOut();
  }
});
