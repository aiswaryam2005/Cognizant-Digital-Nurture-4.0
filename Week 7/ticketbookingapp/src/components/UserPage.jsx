// src/components/UserPage.jsx
import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h2>🧑‍✈️ Book Your Tickets (User View)</h2>
      <p>Select your flight and proceed to payment.</p>
      <ul>
        <li>
          Flight: AI 302 | Chennai → Delhi | <button>Book Now</button>
        </li>
        <li>
          Flight: SG 205 | Mumbai → Bangalore | <button>Book Now</button>
        </li>
      </ul>
    </div>
  );
};

export default UserPage;
