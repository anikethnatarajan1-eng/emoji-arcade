import React from 'react';

function ElementList({ elements, onSelect }) {
  return (
    <div className="element-list">
      <h3>Available Elements</h3>
      <ul>
        {elements.map((el, index) => (
          <li key={index} onClick={() => onSelect(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ElementList;
