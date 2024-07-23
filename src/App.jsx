import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shares from './components/Shares/Shares';
import Footer from './components/Footer/Footer';
import './App.css';
import ProjectCreation from './components/Project Create/ProjectCreate';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shares" element={<Shares />} />
            <Route path="/create" element={<ProjectCreation />} />
            <Route path="/contact" element={<div>İletişim Sayfası</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
