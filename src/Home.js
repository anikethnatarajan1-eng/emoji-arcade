import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';

function Home() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  // 🔹 Fetch games.json when the component mounts
  useEffect(() => {
    fetch('/games.json') // Make sure this file is in your public/ folder
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error('Error fetching games:', err));
  }, []);

  return (
    <div className="bubble-container">
      {games.length === 0 ? (
        <p>Loading games...</p>
      ) : (
        games.map(game => (
          <div
            key={game.id}
            className="bubble"
            style={{ backgroundImage: `url(${game.image})` }}
            onClick={() => navigate(`/${game.id}`)}
          >
            <div className="bubble-title">{game.title}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
