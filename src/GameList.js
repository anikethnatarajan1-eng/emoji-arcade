import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/games.json')
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error('Failed to load games:', err));
  }, []);

  return (
    <div>
      <h2>🎮 Emoji Arcade</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <Link to={game.link}>
              <button>Play {game.title}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
