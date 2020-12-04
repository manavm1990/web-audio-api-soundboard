import { context, volumeControl } from "./lib.js";

export default () => {
  const kickGain = context.createGain();
  const kickOscillator = context.createOscillator();

  kickGain.gain.setValueAtTime(1, 0);
  kickGain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.5);
  kickGain.connect(volumeControl);

  kickOscillator.frequency.setValueAtTime(150, context.currentTime);
  kickOscillator.frequency.exponentialRampToValueAtTime(
    0.001,
    context.currentTime + 0.5
  );
  kickOscillator.connect(kickGain);
  kickOscillator.start();

  // Stop after half second
  kickOscillator.stop(context.currentTime + 0.5);
};
