const SoundPlayer = {
  play: (soundName) => {
    const audio = new Audio(`/${soundName}.mp3`);
    audio.play();
  },
};

export default SoundPlayer;
