// src/App.jsx
import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // Element variable approach
  let content;
  if (loggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  const toggleLogin = () => {
    setLoggedIn(prev => !prev);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🎟️ Ticket Booking App</h1>

      {/* Toggle Button */}
      <button onClick={toggleLogin}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      {/* Conditional Rendering */}
      {content}
    </div>
  );
};

export default App;
