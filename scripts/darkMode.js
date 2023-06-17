const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const links = document.querySelectorAll("main > section > ul > li > a");
modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("☑️")) {
    main.style.background = "#515151";
    main.style.color = "#fff";
    links.forEach((link) => {
      link.style.color = "#ffff00";
    });
    // links.style.color = "#fff";
    modeButton.textContent = "❎";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    modeButton.textContent = "☑️";
    links.forEach((link) => {
      link.style.color = "#143790";
    });
  }
});
