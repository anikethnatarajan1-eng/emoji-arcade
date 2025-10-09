import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ClickerGame() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h2>Stimulation Clicker</h2>
      <p>Click for dopamine — addictive and oddly satisfying!</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me!</button>
      <p>Total Clicks: {clicks}</p>
      {clicks >= 10 && <p>You're getting into it...</p>}
      {clicks >= 50 && <p>You're unstoppable!</p>}
      {clicks >= 100 && <p>Okay, now you're just farming dopamine 😅</p>}
      <Link to="/">
        <button>⬅️ Back to Home</button>
      </Link>
    </div>
  );
}

export default ClickerGame;
