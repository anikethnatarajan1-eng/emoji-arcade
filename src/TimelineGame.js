import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const correctOrder = [
  { year: 1969, label: "Moon Landing" },
  { year: 1995, label: "Windows 95 Launch" },
  { year: 2007, label: "iPhone Released" },
  { year: 2020, label: "Global Pandemic" }
];

function TimelineGame() {
  const [events, setEvents] = useState([...correctOrder].sort(() => Math.random() - 0.5));
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const playSound = (src) => new Audio(src).play();

  const handleDragStart = (e, index) => {
    playSound('/scratch.mp3');
    e.dataTransfer.setData("dragIndex", index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("dragIndex");
    const newEvents = [...events];
    const [dragged] = newEvents.splice(dragIndex, 1);
    newEvents.splice(dropIndex, 0, dragged);
    setEvents(newEvents);
  };

  const handleCheck = () => {
    const isCorrect = events.every((e, i) => e.label === correctOrder[i].label);
    playSound(isCorrect ? '/correct.mp3' : '/wrong.mp3');
    setFeedback(isCorrect ? "✅ Correct order!" : "❌ Try again!");
  };

  return (
    <div className="App">
      <h1>🟡 Timeline Tangle</h1>
      <p>Drag the events into chronological order:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {events.map((event, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, index)}
            style={{
              padding: '10px',
              marginBottom: '8px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#fff',
              cursor: 'grab'
            }}
          >
            {event.label}
          </li>
        ))}
      </ul>
      <button onClick={handleCheck}>Check Order</button>
      <p className="feedback">{feedback}</p>
      <button onClick={() => navigate('/')}>← Back to Home</button>
    </div>
  );
}

export default TimelineGame;
