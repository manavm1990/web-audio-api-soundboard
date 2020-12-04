import getRandomNum from "../utils.js";

// TODO: Consider moving all of this stuff into some type of 'init'
const context = new AudioContext();
const DEFAULT_SAMPLE_RATE = context.sampleRate;
const secs = 1;

// This gives us a mono (one channel) buffer that holds 1 second worth of audio data.
const buffer = context.createBuffer(
  1,
  DEFAULT_SAMPLE_RATE * secs,
  DEFAULT_SAMPLE_RATE
);

const channelData = buffer.getChannelData(
  // Which channel? (Only 1 here)
  0
);

// 'Activate' some volume ('gain') 🔈
const volumeControl = context.createGain();

// Add white noise by mutating the channel data with random ints from -1 to 1
// If our buffer had more than one channel, we would have to repeat this process for every channel.
for (let i = 0; i < channelData.length; i++) {
  channelData[i] = getRandomNum(-1, 1);
}

volumeControl.gain.setValueAtTime(
  0.4,

  // No delay
  0
);

// TODO: Consider accepting the source to play
export default () => {
  // ⚠️ You can only play a source node once.
  const noiseSource = context.createBufferSource();

  noiseSource.buffer = buffer;
  noiseSource.connect(volumeControl);
  volumeControl.connect(context.destination);
  noiseSource.start();
};
