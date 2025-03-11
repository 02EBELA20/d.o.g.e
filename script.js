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




document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".meme-slide");
    const totalSlides = slides.length;
    let currentIndex = 0;
    const angle = 360 / totalSlides;
    const audio = document.getElementById("bg-music");
    const questions = document.querySelectorAll(".question");
    const answers = document.querySelectorAll(".answer");
    const toggleMusicBtn = document.getElementById("toggle-music");
  
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
  
    // Auto-play background music
    if (audio) {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
  
    // Toggle play/pause when clicking the audiobook icon
    toggleMusicBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.log("Error playing audio:", error));
        } else {
            audio.pause();
        }
    });
  
    // Q&A Toggle
    questions.forEach((question, index) => {
        question.addEventListener("click", function () {
            answers.forEach((answer, i) => {
                if (i === index) {
                    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
                    answer.style.opacity = answer.style.opacity === "1" ? "0" : "1";
                } else {
                    answer.style.maxHeight = null;
                    answer.style.opacity = "0";
                }
            });
        });
    });
  });