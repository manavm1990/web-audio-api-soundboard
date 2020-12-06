import { context, volumeControl } from "./lib";

export default () => {
  const oscillator = context.createOscillator();

  // 'C' in Hz. w/o delay
  oscillator.frequency.setValueAtTime(261.6, 0);
  oscillator.connect(volumeControl);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.5);
};
