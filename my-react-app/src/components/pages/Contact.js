// src/HomePage.js
import React from 'react';
import MapComponent from './MapComponent';
import './contactus.css';

function Contact() {
  return (
    <div className="container">
      <div className='card mt-4'>
        <div className='card-body mt-4'>
            <h1 className='display-3'>Contact Lapsa</h1>
            <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default Contact;