const projects = [
  {
    title: "TaskFlow Dashboard",
    description:
      "A productivity workspace that helps teams coordinate tasks, track progress, and keep delivery bottlenecks visible in one place.",
    stack: ["Java", "REST API", "JavaScript"],
    label: "Team Operations",
    gradient: "linear-gradient(135deg, rgba(25, 169, 255, 0.22), rgba(39, 217, 194, 0.24))",
    github: "https://github.com/kitty195",
    live: "https://example.com/",
  },
  {
    title: "E-Commerce Inventory Core",
    description:
      "A backend-first inventory system that prevents overselling, centralizes product status, and supports smoother storefront operations.",
    stack: ["Spring Boot", "SQL", "NoSQL"],
    label: "Commerce Logic",
    gradient: "linear-gradient(135deg, rgba(39, 217, 194, 0.2), rgba(16, 91, 134, 0.34))",
    github: "https://github.com/kitty195",
    live: "https://example.com/",
  },
  {
    title: "Portfolio Insight Platform",
    description:
      "A modern showcase experience that presents technical work, writing, and contact pathways with a clean, accessible interface.",
    stack: ["TypeScript", "Responsive UI", "Accessibility"],
    label: "Personal Brand",
    gradient: "linear-gradient(135deg, rgba(25, 169, 255, 0.18), rgba(88, 118, 255, 0.26))",
    github: "https://github.com/kitty195",
    live: "https://example.com/",
  },
];

const articles = [
  {
    title: "Why I Prefer Clean Service Boundaries",
    date: "May 2026",
    snippet:
      "A short note on keeping APIs predictable, reducing coupling, and making backend systems easier to evolve over time.",
    link: "https://example.com/",
  },
  {
    title: "Designing Interfaces That Stay Fast on Mobile",
    date: "April 2026",
    snippet:
      "A practical look at layout decisions, performance tradeoffs, and how to keep interaction design responsive under constraint.",
    link: "https://example.com/",
  },
  {
    title: "Lessons From Building Full-Stack Projects End-to-End",
    date: "March 2026",
    snippet:
      "What changed when backend structure, frontend polish, and deployment thinking started to share the same roadmap.",
    link: "https://example.com/",
  },
];

const projectGrid = document.getElementById("projects-grid");
const articleGrid = document.getElementById("articles-grid");
const contactForm = document.getElementById("contact-form");

const icon = {
  github: '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><use href="#icon-github"></use></svg>',
  live: '<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><use href="#icon-link"></use></svg>',
};

function createProjectCard(project) {
  return `
    <article class="project-card reveal">
      <div class="project-card__visual" style="--project-gradient: ${project.gradient};">
        <span class="project-card__label">${project.label}</span>
      </div>
      <div class="project-card__body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-card__tags">
          ${project.stack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>
        <div class="project-card__links">
          <a class="icon-link" href="${project.github}" target="_blank" rel="noreferrer">
            ${icon.github}
            GitHub Repository
          </a>
          <a class="icon-link" href="${project.live}" target="_blank" rel="noreferrer">
            ${icon.live}
            Live Demo
          </a>
        </div>
      </div>
    </article>
  `;
}

function createArticleCard(article) {
  return `
    <article class="article-card reveal">
      <div class="article-card__body">
        <div class="article-card__meta">
          <span>Technical Writing</span>
          <time>${article.date}</time>
        </div>
        <h3>${article.title}</h3>
        <p>${article.snippet}</p>
        <a class="article-card__link" href="${article.link}" target="_blank" rel="noreferrer">Read More</a>
      </div>
    </article>
  `;
}

if (projectGrid) {
  projectGrid.innerHTML = projects.map(createProjectCard).join("");
}

if (articleGrid) {
  articleGrid.innerHTML = articles.map(createArticleCard).join("");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const recipient = contactForm.getAttribute("action")?.replace("mailto:", "") || "mukeshchinnadurai13@gmail.com";
    const subject = encodeURIComponent(formData.get("subject")?.toString() || "Portfolio inquiry");
    const body = encodeURIComponent(
      [
        `Name: ${formData.get("name") || ""}`,
        `Email: ${formData.get("email") || ""}`,
        "",
        `${formData.get("message") || ""}`,
      ].join("\n")
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
