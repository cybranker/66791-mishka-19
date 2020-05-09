// Polyfill SVG Sprite for IE 11
svg4everybody();

// Picture element HTML5 shiv
document.createElement( "picture" );

// Menu
var headerMain = document.querySelector('.main-header');
var headerToggle = document.querySelector('.main-header__toggle');

headerMain.classList.remove('main-header--nojs');
headerMain.classList.remove('main-header--nav-open');
headerMain.classList.add('main-header--nav-closed');

headerToggle.addEventListener('click', function() {
  if ( headerMain.classList.contains('main-header--nav-closed') ) {
    headerMain.classList.remove('main-header--nav-closed');
    headerMain.classList.add('main-header--nav-opened');
  } else {
    headerMain.classList.add('main-header--nav-closed');
    headerMain.classList.remove('main-header--nav-opened');
  }
});

// Slider
var slider = document.querySelector('.slider');

if (slider) {
  var sliderList = slider.querySelector('.slider__list');
  var sliderCarousel = slider.querySelector('.slider__carousel');
  var sliderItems = slider.querySelectorAll('.slider__item');
  var sliderListWidth = sliderList.offsetWidth;
  var slidePrev = slider.querySelector('.js-prev');
  var slideNext = slider.querySelector('.js-next');
  var position = 0;

  for (var i = 0; i < sliderItems.length; i++) {
    sliderItems[i].style.width = sliderListWidth + 'px';
  }

  slidePrev.addEventListener('click', function() {
    if (position < 0) {
      slideNext.disabled = false;
      position += sliderListWidth;
      sliderCarousel.style.transform = 'translateX(' + position + 'px)';

      if ( position == 0 )
        slidePrev.disabled = true;
    }
  });

  slideNext.addEventListener('click', function() {
    var lastPosition = -sliderListWidth * (sliderItems.length - 1);

    if ( position > lastPosition ) {
      slidePrev.disabled = false;
      position -= sliderListWidth;
      sliderCarousel.style.transform = 'translateX(' + position + 'px)';

      if ( position == lastPosition )
        slideNext.disabled = true;
    }
  });
}

// Modal
var addCartBtns = document.querySelectorAll('.js-add-cart');

var overlay = document.querySelector('.modal-overlay');
var modal = document.querySelector('.modal');

for (var j = 0; j < addCartBtns.length; j++) {
  addCartBtns[j].addEventListener('click', function(evt) {
    evt.preventDefault();

    modal.classList.remove('modal--out');
    overlay.classList.add('modal-overlay--show');
    modal.classList.add('modal--show');
  });
}

document.addEventListener('mouseup', function(evt) {
  if ( !modal.contains(evt.target) && modal.classList.contains('modal--show') ) {
    modal.classList.add('modal--out');

    setTimeout(function() {
      overlay.classList.remove('modal-overlay--show');
      modal.classList.remove('modal--show');
    }, 600);
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27 && modal.classList.contains('modal--show') ) {
    evt.preventDefault();

    modal.classList.add('modal--out');

    setTimeout(function() {
      overlay.classList.remove('modal-overlay--show');
      modal.classList.remove('modal--show');
    }, 600);
  }
});
