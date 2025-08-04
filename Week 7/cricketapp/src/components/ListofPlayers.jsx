// src/components/ListofPlayers.jsx
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 55 },
    { name: "Dhoni", score: 90 },
    { name: "Raina", score: 68 },
    { name: "KL Rahul", score: 75 },
    { name: "Hardik", score: 66 },
    { name: "Jadeja", score: 45 },
    { name: "Bumrah", score: 78 },
    { name: "Ashwin", score: 62 },
    { name: "Gill", score: 92 },
    { name: "Surya", score: 88 }
  ];

  // Filter players with score < 70 using arrow function
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
