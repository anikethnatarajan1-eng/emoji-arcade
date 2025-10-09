import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/games.json')
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading games:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading games...</p>;

  return (
    <div>
      <h2>All Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <Link to={game.link}>
              <button>
                🎮 {game.title} 👉
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
