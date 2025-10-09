import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const emojiData = [
  { emoji: "🦁👑", answer: "The Lion King" },
  { emoji: "🚢🧊💔", answer: "Titanic" },
  { emoji: "🕷️🧑", answer: "Spider-Man" },
  { emoji: "🐼🥋", answer: "Kung Fu Panda" }
];

function EmojiGame() {
  const [current, setCurrent] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (guess.trim().toLowerCase() === emojiData[current].answer.toLowerCase()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again!");
    }
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % emojiData.length);
    setGuess("");
    setFeedback("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎬 Emoji Decoder</h2>
      <p>Guess the movie: <span style={{ fontSize: "2rem" }}>{emojiData[current].emoji}</span></p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Your guess"
      />
      <br />
      <button onClick={checkAnswer}>Submit</button>
      <button onClick={next}>Next</button>
      <p>{feedback}</p>
      <Link to="/"><button>⬅️ Back</button></Link>
    </div>
  );
}

export default EmojiGame;
