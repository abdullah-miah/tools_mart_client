import React from 'react';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ReviewCard = ({review}) => {
    const {name, description, ratings} = review;
    return (
        <div className='mt-12'>
        <div class="card w-96 bg-base-100 hover:border-black border-2">
            <div class="card-body items-center text-center">
                <h2 class="card-title">
                <FontAwesomeIcon icon={faUser} />
                    {name}</h2>
                <p className='text-purple-400 font-bold text-slate-400'>{description}</p>
                <p>Ratings:  <span className='font-bold text-red-400'>{ratings}</span></p>
            </div>
            </div>
        </div>
    );
};

export default ReviewCard;