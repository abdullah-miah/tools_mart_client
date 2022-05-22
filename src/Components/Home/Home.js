import React from 'react';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div className='lg:px-14'>
                <Banner></Banner>
                <Products></Products>
        </div>
    );
};

export default Home;