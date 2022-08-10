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

//ヘッダーがFVを超えてスクロールした時の挙動
import { headerScrolled } from './scripts/headerScrolled';
headerScrolled();
//スクロール後にヘッダーをトップに固定
// import { headerScrolledFixed } from './scripts/headerScrolledFixed';
headerScrolledFixed();
//スムーススクロール
import { smoothScroll } from './scripts/smoothScroll';
smoothScroll();
//アクセシビリティアコーディオン
import { accessibilityAccordion } from './scripts/accessibilityAccordion';
accessibilityAccordion();
//アクセシビリティタブ
import { accessibilityTab } from './scripts/accessibilityTab';
accessibilityTab();
//フェードアニメーション
import { fadeAnime } from './scripts/fadeAnime';
fadeAnime();
//テキスト1文字づつアニメーション
import { EachTextAnimeControl } from './scripts/EachTextAnimeControl';
EachTextAnimeControl();
//ドロワーメニュー
import { hamburgerDrawerVanilla } from './scripts/hamburgerDrawerVanilla';
hamburgerDrawerVanilla();
//トップへ戻るボタン
import { pageTop } from './scripts/pageTop';
pageTop();




// import { test_swiper } from './swiper/test_swiper';
// test_swiper();
// import { fv_swiper } from './swiper/js-fv-swiper';
// fv_swiper();

//ビューの高さ制御
import { viewHeight } from './scripts/viewHeight';
viewHeight();


import { hoge } from './scripts/hoge';
hoge();

import { fuga } from './scripts/fuga';
fuga();









