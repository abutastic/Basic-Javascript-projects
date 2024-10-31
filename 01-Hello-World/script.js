const btnElement = document.getElementById("button");
const spanElement = document.getElementById("name");

const restrictedNames = ["abbas", "bilal", "mohezna", "scarlette"]

btnElement.addEventListener("click", () => {
  let askName = prompt("Please enter your name!");

  if(restrictedNames.includes(askName.toLowerCase())) return;

  spanElement.textContent = askName.slice(0,1).toUpperCase() + askName.slice(1) + "!";
});
