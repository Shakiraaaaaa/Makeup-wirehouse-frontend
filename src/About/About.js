import React from 'react';
import camera from '../../src/images/camera.jpg'
import '../About/About.css'

const About = () => {
    return (
        <div>

            <div className='product'>
                <img src={camera} alt="" />
                <div >
                    <h1>Photographer Shakira</h1>
                    <p>Photographers use a variety of photographic equipment to capture events, people, objects or scenes for records, art or commercial use. Many photographers begin their careers as photographic assistants, setting up lights and stands, arranging transport and occasionally acting as a 'second shooter'.</p>
                </div>
            </div>

        </div>
    );
};

export default About;