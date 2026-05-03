const hamburger = document.querySelector('.hamburger');
const closeBtn = document.getElementById('close-menu')
const mobileHeader = document.querySelector('.js-mobile-menu');

hamburger.addEventListener('click', () =>{
  mobileHeader.classList.add("active");
});

closeBtn.addEventListener('click', () =>{
  mobileHeader.classList.remove("active");
});

