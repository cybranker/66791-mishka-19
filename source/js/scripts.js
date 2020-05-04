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


var slider = document.querySelector('.slider');
var sliderList = slider.querySelector('.slider__list');
var sliderCarousel = slider.querySelector('.slider__carousel');
var sliderItems = slider.querySelectorAll('.slider__item');
var sliderListWidth = sliderList.offsetWidth;
var slidePrev = slider.querySelector('.js-prev');
var slideNext = slider.querySelector('.js-next');
var position = 0;

for(var sliderItem of sliderItems)
  sliderItem.style.width = sliderListWidth + 'px';

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
