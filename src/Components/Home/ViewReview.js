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
            <h1 className='text-3xl text-success text-center mt-12'>Customer Review</h1>
        <div className=' grid grid-cols-1 grid-cols-3 mt-3 lg:mt-0'>
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