// src/components/IndianPlayers.jsx
import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ["Virat", "Dhoni", "Hardik", "Ashwin", "Gill"];
  const evenPlayers = ["Rohit", "Raina", "Jadeja", "Bumrah", "KL Rahul", "Surya"];

  // Destructuring
  const [p1, p2, ...restOdd] = oddPlayers;
  const [e1, e2, ...restEven] = evenPlayers;

  // Merge two arrays
  const T20players = ["Virat", "Rohit", "Dhoni"];
  const RanjiPlayers = ["Pujara", "Karun Nair"];
  const allPlayers = [...T20players, ...RanjiPlayers]; // Using spread

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        {restOdd.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{e1}</li>
        <li>{e2}</li>
        {restEven.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged T20 & Ranji Players</h2>
      <ul>
        {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
