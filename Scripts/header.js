const hamburger = document.querySelector('.hamburger');
const closeBtn = document.getElementById('close-menu')
const mobileHeader = document.querySelector('.js-mobile-menu');

hamburger.addEventListener('click', () =>{
  mobileHeader.classList.add("active");
});

closeBtn.addEventListener('click', () =>{
  mobileHeader.classList.remove("active");
});

const navLinks = [
  { selector: ".js-home", target: "home-section-id" },
  { selector: ".js-experience", target: "experience-section-id" },
  { selector: ".js-skills", target: "skills-section-id" },
  { selector: ".js-projects", target: "projects-section-id" },
  { selector: ".js-about", target: "about-section-id" },
  { selector: ".js-contact", target: "contact-section-id" }
];

navLinks.forEach(link => {
  document.querySelectorAll(link.selector)
    .forEach(el => {
      el.addEventListener("click", () => {

        const section = document.getElementById(link.target);

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }

        // close mobile menu if it exists
        const mobileMenu = document.querySelector(".js-mobile-menu");
        if (mobileMenu) {
          mobileMenu.classList.remove("active");
        }

      });
    });
});