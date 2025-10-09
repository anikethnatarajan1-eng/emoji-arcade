import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameList from './GameList';
import EmojiGame from './EmojiGame';
import CircleGame from './CircleGame';
import ClickerGame from './ClickerGame';
import TimelineGame from './TimelineGame';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Emoji Arcade</h1>
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/emoji" element={<EmojiGame />} />
          <Route path="/circle" element={<CircleGame />} />
          <Route path="/clicker" element={<ClickerGame />} />
          <Route path="/timeline" element={<TimelineGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
