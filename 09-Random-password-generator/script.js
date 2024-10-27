const inputField = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate-btn");

const passwordChars = "0123456789ABCDEFGHIJKLMabcdefghijklmnopq!@#$%^&*()_+";
const passwordLength = 5;

generateBtn.addEventListener("click", () => {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * passwordChars.length);
    password = password + passwordChars[randomIndex];
  }

  inputField.value = password;
});

copyBtn.addEventListener("click", () => {
  const password = inputField.value;
  if (password) {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  } else {
    alert("No password to copy!");
  }
});
