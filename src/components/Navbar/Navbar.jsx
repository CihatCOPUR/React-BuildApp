import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AuthModal from "../Auth/AuthModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <h1>Kat İrtifakı</h1>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/create">Proje Yükle</Link>
        <Link to="/shares">Kat İrtifakı Hisseleri</Link>
        <Link to="/contact">İletişim</Link>
        <button onClick={openModal} className="login-button">
          Giriş
        </button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
