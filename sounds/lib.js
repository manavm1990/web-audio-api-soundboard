const audioContext = new AudioContext();

const DEFAULT_SAMPLE_RATE = audioContext.sampleRate;
const secs = 1;

const createGain = (val = 0.5, delay = 0) => {
  const gainControl = audioContext.createGain();
  gainControl.gain.setValueAtTime(val, delay);
  return gainControl;
};

const primaryGainControl = createGain().connect(audioContext.destination);

export { audioContext as context };

// This gives us a mono (one channel) buffer that holds 1 second worth of audio data.
export const buffer = audioContext.createBuffer(
  1,
  DEFAULT_SAMPLE_RATE * secs,
  DEFAULT_SAMPLE_RATE
);

export const createOscillator = ({
  freq = 150,
  gainVal,
  gainDelay,
  gainRampValue = 0.001,
  gainRampTiming = 0.5,
  oscRampValue = 0.001,
  oscRampTiming = 0.5,
} = {}) => {
  const oscGain = createGain(gainVal, gainDelay);
  const oscillator = audioContext.createOscillator();

  oscGain.gain.exponentialRampToValueAtTime(
    gainRampValue,
    audioContext.currentTime + gainRampTiming
  );
  oscGain.connect(primaryGainControl);

  oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    oscRampValue,
    audioContext.currentTime + oscRampTiming
  );
  oscillator.connect(oscGain);
  oscillator.start();

  // Stop after half second
  oscillator.stop(audioContext.currentTime + 0.5);
};

export { primaryGainControl as volumeControl };

// TODO: Consider whether this needs to abstracted
export const play = (connection = primaryGainControl) => {
  const noiseSource = audioContext.createBufferSource();

  noiseSource.buffer = buffer;

  // Connect to volume by way of filter
  noiseSource.connect(connection);
  noiseSource.start();
};
