$(".st-nav-list li").click(function () {
  $(".st-nav-list li").removeClass("active");
  $(this).addClass("active");
});
//hero
$(".slick-slide-in").slick({
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
$(".brand-slider").slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: "",
  nextArrow: "",
  Infinity: true,
});
$(".gallery-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: false,
  prevArrow: "",
  nextArrow: "",
  Infinity: true,
});
$(".team-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  prevArrow: "",
  nextArrow: "",
  Infinity: true,
  dots: true,
});

//product filtering
// init Isotope
var $grid = $(".st-product-filter").isotope({
  // options
});
// filter items on li click
$(".st-category-items").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
//filter item on li active
$(".st-category-items li").click(function () {
  $(".st-category-items li").removeClass("active");
  $(this).addClass("active");
});

//product popup
$(".p-img").magnificPopup({
  type: "image",
});
//video play pupup
function modalVideo() {
  $(document).on("click", ".st-video-open", function (e) {
    e.preventDefault();
    var video = $(this).attr("href");
    $(".st-video-popup-container iframe").attr("src", video);
    $(".st-video-popup").addClass("active");
  });
  $(".st-video-popup-close, .st-video-popup-layer").on(
    "click",
    function (e) {
      $(".st-video-popup").removeClass("active");
      $("html").removeClass("overflow-hidden");
      $(".st-video-popup-container iframe").attr("src", "about:blank");
      e.preventDefault();
    }
  );
}
