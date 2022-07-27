$('.js-click').on('click', function() {
  $(this).css('color', 'red');
});

var swiper = new Swiper('.swiper', {
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
    // type: 'bullets',
    // clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

import { hoge } from './hoge';
hoge();

import { fuga } from './fuga';
fuga();









