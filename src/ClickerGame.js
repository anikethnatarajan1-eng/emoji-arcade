import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ClickerGame() {
  const [clicks, setClicks] = useState(0);
  const scratch = new Audio('/scratch.mp3');

  const handleClick = () => {
    scratch.play();
    setClicks(clicks + 1);
  };

  return (
    <div className="game-container">
      <h2>🖱️ Stimulation Clicker</h2>
      <button className="big-button" onClick={handleClick}>Click Me!</button>
      <p>Clicks: {clicks}</p>
      {clicks >= 10 && <p>You're getting into it...</p>}
      {clicks >= 50 && <p>You're unstoppable!</p>}
      {clicks >= 100 && <p>Okay, now you're just farming dopamine 😅</p>}
      <Link to="/"><button>⬅️ Back</button></Link>
    </div>
  );
}

export default ClickerGame;
