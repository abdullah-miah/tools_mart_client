import React from 'react';
import Banner from './Banner';
import Expart from './Expart';
import Products from './Products';
import Summary from './Summary';
import UpcomingProducts from './UpcomingProducts';
import ViewReview from './ViewReview';

const Home = () => {
    return (
        <div className='lg:px-14'>
                <Banner></Banner>
                <Products></Products>
                <UpcomingProducts></UpcomingProducts>
                <Summary></Summary>
                <ViewReview></ViewReview>
                <Expart></Expart>
        </div>
    );
};

export default Home;