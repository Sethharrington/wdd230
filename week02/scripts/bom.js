const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value != "") {
    input.focus();

    const newLi = document.createElement("li");
    const newButton = document.createElement("button");

    newLi.textContent = input.value;
    newButton.textContent = "❌";

    newLi.appendChild(newButton);
    list.appendChild(newLi);

    input.value = null;

    newButton.addEventListener("click", (event) => {
      newButton.parentElement.remove();
      input.focus();
    });
  }
});
