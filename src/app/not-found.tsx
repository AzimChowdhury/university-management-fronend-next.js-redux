import React from 'react';
import notFound from '../assets/404.jpg'
import Image from 'next/image';

const NotFound = () => {
    return (
        <div>
            <Image fill={true} src={notFound} alt="page not found" />
        </div>
    );
};

export default NotFound;