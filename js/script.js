/* ============================================================
   PORTFOLIO JAVASCRIPT
   ------------------------------------------------------------
   MOST IMPORTANT:
   Edit the "portfolioData", "certifications", and "projects"
   sections below. The rest of this file powers the interactions.
   ============================================================ */

/* ============================================================
   1. PERSONAL DATA — CHANGE THIS
   ============================================================ */
const portfolioData = {
  name: "Jason Patrick Limanto",
  role: "IT Student | Multi-Certified Network Engineer",
  intro: "Welcome to my personal portfolio. Explore my skills, certifications, projects, and the things I am passionate about.",
  email: "jasonpatrickl1202@gmail.com",
  linkedin: "https://www.linkedin.com/in/jasonpatrickl",
  about: "I am an Undergraduate Computer Science student with a strong interest in computer networking and IT infrastructure. "+
  "I enjoy exploring how technology keeps evolving, developing my technical knowledge, and continuously turning what "+
  "I learn into practical skills.",
  tags: ["Adaptability", "Team Collaboration","Cross-Functional Teamwork", "Problem Solving","Logical Reasoning",
     "Creative", "Continuous Learning","Growth Mindset"]
};

/* ============================================================
   2. CERTIFICATIONS — CHANGE / ADD YOUR CERTIFICATES HERE
   ------------------------------------------------------------
   Each certification has 3 images.
   Clicking the image changes A → B → C → A.
   Add another object { ... } to create more certificates.
   The first 3 are displayed as cards.
   A built-in 4th "..." card opens the full certification library.
   ============================================================ */
const certifications = [
  {
    title: "MTCRE",
    fullTitle: "MikroTik Certified Routing Engineer",
    date: "July 2026",
    issuer: "MikroTik",
    images: [
      "assets/certifications/cert1-a.webp",
      "assets/certifications/cert1-b.webp",
      "assets/certifications/cert1-c.webp"
    ],
    description: "The MikroTik Certified Routing Engineer (MTCRE) is an advanced certification course that teaches network engineers"+ 
    "how to design, configure, and troubleshoot complex routed networks using MikroTik RouterOS.",
    tags: ["MikroTik", "Routing", "OSPF"]
  },
  {
    title: "Fortinet NSE 1",
    fullTitle: "Fortinet Network Security Expert 1",
    date: "Sept 2026",
    issuer: "Fortinet",
    images: [
      "assets/certifications/cert2-a.webp",
      "assets/certifications/cert2-b.webp",
      "assets/certifications/cert2-c.webp"
    ],
    description: "Fortinet NSE 1 in Cybersecurity is an entry-level foundational certification that provides a basic understanding of"+
    "today's threat landscape and core cybersecurity concepts.",
    tags: ["Fortinet", "Network Security", "Cyber Security"]
  },
  {
    title: "MTCNA",
    fullTitle: "MikroTik Certified Network Associate",
    date: "Dec 2025",
    issuer: "MikroTik",
    images: [
      "assets/certifications/cert3-a.webp",
      "assets/certifications/cert3-b.webp",
      "assets/certifications/cert3-c.webp"
    ],
    description: "The MikroTik Certified Network Associate (MTCNA) is an entry-level certification course that teaches basic"+
    "MikroTik RouterOS software and RouterBOARD hardware configuration, management, and troubleshooting.",
    tags: ["MikroTik", "Networking", "RouterOS"]
  },
  {
    title: "KISI Monthly Education",
    fullTitle: "Korea Investment & Sekuritas Indonesia Offline Education",
    date: "Sept 2026",
    issuer: "PT Korea Investment & Sekuritas Indonesia",
    images: [
      "assets/certifications/cert4-a.webp",
      "assets/certifications/cert4-b.webp",
      "assets/certifications/cert4-c.webp"
    ],
    description: "Attended the monthly education seminar hosted by PT Korea Investment and Sekuritas Indonesia (KISI). "+
    "The session provided deep insights into current market conditions and Indonesian stock market (IHSG) investment strategies.",
    tags: ["Finance", "Investment", "Saham"]
  },
  {
  title: "Internship at Dharlist Studio",
  fullTitle: "Photo & Video Specialist Intern at Dharlist Studio Rembang",
  date: "Feb - May 2023",
  issuer: "Dharlist Studio Rembang",
  images: [
    "assets/certifications/cert5-a.webp",
    "assets/certifications/cert5-b.webp",
    "assets/certifications/cert5-c.webp"
  ],
  description: "Served as an end-to-end Photo & Video Specialist during a 3-month internship. " +
               "Managed client relations, produced multimedia content using Adobe Photoshop and Premiere Pro, " +
               "and handled digital asset printing operations while achieving official competency certification.",
  tags: ["Multimedia", "Photography", "Internship"]
  },
  {
    title: "IBM SkillsBuild Certificate & Student Transcript",
    fullTitle: "Certificate of Accomplishment and Student Transcript for IBM SkillsBuild University Education: IT - AI Agent "+
    "for Programming",
    date: "July 2026",
    issuer: "IBM SkillsBuild x Hacktiv 8",
    images: [
      "assets/certifications/cert6-a.webp",
      "assets/certifications/cert6-b.webp",
      "assets/certifications/cert6-c.webp"
    ],
    description: "This document consists of a Certificate of Accomplishment and a Student Transcript issued to Jason Patrick Limanto "+
    "for successfully completing the IBM SkillsBuild University Education program, specifically the IT - AI Agent for Programming course.",
    tags: ["IBMSkillsBuild", "Hacktiv8", "AIAgent"]
  }
  
  /* EXAMPLES FOR FUTURE CERTIFICATIONS:
  {
    title: "Certification..",
    fullTitle: "Full Certification Name",
    date: "2027",
    issuer: "Issuer",
    images: [
      "assets/certifications/cert5-a.jpg",
      "assets/certifications/cert5-b.jpg",
      "assets/certifications/cert5-c.jpg"
    ],
    description: "Description...",
    tags: ["Skill", "Technology"]
  }
  */
];

/* ============================================================
   3. PROJECTS — CHANGE / ADD YOUR PROJECTS HERE
   ------------------------------------------------------------
   Every project can have:
   - 1 preview image
   - 1 short MP4/MOV video
   - description
   - tags
   The first 3 are displayed as cards.
   A built-in 4th "..." card opens the full project library.
   ============================================================ */
const projects = [
  {
    title: "Network Home Lab",
    category: "Networking",
    image: "assets/projects/project1.jpg",
    video: "assets/projects/project1.mp4",
    description: "A dedicated home laboratory built to simulate, configure, and test complex network topologies. "+
    "This project highlights hands-on experience with MikroTik, Huawei, and TP-Link hardware, covering advanced routing protocols, "+
    "network segmentation, and security optimization.",
    tags: ["MikroTik", "Huawei", "Network", "Home Lab"]
  },
  {
    title: "Build an AI Agent with Langflow",
    category: "AI Agent",
    image: "assets/projects/project2.webp",
    video: "assets/projects/project2.mp4",
    description: "A comprehensive AI agent training program by IBM SkillsBuild and Hacktiv8. Built an end-to-end AI prototype utilizing "+
    "Large Language Models (LLMs) and automated workflows, achieving a final project score of 91.15.",
    tags: ["AI Agent", "LLM", "IBM SkillsBuild", "Hacktiv8"]
  },
  {
    title: "Sumba Residence Landing Page",
    category: "Web Design",
    image: "assets/projects/project3.png",
    video: "assets/projects/project3.mp4",
    description: "A modern and responsive landing page for Sumba Residence, the first luxury cluster housing project in "+
    "Southwest Sumba, NTT. Built with HTML5 and CSS3 to showcase property details, location highlights, and seamless contact options via "+ 
    "WhatsApp for potential buyers.",
    tags: ["HTML5", "CSS3", "JavaScript", "VSCode"]
  },
  /* EXAMPLE FOR FUTURE PROJECTS:
  ,
  {
    title: "Project 4",
    category: "Category",
    image: "assets/projects/project4.jpg",
    video: "assets/projects/project4.mp4",
    description: "Project description...",
    tags: ["HTML", "CSS"]
  }
  */
];

/* ============================================================
   4. BASIC DOM SETUP
   ============================================================ */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", () => {
  applyPortfolioData();
  renderCertifications();
  renderProjects();
  renderLibraries();
  setupNavigation();
  setupTheme();
  setupRevealAnimations();
  setupCursorEffect();
  setupProjectTilt();
  setupModals();
  setupPageTransitions();
  $("#currentYear").textContent = new Date().getFullYear();
});

/* ============================================================
   5. APPLY PERSONAL DATA TO HTML
   ============================================================ */
function applyPortfolioData() {
  $("#heroName").textContent = portfolioData.name;
  $("#heroRole").textContent = portfolioData.role;
  $("#heroIntro").textContent = portfolioData.intro;
  $("#aboutText").textContent = portfolioData.about;
  $("#footerName").textContent = portfolioData.name;

  const emailLink = $("#emailLink");
  const linkedinLink = $("#linkedinLink");

  emailLink.href = `mailto:${portfolioData.email}`;
  linkedinLink.href = portfolioData.linkedin;

  const tags = $("#aboutTags");
  tags.innerHTML = portfolioData.tags
    .map(tag => `<span>${escapeHTML(tag)}</span>`)
    .join("");

  document.title = `Portfolio | ${portfolioData.name}`;
}

/* ============================================================
   6. CERTIFICATION CARDS
   ============================================================ */
function renderCertifications() {
  const grid = $("#certGrid");
  const featured = certifications.slice(0, 3);

  const cards = featured.map((cert, index) => `
    <article class="cert-card reveal" data-cert-index="${index}">
      <div class="cert-media media-click" data-cert-index="${index}" title="Click to change certificate image">
        <img src="${cert.images[0]}" alt="${escapeHTML(cert.title)} certificate"
             onerror="handleImageError(this, '${escapeHTML(cert.title)}')">
        <div class="media-counter">01 / 03 • CLICK</div>
      </div>
      <div class="card-body">
        <span class="card-kicker">${escapeHTML(cert.issuer)}</span>
        <h3>${escapeHTML(cert.title)}</h3>
        <p>${escapeHTML(cert.description)}</p>
        <div class="card-meta">
          <span>${escapeHTML(cert.fullTitle)}</span>
          <span>${escapeHTML(cert.date)}</span>
        </div>
      </div>
    </article>
  `).join("");

  const moreCard = `
    <button class="gallery-more-card reveal" id="certMoreCard" type="button" aria-label="Open certification library">
      <span class="more-dots">•••</span>
      <strong>More certifications & activities</strong>
      <small>Explore the full collection of my milestones</small>
      <span class="more-arrow">↗</span>
    </button>
  `;

  grid.innerHTML = cards + moreCard;
  setupCertificateSliders();
  $("#certMoreCard").addEventListener("click", () => openModal($("#certLibraryModal")));
}

/* Image error: show a useful placeholder without breaking layout */
function handleImageError(img, label) {
  img.style.display = "none";
  const parent = img.parentElement;
  if (!parent.querySelector(".media-placeholder")) {
    const placeholder = document.createElement("div");
    placeholder.className = "media-placeholder";
    placeholder.innerHTML = `<div><strong>${escapeHTML(label)}</strong><small>Replace image in assets/certifications</small></div>`;
    parent.appendChild(placeholder);
  }
}

/* Clicking each certification cycles A → B → C → A */
function setupCertificateSliders() {
  $$(".media-click").forEach(media => {
    let current = 0;
    const certIndex = Number(media.dataset.certIndex);
    const cert = certifications[certIndex];
    const image = $("img", media);
    const counter = $(".media-counter", media);

    media.addEventListener("click", () => {
      current = (current + 1) % cert.images.length;

      image.style.opacity = "0";
      setTimeout(() => {
        image.src = cert.images[current];
        image.style.opacity = "1";
        counter.textContent = `${String(current + 1).padStart(2, "0")} / ${cert.images.length} • CLICK`;
      }, 130);
    });
  });
}

/* ============================================================
   7. PROJECT CARDS
   ============================================================ */
function renderProjects() {
  const grid = $("#projectGrid");
  const featured = projects.slice(0, 3);

  const cards = featured.map((project, index) => projectCardHTML(project, index)).join("");
  const moreCard = `
    <button class="gallery-more-card reveal" id="projectMoreCard" type="button" aria-label="Open project library">
      <span class="more-dots">•••</span>
      <strong>More Projects</strong>
      <small>Explore the full gallery of my work</small>
      <span class="more-arrow">↗</span>
    </button>
  `;

  grid.innerHTML = cards + moreCard;
  $("#projectMoreCard").addEventListener("click", () => openModal($("#projectLibraryModal")));
}

function projectCardHTML(project, index) {
  return `
    <article class="project-card reveal" data-project-index="${index}" tabindex="0"
             role="button" aria-label="Open ${escapeHTML(project.title)} details">
      <div class="tilt-shine"></div>
      <div class="project-media">
        <img class="video-fallback" src="${project.image}" alt="${escapeHTML(project.title)} preview"
             onerror="handleProjectImageError(this, '${escapeHTML(project.title)}')">
        <video muted loop playsinline preload="metadata" poster="${project.image}">
          <source src="${project.video}" type="video/mp4">
        </video>
        <div class="project-overlay">
          <span>${escapeHTML(project.category)}</span>
          <span>Open ↗</span>
        </div>
      </div>
      <div class="card-body">
        <span class="card-kicker">Project ${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        <div class="card-meta">
          <span>${project.tags.slice(0, 3).map(escapeHTML).join(" · ")}</span>
          <span>Details ↗</span>
        </div>
      </div>
    </article>
  `;
}

function handleProjectImageError(img, label) {
  img.style.display = "none";
  const media = img.parentElement;
  const placeholder = document.createElement("div");
  placeholder.className = "media-placeholder";
  placeholder.innerHTML = `<div><strong>${escapeHTML(label)}</strong><small>Add image/video in assets/projects</small></div>`;
  media.insertBefore(placeholder, media.firstChild);
}

/* Open project detail when card is clicked */
function setupProjectClickEvents() {
  $$(".project-card").forEach(card => {
    const open = () => openProjectDetail(Number(card.dataset.projectIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });

    const video = $("video", card);
    if (video) {
      card.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
      });
      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
}

/* ============================================================
   8. PROJECT 3D TILT EFFECT
   ------------------------------------------------------------
   Lightweight mouse-based effect. Change maxTilt if you want
   a stronger/weaker movement.
   ============================================================ */
function setupProjectTilt() {
  const maxTilt = 8;

  const activate = () => {
    $$(".project-card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * maxTilt * 2;
        const rotateX = ((y / rect.height) - .5) * -maxTilt * 2;

        card.style.transform =
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-7px)`;

        const shine = $(".tilt-shine", card);
        if (shine) {
          shine.style.setProperty("--mx", `${x}px`);
          shine.style.setProperty("--my", `${y}px`);
        }
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });

    setupProjectClickEvents();
  };

  /* Cards are rendered before this function on DOMContentLoaded. */
  activate();
}

/* ============================================================
   9. LIBRARIES ("...")
   ------------------------------------------------------------ */
function renderLibraries() {
  renderCertLibrary();
  renderProjectLibrary();
}

function renderCertLibrary() {
  const library = $("#certLibraryGrid");
  const others = certifications.slice(3);

  if (!others.length) {
    library.innerHTML = `
      <div class="library-item">
        <h3>More coming soon..</h3>
        <p> Stay tuned guys!</p>
      </div>`;
    return;
  }

  library.innerHTML = others.map((cert, offset) => {
    const index = offset + 3;
    return `
      <article class="cert-card" data-cert-index="${index}" style="opacity:1;transform:none;">
        <div class="cert-media media-click-library" data-cert-library-index="${index}" title="Click to change certificate image">
          <img src="${cert.images[0]}" alt="${escapeHTML(cert.title)} certificate"
               onerror="handleImageError(this, '${escapeHTML(cert.title)}')">
          <div class="media-counter">01 / 0${cert.images.length} • CLICK</div>
        </div>
        <div class="card-body">
          <span class="card-kicker">${escapeHTML(cert.issuer)}</span>
          <h3>${escapeHTML(cert.title)}</h3>
          <p>${escapeHTML(cert.description)}</p>
          <div class="card-meta">
            <span>${escapeHTML(cert.fullTitle)}</span>
            <span>${escapeHTML(cert.date)}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  /* Setup image cycling A → B → C → A for library cards */
  $$(".media-click-library", library).forEach(media => {
    let current = 0;
    const certIndex = Number(media.dataset.certLibraryIndex);
    const cert = certifications[certIndex];
    const image = $("img", media);
    const counter = $(".media-counter", media);

    media.addEventListener("click", () => {
      current = (current + 1) % cert.images.length;
      image.style.opacity = "0";
      setTimeout(() => {
        image.src = cert.images[current];
        image.style.opacity = "1";
        counter.textContent = `${String(current + 1).padStart(2, "0")} / ${cert.images.length} • CLICK`;
      }, 130);
    });
  });
}

function renderProjectLibrary() {
  const library = $("#projectLibraryGrid");
  const others = projects.slice(3);

  if (!others.length) {
    library.innerHTML = `
      <div class="library-item">
        <h3>More coming soon..</h3>
        <p>Stay tuned guys!</p>
      </div>`;
    return;
  }

  library.innerHTML = others.map((project, offset) => {
    const index = offset + 3;
    return `
      <div class="library-item" data-project-library-index="${index}">
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.category)} · Click for details</p>
      </div>
    `;
  }).join("");

  $$("[data-project-library-index]", library).forEach(item => {
    item.addEventListener("click", () => {
      closeAllModals();
      openProjectDetail(Number(item.dataset.projectLibraryIndex));
    });
  });
}

/* showCertificatePreview removed — library now renders full cert-cards directly */

/* ============================================================
   10. PROJECT DETAIL MODAL
   ============================================================ */
function openProjectDetail(index) {
  const project = projects[index];
  if (!project) return;

  const content = $("#projectDetailContent");

  content.innerHTML = `
    <p class="eyebrow">${escapeHTML(project.category)}</p>
    <h2>${escapeHTML(project.title)}</h2>
    <div class="detail-media">
      <video controls muted loop playsinline poster="${project.image}">
        <source src="${project.video}" type="video/mp4">
        Your browser does not support video playback.
      </video>
    </div>
    <div class="detail-content">
      <p class="detail-description">${escapeHTML(project.description)}</p>
      <div class="detail-list">
        ${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}
      </div>
    </div>
  `;

  openModal($("#projectDetailModal"));
}

/* ============================================================
   11. NAVIGATION + SCROLL
   ============================================================ */
function setupNavigation() {
  const navbar = $("#navbar");
  const navLinks = $("#navLinks");
  const menuToggle = $("#menuToggle");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    updateActiveNavigation();
  }, { passive: true });

  $$("#navLinks a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  $$("[data-scroll]").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();

      const target = $(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  updateActiveNavigation();
}

function updateActiveNavigation() {
  const sections = $$("main .section");
  let current = "home";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * .35 && rect.bottom >= window.innerHeight * .35) {
      current = section.id;
    }
  });

  $$(".nav-links a").forEach(link => {
    link.classList.toggle("active", link.dataset.nav === current);
  });
}

/* ============================================================
   12. DARK / LIGHT MODE
   ------------------------------------------------------------ */
function setupTheme() {
  const button = $("#themeToggle");
  const saved = localStorage.getItem("portfolio-theme");

  if (saved === "dark") document.body.classList.add("dark");

  updateThemeIcon();

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "portfolio-theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  $("#themeToggle .theme-icon").textContent =
    document.body.classList.contains("dark") ? "☀" : "☾";
}

/* ============================================================
   13. FADE-IN ON SCROLL
   ------------------------------------------------------------ */
function setupRevealAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  $$(".reveal").forEach(el => observer.observe(el));
}

/* ============================================================
   14. CURSOR FOLLOW EFFECT
   ------------------------------------------------------------ */
function setupCursorEffect() {
  const glow = $(".cursor-glow");
  if (!glow) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let targetX = x;
  let targetY = y;

  window.addEventListener("mousemove", e => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    x += (targetX - x) * .12;
    y += (targetY - y) * .12;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    requestAnimationFrame(animate);
  }

  animate();
}

/* ============================================================
   15. MODALS
   ============================================================ */
function setupModals() {

  setupModalCloseButtons();

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAllModals();
  });
}

function setupModalCloseButtons() {
  $$("[data-close-modal]").forEach(button => {
    button.onclick = closeAllModals;
  });
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeAllModals() {
  $$(".modal.open").forEach(modal => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("modal-open");
}

/* ============================================================
   16. PAGE TRANSITION
   ------------------------------------------------------------
   Internal anchor navigation stays smooth.
   External navigation gets a short fade/transition.
   ============================================================ */
function setupPageTransitions() {
  $$("a[target='_blank']").forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.add("is-leaving");
      setTimeout(() => document.body.classList.remove("is-leaving"), 550);
    });
  });
}

/* ============================================================
   17. SAFETY / TEXT HELPERS
   ============================================================ */
function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}