import React, { useEffect, useState } from 'react';
import { Link, useParams, } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])

    return (
        <div>
            <h2>Welcome to products detail</h2>

            <h2>Name : {service.name}</h2>
            <h2>Description : {service.description}</h2>
            <h2>Price : {service.price}</h2>
            <h2>Quantity : {service.quantity}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-info'>Proceed </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;