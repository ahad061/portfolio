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
let allProjects = [];

fetch("content/projects.json")
  .then((res) => res.json())
  .then((data) => {
    const grid = document.getElementById("projectGrid");
    if (!grid) return;

    allProjects = data.projects || [];

    if (allProjects.length === 0) {
      grid.innerHTML =
        '<p class="muted-note">Projects coming soon — add them from /admin</p>';
      return;
    }

    grid.innerHTML = allProjects
      .map(
        (p, i) => `
      <div class="project-card" data-index="${i}">
        <div class="project-img">
          <img src="${p.image}" alt="${p.title}" />
        </div>
        <div class="project-info">
          <h3>${p.title}</h3>
          <button class="see-more-btn" data-index="${i}">See More →</button>
        </div>
      </div>
    `,
      )
      .join("");

    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", () => {
        openProjectOverlay(parseInt(card.getAttribute("data-index"), 10));
      });
    });
  })
  .catch((err) => console.error("Could not load projects:", err));

// ===== Project detail overlay (page-in-page animation) =====
const overlay = document.getElementById("projectOverlay");
const overlayImg = document.getElementById("overlayImg");
const overlayTitle = document.getElementById("overlayTitle");
const overlayDesc = document.getElementById("overlayDesc");
const overlayLink = document.getElementById("overlayLink");
const overlayClose = document.getElementById("overlayClose");

function openProjectOverlay(index) {
  const p = allProjects[index];
  if (!p || !overlay) return;

  overlayImg.innerHTML = `<img src="${p.image}" alt="${p.title}" />`;
  overlayTitle.textContent = p.title;
  overlayDesc.textContent = p.description;
  overlayLink.href = p.link || "#";

  overlay.classList.add("open");
  document.body.classList.add("overlay-locked");
}

function closeProjectOverlay() {
  overlay.classList.remove("open");
  document.body.classList.remove("overlay-locked");
}

if (overlayClose) overlayClose.addEventListener("click", closeProjectOverlay);
if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeProjectOverlay();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProjectOverlay();
});
