import React from 'react';
import digitalprinting from '../images/1000040016.jpg';

const FacebookLink = () => {
    return (
        <div>
            <a href="https://www.facebook.com/profile.php?id=100092361708439" target="_blank" rel="noopener noreferrer">
            <img className='teamimg' src={digitalprinting} alt='digitalprinting' />
            </a>
        </div>
    );
};

export default FacebookLink;