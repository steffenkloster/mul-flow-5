const [_, backCover] = document.querySelectorAll("section:nth-of-type(3) img");
const coverParent = backCover.parentElement;
let hoveringAlbum = false;

document.querySelectorAll("iframe").forEach((iframe) => {
  iframe.src = iframe.getAttribute("x-src");
});

setInterval(() => {
  if (hoveringAlbum) return;
  backCover.classList.toggle("visible");
}, 5000);

coverParent.addEventListener("mouseover", () => {
  hoveringAlbum = true;
});

coverParent.addEventListener("mouseleave", () => {
  hoveringAlbum = false;
});

coverParent.addEventListener("click", () => {
  backCover.classList.toggle("visible");
});
