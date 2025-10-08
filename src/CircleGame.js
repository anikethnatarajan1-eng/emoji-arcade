import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function CircleGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(null);
  const navigate = useNavigate();
  const [drawing, setDrawing] = useState(false);
  const [points, setPoints] = useState([]);

  const playSound = (src) => new Audio(src).play();

  const handleMouseDown = () => {
    playSound('/scratch.mp3');
    setDrawing(true);
    setPoints([]);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#333';
    ctx.lineTo(x, y);
    ctx.stroke();
    setPoints(prev => [...prev, { x, y }]);
  };

  const handleMouseUp = () => {
    setDrawing(false);
    if (points.length < 10) {
      playSound('/wrong.mp3');
      setScore("Draw a full circle!");
      return;
    }

    const avgX = points.reduce((sum, p) => sum + p.x, 0) / points.length;
    const avgY = points.reduce((sum, p) => sum + p.y, 0) / points.length;
    const distances = points.map(p => Math.hypot(p.x - avgX, p.y - avgY));
    const avgDist = distances.reduce((sum, d) => sum + d, 0) / distances.length;
    const variance = distances.reduce((sum, d) => sum + Math.pow(d - avgDist, 2), 0) / distances.length;
    const circularity = Math.max(0, 100 - Math.sqrt(variance));

    playSound('/correct.mp3');
    setScore(`Circularity Score: ${circularity.toFixed(2)}%`);
  };

  return (
    <div className="App">
      <h1>🟠 Draw a Perfect Circle</h1>
      <p>Try to draw a perfect circle with your mouse!</p>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        style={{ border: '1px solid #ccc' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      {score && <p className="feedback">{score}</p>}
      <button onClick={() => navigate('/')}>← Back to Home</button>
    </div>
  );
}

export default CircleGame;
