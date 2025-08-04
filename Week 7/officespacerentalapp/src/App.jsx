// src/App.jsx
import React from 'react';

const App = () => {
  // Office object
  const mainOffice = {
    name: "Skyview Business Hub",
    rent: 55000,
    address: "Level 5, Anna Nagar, Chennai"
  };

  // List of office spaces
  const officeList = [
    {
      id: 1,
      name: "Regus Office Suite",
      rent: 75000,
      address: "Tidel Park, Chennai"
    },
    {
      id: 2,
      name: "Startup Square",
      rent: 45000,
      address: "Perungudi, Chennai"
    },
    {
      id: 3,
      name: "Tech Hub",
      rent: 60000,
      address: "Guindy, Chennai"
    }
  ];

  // Rent color style function
  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {/* JSX Heading */}
      <h1>Office Space Rental App</h1>

      {/* JSX Attribute: Image */}
      <img
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
        alt="Office Space"
        width="600"
        style={{ borderRadius: "8px", marginBottom: "20px" }}
      />

      {/* JSX with JavaScript expressions */}
      <h2>Main Office Details</h2>
      <p><strong>Name:</strong> {mainOffice.name}</p>
      <p><strong>Address:</strong> {mainOffice.address}</p>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={getRentStyle(mainOffice.rent)}>{mainOffice.rent}</span>
      </p>

      <h2>Other Office Spaces</h2>
      <ul>
        {officeList.map((office) => (
          <li key={office.id} style={{ marginBottom: "10px" }}>
            <p><strong>Name:</strong> {office.name}</p>
            <p><strong>Address:</strong> {office.address}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={getRentStyle(office.rent)}>{office.rent}</span>
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
