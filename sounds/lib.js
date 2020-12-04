const audioContext = new AudioContext();

// 'Activate' some volume ('gain') 🔈
const gainControl = audioContext.createGain();

gainControl.gain.setValueAtTime(
  0.4,

  // No delay
  0
);

export { audioContext as context };
export { gainControl as volumeControl };
