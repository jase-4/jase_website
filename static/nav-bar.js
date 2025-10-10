let lastScroll = 0;
const nav = document.querySelector('.side-button-group');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    // At top of page, show nav
    nav.classList.remove('hide');
    return;
  }
  
  if (currentScroll > lastScroll) {
    // Scrolling down, hide nav
    nav.classList.add('hide');
  } else {
    // Scrolling up, show nav
    nav.classList.remove('hide');
  }
  
  lastScroll = currentScroll;
});