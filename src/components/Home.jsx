import React from 'react';
import { FaAmbulance, FaBolt, FaBuilding, FaGraduationCap, FaHome, FaSeedling, FaShuttleVan, FaStoreAlt } from 'react-icons/fa';
import { FaBuildingNgo } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
    <h1>Sectoral Overviews</h1>
    <div className="card-container">
      <div className="card education">
        <FaGraduationCap className="card-icon text-gray-500" />
        <Link to={"/education"}><span>Education</span></Link>
      </div>
      <div className="card agriculture">
        <FaSeedling className="card-icon text-green-500" />
        <Link to={"/agriculture"}><span>Agriculture</span></Link>
      </div>
      <div className="card infrastructure">
        <FaBuilding className="card-icon text-gray-500" />
        <Link to={"/infrastructure"}><span>Infrastructure</span></Link>
      </div>
      <div className="card retail">
        <FaStoreAlt className="card-icon text-gray-500" />
        <Link to={"/retail"}><span>Retail</span></Link>
      </div>
      <div className="card medical">
        <FaAmbulance className="card-icon text-red-500" />
        <Link to={"/medical"}><span>Medical</span></Link>
      </div>
      <div className="card housing">
        <FaHome className="card-icon text-gray-500" />
        <Link to={"/housing"}><span>Housing</span></Link>
      </div>
      <div className="card energy">
        <FaBolt className="card-icon text-yellow-500" />
        <Link to={"/energy"}><span>Energy</span></Link>
      </div>
      <div className="card transportation">
        <FaShuttleVan className="card-icon text-gray-500" />
        <Link to={"/transportation"}><span>Transportation</span></Link>
      </div>
      <div className='card ngo'>
      <FaBuildingNgo className="card-icon text-gray-500"/>
      <Link to={"/ngo"}><span>NGO</span></Link>
      </div>
    </div>
    </>
  );
};

export default Home;