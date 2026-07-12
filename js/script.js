// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Mobile menu toggle =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== Animated stat counters =====
const statNums = document.querySelectorAll(".stat-num");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function animateCount(el) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  if (prefersReducedMotion) {
    el.textContent = target;
    return;
  }
  let current = 0;
  const duration = 900;
  const stepTime = Math.max(Math.floor(duration / target), 30);
  const timer = setInterval(() => {
    current += 1;
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, stepTime);
}

const statObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

statNums.forEach((el) => statObserver.observe(el));

// ===== Reveal-on-scroll for sections =====
const revealTargets = document.querySelectorAll(
  ".tl-item, .skill-chip, .work-card, .edu-card, .contact-card",
);

revealTargets.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

if (!prefersReducedMotion) {
  revealTargets.forEach((el) => revealObserver.observe(el));
} else {
  revealTargets.forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}
// ===== Load projects from CMS-managed JSON =====
fetch("content/projects.json")
  .then((res) => res.json())
  .then((data) => {
    const grid = document.getElementById("projectGrid");
    if (!grid) return;

    const projects = data.projects || [];

    if (projects.length === 0) {
      grid.innerHTML =
        '<p class="muted-note">Projects coming soon — add them from /admin</p>';
      return;
    }

    grid.innerHTML = projects
      .map(
        (p) => `
      <a class="project-card" href="${p.link || "#"}" target="_blank" rel="noopener">
        <div class="project-img">
          <img src="${p.image}" alt="${p.title}" />
        </div>
        <div class="project-info">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>
      </a>
    `,
      )
      .join("");
  })
  .catch((err) => console.error("Could not load projects:", err));
