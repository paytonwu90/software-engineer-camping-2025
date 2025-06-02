// Import our custom CSS
import '../scss/all.scss'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import AOS from 'aos';


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


AOS.init();


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation');
    }
  });
}, {
  threshold: 0.5
});

// 指定要觀察的目標元素
if (document.body.clientWidth >= 1280) {
  const target = document.querySelector('.newsletter');
  observer.observe(target);
}
