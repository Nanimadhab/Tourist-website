
// Sidebar toggle
const bars = document.getElementById("bars");
const closeBtn = document.getElementById("close");
const navSection = document.getElementById("nav-section");

bars.addEventListener("click", () => {
  navSection.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navSection.classList.remove("active");
});

// ratting
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".sli");
  const slides = document.querySelectorAll(".ratteing-con");
  const nextBtn = document.querySelector(".arro-right");
  const prevBtn = document.querySelector(".arro-left");

  let index = 0;

  function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;
    slider.style.transform = `translateX(-${index * 92}%)`;
  }

  nextBtn.addEventListener("click", () => showSlide(index + 1));
  prevBtn.addEventListener("click", () => showSlide(index - 1));
});
