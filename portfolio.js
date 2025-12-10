// Lightbox functionality
const cards = document.querySelectorAll(".project-card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxTitle = document.querySelector(".lightbox-title");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = card.dataset.img;
    lightboxTitle.textContent = card.dataset.title;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});
