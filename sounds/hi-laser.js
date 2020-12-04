import { createGainOscillator } from "./lib.js";

export default () => {
  createGainOscillator({ freq: 15000, timing: 1 });
};
