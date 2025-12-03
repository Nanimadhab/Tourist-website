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

// alert
// domestic
function openAlert() {
  document.getElementById("customAlert").classList.add("show");
}
function closeAlert() {
  document.getElementById("customAlert").classList.remove("show");
}
//  HIMACHAL
function HIMACHAL() {
  document.getElementById("HIMACHAL").classList.add("show");
}
function closehimachal() {
  document.getElementById("HIMACHAL").classList.remove("show");
}
// KASHMIR
function KASHMIR() {
  document.getElementById("KASHMIR").classList.add("show");
}
function closeKASHMIR() {
  document.getElementById("KASHMIR").classList.remove("show");
}
// RAJASTHAN
function RAJASTHAN() {
  document.getElementById("RAJASTHAN").classList.add("show");
}
function closeRAJASTHAN() {
  document.getElementById("RAJASTHAN").classList.remove("show");
}

// international
// NEPAL
function NEPAL() {
  document.getElementById("NEPAL").classList.add("show");
}
function closeNEPAL() {
  document.getElementById("NEPAL").classList.remove("show");
}

// BHUTAN
function BHUTAN() {
  document.getElementById("BHUTAN").classList.add("show");
}
function closeBHUTAN() {
  document.getElementById("BHUTAN").classList.remove("show");
}

// BEST OF THAILAND - 9 Days
function THAILAND() {
  document.getElementById("THAILAND").classList.add("show");
}
function closeTHAILAND() {
  document.getElementById("THAILAND").classList.remove("show");
}
// VIETNAM
function VIETNAM() {
  document.getElementById("VIETNAM").classList.add("show");
} 
function closeVIETNAM() {
  document.getElementById("VIETNAM").classList.remove("show");
}
