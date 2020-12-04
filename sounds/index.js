import playSnare from "./snare.js";
import playWhiteNoise from "./white-noise.js";

export default {
  // Method names are keys
  q() {
    playWhiteNoise();
  },
  w() {
    playSnare();
  },
};
