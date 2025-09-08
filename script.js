// Rotating animated subtitle on homepage
document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "Inspiring Leader",
    "Public Speaker",
    "Volunteer",
    "Agri-Tech Enthusiast",
    "Writer"
  ];
  let index = 0;
  const element = document.querySelector(".animated-text");

  function changeText() {
    element.textContent = texts[index];
    index = (index + 1) % texts.length;
  }

  setInterval(changeText, 2000);
  changeText(); // initial call
});
