$('.js-click').on('click', function() {
  $(this).css('color', 'red');
});

// var swiper = new Swiper('.swiper', {
//   autoplay: true,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//     // type: 'bullets',
//     // clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


//ドロワーメニュー
import { hamburgerDrawerVanilla } from './scripts/hamburgerDrawerVanilla';
hamburgerDrawerVanilla();



import { test_swiper } from './swiper/test_swiper';
test_swiper();
// import { fv_swiper } from './swiper/js-fv-swiper';
// fv_swiper();

import { viewHeight } from './scripts/viewHeight';
viewHeight();

import { hoge } from './scripts/hoge';
hoge();

import { fuga } from './scripts/fuga';
fuga();









