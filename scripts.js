import play from "./lib/index.js";

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function playInstrument() {
    play[this.dataset.instrument.toLowerCase()]();
  });
});

document.addEventListener("keydown", ({ key }) => {
  play[key.toLowerCase()]();
});
