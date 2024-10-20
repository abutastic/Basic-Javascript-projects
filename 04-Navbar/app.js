// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// get the elements

const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function(){

    /* the long method
    const test = links.classList
    if(test.contains("show-links")){
        links.classList.remove("show-links")
    }
    else{
        links.classList.add("show-links")
    } */
    // the short method
    links.classList.toggle("show-links")
})