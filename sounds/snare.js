import { buffer, context, volumeControl } from "./lib.js";

const snareFilter = context.createBiquadFilter();
snareFilter.type = "highpass";
snareFilter.frequency.value = 15000; // Hz

snareFilter.connect(volumeControl);

export default () => {
  const noiseSource = context.createBufferSource();

  noiseSource.buffer = buffer;

  // Connect to volume by way of filter
  noiseSource.connect(snareFilter);
  noiseSource.start();
};
