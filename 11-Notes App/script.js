const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("#createBtn");

let showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes") || ""; // Load notes from localStorage or start empty
  addKeyUpListeners(); // Attach keyup listeners to loaded notes
};

let updateLocal = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

// Add keyup listeners to all `.input-box` elements
let addKeyUpListeners = () => {
  const notes = document.querySelectorAll(".input-box");
  notes.forEach(element => {
    element.addEventListener("keyup", updateLocal);
  });
};

// Show notes initially
showNotes();

// Event listener for creating a new note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let image = document.createElement("img");
  
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  
  image.src = "images/delete.png";
  inputBox.appendChild(image);
  
  notesContainer.appendChild(inputBox);
  updateLocal();  // Save new note to localStorage immediately
  addKeyUpListeners(); // Add `keyup` listener to the new note
});

// Event listener for deleting notes and handling input
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateLocal();  // Update localStorage after deleting
  }
});

// Prevent "Enter" from creating a new paragraph in contenteditable
document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
