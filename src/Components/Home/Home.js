import React from 'react';
import Carosual from './Carosual';
import ChooseUs from './ChooseUs';
import Contact from './Contact';
import GlobalMap from './GlobalMap';
import Products from './Products';
import UpcomingProducts from './UpcomingProducts';
import ViewReview from './ViewReview';

const Home = () => {
    return (
        <div className='lg:px-14'>
                {/* <Banner></Banner> */}
                <Carosual/>
                <Products></Products>
                <UpcomingProducts></UpcomingProducts>
                <Contact></Contact>
                <ChooseUs></ChooseUs>
                <GlobalMap></GlobalMap>
                <ViewReview></ViewReview>
                
        </div>
    );
};

export default Home;