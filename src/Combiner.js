import React from 'react';

function Combiner({ selected, onCombine }) {
  return (
    <div className="combiner">
      <h3>Combiner</h3>
      <p>{selected.join(' + ') || 'Select two elements'}</p>
      <button onClick={onCombine} disabled={selected.length !== 2}>
        Combine
      </button>
    </div>
  );
}

export default Combiner;
