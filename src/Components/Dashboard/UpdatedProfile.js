import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdatedProfile = () => {
    const {id}=useParams();
    const imageStorageKey='5e572deffd164e63f09e771929bed3ef';
    const UpdateProfile = async data=>{
        data.preventDefault()
        const image = data.target.img.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const name = data.target.name.value;
                const location = data.target.location.value;
                const phone = data.target.phone.value;
                const linkdin = data.target.linkdin.value;
                const education = data.target.education.value;
                const Infromarion = {
                    name: name,
                    img: img,
                    location:location,
                    phone:phone,
                    linkdin:linkdin,
                    education: education  
                }
                // send to your database 
                fetch(`http://localhost:5000/updatedProfile/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(Infromarion)
                })
                .then(res =>res.json())
                .then(inserted =>{
                  
                   return console.log(inserted);  
                
                })

            }
            
        })
        toast.success('Successfuly updated profile')
    }
    return (
        <div className='mt-12'>
            <h1 className='mb-12 text-2xl text-center uppercase text-pink-400'>Add profile Infromarion</h1>
            <form onSubmit={UpdateProfile} >
                <div className='grid grid-cols-1 lg:grid-cols-2 g-0'>
                    <div className='ml-20'>
                       <label className='text-xl '>Full Name</label>
                       <br/>
                       <input  required  name='name' type="text" placeholder="Product name" class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Location</label>
                       <br/>
                       <input required  name='location' type="text" placeholder="Location" class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Phone Number</label>
                       <br/>
                       <input required  name='phone' type="text" placeholder="Phone Number" class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Linkdin Link</label>
                       <br/>
                       <input required  name='linkdin' type="text" placeholder="Linkdin Link" class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                    </div>
                    <div className='mr-20'>
                    <label className='text-xl '>Education</label>
                       <br/>
                       <textarea  required name='education' class="textarea w-6/12 my-3 textarea-info" placeholder="education"></textarea>
                       <br/>
                       <label className='text-xl '>Profile picture</label>
                       <br/>
                       <input name='img' className='p-2' type='file'></input>
                       <br/>
                       <input className='btn btn-success text-white mt-14 w-6/12' type='submit' value='UPDATE PROFILE'></input>
                       <br/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdatedProfile;