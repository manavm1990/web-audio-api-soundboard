import play from "/sounds";

export default () => {
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
};
