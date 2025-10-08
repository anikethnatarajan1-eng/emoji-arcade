import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const emojiData = [
  { emojis: "🦁👑", answer: "The Lion King", hint: "Disney movie with a royal animal" },
  { emojis: "🚢🧊💔", answer: "Titanic", hint: "Historic ship + iceberg" },
  { emojis: "🕷️🧑", answer: "Spider-Man", hint: "Marvel hero with webs" },
  { emojis: "🧙‍♂️🧝‍♀️🗡️", answer: "The Lord of the Rings", hint: "Middle-earth epic" },
  { emojis: "🐼🥋", answer: "Kung Fu Panda", hint: "Martial arts panda" },
  { emojis: "🦖🏰", answer: "Jurassic Park", hint: "Dinosaurs escape" },
  { emojis: "👻🔫", answer: "Ghostbusters", hint: "Who you gonna call?" },
  { emojis: "🧊❄️👭", answer: "Frozen", hint: "Let it go!" },
  { emojis: "🐠🔍", answer: "Finding Nemo", hint: "Lost fish adventure" },
  { emojis: "👨‍🚀🌌", answer: "Interstellar", hint: "Space and time travel" },
  { emojis: "🦇🏙️", answer: "Batman", hint: "Gotham vigilante" },
  { emojis: "🧑‍🚀🚀🌕", answer: "Apollo 13", hint: "Houston, we have a problem" },
  { emojis: "🧟‍♂️🔫", answer: "Zombieland", hint: "Surviving the undead" },
  { emojis: "🐘🎪", answer: "Dumbo", hint: "Flying elephant" },
  { emojis: "🧛‍♂️🩸", answer: "Dracula", hint: "Classic vampire" }
];

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function EmojiGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [tries, setTries] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [hintTimerStarted, setHintTimerStarted] = useState(false);
  const [locked, setLocked] = useState(false);
  const navigate = useNavigate();

  const current = emojiData[currentIndex];

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locked || tries >= 3) return;

    const normalizedGuess = normalize(guess);
    const normalizedAnswer = normalize(current.answer);

    if (normalizedGuess === normalizedAnswer) {
      playSound('/correct.mp3');
      setFeedback('✅ Correct!');
      setLocked(true);
      setTimeout(() => {
        nextPuzzle();
      }, 1000);
    } else {
      playSound('/wrong.mp3');
      const newTries = tries + 1;
      setTries(newTries);
      setFeedback(`❌ Try again! (${newTries}/3)`);

      if (newTries === 3) {
        setShowHint(true);
      }
    }
  };

  useEffect(() => {
    if (showHint && !hintTimerStarted) {
      setHintTimerStarted(true);
      setTimeout(() => {
        setShowAnswer(true);
      }, 7000);
    }
  }, [showHint, hintTimerStarted]);

  const handleShowAnswer = () => {
    setFeedback(`💡 The answer was: ${current.answer}`);
    setLocked(true);
    setTimeout(() => {
      nextPuzzle();
    }, 2000);
  };

  const nextPuzzle = () => {
    setCurrentIndex((prev) => (prev + 1) % emojiData.length);
    setGuess('');
    setFeedback('');
    setTries(0);
    setShowHint(false);
    setShowAnswer(false);
    setHintTimerStarted(false);
    setLocked(false);
  };

  return (
    <div className="App">
      <h1>🧠 Emoji Decoder</h1>
      <p>Guess the movie from emojis:</p>
      <h2 style={{ fontSize: '48px' }}>{current.emojis}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Type your guess..."
          disabled={locked}
        />
        <button type="submit" disabled={locked}>Submit</button>
      </form>

      <p className="feedback">{feedback}</p>

      {showHint && !showAnswer && (
        <button onClick={() => setFeedback(`💡 Hint: ${current.hint}`)}>Show Hint</button>
      )}

      {showAnswer && (
        <button onClick={handleShowAnswer}>Show Answer</button>
      )}

      <button onClick={() => navigate('/')}>← Back to Home</button>
    </div>
  );
}

export default EmojiGame;
