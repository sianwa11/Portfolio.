"use strict";

const timeline = document.querySelectorAll(".timeline");
// timeline.forEach((el) => {
//   el.style.opacity = 0;
// });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   entry.target.classList.toggle("animation-left", entry.isIntersecting);

      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

timeline.forEach((el) => {
  el.style.opacity = 0;
  observer.observe(el);
});
