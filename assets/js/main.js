$(document).on('click', '.mobile-nav-toggle', function (e) {
  $('body').toggleClass('mobile-nav-active');
  $('.mobile-nav-toggle i').toggleClass("fa-bars");
  $('.mobile-nav-toggle i').toggleClass("fa-times");

  $(".navlinks").toggleClass("active");
  $(".nav").toggleClass("mobileMenuClick");
});

$(document).on('click', ".navClick", function (e) {
  $(".nav").toggleClass("mobileMenuClick");
  $(".navlinks").toggleClass("active");
  console.log("lala")
});

AOS.init();

// first page typing
var typed = new Typed('.typedAnimation', {
  strings: [
    "Graphic Designer",
    "Web Designer",
    "Freelancer"
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});


// nav bar background color on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// smooth scroll