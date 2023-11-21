import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Review = () => {
    const [user, loading, error] = useAuthState(auth);
    const addReview =data=>{
        data.preventDefault()
      const name = data.target.name.value;
      const email = data.target.email.value;
      const description = data.target.description.value;
      const ratings = data.target.ratings.value
      const addReview={
          name: name,
          email:email,
          description:description,
          ratings :ratings,

      }
      fetch('https://tools-mart-server.vercel.app/review', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(addReview)
    })
    .then(res =>res.json())
    .then(data => {
        if(data){
            toast.success('Review successfuly added')
            data.target.reset();
        }else{
            toast.error('Review not added')
        }
    })
    }
    return (
        <div>
            <h1 className='text-2xl mt-5 font-bold text-center btn btn-outline mb-5'>ADD REVIEW</h1>
            <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
           <form onSubmit={addReview}>
           <input  name='name'  type="text" value={user.displayName} disabled class="input mb-4 w-full max-w-xs" />
           <input  name='email' type="text" value={user.email} disabled class="input mb-4 w-full max-w-xs" />
           <br/>

           <textarea required name='description' class="textarea w-full my-3 textarea-info" placeholder="write reviews..."></textarea>
           <input required name='ratings' type="text" placeholder="Ratings" class="input input-bordered input-primary w-full max-w-xs" />
           <input type='submit' className='btn btn-success btn-outline mt-4 w-full ' value='Add Review'></input>
           </form>
            </div>
            </div>
        </div>
    );
};

export default Review;