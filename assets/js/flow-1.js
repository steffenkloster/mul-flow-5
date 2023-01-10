let currentImage = 0;
const images = document.querySelectorAll(".image-show > img");
const stepDiv = document.querySelector(".image-show > div");
const maxImages = images.length - 1;
const delay = 2000;

setInterval(() => {
  currentImage++;
  if (currentImage > maxImages) {
    currentImage = 0;
    images.forEach((image, i) => {
      if (i !== 0) {
        image.classList.remove("visible");
      }
    });
  } else {
    images[currentImage].classList.add("visible");
  }

  stepDiv.innerHTML = `step ${currentImage + 1} / ${maxImages + 1}`;
}, delay);
