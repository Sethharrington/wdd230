const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

navigation.addEventListener("click", (event) => {
  const active = document.querySelector(".active");
  active.classList.toggle("active");
  event.target.classList.toggle("active");
});
