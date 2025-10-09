import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ClickerGame() {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="game-container">
      <h2>🖱️ Stimulation Clicker</h2>
      <button onClick={() => setClicks(clicks + 1)}>Click Me!</button>
      <p>Clicks: {clicks}</p>
      {clicks >= 10 && <p>You're getting into it...</p>}
      {clicks >= 50 && <p>You're unstoppable!</p>}
      {clicks >= 100 && <p>Okay, now you're just farming dopamine 😅</p>}
      <Link to="/"><button>⬅️ Back</button></Link>
    </div>
  );
}

export default ClickerGame;
