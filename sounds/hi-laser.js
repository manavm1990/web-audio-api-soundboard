import { createOscillator } from "./lib.js";

export default () => {
  createOscillator({ freq: 15000, timing: 1 });
};
