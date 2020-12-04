const audioContext = new AudioContext();

const DEFAULT_SAMPLE_RATE = audioContext.sampleRate;
const secs = 1;

// 'Activate' some volume ('gain') 🔈
const gainControl = audioContext.createGain();

gainControl.gain.setValueAtTime(
  0.4,

  // No delay
  0
);

gainControl.connect(audioContext.destination);

export { audioContext as context };

// This gives us a mono (one channel) buffer that holds 1 second worth of audio data.
export const buffer = audioContext.createBuffer(
  1,
  DEFAULT_SAMPLE_RATE * secs,
  DEFAULT_SAMPLE_RATE
);
export { gainControl as volumeControl };

export const play = (connection = gainControl) => {
  const noiseSource = audioContext.createBufferSource();

  noiseSource.buffer = buffer;

  // Connect to volume by way of filter
  noiseSource.connect(connection);
  noiseSource.start();
};
