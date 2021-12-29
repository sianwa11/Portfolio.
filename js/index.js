"use strict";

const timeline = document.querySelectorAll(".timeline");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // make clear
        entry.target.style.opacity = 1;
        // animate left timeline
        entry.target.children["timeline-left"].classList.add("animation-left");
        // animate right timeline
        entry.target.children["timeline-right"].classList.add(
          "animation-right"
        );
        // animate center timeline
        entry.target.children["timeline-center"].classList.add(
          "animation-bottom"
        );
        // unobserve
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
