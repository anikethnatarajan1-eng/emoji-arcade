import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EmojiGame from './EmojiGame';
import CircleGame from './CircleGame';
import ClickerGame from './ClickerGame';
import TimelineGame from './TimelineGame';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emoji" element={<EmojiGame />} />
        <Route path="/circle" element={<CircleGame />} />
        <Route path="/clicker" element={<ClickerGame />} />
        <Route path="/timeline" element={<TimelineGame />} />
      </Routes>
    </Router>
  );
}

export default App;
