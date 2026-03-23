document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.modal).showModal();
  });
});

document.querySelectorAll(".class-modal").forEach((modal) => {
  modal.querySelector(".class-modal__close").addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
});
