import React, { useState } from 'react';
import "../styles/Education.css";

const Education = () => {
  // State variables to manage numbers
  const [totalVendors, setTotalVendors] = useState(0);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [inflow, setInflow] = useState(0);
  const [expiry, setExpiry] = useState(0);

  // Function to update numbers based on selected time interval
  const handleTimeIntervalChange = (timeInterval) => {
    // Here you can implement logic to fetch updated numbers based on the selected time interval
    // For demonstration, I'm just updating numbers randomly
    setTotalVendors(Math.floor(Math.random() * 100)); // Example: Random number between 0 and 100
    setPendingRequests(Math.floor(Math.random() * 50)); // Example: Random number between 0 and 50
    setInflow(Math.floor(Math.random() * 10000000)); // Example: Random number between 0 and 10000
    setExpiry(Math.floor(Math.random() * 50000000)); // Example: Random number between 0 and 5000
  };

  return (
    <>
    <h1>Education</h1>
    <div className="containe">
      <div className="bar">
        {/* Bar with time interval options */}
        <button onClick={() => handleTimeIntervalChange('1D')}>1D</button>
        <button onClick={() => handleTimeIntervalChange('1M')}>1M</button>
        <button onClick={() => handleTimeIntervalChange('6M')}>6M</button>
        <button onClick={() => handleTimeIntervalChange('1Y')}>1Y</button>
        <button onClick={() => handleTimeIntervalChange('MAX')}>MAX</button>
      </div>
      <div className="cars">
        {/* Cards displaying numbers */}
        <div className="car">Total vendors: {totalVendors}</div>
        <div className="car">Pending requests: {pendingRequests}</div>
        <div className="car">Inflow: Rs {inflow} <span className="green">▲</span></div>
        <div className="car">Expiry: Rs {expiry} <span className="red">▼</span></div>
      </div>
    </div>
    </>
  );
};

export default Education;
