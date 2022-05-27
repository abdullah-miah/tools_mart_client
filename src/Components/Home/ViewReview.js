import React, { useEffect, useState } from 'react';
import ReviewCard from '../Home/ReviewCard.js'

const ViewReview = () => {
    const [reviews , setReviews]= useState([]);

useEffect(()=>{
            fetch(`http://localhost:5000/clientReview`)
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
            <h1 className='text-3xl stat-value  text-primary mt-20 text-center mt-12'>Customer Review</h1>
            <p className='uppercase  text-red-400 text-center mb-14'>clients love</p>
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-0'>
            {
                reviews.slice(0,3).map(review=><ReviewCard
                key={review._id}
                review = {review}
                ></ReviewCard>)
            }
        </div>
        </div>
    );
};

export default ViewReview;