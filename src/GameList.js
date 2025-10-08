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

