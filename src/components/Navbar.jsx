import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Kat İrtifakı</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shares">Kat İrtifakı Hisseleri</Link>
        <Link to="/contact">İletişim</Link>
      </div>
    </nav>
  );
};

export default Navbar;
