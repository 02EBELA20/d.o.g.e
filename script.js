/* script.js */
window.addEventListener("scroll", function() {
  document.querySelector(".moving-text").style.transform = 
      `translateX(${window.scrollY * -0.5}px)`;
});




document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".meme-slide");
  const totalSlides = slides.length;
  let currentIndex = 0;
  const angle = 360 / totalSlides;

  function updateCarousel() {
      slides.forEach((slide, index) => {
          const rotation = angle * (index - currentIndex);
          slide.style.transform = `rotateY(${rotation}deg) translateZ(300px)`;
          slide.style.opacity = index === currentIndex ? "1" : "0.5";

          if (index === currentIndex) {
              slide.classList.add("active");
          } else {
              slide.classList.remove("active");
          }
      });
  }

  document.getElementById("next-btn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
  });

  document.getElementById("prev-btn").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
  });

  updateCarousel();
});

document.getElementById("toggle-music").addEventListener("click", function () {
    let audio = document.getElementById("bg-music");

    if (audio.paused) {
        audio.play().catch(error => console.log("Error playing audio:", error));
    } else {
        audio.pause();
    }
});


document.getElementById("toggle-mobile").addEventListener("click", function () {
    let audio = document.getElementById("bg-music");

    if (audio.paused) {
        audio.play().catch(error => console.log("Error playing audio:", error));
    } else {
        audio.pause();
    }
});
