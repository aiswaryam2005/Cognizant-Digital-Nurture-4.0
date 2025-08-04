// src/App.jsx
import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

const App = () => {
  const flag = false; // Change to false to test IndianPlayers

  return (
    <div>
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;
