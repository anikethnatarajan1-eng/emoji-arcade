import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const events = [
  { id: 1, text: "Moon Landing - 1969" },
  { id: 2, text: "Fall of Berlin Wall - 1989" },
  { id: 3, text: "Internet Invented - 1983" },
  { id: 4, text: "World War II Ends - 1945" }
];

function TimelineGame() {
  const [order, setOrder] = useState(events.map(e => e.id));
  const [message, setMessage] = useState("");

  const correctOrder = [4, 1, 3, 2];

  const move = (index, direction) => {
    const newOrder = [...order];
    const swapIndex = index + direction;
    if (swapIndex < 0 || swapIndex >= newOrder.length) return;
    [newOrder[index], newOrder[swapIndex]] = [newOrder[swapIndex], newOrder[index]];
    setOrder(newOrder);
  };

  const check = () => {
    if (JSON.stringify(order) === JSON.stringify(correctOrder)) {
      setMessage("✅ Correct order!");
    } else {
      setMessage("❌ Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📅 Timeline Tangle</h2>
      <p>Sort these events chronologically:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {order.map((id, index) => {
          const event = events.find(e => e.id === id);
          return (
            <li key={id} style={{ marginBottom: "10px" }}>
              {event.text}
              <br />
              <button onClick={() => move(index, -1)}>⬆️</button>
              <button onClick={() => move(index, 1)}>⬇️</button>
            </li>
          );
        })}
      </ul>
      <button onClick={check}>Check Order</button>
      <p>{message}</p>
      <Link to="/"><button>⬅️ Back</button></Link>
    </div>
  );
}

export default TimelineGame;
