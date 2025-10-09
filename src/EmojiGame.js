import React from 'react';
import { Link } from 'react-router-dom';

function EmojiGame() {
  return (
    <div>
      <h2>🎬 Emoji Decoder</h2>
      <p>Guess the movie from emojis! (Coming soon)</p>
      <Link to="/"><button>⬅️ Back</button></Link>
    </div>
  );
}

export default EmojiGame;
