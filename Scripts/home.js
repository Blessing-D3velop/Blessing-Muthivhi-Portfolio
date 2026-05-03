document.querySelector(".view-projects-button")
  .addEventListener("click", () => {
    const section = document.getElementById("projects-section-id");
    section.scrollIntoView({ behavior: "smooth" });
  });

document.querySelector(".contact-me-button")
  .addEventListener("click", () => {
    const section = document.getElementById("contact-section-id");
    section.scrollIntoView({ behavior: "smooth" });
  });

document.querySelector(".scroll-down-container")
  .addEventListener("click", () => {
    const nextSection = document.getElementById("experience-section-id");

    nextSection.scrollIntoView({
      behavior: "smooth"
    });
  });