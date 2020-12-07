const audioContext = new AudioContext();
const primaryGainControl = audioContext.createGain();
const SAMPLE_RATE = audioContext.sampleRate;

// mono (one channel) buffer that holds 1 second worth of audio data.
const buffer = audioContext.createBuffer(
  1,
  SAMPLE_RATE * 1, // 1 sec
  SAMPLE_RATE
);

const channelData = buffer.getChannelData(0);

// Fill buffer channel data with random integers (-1 to 1) to create 'white noise.'
// This will be a basis for some of the things like the 'snare'
for (let i = 0; i < buffer.length; i++) {
  channelData[i] =
    // Math.random() * (max - min) + min
    Math.random() * (1 + 1) - 1;
}

primaryGainControl.gain.setValueAtTime(0.05, 0);
primaryGainControl.connect(audioContext.destination);

export { audioContext as context };
export { buffer as primaryBuffer };
export { primaryGainControl as volumeControl };
