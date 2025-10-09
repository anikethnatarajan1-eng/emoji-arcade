import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function CircleGame() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [score, setScore] = useState(null);

  const scratch = new Audio('/scratch.mp3');
  const correct = new Audio('/correct.mp3');

  const startDraw = (e) => {
    setDrawing(true);
    scratch.play();
    setPoints([[e.nativeEvent.offsetX, e.nativeEvent.offsetY]]);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    setPoints((prev) => [...prev, [e.nativeEvent.offsetX, e.nativeEvent.offsetY]]);
  };

  const endDraw = () => {
    setDrawing(false);
    calculateScore();
  };

  const calculateScore = () => {
    const centerX = points.reduce((sum, p) => sum + p[0], 0) / points.length;
    const centerY = points.reduce((sum, p) => sum + p[1], 0) / points.length;
    const radii = points.map(([x, y]) => Math.hypot(x - centerX, y - centerY));
    const avg = radii.reduce((a, b) => a + b, 0) / radii.length;
    const variance = radii.reduce((sum, r) => sum + Math.abs(r - avg), 0) / radii.length;
    const score = Math.max(0, 100 - variance).toFixed(2);
    correct.play();
    setScore(`${score}/100`);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.beginPath();
    setPoints([]);
    setScore(null);
  };

  return (
    <div className="game-container">
      <h2>🟠 Draw a Perfect Circle</h2>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="circle-canvas"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
      />
      <p>Score: {score}</p>
      <button onClick={clearCanvas}>Clear</button>
      <Link to="/"><button>⬅️ Back</button></Link>
    </div>
  );
}

export default CircleGame;
