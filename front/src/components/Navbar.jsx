import React from 'react';
import '../styles/Navbar.css';

function Navbar({ onSelect }) {
  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => onSelect('home')}>
        <img src="/logo.png" alt="Tsehayinesh" className="logo-img" />
        <h1 className="logo-name">Tsehayinesh Belete</h1>
      </div>
    </nav>
  );
}

export default Navbar;
