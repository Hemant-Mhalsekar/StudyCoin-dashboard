// Animate progress bar
window.addEventListener("load", () => {
  const progress = document.getElementById("progress-fill");
  setTimeout(() => {
    progress.style.width = "75%";
  }, 500);
});

// Button micro-interaction
const button = document.getElementById("cta-btn");
button.addEventListener("click", () => {
  button.textContent = "Keep Going!";
  button.style.background = "linear-gradient(90deg, #64ffda, #00bfa5)";
  button.style.boxShadow = "0 6px 18px rgba(0, 191, 165, 0.5)";
  setTimeout(() => {
    button.textContent = "Continue Learning";
    button.style.background = "linear-gradient(90deg, #00bfa5, #1de9b6)";
    button.style.boxShadow = "0 4px 12px rgba(0, 191, 165, 0.3)";
  }, 1500);
});
