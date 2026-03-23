const navigation = document.querySelector(".navigation");
const menuToggle = document.querySelector(".navigation__menu-toggle");
const navLinks = document.querySelector(".navigation__links");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.hasAttribute("data-open");
  if (isOpen) {
    navigation.removeAttribute("data-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  } else {
    navigation.setAttribute("data-open", "");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.textContent = "Close";
  }
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.removeAttribute("data-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  });
});
