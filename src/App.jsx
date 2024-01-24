import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar.jsx';
import Timer from './timer.jsx';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import { Home } from './pages/Home.jsx';
import { Contacts } from './pages/Contacts.jsx';
import Footer from './footer.jsx';

function App() {
 
const [showsettings, setshowsettings] = useState(true);
  return (
  <>
  <Navbar />
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/timer" element={<Timer />} />
    <Route path="/" element={<Home />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>



  <Footer />

    
    


  </>
  );
}

export default App;