import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='nav'>
        <div className="left-section">
          <Link to="/" ><img className="nav-logo" src={logo} alt="logo" /> <h1 className='site-title'>Meditapp</h1></Link>
          <div className="nav-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <Link to={"/about"}>About Meditation</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/contacts"> Contacts </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}