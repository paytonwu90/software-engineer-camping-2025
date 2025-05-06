// Import our custom CSS
import '../scss/all.scss'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'


document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
  });
});
