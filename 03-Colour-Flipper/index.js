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

function getRandomNum() {
  let randomNum = Math.floor(Math.random() * hexValues.length);
  return randomNum;
}

function getHexValue(strLength) {
  let value = "";
  for (let i = 0; i < strLength; i++) {
    value = value + hexValues[getRandomNum()];
  }

  return value;
}

newColourBtn.addEventListener("click", () => {
  let colourValue = "#" + getHexValue(6);
  document.body.style.setProperty("background-color", colourValue);
  spanText.textContent = colourValue;
});
