// Show dropdown description
var productInfo = document.querySelectorAll('.slider__item:not(.slick-cloned)');
var productInfoShowButton = document.querySelector('.product__more');
var productInfoShowText = document.querySelector('.product__more-title');
var productInfoShowIcon = document.querySelector('.product__more-icon');
var productFilter = document.querySelectorAll('.product__filter');
var sliderDescription = document.querySelectorAll('.slider__info');
var isProductShowed = false;
var deviceWidth = window.innerWidth;

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

// Start state for document on loading
var onDOMLoading = function () {
  checkDeviceWidth();
};

// Hide all slider descriptions blocks
var sliderDescriptionHide = function () {
  productInfo.forEach(function (item) {
    item.style.display = 'none';
    productInfo[0].style.display = 'flex';
  });
};

// Show hidden description
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

// Mobile sliders destroying
var sliderMobileDestroying = function () {
  $('.slider-achievements').slick('destroy');
  $('.slider-goods').slick('destroy');
  $('.slider-features').slick('destroy');
  $('.slider-team').slick('destroy');
};

// Desktop sliders destroying
var sliderDesktopDestroying = function () {
  $('.slider-products').slick('destroy');
};

// Slider destroying
var checkDeviceWidth = function () {
  if (deviceWidth >= 768) {
    sliderMobileDestroying();
  } else {
    sliderDesktopDestroying();
    sliderDescriptionHide();
  }
};

// Open modal windows
var modalRecall = document.querySelector('.modal--recall');
var modalRecallShowButtons = document.querySelectorAll('.modal__link--recall');
var modalMessage = document.querySelector('.modal--messages');
var modalMessageShowButton = document.querySelector('.modal__link--messages');
var modals = document.querySelectorAll('.modal--popup');
var modalCloseButtons = document.querySelectorAll('.modal__close');
var menu = document.querySelector('.menu');
var menuOpenButton = document.querySelector('.toggle')
var menuDropdownButton = document.querySelector('.menu__navigation .navigation__link--toggle');
var menuDropDown = document.querySelector('.menu__navigation .navigation__list--inner');
// var recall = document.querySelector('.modal__item--recall');

// Hide body filters
var hideFilters = function () {
  document.body.classList.remove('filter');
  document.body.classList.remove('scroll-lock');
};

// Show body filters
var showFilters = function () {
  document.body.classList.add('filter');
  document.body.classList.add('scroll-lock');
};

// Open recall modals
var openModalRecall = function () {
  closeModals();
  modalRecallShowButtons.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalRecall.classList.remove('hide');
      showFilters();
      if (deviceWidth < 768) {
        document.body.classList.remove('scroll-lock');
      }
    });
  });
};

// Open messages modal
var openModalMessages = function (evt) {
  evt.preventDefault();
  closeModals();
  if (deviceWidth < 768) {
    modalMessage.classList.remove('hide');
    document.body.classList.remove('scroll-lock');
  }
}

// Close all modals
var closeModals = function () {
  modals.forEach(function (item) {
    item.classList.add('hide');
    hideFilters();
  });
};

// Closing modal window on click
var onModalCloseClick = function () {
  modalCloseButtons.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModals();
    });
  });
};

// Escape button keydown handler
var onEscapeButtonPress = function (evt) {
  if (evt.keyCode === 27) {
    closeModals();
  };
};

// Open menu
var openMenu = function () {
  menu.classList.remove('hide');
  showFilters();
};

// Close menu
var closeMenu = function (evt) {
  if (evt.target === document.body) {
    menu.classList.add('hide');
    hideFilters();
  }
};

// Dropdown button click handler
var onDropdownButtonClick = function (evt) {
  evt.preventDefault();
  menuDropDown.classList.toggle('show');
  menuDropdownButton.classList.toggle('navigation__item--toggle-active');
}

//Adding call functions
openModalRecall();
onModalCloseClick();

// Adding event listeners
document.addEventListener('keydown', onEscapeButtonPress);
menuOpenButton.addEventListener('click', openMenu);
document.addEventListener('click', closeMenu);
menuDropdownButton.addEventListener('click', onDropdownButtonClick);
modalMessageShowButton.addEventListener('click', openModalMessages);
productInfoShowButton.addEventListener('click', onProductShowClick);
document.addEventListener('DOMContentLoaded', onDOMLoading);
