// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import HomePage from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import LoginForm from './components/pages/LoginForm';
import RegistrationForm from './components/pages/RegistrationForm';
import Register from './components/pages/Register';
import Homepage from './components/pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/registerr" element={<Register />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;