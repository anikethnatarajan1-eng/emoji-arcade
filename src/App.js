import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import CrafterGame from './CrafterGame';
import CircleGame from './CircleGame';
import TimelineTangle from './TimelineGame';
import StimulationClicker from './ClickerGame';
import EmojiCoder from './EmojiGame';
import './App.css';

function Home() {
  return (
    <div className="home">
      <h1>🎮 Welcome to 4niketh.fun</h1>
      <p>Select a game to play:</p>
      <ul className="game-list">
        <li><Link to="/crafter">🧪 Element Crafter</Link></li>
        <li><Link to="/circle">🟠 Draw a Perfect Circle</Link></li>
        <li><Link to="/clicker">🧠 Stimulation Clicker</Link></li>
        <li><Link to="/timeline">🧠 Timeline Tangle</Link></li>
        <li><Link to="/emoji">💬 Emoji Coder</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crafter" element={<CrafterGame />} />
        <Route path="/circle" element={<CircleGame />} />
        <Route path="/clicker" element={<StimulationClicker />} />
        <Route path="/timeline" element={<TimelineTangle />} />
        <Route path="/emoji" element={<EmojiCoder />} />
      </Routes>
    </Router>
  );
}

export default App;
