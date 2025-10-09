import React, { useRef, useState } from 'react';

function CircleGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(null);
  const [highScores, setHighScores] = useState([]);

  const handleDraw = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Simulate a circle based on mouse drag (simplified)
    const radius = Math.random() * 100 + 50;
    ctx.beginPath();
    ctx.arc(150, 150, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Calculate "perfectness" score
    const deviation = Math.abs(radius - 100);
    const newScore = Math.max(0, 100 - deviation).toFixed(2);
    setScore(newScore);

    // Save high score
    setHighScores((prev) => [...prev, parseFloat(newScore)].sort((a, b) => b - a).slice(0, 5));
  };

  return (
    <div>
      <h2>Draw a Perfect Circle</h2>
      <p>Try to draw a perfect circle — precision meets challenge!</p>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        style={{ border: '1px solid black' }}
        onClick={handleDraw}
      />
      {score && <p>Your Score: {score}/100</p>}
      <h3>🏆 High Scores</h3>
      <ul>
        {highScores.map((s, i) => (
          <li key={i}>{s}/100</li>
        ))}
      </ul>
    </div>
  );
}

export default CircleGame;
