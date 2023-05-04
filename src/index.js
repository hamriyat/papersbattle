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


   const top5Swiper = new Swiper('.top-5__swiper', {
      modules: [Pagination],
      speed: 1000,
      slidesPerView: "auto",
      spaceBetween: 8,

      pagination: {
         el: ".swiper-pagination",
         dynamicBullets: true,
      }
   });

   const guestbookSwiper = new Swiper('.guestbook__swiper', {
      modules: [Pagination],
      speed: 800,
      slidesPerView: 'auto',
      spaceBetween: 8,
      loop: true,

      pagination: {
         el: ".swiper-pagination",
         dynamicBullets: true,
      },
   });

   const blog = new Swiper('.blog__swiper', {
      speed: 800,
      slidesPerView: 'auto',
      spaceBetween: 8,

   });




   

   changeSwiperDirection ();

   window.addEventListener('resize', () => {
      changeSwiperDirection();
   })

   function changeSwiperDirection () {
      if (window.innerWidth < 1150) {
         guestbookSwiper.changeDirection('horizontal', true);

         const categories = new Swiper('.categories__body', {
            modules: [Pagination],
            speed: 1000,
            slidesPerView: "auto",
            spaceBetween: 8,
      
            pagination: {
               el: ".swiper-pagination",
               dynamicBullets: true,
            }
         });
         
      } else {
         guestbookSwiper.changeDirection('vertical');
         categories.destroy(true, true);
         
      }
   }
   
});
