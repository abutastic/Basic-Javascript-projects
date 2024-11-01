const dataArray = [
  {
    title: "Why is JavaScript so cool?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam! Lorem ipsum dolor sit amet.",
  },
  {
    title: "How to Learn JavaScript?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam! Lorem ipsum dolor sit amet.",
  },
  {
    title: "How much javascript is enough to start Learning React.js?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laboriosam! Lorem ipsum dolor sit amet.",
  },
];

const makeHTML = (data) => {
  return `<details>
    <summary>${data.title}</summary>
    <p>${data.detail}</p>
   </details>`;
};

const container = document.getElementById('faq-container');
container.innerHTML = dataArray
  .map((dataItem) => makeHTML(dataItem))
  .join("");
