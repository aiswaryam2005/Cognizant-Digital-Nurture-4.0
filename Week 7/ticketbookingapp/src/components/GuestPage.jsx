// src/components/GuestPage.jsx
import React from 'react';

const GuestPage = () => {
  return (
    <div>
      <h2>✈️ Flight Details (Guest View)</h2>
      <p>You must log in to book tickets.</p>
      <ul>
        <li>Flight: AI 302 | From: Chennai | To: Delhi | Time: 10:00 AM</li>
        <li>Flight: SG 205 | From: Mumbai | To: Bangalore | Time: 1:30 PM</li>
      </ul>
    </div>
  );
};

export default GuestPage;
