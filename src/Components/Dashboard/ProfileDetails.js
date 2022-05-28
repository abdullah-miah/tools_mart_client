import React from 'react';
import {  useNavigate } from 'react-router-dom';

const ProfileDetails = ({user, u}) => {
    const navigate=useNavigate();
    const update=id=>{
        navigate(`/dashboard/updatedprofile/${id}`)
      } 
    return (
        <div>
<div class="hero min-h-screen w-full bg-base-100">
  <div class="hero-content flex-col lg:flex-row">
  <img src={u.img} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      {user?<h1 class="text-5xl text-primary font-bold">Name: {user.displayName}</h1>
      :<h1 class="text-5xl text-primary font-bold">Name: {u.name}</h1>}
      <p className='text-xl mt-3'>Education: {u.education}</p>
      <p className='text-xl mt-3'>Location: {u.location}</p>
      <p className='text-xl mt-3'>Phone Number: {u.phone}</p>
      <p className='text-xl my-3'>Linkdin: {u.linkdin}</p>
      <button className='mt-6 btn btn-success text-white' onClick={()=>update(u._id)} class="btn btn-success">Update Profile</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default ProfileDetails;