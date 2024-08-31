// src/HomePage.js
import React, { useState } from 'react';
import './storage.css';
import { Link, useNavigate } from 'react-router-dom';
import Slideshow from './slideshow';
import Footer from './Footer';
import Homepage from './Homepage';
import MapComponent from './MapComponent';
import FacebookLink from './FollowUs';
import image from '../images/360_F_280568035_7to3KEUviNQgGjXMPGLveHJsFSDmxEIv.jpg';
import digitalprinting from '../images/1000040016.jpg';
import colonel from '../images/colonel.png';
import msg from '../images/png-clipart-ios-message-icon-iphone-message-computer-icons-text-messaging-messenger-electronics-grass.png';
import facebook from '../images/2048px-Facebook_icon_2013.svg.png';
import whatsapp from '../images/pngtree-whatsapp-icon-png-image_3584845.jpg';
import x from '../images/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10806.jpg';
import tiktok from '../images/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png';
import instagram from '../images/2048px-Instagram_icon.png';
import gmail from '../images/gratis-png-direccion-de-correo-electronico-iconos-de-la-computadora-logo-usuario-gmail.png';
import youtube from '../images/social-media-icon-illustration-youtube-youtube-icon-vector-illustration_561158-2132.jpg';
import telephone from '../images/phone-512.png';
import SearchBar from './SearchBar';
import WhatsAppSender from './WhatsApp';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    //perform search logic here, e.g., filter data or make an API call
    const results = performSearch(query);
    setSearchResults(results);
  };

  const performSearch = (query) => {
    //Example search logic: filter an array of items
    const items = ['apple', 'banana', 'orange', 'grape'];
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  };


  return (
    <div className="container-flex">
      <Homepage />


      <button className='btnaccounts' onClick={handleLoginRedirect}>Sign In</button>
      <button className='btnaccounts2' onClick={handleRegisterRedirect}>Sign Up</button>

      <hr />
      <div className='ourdetails bg-dark'>
        <div className="row row-cols">
        <div className='col-lg-4 col-sm-12'>
        <div className='pars'>
            <h1 className='aboutus text-white p-2'>About Us</h1>
            <p className='par1 text-white'>This is the leading site in the world where you can learn modern technologies as well as collaborate with other experts worldwide. If you are looking forward to learning the basics as well as advanced Technological courses in the Computer Science field, then you are at the right place, whether you are a beginner or an expert who would like to advance. We have step-by-step tutorials that will help you become an expert in any IT field.</p>
          </div>
        </div>

        <div className='col-lg-4 col-sm-12 '>
        <div className='pars'>
            <h1 className='aboutus text-white p-2'>Our Motto</h1>
            <p className='par1 text-white'>This is the leading site in the world where you can learn modern technologies as well as collaborate with other experts worldwide. If you are looking forward to learning the basics as well as advanced Technological courses in the Computer Science field, then you are at the right place, whether you are a beginner or an expert who would like to advance. We have step-by-step tutorials that will help you become an expert in any IT field.</p>
          </div>
        </div>

        <div className='col-lg-4 col-sm-12'>
        <div className='pars'>
            <h1 className='aboutus text-white p-2'>Our Vision</h1>
            <p className='par1 text-white'>This is the leading site in the world where you can learn modern technologies as well as collaborate with other experts worldwide. If you are looking forward to learning the basics as well as advanced Technological courses in the Computer Science field, then you are at the right place, whether you are a beginner or an expert who would like to advance. We have step-by-step tutorials that will help you become an expert in any IT field.</p>
          </div>
        </div>
        <hr />
        </div>

        <div className="container p-5 mt-5">
        <h1 className='aboutus text-white text-center p-2'>Our Services</h1>
          <div className="row row-cols gy-3">
            <div className="col col-xl-3 col-lg-6 col-12">
              <div className="box">
                <img src={digitalprinting} alt='digitalprinting'/>
                <p className="nametag1">Digital Printing <br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
                <Link to="./Gallery"><img  src={digitalprinting} alt='digitalprinting'/></Link>
              
              <p className="nametag1">Large Format Printing</p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={digitalprinting} alt='digitalprinting'/>
              <p className="nametag1">Binding<br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={digitalprinting} alt='digitalprinting'/>
              <p className="nametag1">Signage<br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
          </div>
          <hr />
          
          <div className="row row-cols gy-3">
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={digitalprinting} alt='digitalprinting'/>
              <p className="nametag1">Graphic Design <br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={digitalprinting} alt='digitalprinting'/>
              <p className="nametag1">Video Editing<br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={digitalprinting} alt='digitalprinting'/>
              <p className="nametag1">Photoshop<br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={digitalprinting} alt='digitalprinting'/>
              <p className="nametag1">Digital Marketing<br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
          </div>
        </div>
        <hr />

      <div className="pars1">
      <h1 className='aboutus text-white p-2 text-center'>Why Inklab</h1>
          <div className="row row-cols">
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="quality text-white">
              <h4>#1. Best Quality</h4>
              <p className='p text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi nesciunt, dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
            <div className="quality text-white rounded">
            <h4>#2. Affordable Prices</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi nesciunt, dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
            <div className="quality text-white rounded">
            <h4>#3. Affordable Prices</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi nesciunt, dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
            <div className="quality text-white rounded">
            <h4>#4. Top Speed</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi nesciunt, dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              </div>
            </div>
          </div>
      </div>
      <hr />
      <div className="pars1">
        <h1 className='aboutus text-white text-center'>Our Clients</h1>
        <div className="row row-cols gy-3">
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={colonel} alt='digitalprinting'/>
              <p className="nametag1">Lapsa AI <br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={colonel} alt='digitalprinting'/>
              <p className="nametag1">Lemeiyan Foundation<br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={colonel} alt='digitalprinting'/>
              <p className="nametag1">Malala Foundation<br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
              <img src={colonel} alt='digitalprinting'/>
              <p className="nametag1">The Government Of Kenya<br/></p>
                {/* <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>*/}              </div>
            </div>
          </div>
        </div>

      <div className="inklabteam bg-dark rounded border border-1 border-white">
      <h1 className='aboutus text-white text-center mb-5 '>Our Team</h1>
        <div className="row row-cols gy-3">
            <div className="col col-xl-3 col-lg-6 col-12">
              <div className="teambox">
                <img className='teamimg' src={colonel} alt='digitalprinting'/>
                <p className="nametag">Hon. Dr. Ismail Atudo<h6>-Inklab Director & Co-Founder</h6></p>
                <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="teambox">
                <Link to="./Gallery"><img className='teamimg' src={colonel} alt='digitalprinting'/></Link>
              
              <p className="nametag">Dr. Clifford Matara<h6>-Inklab Director & Co-Founder</h6></p>
              <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="teambox">
                <img className='teamimg' src={colonel} alt='digitalprinting'/>
                <p className="nametag">Pius<h6>-Inklab Chief Designer</h6></p>
                <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
              <div className="teambox">
              <img className='teamimg' src={colonel} alt='digitalprinting'/>
              <p className="nametag">Brian<h6>-Inklab Designer</h6></p>
              <p className='history'>Lorem dicta debitis quam possimus quia, maxime tempora accusamus aut blanditiis non et autem. Debitis quaerat repellendus officia maiores labore.</p>
              </div>
            </div>
            <WhatsAppSender />
        </div>
      </div>
      <hr />
      
      <div className="contactinklab">
        <div className="row row-cols">


            <div className="col">
              <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                <img className='imej' src={facebook} alt='facebook' />
              </a>
            </div>

            <div className="col">
            <a href='https://x.com/' target='_blank' rel='noopener noreferrer' >
                <img className='imej' src={x} alt='twitter' />
            </a>
            </div>

            <div className="col">
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' >
                <img className='imej' src={instagram} alt='instagram' />
            </a>
            </div>

            <div className="col">
            <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' >
                <img className='imej' src={youtube} alt='youtube' />
            </a>
            </div>

            <div className="col">
            <a href='https://wa.me/0111608331' >
                <img className='imej' src={whatsapp} alt='whatsapp' target='_blank' rel='noopener noreferrer' />
            </a>
            </div>

            <div className="col">
            <a href='tel:+254111608331'>
                <img className='imej' src={telephone} alt='telephone' />
            </a>
            </div>

            <div className="col">
            <a href='sms:+254111608331'>
                <img className='imej' src={msg} alt='message' />
            </a>
            </div>

            


            <div className="col">
            <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer' >
                <img className='imej' src={tiktok} alt='tiktok' />
            </a>
            </div>

            <div className="col">
            <a href='https://mail.google.com/' target='_blank' rel='noopener noreferrer' >
                <img className='imej' src={gmail} alt='email' />
            </a>
            </div>
        </div>
    </div>
      <hr />
              <Footer />
    </div>
    </div>
  );
}


export default HomePage;
