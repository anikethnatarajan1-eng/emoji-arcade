import React from 'react';

function Sidebar({ discoveries, onSelect }) {
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <p>Click discovered elements to reuse:</p>
      <ul>
        {discoveries.map((el, index) => (
          <li key={index} onClick={() => onSelect(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
