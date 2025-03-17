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


document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("bg-music");
    let toggleMusicBtn = document.getElementById("toggle-music");
    let musicIcon = document.getElementById("music-icon");

    // ვცდილობთ ავტომატურად ჩავრთოთ მუსიკა საიტის გახსნისას
    function tryAutoplay() {
        audio.play().then(() => {
            musicIcon.src = "icon/pause.png"; // ღილაკის შეცვლა "Pause"-ზე
        }).catch(error => {
            console.log("Autoplay დაბლოკილია, მომხმარებელმა უნდა დააჭიროს ღილაკს");
            document.body.addEventListener("click", playAudio, { once: true });
        });
    }

    // მუსიკის ჩართვა ღილაკზე დაჭერისას
    function playAudio() {
        audio.play();
        musicIcon.src = "icon/pause.png";
    }

    // ღილაკზე დაჭერისას - მუსიკის პაუზა ან გაგრძელება
    toggleMusicBtn.addEventListener("click", () => {
        if (audio.paused) {
            playAudio();
        } else {
            audio.pause();
            musicIcon.src = "icon/audiobook.png";
        }
    });

    // ვცდილობთ ავტომატურად ჩავრთოთ მუსიკა
    tryAutoplay();
});


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".question").forEach(question => {
        question.addEventListener("click", () => {
            let answer = question.nextElementSibling; // პასუხის პოვნა
            if (answer) {
                answer.classList.toggle("hidden"); // პასუხის ჩვენება/დამალვა
                answer.style.display = answer.classList.contains("hidden") ? "none" : "block";
            }
        });
    });
});
