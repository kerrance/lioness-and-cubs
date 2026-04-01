const aboutContent = document.querySelector(".about__content");
const readMoreBtn = document.querySelector(".about__read-more");

readMoreBtn.addEventListener("click", () => {
  const isCollapsed = aboutContent.hasAttribute("data-collapsed");
  if (isCollapsed) {
    aboutContent.removeAttribute("data-collapsed");
    readMoreBtn.textContent = "Read less";
    readMoreBtn.setAttribute("aria-expanded", "true");
  } else {
    aboutContent.setAttribute("data-collapsed", "");
    readMoreBtn.textContent = "Read more";
    readMoreBtn.setAttribute("aria-expanded", "false");
  }
});
