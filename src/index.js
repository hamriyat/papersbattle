import './style.scss';

import Swiper, { Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

   // burger menu
   // const menuBtn = document.querySelector('.nav__burger');
   // const menuBody  = document.querySelector('.menu');

   // if (menuBtn && menuBody) {
   //    menuBtn.addEventListener('click', function (e) {
   //       document.body.classList.toggle('scroll-lock-js');
   //       menuBtn.classList.toggle('nav__burger--active-js');
   //       menuBody.classList.toggle('menu--active-js');
   //    })
   // }

   const swiper = new Swiper('.swiper', {
      modules: [Pagination],
      speed: 1000,
      slidesPerView: "auto",
      spaceBetween: 8,

      pagination: {
         el: ".swiper-pagination",
         dynamicBullets: true,
      }
    });
});
