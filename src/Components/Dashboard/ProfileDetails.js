import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import profilecover from '../../image/img-3_resize.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowsRotate, faGraduationCap, faLocationPin, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const ProfileDetails = ({ u}) => {
    const navigate=useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const update=id=>{
        navigate(`/dashboard/updatedprofile/${id}`)
      } 

      <button className='mt-6 btn btn-success text-white' onClick={()=>update(u._id)} class="btn btn-success">Update Profile</button>
    return (
        <div>
         <div style={{width: "900px", margin: "0 auto"}}>
          <img src={profilecover}/>
         </div>
         <div style={{width: "280px", margin: "0 auto"}} className='flex  justify-center items-center' >
          {u.img? <img style={{marginTop: "-120px", width:"200px", height:"200px", borderRadius: "50%"}} src={u.img}></img>: <img style={{marginTop: "-120px"}} src="https://i.ibb.co/m9Hs0t3/avatar-removebg-preview.png"></img>}
         </div>
         <div  className='flex justify-center items-center mt-4'>
            <div id='shadow' className='text-2xl'>
            <h1> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <span className='ml-2' >Name:</span>   {user.displayName} </h1>
            <p> <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> <span className='ml-2'>Location:</span> {u.location} </p>
            <p> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <span className='ml-2'>Phone Number:</span> {u.phone}  </p>
            <p> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> <span className='ml-2'>Linkdin:</span>  <a target="_blank" className='text-sky-500' href={u.linkdin}>{u.linkdin}</a> </p>
            <p> <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> <span className='ml-2'>Education:</span> {u.education}   </p>
            <button className='btn btn-info mt-4 text-white' onClick={()=>{update(u._id)}}>
                
                Update Profile <FontAwesomeIcon className='ml-2' icon={faArrowsRotate}></FontAwesomeIcon></button>
            </div>
         </div>
         

        </div>
    );
};

export default ProfileDetails;