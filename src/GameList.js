import React from 'react';
import { Link } from 'react-router-dom';

function GameList() {
  return (
    <div className="App">
      <h1>🎮 Welcome to 4niketh.fun</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <h2>🧠 Emoji Decoder</h2>
          <Link to="/emoji"><button>Play</button></Link>
        </li>
        <li>
          <h2>🟠 Draw a Perfect Circle</h2>
          <Link to="/circle"><button>Play</button></Link>
        </li>
        <li>
          <h2>🖱️ Stimulation Clicker</h2>
          <Link to="/clicker"><button>Play</button></Link>
        </li>
        <li>
          <h2>📅 Timeline Tangle</h2>
          <Link to="/timeline"><button>Play</button></Link>
        </li>
        <li>
          <h2>🧪 Element Crafter</h2>
          <Link to="/crafter"><button>Play</button></Link>
        </li>
      </ul>
    </div>
  );
}

export default GameList;
