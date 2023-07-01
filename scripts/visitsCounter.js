const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

visitsDisplay.textContent =
  numVisits !== 0 ? numVisits : `This is your first visit. 😁 Welcome!`;

localStorage.setItem("numVisits-ls", ++numVisits);
