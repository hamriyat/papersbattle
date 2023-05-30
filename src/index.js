import './style.scss';
import Swiper, { Pagination } from 'swiper';
import lozad from 'lozad';

document.addEventListener('DOMContentLoaded', () => {

   const observer = lozad();
   observer.observe();

   // burger menu
   const menuBtn = document.querySelector('.nav__burger');
   const menuBody  = document.querySelector('.menu');
   const navSearch = document.querySelector('.nav__search');
   const navSearchOpen = document.querySelector('.nav__btn-open');
   const navSearchClose = document.querySelector('.nav__btn-close');
   let navInput = document.querySelector('.nav__input');
   const logo = document.querySelector('.header__logo');


   if(navSearch) {
      navSearchOpen.addEventListener('click', () => {
         if(window.innerWidth < 992) {
            header.classList.add('header-white-js');
            menuBody.classList.add('menu--search-open');
            navInput.classList.add('input-open-js');
            menuBtn.classList.add('nav__burger--search-open-js')
            logo.style.display = "none";
            navSearchClose.style.display = "inline-block";
         } else {
            header.classList.add('header-white-js');
            navSearch.classList.add('nav__search--search-open-js');
            menuBody.classList.add('menu--search-open');
            navInput.classList.add('input-open-js');
            navSearchClose.style.display = "inline-block";
         }
      })
      
      navSearchClose.addEventListener('click', () => {
         if(window.innerWidth < 992) {
            header.classList.remove('header-white-js');
            navInput.classList.remove('input-open-js');
            menuBody.classList.remove('menu--search-open');
            menuBtn.classList.remove('nav__burger--search-open-js')
            logo.style.display = "block";
            navSearchClose.style.display = "none";
         } else {
            header.classList.remove('header-white-js');
            navSearch.classList.remove('nav__search--search-open-js');
            navInput.classList.remove('input-open-js');
            menuBody.classList.remove('menu--search-open');
            navSearchClose.style.display = "none";
         }
         
      })
   }

   if (menuBtn && menuBody) {
      menuBtn.addEventListener('click', function (e) {
         document.body.classList.toggle('scroll-lock-js');
         menuBtn.classList.toggle('nav__burger--active-js');
         menuBody.classList.toggle('menu--active-js');

         if(popUpMenu.contains(document.querySelector('.open-js'))) {
            topServicesMenu.classList.remove('open-js');
            popUpMenu.classList.remove('open-js');
         }

         if(!header.contains(document.querySelector('.header-scroll-js'))) {
            header.classList.toggle('header-white-js');
         }

         if(navSearch) {
            if(menuBtn.contains(document.querySelector('.nav__burger--active-js'))) {
               navSearch.style.display = "none";
            } else {
               navSearch.style.display = "block";
            }
         }
      })
   }

// sliders

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
      centeredSlides: true,

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
            const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top + scrollY - (20 + document.querySelector('header').offsetHeight);
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

   menuItem.forEach(function (e) {

      e.addEventListener("mouseover", openSubMenu);

   });

   header.addEventListener("mouseleave", openSubMenu);

   function openSubMenu() {
      let popupMenu = document.querySelector('.popup-menu');
      let popupMenuItems = document.querySelectorAll('.popup-menu__section');

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
         header.classList.add('header-scroll-js');
      } else {
         header.classList.remove('header-white-js');
         header.classList.remove('header-scroll-js');
      }
   });


   const topServicesBtn = document.querySelector('.top-services__btn');
   const brandReviewsBtn = document.querySelector('.brand-reviews__btn');
   const topServicesMenu = document.querySelector('.top-services');
   const brandReviewsMenu = document.querySelector('.brand-reviews');
   const popUpMenu = document.querySelector('.popup-menu')

   topServicesBtn.addEventListener("click", (e) => {
      topServicesMenu.classList.toggle('open-js');
      popUpMenu.classList.toggle('open-js');
   })

   brandReviewsBtn.addEventListener("click", (e) => {
      brandReviewsMenu.classList.toggle('open-js');
      popUpMenu.classList.toggle('open-js');
   })

});


// modal popup 

const submitEmail = document.querySelector('.subscribe__btn');
const closeModal = document.querySelector('.modal__close-btn');
const modalOverlay = document.querySelector('.subscribe__overlay');
const modal = document.querySelector('.modal');

if(submitEmail) {
   submitEmail.addEventListener('click', () => {
      modal.classList.add('modal--open-js');
      modalOverlay.classList.add('subscribe__overlay--open-js');
      document.body.classList.add('scroll-lock-js');
   })
   closeModal.addEventListener('click', () => {
      modal.classList.remove('modal--open-js');
      modalOverlay.classList.remove('subscribe__overlay--open-js');
      document.body.classList.remove('scroll-lock-js');
   })
}

      
   
