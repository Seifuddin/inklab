// src/HomePage.js
import React from 'react';
import './Footer.css';
import image from '../images/360_F_280568035_7to3KEUviNQgGjXMPGLveHJsFSDmxEIv.jpg';
import inklablogo from '../images/1000040014.jpg';

function Footer() {
  return (
    <div className="footer">
        <div className="inklabfuter">
                <img className='inklablogo' src={inklablogo} alt='email' />
         </div>
         <h1 className='footer-header mt-3'>Inklab Digital Printers</h1>
         <h3 className='footer-header mt-3'>Lets Go Printing</h3>
         <h6 className='footer-header mt-3'>Design || Brand || Print</h6>
         <hr />

         <div className='futa-info mt-5'>
            <div className='row'>
                <div className='col-xl-4 col-lg-4 col-sm-12'>
                    <div className='futabox text-white text-center'>
                        <h4>Other Services</h4>
                        <h5>Margazines:</h5>

                        <h5>Fliers:</h5>

                        <h5>Vouchers:</h5>

                        <h5>Certificates:</h5>

                        <h5>Envelopes:</h5>

                        <h5>Letterhead:</h5>

                        <h5>Brochures:</h5>

                        <h5>Eulogies:</h5>

                        <h5>Book Covers:</h5>

                        <h5>Stickers:</h5>

                        <h5>Menus:</h5>

                        <h5>Calenders:</h5>
                    </div>
                </div>

                <div className='col-xl-4 col-lg-4 col-sm-12'>
                    <div className='futabox text-white text-center'>
                        <h4>Contact Us</h4>
                        <h5>Telephone:</h5>
                        <h6>0700 070 949</h6>

                        <h5>WhatsApp:</h5>
                        <h6>0700 070 949</h6>

                        <h5>Email:</h5>
                        <h6>inklabdigitalprinters@gmail.com</h6>

                        <h5>Facebook:</h5>
                        <h6>Inklab Digital Printers</h6>

                        <h5>Instagram:</h5>
                        <h6>Inklab Digital Printers</h6>

                        <h5>Twitter:</h5>
                        <h6>Inklab Digital Printers</h6>

                        <h5>Youtube:</h5>
                        <h6>Inklab Digital Printers</h6>

                        <h5>Tiktok:</h5>
                        <h6>Inklab Digital Printers</h6>
                    </div>
                </div>

                <div className='col-xl-4 col-lg-4 col-sm-12'>
                    <div className='futabox text-white text-center'>
                        <h4>Visit Us</h4>

                        <h5>This Is Our Main Office:</h5>
                        <h5>Street:</h5>
                        <h6>Kweria Road</h6>

                        <h5>Building:</h5>
                        <h6>Globe View Plaza</h6>

                        <h5>Floor:</h5>
                        <h6>First Floor</h6>

                        <h5>Room No.:</h5>
                        <h6>Room T11</h6>

                        <h5>City:</h5>
                        <h6>Nairobi City County</h6>

                        <h5>Off Khoja Roundabout:</h5>
                        <h6>Nairobi CBD</h6>

                        <h5>Thank You For Visiting Us:</h5>
                        <h6>Inklab Digital Printers</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyright text-center text-white bg-dark mt-5'>
            <p>Copyright 2022-2024 by lapsa artificial intellince.All Rights Reserved.This website is Designed and maintained by Muriithi Nguru and powered by Lapsa Artificial Intelligence</p>
         </div>

    </div>
  );
}

export default Footer;