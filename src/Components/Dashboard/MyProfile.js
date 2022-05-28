import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [users, setUsers]=useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(()=>{
    if(user){
      fetch(`http://localhost:5000/myprofile?email=${user.email}`)
      .then(res => res.json())
      .then(data => console.log(data))
    }
  },[user])
    
  return (
    <div>
      
    </div>
  );
};

export default MyProfile;