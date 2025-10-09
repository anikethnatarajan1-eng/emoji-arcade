import React, { useState, useEffect } from 'react';
import ElementList from './ElementList';
import DiscoveryLog from './DiscoveryLog';
import Combiner from './Combiner';
import Sidebar from './Sidebar';
import SoundPlayer from './SoundPlayer';
import { baseElements, combinationRules } from './data';
import './styles.css';

function CrafterGame() {
  const [elements, setElements] = useState([...baseElements]);
  const [selected, setSelected] = useState([]);
  const [discoveries, setDiscoveries] = useState([]);
  const [message, setMessage] = useState('');
  const [sound, setSound] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (sound) {
      SoundPlayer.play(sound);
      setSound(null);
    }
  }, [sound]);

  const handleSelect = (element) => {
    if (selected.length < 2) {
      setSelected([...selected, element]);
    }
  };

  const handleCombine = () => {
    if (selected.length !== 2) return;
    const key = selected.sort().join('+');
    const result = combinationRules[key];

    if (result) {
      if (!elements.includes(result)) {
        setElements([...elements, result]);
        setDiscoveries([...discoveries, result]);
        setMessage(`✨ You discovered: ${result}`);
        setSound('correct');
      } else {
        setMessage(`✅ Already discovered: ${result}`);
        setSound('scratch');
      }
    } else {
      setMessage('❌ Nothing happened...');
      setSound('wrong');
    }

    setSelected([]);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="crafter-container">
      <h1>🧪 Element Crafter</h1>
      <p>Combine elements to discover wild stuff!</p>
      <Combiner selected={selected} onCombine={handleCombine} />
      <button onClick={toggleSidebar}>
        {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      <div className="crafter-layout">
        <ElementList elements={elements} onSelect={handleSelect} />
        {sidebarOpen && (
          <Sidebar discoveries={discoveries} onSelect={handleSelect} />
        )}
      </div>
      <DiscoveryLog discoveries={discoveries} />
      <p className="message">{message}</p>
    </div>
  );
}

export default CrafterGame;
