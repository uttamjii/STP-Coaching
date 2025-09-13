// Target the hamburger menu and close button
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const navLinks = document.querySelector('.navLinks');

// Function to toggle the navigation menu

hamburger.addEventListener('click', () => {
  navLinks.style.left = '0';

});

closeBtn.addEventListener('click', () => {
  navLinks.style.left = '-100%';
});