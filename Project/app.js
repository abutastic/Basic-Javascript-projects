let form = document.querySelector("form");
let input1 = document.querySelectorAll(".box input")[0];
let input2 = document.querySelectorAll(".box input")[1];
let input3 = document.querySelectorAll(".box input")[2];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name");
  let user = document.querySelector("#user");
  let pass = document.querySelector("#pass");

  setTimeout(() => {
    input1.value = name.value;
    input2.value = user.value;
    input3.value = pass.value;
  }, 2000);
});
