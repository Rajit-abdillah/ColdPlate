const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/*

 * Toggle navigation menu on small screens
 * and change navbar style on scroll
 
*/
