import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const events = [
  { id: 1, text: "World War II Ends - 1945" },
  { id: 2, text: "Moon Landing - 1969" },
  { id: 3, text: "Internet Invented - 1983" },
  { id: 4, text: "Fall of Berlin Wall - 1989" }
];

const correctOrder = [1, 2, 3, 4];

function DraggableEvent({ event, index, moveItem }) {
  const [, ref] = useDrag({
    type: "event",
    item: { index }
  });

  const [, drop] = useDrop({
    accept: "event",
    hover: (item) => {
      if (item.index !== index) {
        moveItem(item.index, index);
        item.index = index;
      }
    }
  });

  return (
    <div ref={(node) => ref(drop(node))} className="timeline-item">
      {event.text}
    </div>
  );
}

function TimelineGame() {
  const [order, setOrder] = useState(events);
  const [message, setMessage] = useState("");

  const moveItem = (from, to) => {
    const updated = [...order];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setOrder(updated);
  };

  const checkOrder = () => {
    const ids = order.map(e => e.id);
    setMessage(JSON.stringify(ids) === JSON.stringify(correctOrder) ? "✅ Correct!" : "❌ Try again!");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="game-container">
        <h2>📅 Timeline Tangle</h2>
        <p>Drag events to sort them chronologically:</p>
        {order.map((event, index) => (
          <DraggableEvent key={event.id} event={event} index={index} moveItem={moveItem} />
        ))}
        <button onClick={checkOrder}>Check Order</button>
        <p>{message}</p>
        <Link to="/"><button>⬅️ Back</button></Link>
      </div>
    </DndProvider>
  );
}

export default TimelineGame;
