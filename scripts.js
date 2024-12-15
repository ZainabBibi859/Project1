
  

  $(document).ready(function () {
    // Initialize Carousel
    $(".home-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: true,
      nav: false,
    });
  
    // Navbar Toggling
    $(".navbar-toggler").on("click", function () {
      $(".navbar-collapse").toggleClass("show");
    });
  
    // Counter Animation
    $(".counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: $(this).data("count") },
          {
            duration: 3000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  
    // Play Button Functionality
    $("#playButton1, #playButton2").on("click", function () {
      $("#videoModal").modal("show");
    });
  });

  $(document).ready(function(){
    $(".carousel-testimony").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true
    });
});

$(document).ready(function(){
  $(".carousel-testimony").owlCarousel({
      items: 1,               // Number of items to display at a time
      loop: true,             // Enable looping
      margin: 10,             // Space between items
      nav: true,              // Enable next and prev arrows
      dots: true,             // Enable navigation dots
      autoplay: false,        // Disable autoplay
      autoplayTimeout: 5000,  // Time between slides (will not be used because autoplay is false)
      autoplayHoverPause: true,  // Pause autoplay on hover (optional)
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
  });
});
$(document).ready(function () {
  $('.popup-vimeo').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        vimeo: {
          index: 'vimeo.com/',
          id: function (url) {
            return url.split('/').pop();
          },
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    }
  });
});

