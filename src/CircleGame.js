import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function CircleGame() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [score, setScore] = useState(null);

  const startDraw = (e) => {
    setDrawing(true);
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
    if (points.length < 10) {
      setScore("Too few points to score");
      return;
    }

    const centerX = points.reduce((sum, p) => sum + p[0], 0) / points.length;
    const centerY = points.reduce((sum, p) => sum + p[1], 0) / points.length;
    const radii = points.map(([x, y]) => Math.hypot(x - centerX, y - centerY));
    const avg = radii.reduce((a, b) => a + b, 0) / radii.length;
    const variance = radii.reduce((sum, r) => sum + Math.abs(r - avg), 0) / radii.length;
    const score = Math.max(0, 100 - variance).toFixed(2);
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
    <div>
      <h2>Draw a Perfect Circle</h2>
      <p>Click and drag to draw. Try to make it as circular as possible!</p>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        style={{ border: '1px solid black' }}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
      />
      <p>Your Score: {score}</p>
      <button onClick={clearCanvas}>Clear</button>
      <Link to="/">
        <button>⬅️ Back to Home</button>
      </Link>
    </div>
  );
}

export default CircleGame;
