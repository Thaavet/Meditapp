import React, { useState } from 'react';
import './App.css';
import './components/buttons/buttons.css';
import Navbar from './components/navbar/navbar.jsx';
import { Timerpage } from './pages/TimerPage.jsx';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import { Home } from './pages/Home.jsx';
import { Contacts } from './pages/Contacts.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
 
const [showsettings, setshowsettings] = useState(true);
  return (
  <>
  <Navbar />
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/timer" element={< Timerpage />} />
    <Route path="/" element={<Home />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>



  <Footer />

    
    


  </>
  );
}

export default App;