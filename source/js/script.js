// Init slider for products
$('.slider-products').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  dots: false,
  prevArrow: '.slider__controls-prev',
  nextArrow: '.slider__controls-next',
});

// Init slider for goods
$('.slider-goods').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
    }
  }]
});

// Init slider for achievements
$('.slider-achievements').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
});

// Init slider for features
$('.slider-features').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
});

// Init slider for team
$('.slider-team').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
});

// Dropdown product items
var productInfo = document.querySelectorAll('.slider__item:not(.slick-cloned)');
var productInfoShowButton = document.querySelector('.product__more');
var productInfoShowText = document.querySelector('.product__more-title');
var productInfoShowIcon = document.querySelector('.product__more-icon');
var productFilter = document.querySelectorAll('.product__filter');
var sliderDescription = document.querySelectorAll('.slider__info');

var isProductShowed = false;

var onDOMLoading = function () {
  productInfo.forEach(function (item) {
    item.style.display = 'none';
    productInfo[0].style.display = 'flex';
  });
};

var onProductShowClick = function (evt) {
  evt.preventDefault();
  if (isProductShowed) {
    productInfo.forEach(function (item) {
      onDOMLoading();
      productInfoShowText.textContent = 'Развернуть';
      productInfoShowIcon.style.transform = 'rotate(0)';
      productFilter.forEach(function (item) {
        item.style.display = 'block';
      });
      sliderDescription.forEach(function (item) {
        item.style.height = '320rem';
      });
    });
    isProductShowed = false;
  } else {
    productInfo.forEach(function (item) {
      item.style.display = 'flex';
      productInfoShowText.textContent = 'Скрыть';
      productInfoShowIcon.style.transform = 'rotate(180deg)';
      productFilter.forEach(function (item) {
        item.style.display = 'none';
      });
      sliderDescription.forEach(function (item) {
        item.style.height = 'auto';
      });
    });
    isProductShowed = true;
  }
};

// Check device width for adaptive and destroy sliders
document.addEventListener('DOMContentLoaded', function () {
  var deviceWidth = window.innerWidth;
  if (deviceWidth >= 768) {
    $('.slider-achievements').slick('destroy');
    $('.slider-goods').slick('destroy');
    $('.slider-features').slick('destroy');
    $('.slider-team').slick('destroy');
  } else {
    $('.slider-products').slick('destroy');
    onDOMLoading();
    productInfoShowButton.addEventListener('click', onProductShowClick);
  }
});
