import React from 'react';

const ReviewCard = ({review}) => {
    const {name, description, ratings} = review;
    return (
        <div>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <span> Ratings: {ratings}</span>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;