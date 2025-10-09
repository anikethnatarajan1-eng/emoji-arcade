import React from 'react';
import { Link } from 'react-router-dom';

function TimelineGame() {
  return (
    <div>
      <h2>Timeline Tangle</h2>
      <p>Sort historical events in the correct order! (Coming soon)</p>
      <Link to="/">
        <button>⬅️ Back to Home</button>
      </Link>
    </div>
  );
}

export default TimelineGame;
