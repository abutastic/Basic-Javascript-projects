const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "yellow",
  "blue",
  "purple",
];

const button = document.getElementById("btn");
const colorName = document.getElementsByClassName("color")[0];

button.addEventListener("click", function () {
  let takenNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[takenNumber];
  colorName.textContent = colors[takenNumber]
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
