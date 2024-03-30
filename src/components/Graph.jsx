import React from 'react';
import expiry from "../assets/expiry.png";
import inflows from "../assets/inflows.png";

const Graph = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <img src={inflows} alt="Inflows" style={{ width: '750px', height: 'auto' }}/>
        <p style={{ textAlign: 'center', fontWeight: 'bolder' }}>Inflows</p>
      </div>
      <div>
        <img src={expiry} alt="Expiry" style={{ width: '750px', height: 'auto' }}/>
        <p style={{ textAlign: 'center', fontWeight: 'bolder' }}>Expiry</p>
      </div>
    </div>
  );
};

export default Graph;
