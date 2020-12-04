import playHiLaser from "./hi-laser.js";
import playKick from "./kick.js";
import playLaser from "./laser.js";
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
  e() {
    playKick();
  },
  r() {
    playLaser();
  },
  t() {
    playHiLaser();
  },
};
