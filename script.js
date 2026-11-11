const pages = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");

function showPage(pageId) {
  const target = document.getElementById(pageId);
  if (!target) return;
  pages.forEach(page => page.classList.toggle("active", page.id === pageId));
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.page === pageId));
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach(control => {
  control.addEventListener("click", () => showPage(control.dataset.page));
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
