// src/HomePage.js
import React from 'react';
import Slideshow from './slideshow';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className='card mt-4'>
        <div className='card-body mt-4'>
            <h1 className='display-3'>About Lapsa</h1>
            <Slideshow />

        </div>
      </div>
    </div>
  );
}

export default About;