// Import our custom CSS
import '../scss/all.scss'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  });
});


const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    }
  }
});
