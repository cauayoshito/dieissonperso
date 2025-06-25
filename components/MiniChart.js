// components/MiniChart.js
import React from "react";

export default function MiniChart({ data }) {
  // encontra o maior valor pra normalizar o gráfico
  const max = Math.max(...data.map((d) => d.value));
  // mapeia em coordenadas x,y de 0–100
  const points = data
    .map((d, i) => {
      const x = (100 / (data.length - 1)) * i;
      const y = 100 - (d.value / max) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="w-full h-32">
      <polyline fill="none" stroke="#22c55e" strokeWidth="2" points={points} />
    </svg>
  );
}
