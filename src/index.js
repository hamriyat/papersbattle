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


   document.addEventListener("scroll", (event) => {

      let header = document.querySelector('.header');
      if (window.scrollY > 0) {
         header.classList.add('white-js');
      }else {
         header.classList.remove('white-js');
      }

   });

   if(window.innerWidth < 768) {

      const swiper = new Swiper('.swiper-js-reviews', {
         modules: [Pagination],
         speed: 1000,
         slidesPerView: "auto",
         spaceBetween: 8,

         pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
         }
      });
   }

   document.addEventListener("resize", (event) => {

      let swiper = document.querySelector('.swiper-js-reviews');
      let swiperWrapper = swiper.querySelector('.swiper-wrapper');

      if(window.innerWidth > 768) {
         swiper.destroy();
      } else {
         const swiper = new Swiper('.swiper-js-reviews', {
            modules: [Pagination],
            speed: 1000,
            slidesPerView: "auto",
            spaceBetween: 8,

            pagination: {
               el: ".swiper-pagination",
               dynamicBullets: true,
            }
         });

      }

   });

});
