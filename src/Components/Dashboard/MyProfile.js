import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProfileDetails from './ProfileDetails';

const MyProfile = () => {
  const [users, setUsers]=useState([]);
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/myprofile?email=${user.email}`,{
        method: 'GET',
              headers: {
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
      })
      .then(res => res.json())
      .then(data => setUsers(data))
    }
  },[user])
    
  return (
    <div className='mt-8'>
      <h1 className='text-2xl font-bold text-center btn btn-outline'>My profile</h1>
      <div className='h-screen mt-4'>
        {
          users.map(u=><ProfileDetails
          key={user._id}
          u={u}
          ></ProfileDetails>)
        }
      </div>
    </div>
  );
};

export default MyProfile;