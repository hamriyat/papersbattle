import './style.scss';
import Swiper, { Pagination } from 'swiper';
import lozad from 'lozad';

document.addEventListener('DOMContentLoaded', () => {

   const observer = lozad();
   observer.observe();

   // burger menu
   const menuBtn = document.querySelector('.nav__burger');
   const menuBody  = document.querySelector('.menu');

   if (menuBtn && menuBody) {
      menuBtn.addEventListener('click', function (e) {
         document.body.classList.toggle('scroll-lock-js');
         menuBtn.classList.toggle('nav__burger--active-js');
         menuBody.classList.toggle('menu--active-js');
      })
   }


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

   let categories = false;

   changeSwiperDirection ();
   categoriesSwiper();


   window.addEventListener('resize', () => {
      changeSwiperDirection();
      categoriesSwiper();
   })


   function categoriesSwiper () {
      if (window.innerWidth < 650) {

         if (!categories) {
            categories = new Swiper('.categories__body', {
               modules: [Pagination],
               speed: 1000,
               slidesPerView: 1,
               spaceBetween: 8,

               pagination: {
                  el: ".swiper-pagination",
                  dynamicBullets: true,
               },
            });
         }

         
      } else {
         if (categories) {
            categories.destroy(true, true);
            categories = false;
         }
      }
   }

   function changeSwiperDirection () {
      if (window.innerWidth < 1150) {
         guestbookSwiper.changeDirection('horizontal');
         
      } else {
         guestbookSwiper.changeDirection('vertical');
      }
   }
   

   // navigation scroll to
   const navLink = document.querySelector('.hero__link');

   if (navLink) {
      navLink.addEventListener("click", (e) => {
         let gotoBlock = document.querySelector('#categories');
         if (gotoBlock) {
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            });
         }
         e.preventDefault();
      });

   }

   let header = document.querySelector('.header');
   let menuItem = document.querySelectorAll('.menu__item--has-child');

   menuItem.forEach(function (e){
      e.addEventListener("mouseover", openSubMenu);
   });

   header.addEventListener("mouseleave", openSubMenu);

   function openSubMenu(){
      let popupMenu = document.querySelector('.popup-menu');
      let popupMenuItems = document.querySelectorAll('.popup-menu__item');

      let id = this.dataset.popup;

      if (this.dataset.popup) {
         header.classList.add('header-white-js');
         let menuItemChild = document.querySelector(id);
         popupMenuItems.forEach(function (e) {
            e.classList.remove('open-js');
         })
         popupMenu.classList.add('open-js')
         menuItemChild.classList.add('open-js')
      } else {
         popupMenu.classList.remove('open-js')
         header.classList.remove('header-white-js');
         popupMenuItems.forEach(function (e) {
            e.classList.remove('open-js');
         })

      }

   }

   // white header on scroll

   document.addEventListener("scroll", (event) => {

      if (window.scrollY > 0) {
         header.classList.add('header-white-js');
      } else {
         header.classList.remove('header-white-js');
      }
   });
      
   

});



      
   
