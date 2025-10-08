import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Fetching games...');
    fetch('/games')
      .then(res => res.json())
      .then(data => {
        console.log('Games received:', data);
        setGames(data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>4niketh.fun</h1>
        <p>games and stuff by Aniketh</p>
      </header>
      <div className="game-grid">
        {games.length === 0 ? (
          <p>Loading games...</p>
        ) : (
          games.map(game => (
            <div key={game.id} className="game-bubble" onClick={() => navigate(`/${game.id}`)}>
              <h2>{game.title}</h2>
              <p>{game.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
