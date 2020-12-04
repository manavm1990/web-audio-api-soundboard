import { createGainOscillator } from "./lib.js";

export default () => {
  createGainOscillator({ freq: 1500, timing: 0.75 });
};
