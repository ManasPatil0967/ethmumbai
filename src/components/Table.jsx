import React, { useState } from 'react';
import "../styles/Table.css";

const Table = () => {
  // Sample data
  const [members, setMembers] = useState([
    { id: 1, vendor: 'DJSCE', location: 'Mumbai', recentlyActive: 'djsce@edu.in' },
    { id: 2, vendor: 'SPIT', location: 'Thane', recentlyActive: 'SPIT@spit.org' },
    { id: 3, vendor: 'KJSCE', location: 'Delhi', recentlyActive: 'KJSCE@kjsce.edu.in' },
    { id: 4, vendor: 'VESIT', location: 'Ahemdabad', recentlyActive: 'VESIT@edmi.in' },
    { id: 5, vendor: 'TCET', location: 'Bangalore', recentlyActive: 'TCET@edu.in' },
  ]);

  // State for filter input
  const [filterInput, setFilterInput] = useState('');

  // Function to filter members based on input
  const handleFilter = (columnName) => {
    setMembers(prevMembers =>
      prevMembers.filter(member =>
        member[columnName].toLowerCase().includes(filterInput.toLowerCase())
      )
    );
  };

  return (
    <div className="table-container">
      <h2>Vendors</h2>
      <div className="filter-section">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
        />
        <div className="filter-buttons">
          <button className="btn btn-primary" onClick={() => handleFilter('vendor')}>Filter Vendor</button>
          <button className="btn btn-primary" onClick={() => handleFilter('location')}>Filter Location</button>
          <button className="btn btn-primary" onClick={() => handleFilter('recentlyActive')}>Filter Recently Active</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Location</th>
            <th>Recently Active</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.vendor}</td>
              <td>{member.location}</td>
              <td>{member.recentlyActive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
