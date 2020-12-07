import { primaryBuffer, context, volumeControl } from "./lib";

const filter = context.createBiquadFilter();
const oscGain = context.createGain();

filter.type = "highpass";
filter.frequency.value = 1500;
filter.connect(volumeControl);

export default () => {
  const gain = context.createGain();
  const oscillator = context.createOscillator();
  const source = context.createBufferSource();

  source.buffer = primaryBuffer;
  source.connect(gain);
  source.start();
  source.stop(context.currentTime + 0.2);

  gain.gain.setValueAtTime(1, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2);
  gain.connect(filter);

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(100, context.currentTime);
  oscGain.gain.setValueAtTime(0.7, context.currentTime);
  oscGain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);

  oscillator.connect(oscGain);

  oscGain.connect(volumeControl);

  oscillator.start();
  oscillator.stop(context.currentTime + 0.2);
};
