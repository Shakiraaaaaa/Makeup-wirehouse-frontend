import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5  text-white pb-5 pt-5'>
            <h1>copyright @ {year}</h1>
        </footer>
    );
};

export default Footer;