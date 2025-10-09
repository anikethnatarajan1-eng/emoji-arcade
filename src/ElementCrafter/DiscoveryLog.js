import React from 'react';

function DiscoveryLog({ discoveries }) {
  return (
    <div className="discovery-log">
      <h3>Discoveries</h3>
      <ul>
        {discoveries.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DiscoveryLog;
