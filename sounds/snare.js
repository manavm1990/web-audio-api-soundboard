import { context, play, volumeControl } from "./lib.js";

const snareFilter = context.createBiquadFilter();
snareFilter.type = "highpass";
snareFilter.frequency.value = 15000; // Hz

snareFilter.connect(volumeControl);

export default () => {
  play(snareFilter);
};
