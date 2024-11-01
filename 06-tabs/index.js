const tabs = document.querySelectorAll(".tabs h3");
const textDivs = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    textDivs.forEach((div) => {
      div.classList.remove("active");
    });

    tabs[index].classList.add("active");

    textDivs[index].classList.add("active");
  });
});
