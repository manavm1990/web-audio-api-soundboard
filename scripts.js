import play from "./sounds/index.js";

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function playInstrument() {
    play[this.dataset.instrument.toLowerCase()]();
  });
});

document.addEventListener("keydown", ({ key }) => {
  const k = key.toLowerCase();
  if (k in play) {
    play[k]();
  }
});
