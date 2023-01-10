import "../scss/style.scss";

const currentUrl = window.location.href;
if (currentUrl.includes("/multimediedesigner")) {
  document.querySelector(".link-mul").classList.add("selected");
} else if (currentUrl.includes("/projekter")) {
  document.querySelector(".link-projekter").classList.add("selected");
} else if (currentUrl.includes("/kontakt")) {
  document.querySelector(".link-kontakt").classList.add("selected");
} else {
  document.querySelector(".link-forside").classList.add("selected");
}

let lastKnownScrollPosition = 0;
let ticking = false;

const navbar = document.querySelector("nav");
const scrollUp = document.querySelector(".scroll-up");

scrollUp.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

document.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      navbar.classList[lastKnownScrollPosition > 0 ? "add" : "remove"](
        "scrolled"
      );
      scrollUp.classList[lastKnownScrollPosition > 0 ? "add" : "remove"](
        "visible"
      );
      ticking = false;
    });

    ticking = true;
  }
});

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", (e) => {
  document.querySelector(".mobile-menu").classList.toggle("active");
  hamburger.classList.toggle("open");
});

const videoOverlay = document.querySelector(".video-overlay");
videoOverlay?.addEventListener("click", (e) => {
  if (e.target.classList.contains("video-overlay")) {
    videoOverlay.classList.remove("visible");
  }
});

document
  .querySelector(".open-video")
  ?.addEventListener("click", () => videoOverlay.classList.add("visible"));
document
  .querySelector(".close-video")
  ?.addEventListener("click", () => videoOverlay.classList.remove("visible"));
