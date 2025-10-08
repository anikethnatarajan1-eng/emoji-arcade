import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const rewards = [
  { clicks: 10, label: "💎 You earned 67 dopamine crystals!" },
  { clicks: 25, label: "🧠 Brain boost unlocked!" },
  { clicks: 50, label: "🔥 You're on fire!" },
  { clicks: 100, label: "🏀 LeBron joins your team!" },
  { clicks: 150, label: "🕺 You unlocked the dance party!" },
  { clicks: 200, label: "🚀 You clicked into orbit!" },
  { clicks: 300, label: "🎉 Meme overload incoming!" }
];

function ClickerGame() {
  const [count, setCount] = useState(0);
  const [unlocked, setUnlocked] = useState([]);
  const navigate = useNavigate();

  const playSound = (src) => new Audio(src).play();

  const handleClick = () => {
    playSound('/scratch.mp3');
    const newCount = count + 1;
    setCount(newCount);

    const newRewards = rewards.filter(r => r.clicks === newCount && !unlocked.includes(r.label));
    if (newRewards.length > 0) {
      setUnlocked([...unlocked, ...newRewards.map(r => r.label)]);
    }
  };

  return (
    <div className="App">
      <h1>🟣 Stimulation Clicker</h1>
      <p>Click for dopamine!</p>
      <button onClick={handleClick}>Click Me!</button>
      <p className="feedback">Clicks: {count}</p>

      {unlocked.map((msg, i) => (
        <div key={i} className="reward">{msg}</div>
      ))}

      <button onClick={() => navigate('/')}>← Back to Home</button>
    </div>
  );
}

export default ClickerGame;
