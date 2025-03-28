import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Show from '../Components/Show';
import Home from '../Components/Home';
import Services from '../Components/Services';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">Services</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
