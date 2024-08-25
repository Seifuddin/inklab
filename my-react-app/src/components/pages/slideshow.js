import React, { useState, useEffect } from "react";
import image from '../images/360_F_280568035_7to3KEUviNQgGjXMPGLveHJsFSDmxEIv.jpg';
import digitalprinting from '../images/1000040016.jpg';
import inklab from '../images/1000040014.jpg';
import './slideshow.css'

const slides = [
    { src: inklab, alt: 'Image 4'},
    { src: digitalprinting, alt: 'Image 2'},
    { src: image, alt: 'Image 1'},
    { src: digitalprinting, alt: 'Image 3' }];

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);// change slide every 3 seconds

        return () => clearInterval(interval); // clean up interval on component unmount
    }, []);

    return (
        <div className="slideshow">
            <hr />
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{display: index === currentSlide ? 'block' : 'none' }}
                >
                    <img src={slide.src} alt={slide.alt} />
                </div>
            ))}
            <hr />
        </div>
    );
};

export default Slideshow;