// src/components/CurrencyConvertor.jsx
import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Synthetic event
    const euroValue = parseFloat(rupees) / 90; // Example rate
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div>
      <h2>💱 Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter amount in ₹ INR:</label><br />
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Convert</button>
      </form>
      {euros && (
        <p>💶 Euro Equivalent: €{euros}</p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
