// Highlight the current section's nav link as you scroll
const sections = document.querySelectorAll(".section, .hero");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#4c8dff";
    }
  });
}

window.addEventListener("scroll", updateActiveLink);