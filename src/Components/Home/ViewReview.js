import React, { useEffect, useState } from 'react';
import ReviewCard from '../Home/ReviewCard.js'
import tinypicred from "../../image/tinyred.png"

const ViewReview = () => {
    const [reviews , setReviews]= useState([]);

useEffect(()=>{
            fetch(`https://limitless-everglades-10134.herokuapp.com/clientReview`)
              .then(res => {
                  return res.json()
              })
        .then(data => {
            console.log(data)
           return setReviews(data)
        });
    },[])
    return (
        <div>
            <h1 className='text-3xl text-black mt-12 text-center mt-12'>Client Testimonials</h1>
            <div className='flex justify-center items-center'>
                <img src={tinypicred}/>
            </div>
            <p className='text-center text-black'>We have worked with hundreds of different clients around the globe. Check what a selection of them have to say about us.</p>
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-0'>
            {
                reviews.slice(0,3).map(review=><ReviewCard
                key={review._id}
                review = {review}
                ></ReviewCard>)
            }
        </div>
        <p className='text-3xl text-black font-bold text-center p-8'>Discover how our 40 years of industry expertise can transform your business and explore the possibilities of our quality tools, competitive pricing and exceptional service standards.</p>
        <div className='flex justify-center items-center'>
        <button className='btn mt-4 bg-black'><a className='uppercase' href='#'>Become our partner now</a></button>
        </div>
        <div className='flex justify-between items-center p-8 rounded-md mt-20 bg-black' >
            <div>
                <h1 className='uppercase text-white text-2xl font-bold'>The Leading manufacturer of Application specific tools. </h1>
            </div>
            <div>
                <button className='btn bg-white text-black hover:text-white'>Contact us Now</button>
            </div>
        </div>
        

        </div>
    );
};

export default ViewReview;