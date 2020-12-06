const audioContext = new AudioContext();
const primaryGainControl = audioContext.createGain();

primaryGainControl.gain.setValueAtTime(0.05, 0);
primaryGainControl.connect(audioContext.destination);

export { audioContext as context };
export { primaryGainControl as volumeControl };
