const openBtn = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");



openBtn.addEventListener("click", function(){
    modal.classList.add("open")
})

modalContent.addEventListener("click", function(){
    modal.classList.remove("open")
})