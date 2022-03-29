$('.slick-slide-in').slick({
  slideToShow: 1,
  slideScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  Infinity: true,
  fade: true,
  prevArrow: '<i class="fa-solid fa-angle-left left-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right right-arrow"></i>',
});
//brand slider
$('.brand-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: '',
  nextArrow: '',
  Infinity: true,
});
$('.gallery-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: false,
  prevArrow: '',
  nextArrow: '',
  Infinity: true,
});
$('.team-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  prevArrow: '',
  nextArrow: '',
  Infinity: true,
});

//product filtering
// init Isotope
var $grid = $('.st-product-filter').isotope({
  // options
});
// filter items on li click
$('.st-category-items').on('click', 'li', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
//filter item on li active
$('.st-category-items li').click(function () {
  $('.st-category-items li').removeClass('active');
  $(this).addClass('active');
});
