const audioContext = new AudioContext();

const DEFAULT_SAMPLE_RATE = audioContext.sampleRate;
const secs = 1;

// 'Activate' some volume ('gain') 🔈
const gainControl = audioContext.createGain();

gainControl.gain.setValueAtTime(
  0.5,

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

export const createOscillator = (freq = 150, timing = 0.5) => {
  const kickGain = audioContext.createGain();
  const kickOscillator = audioContext.createOscillator();

  kickGain.gain.setValueAtTime(1, 0);
  kickGain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.5
  );
  kickGain.connect(gainControl);

  kickOscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
  kickOscillator.frequency.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + timing
  );
  kickOscillator.connect(kickGain);
  kickOscillator.start();

  // Stop after half second
  kickOscillator.stop(audioContext.currentTime + 0.5);
};

export { gainControl as volumeControl };

export const play = (connection = gainControl) => {
  const noiseSource = audioContext.createBufferSource();

  noiseSource.buffer = buffer;

  // Connect to volume by way of filter
  noiseSource.connect(connection);
  noiseSource.start();
};
