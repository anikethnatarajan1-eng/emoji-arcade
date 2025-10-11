import React from 'react';

function DiscoveryLog({ discoveries }) {
  return (
    <div className="discovery-log">
      <h3>Discovery Log</h3>
      <ul>
        {discoveries.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default DiscoveryLog;
