/* script.js */
window.addEventListener("scroll", function() {
  document.querySelector(".moving-text").style.transform = 
      `translateX(${window.scrollY * -0.5}px)`;
});