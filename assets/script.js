document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Replace with YOUR WhatsApp number (with country code, without + or 0)
  let whatsappNumber = "916290988781"; // Example: India +91 1234567890

  let url =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    "*New Contact Form Submission*%0A%0A" +
    "*Name:* " +
    name +
    "%0A" +
    "*Phone:* " +
    phone +
    "%0A" +
    "*Email:* " +
    email +
    "%0A" +
    "*Subject:* " +
    subject +
    "%0A" +
    "*Message:* " +
    message;

  window.open(url, "_blank").focus();
});

// End of script.js
// slide hero section <script>
document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.querySelector(".hero-video");
  const nextBtn = document.querySelector(".chenging-right");
  const prevBtn = document.querySelector(".chenging-left");

  // 🎥 List of video files (you can add more)
  const videos = [
    "assets/video/background1.mp4",
    "assets/video/background2.mp4",
    "assets/video/background3.mp4",
  ];

  let currentIndex = 0;

  // Function to change video
  function changeVideo(index) {
    if (index < 0) currentIndex = videos.length - 1;
    else if (index >= videos.length) currentIndex = 0;
    else currentIndex = index;

    // Smooth fade-out effect
    videoElement.classList.add("fade-out");
    setTimeout(() => {
      videoElement.src = videos[currentIndex];
      videoElement.load();
      videoElement.play();
      videoElement.classList.remove("fade-out");
    }, 400);
  }

  // Click event listeners
  nextBtn.addEventListener("click", () => changeVideo(currentIndex + 1));
  prevBtn.addEventListener("click", () => changeVideo(currentIndex - 1));

  // ✅ Optional: Auto slide every 8 seconds
});
