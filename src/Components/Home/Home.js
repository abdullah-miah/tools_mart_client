import React from 'react';
import Banner from './Banner';
import Expart from './Expart';
import Products from './Products';
import Summary from './Summary';

const Home = () => {
    return (
        <div className='lg:px-14'>
                <Banner></Banner>
                <Products></Products>
                <Summary></Summary>
                <Expart></Expart>
        </div>
    );
};

export default Home;