// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
const today = Date.now();
const lastVisitElement = document.querySelector("#lastVisit");

let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
let daysSinceLastVisit = (today - lastVisit) / msToDays;

// Shows message of last visit
lastVisitElement.textContent =
  lastVisit === 0
    ? "Welcome! Let us know if you have any questions."
    : daysSinceLastVisit <= 1
    ? "Back so soon! Awesome!"
    : `You last visited ${daysSinceLastVisit.toFixed(0)} days ago.`;

// Set last visit
localStorage.setItem("lastVisit-ls", today);
