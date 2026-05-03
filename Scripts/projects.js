import { projects } from "./data/projects-data.js";

const container = document.querySelector(".projects-container");

projects.forEach(project => {
  const projectEl = document.createElement("div");
  projectEl.classList.add("project-item");

  projectEl.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>

    <div class="tech-stack">
      ${project.stack.map(s => `<span>${s}</span>`).join("")}
    </div>

    <div class="project-buttons">
      <a href="${project.live}" target="_blank" class="btn live">Live Demo</a>
      <a href="${project.code}" target="_blank" class="btn code">Code</a>
    </div>
  `;

  container.appendChild(projectEl);
});