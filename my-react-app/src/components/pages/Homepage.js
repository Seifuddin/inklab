import React from "react";
import './Homepage.css';
import SearchBar from './SearchBar';
import { Link, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
      };
    
      const handleRegisterRedirect = () => {
        navigate('/register');
      };
    return (
        <div className="homepage-container">
            <div className="background-image"></div>
            <div className="context">
                <h1> Inklab Digital Printers</h1>
                <p>lets go printing...</p>
                <button className="getstarted-btn">Get Started...</button>
            </div>

        </div>
    );
}

export default Homepage;



