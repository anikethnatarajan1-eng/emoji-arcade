import React, { useState } from 'react';

function ClickerGame() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h2>Stimulation Clicker</h2>
      <p>Click for dopamine — addictive and oddly satisfying!</p>
      <button onClick={() => setClicks(clicks + 1)}>Click Me!</button>
      <p>Total Clicks: {clicks}</p>
    </div>
  );
}

export default ClickerGame;
