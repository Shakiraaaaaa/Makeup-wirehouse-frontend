import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../Bnnner/Banner.css'



import makeup1 from '../../images/makeup1.jfif';
import makeup2 from '../../images/makeup2.jpg';
import makeup3 from '../../images/makeup3.jpg'




const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block  w-90 ps-5 pe-5 mx-auto"
                    src={makeup1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-dark'>Tree tea face wash</h3>
                    <p className='text-dark'>have a clear skin</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-90 ps-5 pe-5 mx-auto"
                    src={makeup2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Sea weed face wash</h3>
                    <p className='text-dark'>Get rid of oily skin</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-90 ps-5 pe-5 mx-auto "
                    src={makeup3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>Vitamin E face wash</h3>
                    <p className='text-dark'>
                        Have beautiful skin
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;