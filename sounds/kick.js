import { context, volumeControl } from "./lib";

export default () => {
  const gainControl = context.createGain();
  const oscillator = context.createOscillator();

  gainControl.gain.setValueAtTime(1, 0);
  gainControl.gain.exponentialRampToValueAtTime(
    0.001,
    context.currentTime + 0.5
  );
  gainControl.connect(volumeControl);

  oscillator.frequency.setValueAtTime(261.6, 0);
  oscillator.frequency.setValueAtTime(150, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    0.001,
    context.currentTime + 0.5
  );

  oscillator.connect(gainControl);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.5);
};
