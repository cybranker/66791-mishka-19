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
