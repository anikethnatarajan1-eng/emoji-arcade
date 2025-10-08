import React, { useEffect, useState } from 'react';

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/games.json')
      .then((res) => {
        console.log('Fetch response:', res);
        if (!res.ok) throw new Error('Failed to load games.json');
        return res.json();
      })
      .then((data) => {
        console.log('Fetched game data:', data);
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
            <a href={game.link}>Play</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
