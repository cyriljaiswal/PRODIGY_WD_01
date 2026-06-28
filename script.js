// Navbar interactivity — scroll-based style change + mobile toggle
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

const SCROLL_THRESHOLD = 60;

function handleScroll() {
  if (window.scrollY > SCROLL_THRESHOLD) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

function toggleMobileMenu() {
  navLinks.classList.toggle("open");
}

function closeMobileMenuOnLinkClick() {
  navLinks.classList.remove("open");
}

window.addEventListener("scroll", handleScroll);
navToggle.addEventListener("click", toggleMobileMenu);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMobileMenuOnLinkClick);
});

// Run once on load in case the page is already scrolled (e.g. on refresh)
handleScroll();
