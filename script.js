// Floating hearts
const hearts = ["♡", "♥", "❤", "✦"];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.fontSize = (12 + Math.random() * 16) + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 900);

// Smooth music experience: clicking the hero button doesn't autoplay,
// because browsers generally block autoplay with sound.
const music = document.getElementById("music");

document.addEventListener("visibilitychange", () => {
  if (document.hidden && !music.paused) {
    music.pause();
  }
});
