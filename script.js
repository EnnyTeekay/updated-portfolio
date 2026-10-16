/**
 * Shared portfolio interactions.
 * Adds gentle reveal-on-scroll transitions while keeping all content visible
 * when JavaScript is unavailable.
 */
document.documentElement.classList.add("js");

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.08 },
);

revealElements.forEach((element) => revealObserver.observe(element));
