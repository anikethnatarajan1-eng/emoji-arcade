import React from 'react';

function Sidebar({ discoveries, onSelect }) {
  return (
    <div className="sidebar">
      <h3>Sidebar Inventory</h3>
      <div className="sidebar-grid">
        {discoveries.map((el, i) => (
          <button key={i} className="sidebar-item" onClick={() => onSelect(el)}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
