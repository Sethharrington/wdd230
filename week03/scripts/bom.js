const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

var chapterArray = getChapterList() || [];

chapterArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value !== "") {
    displayList(input.value);
    chapterArray.push(input.value);
    setChapterList();
    input.value = null;
    input.focus();
  }
});

function displayList(item) {
  const newLi = document.createElement("li");
  const newButton = document.createElement("button");

  newLi.textContent = item;
  newButton.textContent = "❌";
  newButton.classList.add("delete");

  newLi.append(newButton);
  list.append(newLi);

  newButton.addEventListener("click", () => {
    newButton.parentElement.remove();
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chapterArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chapterArray = chapterArray.filter((item) => item !== chapter);
  setChapterList();
}
