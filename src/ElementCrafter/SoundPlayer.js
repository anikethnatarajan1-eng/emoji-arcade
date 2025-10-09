const SoundPlayer = {
  play(type) {
    const sounds = {
      correct: new Audio('/correct.mp3'),
      wrong: new Audio('/wrong.mp3'),
      scratch: new Audio('/scratch.mp3'),
    };
    sounds[type]?.play();
  }
};

export default SoundPlayer;
