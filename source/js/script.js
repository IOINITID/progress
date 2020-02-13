// // Init slider for goods
$('.slider-goods').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  dots: false,
  prevArrow: '.slider__controls-prev',
  nextArrow: '.slider__controls-next',
});

// // Init slider for reviews
// $('.slider-reviews').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: true,
//   dots: false,
//   responsive: [{
//     breakpoint: 768,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       arrows: false,
//       dots: true,
//     }
//   }]
// });
// // Init slider for features
// $('.slider-features').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: false,
//   dots: true,
// });
// // Init slider for questions
// $('.slider-questions').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   arrows: false,
//   dots: true,
// });
// // Header on scroll
// var header = document.querySelector('.header');
// var headerInner = document.querySelector('.header--inner');
// // Added event on scroll for header state change
// document.addEventListener('scroll', function () {
//   if (pageYOffset > 400) {
//     if (header) {
//       header.classList.add('header--active');
//     }
//     if (headerInner) {
//       headerInner.classList.add('header--active');
//     }
//   } else {
//     if (header) {
//       header.classList.remove('header--active');
//     }
//     if (headerInner) {
//       headerInner.classList.remove('header--active');
//     }
//   }
// })
// // Showing and hiding text
// var textListFirst = document.querySelectorAll('.features__text');
// var textListSecond = document.querySelectorAll('.required__item');
// var showButtonFirst = document.querySelector('.features__link');
// var showButtonSecond = document.querySelector('.required__link');
// var showButtonTextFirst = document.querySelector('.features__link-text');
// var showButtonTextSecond = document.querySelector('.required__link-text');
// var showButtonIconFirst = document.querySelector('.features__link-icon');
// var showButtonIconSecond = document.querySelector('.required__link-icon');
// var isTextShowedFirst = false;
// var isTextShowedSecond = false;
// var hideTextElements = function (item) {
//   if (item) {
//     item.classList.add('hide');
//   }
// }
// var showTextElements = function (item) {
//   if (item) {
//     item.classList.remove('hide');
//   }
// }
// var showHiddenText = function (textList, showButton, isTextShowed, showButtonText, showButtonIcon) {
//   document.addEventListener('DOMContentLoaded', function () {
//     if (!isTextShowed) {
//       for (var i = 2; i < textList.length; i++) {
//         hideTextElements(textList[i]);
//         showButtonText.textContent = "Читать далее...";
//         showButtonIcon.classList.remove('more__icon--active');
//       }
//     } else {
//       for (var i = 2; i < textList.length; i++) {
//         showTextElements(textList[i]);
//         showButtonText.textContent = "Свернуть...";
//         showButtonIcon.classList.add('more__icon--active');
//       }
//     }
//   });
//   showButton.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     if (isTextShowed) {
//       for (var i = 2; i < textList.length; i++) {
//         hideTextElements(textList[i]);
//       }
//       showButtonText.textContent = "Читать далее...";
//       showButtonIcon.classList.remove('more__icon--active');
//       isTextShowed = false;
//     } else {
//       for (var i = 2; i < textList.length; i++) {
//         showTextElements(textList[i]);
//       }
//       showButtonText.textContent = "Свернуть...";
//       showButtonIcon.classList.add('more__icon--active');
//       isTextShowed = true;
//     }
//   });
// }
// // Call functions with parameters
// if (textListFirst && showButtonFirst && showButtonTextFirst && showButtonIconFirst) {
//   showHiddenText(textListFirst, showButtonFirst, isTextShowedFirst, showButtonTextFirst, showButtonIconFirst);
// }
// if (textListSecond && showButtonSecond && showButtonTextSecond && showButtonIconSecond) {
//   showHiddenText(textListSecond, showButtonSecond, isTextShowedSecond, showButtonTextSecond, showButtonIconSecond);
// }
// // Popup open
// var popupRecall = document.querySelector('.popup--recall');
// var popupRecallButton = document.querySelector('.promo__link');
// var popupMessage = document.querySelector('.popup--messages');
// var popupMessageButton = document.querySelector('.messages__link');
// var popupReview = document.querySelector('.popup--review');
// var popupReviewButton = document.querySelector('.reviews__link');
// var popupMessageRecallButton = document.querySelector('.popup__item--recall');
// var body = document.querySelector('body');
// var popupList = document.querySelectorAll('.popup');
// var closeButtonList = document.querySelectorAll('.popup__close');
// var deviceWidth = window.innerWidth;
// // Popup open function
// var openPopup = function (body, popup, popupButton, closeButtonList) {
//   // Show popup event on click
//   popupButton.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     popup.classList.remove('hide');
//     body.classList.add('filter');
//     body.classList.add('scroll-lock');
//     if (deviceWidth < 768) {
//       body.classList.remove('scroll-lock');
//     }
//   });
//   // Show inner popup event on click
//   popupMessageRecallButton.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     // Hide previous popup function
//     var popupRecallHide = function (item) {
//       item.classList.add('hide');
//       body.classList.remove('filter');
//       body.classList.remove('scroll-lock');
//     }
//     // Call previous popup function
//     for (var i = 0; i < popupList.length; i++) {
//       popupRecallHide(popupList[i]);
//     }
//     // Show next popup function
//     var popupRecallShow = function (item) {
//       item.classList.remove('hide');
//       body.classList.add('filter');
//       body.classList.add('scroll-lock');
//     }
//     // Call next popup function
//     for (var i = 0; i < popupList.length; i++) {
//       popupRecallShow(popupList[0]);
//     }
//   });
//   // Close popup function
//   var closePopup = function (item) {
//     item.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       // Hide all popups function
//       var popupRecallHide = function (item) {
//         item.classList.add('hide');
//         body.classList.remove('filter');
//         body.classList.remove('scroll-lock');
//       }
//       // Call hide all popups function
//       for (var i = 0; i < popupList.length; i++) {
//         popupRecallHide(popupList[i]);
//       }
//     });
//   }
//   // Call close popup function in loop
//   for (var i = 0; i < closeButtonList.length; i++) {
//     closePopup(closeButtonList[i]);
//   }
//   // Close popup on press ESC key
//   document.addEventListener('keydown', function (evt) {
//     if (evt.keyCode == 27) {
//       popup.classList.add('hide');
//       body.classList.remove('filter');
//       body.classList.remove('scroll-lock');
//     }
//   });
// }
// // Call popup open functions with parametrs
// if (body && popupRecall && popupRecallButton && closeButtonList) {
//   openPopup(body, popupRecall, popupRecallButton, closeButtonList);
// }
// // Call popup open functions with parametrs
// if (body && popupMessage && popupMessageButton && closeButtonList) {
//   if (deviceWidth < 768) {
//     openPopup(body, popupMessage, popupMessageButton, closeButtonList);
//   }
// }
// // Call popup open functions with parametrs
// if (body && popupReview && popupReviewButton && closeButtonList) {
//   openPopup(body, popupReview, popupReviewButton, closeButtonList);
// }
// // Check device width for adaptive and destroy sliders
// document.addEventListener('DOMContentLoaded', function () {
//   if (deviceWidth >= 768) {
//     $('.slider-features').slick('destroy');
//     $('.slider-questions').slick('destroy');
//   }
// });
// // Menu open
// var menu = document.querySelector('.menu');
// var menuOpenButton = document.querySelector('.toggle')
// // Open menu event
// menuOpenButton.addEventListener('click', function () {
//   menu.classList.remove('hide');
//   body.classList.add('scroll-lock');
//   body.classList.add('filter');
// });
// // Close menu event
// document.addEventListener('click', function (evt) {
//   if (evt.target === body) {
//     // Hide menu popup
//     menu.classList.add('hide');
//     // Hide previous popup function
//     var popupRecallHide = function (item) {
//       item.classList.add('hide');
//       body.classList.remove('filter');
//       body.classList.remove('scroll-lock');
//     }
//     // Call previous popup function
//     for (var i = 0; i < popupList.length; i++) {
//       popupRecallHide(popupList[i]);
//     }
//   }
// })
