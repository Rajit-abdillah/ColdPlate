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

// the script above is used to toggle the navigation menu on small screens and to change the navbar style on scroll, so if you are on top of the page, the navbar is transparent, and when you scroll down, it becomes solid color.