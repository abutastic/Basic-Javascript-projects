let tabs = document.querySelectorAll(".tabs h3");
let tabContent = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContent[index].classList.add("active");
    console.log(tabContent[index]);

    tabs[index].classList.add("active");
    console.log(tabs[index]);
  });
});
