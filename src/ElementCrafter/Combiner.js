import React from 'react';

function Combiner({ selected, onCombine }) {
  return (
    <div className="combiner">
      <h3>Selected Elements</h3>
      <div className="selected-elements">
        {selected.map((el, i) => (
          <span key={i} className="selected-el">{el}</span>
        ))}
      </div>
      <button onClick={onCombine} disabled={selected.length !== 2}>
        Combine
      </button>
    </div>
  );
}

export default Combiner;
