import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Agriculture from './components/Agriculture';
import Education from './components/Education';
import Energy from './components/Energy';
import Home from './components/Home';
import Housing from './components/Housing';
import Infrastructure from './components/Infrastructure';
import Medical from './components/Medical';
import NGO from './components/NGO';
import Retail from './components/Retail';
import Transportation from './components/Transportation';

const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path='/agriculture' element={<Agriculture />} />
        <Route path='/energy' element={<Energy />} />
        <Route path='/housing' element={<Housing />} />
        <Route path='/infrastructure' element={<Infrastructure />} />
        <Route path='/medical' element={<Medical />} />
        <Route path='/ngo' element={<NGO />} />
        <Route path='/retail' element={<Retail />} />
        <Route path='/transportation' element={<Transportation />} />
      </Routes>
      </Router> 
    </>
  )
}

export default App
