const newColourBtn = document.getElementById("new-colour");
const spanText = document.getElementById("current-colour");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValue() {
  const randomNum = Math.floor(Math.random() * hexValues.length);

  const randomHexValue = hexValues[randomNum];

  return randomHexValue;
}

function getHexString(str) {
  let string = "";
  for (let i = 0; i < str; i++) {
    string = string + getRandomHexValue();
  }

  return string;
}

newColourBtn.addEventListener("click", () => {
  let colour = "#" + getHexString(6);
  document.body.style.backgroundColor = colour;
  spanText.textContent = colour;
});
