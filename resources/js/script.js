$(document).ready(function() {

/*
  $('h1').click(function() {
    $(this).css('background-color', '#ff0000')
  })
*/

  $('.js--sticky-nav').waypoint(function (direction) {
    if (direction == "down" ) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, { 
    offset: '60px'
  });

/*
  $('js--scroll-to-plans').click(function (event) {
    $('html, body').animate({scrollTop: $('js--section-plans').offset().top}, 1000);
  });
*/




  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass(['animate__animated', 'animate__fadeIn']);
  }, {
    offset: '70%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass(['animate__animated', 'animate__tada']);
  }, {
    offset: '40%'
  });

   $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass(['animate__animated', 'animate__fadeIn']);
  }, {
    offset: '50%'
  });
  
   $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass(['animate__animated', 'animate__pulse']);
  }, {
    offset: '30%'
  });  

/*
  $('js--wp-1').addClass([ "animate__animated", "animate__bounceOutLeft", "hui" ]);
*/

// Smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});