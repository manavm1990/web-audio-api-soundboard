import { buffer, context, play, volumeControl } from "./lib.js";
import getRandomNum from "../utils.js";

const channelData = buffer.getChannelData(
  // Which channel? (Only 1 here)
  0
);

// Add white noise by mutating the channel data with random ints from -1 to 1
// If our buffer had more than one channel, we would have to repeat this process for every channel.
for (let i = 0; i < channelData.length; i++) {
  channelData[i] = getRandomNum(-1, 1);
}

export default () => {
  play();
};
