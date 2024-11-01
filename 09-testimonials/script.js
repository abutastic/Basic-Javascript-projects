const testimonials = [
  {
    author: {
      name: "Abbas Waddu",
      image: "author-01.jpg",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi laborum nulla debitis, beatae blanditiis a cum at quidem laboriosam.",
    date: "5th May",
  },
  {
    author: {
      name: "Motaz Aziz",
      image: "author-02.jpg",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi laborum nulla debitis, beatae blanditiis a cum at quidem laboriosam.",
    date: "25th May",
  },
  {
    author: {
      name: "Ella Rodriguez",
      image: "author-03.jpg",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi laborum nulla debitis, beatae blanditiis a cum at quidem laboriosam.",
    date: "09 June",
  },
  {
    author: {
      name: "Martina Angelica",
      image: "author-04.jpg",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi laborum nulla debitis, beatae blanditiis a cum at quidem laboriosam.",
    date: "09 June",
  },
];

const containerElement = document.getElementById("testimonial-container");

const testimonialMaker = (testimonial) => {
  return `<div class="testimonial-card">
      <img src="${testimonial.author.image}" />
      <h2>${testimonial.author.name}</h2>
      <p>${testimonial.text}</p>
      <div id="buttons">
        <button id="prev">Previous</button>
        <button id="next">Next</button>
      </div>
      <date>Written on ${testimonial.date}</date>
    </div>`;
};

let currentItem = 0;

const updatePage = () => {
  const markup = testimonialMaker(testimonials[currentItem]);
  containerElement.innerHTML = markup;
  addEventListeners(); // Add listeners after updating the content
};

const addEventListeners = () => {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  prevButton.addEventListener("click", () => {
    currentItem = (currentItem - 1 + testimonials.length) % testimonials.length;
    updatePage();
  });

  nextButton.addEventListener("click", () => {
    currentItem = (currentItem + 1) % testimonials.length;
    updatePage();
  });
};

updatePage();
