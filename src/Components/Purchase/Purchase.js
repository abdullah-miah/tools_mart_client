import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const Purchase = () => {
    const {id}=useParams();
    const [user] = useAuthState(auth);
    const [products, setProducts] =useState({});
    const {name, _id, img, description, price, min_Quantity, available_Quantity}=products;
    useEffect(()=>{
        const url =`https://tools-mart-server.vercel.app/purchase/${id}`; 
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
               },[])

      const handlePurchase =event=>{
          event.preventDefault()
          const quantity = event.target.quantity.value;
          const buyInfo ={
            img: img,
            productName:name,
            productId:_id,
            price: price,
            userName: user.displayName,
            userEmail: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity,
          }
         if(parseInt(quantity) >=parseInt(min_Quantity)){
          fetch('https://tools-mart-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            event.target.reset();
            toast.success(`Sucessfuly Added ${quantity}`)
        })
         }else{
          toast.error(`Please order up to ${min_Quantity}`);
         }
         
      }

    return (
        <div class="card mt-14 px-14 w-10/12 mx-auto mt-14 lg:card-side bg-base-100 shadow-xl">
  <figure><img src={img} alt="Album"/></figure>
  <div className='lg:ml-12 mt-14'>
  <h2 class="card-title font-bold">Product Id: {_id}</h2>
    <p className='text-xl text-bold '>Name:  <span className='text-sky-400'>{name}</span></p>
    <p>{description}</p>
    <p>Minimum Quantity: {min_Quantity}</p>
    <p>Available Quantity: {available_Quantity}</p>
    <p>Price: <span className='text-amber-500 text-xl'> ${price}</span> (Per Unit)</p>
  </div>
  <div className='lg:ml-12'>
    <h1 className='text-2xl font-bold mb-4'>Purchase Information</h1>
  <form onSubmit={handlePurchase}>
  <input  type="text" name='name' readOnly disabled value={user?.displayName} class="input input-bordered input-primary w-full max-w-xs mb-2" />
  <input type="email" name='email' readOnly disabled value={user?.email} class="input input-bordered input-primary w-full max-w-xs mb-2" />
  <input type="text" name='address' required placeholder="Address" class="input input-bordered input-primary w-full max-w-xs mb-2" />
  <input type="text" name='phone' required placeholder="Phone no" class="input input-bordered input-primary w-full max-w-xs mb-2" />
  <input type="number" name='quantity' required placeholder='Minimum quantity' class="input input-bordered input-primary w-full max-w-xs mb-2" />
  <br/>
  {/* <input type='submit' value='Purchase' className='btn mb-6 text-white'></input> */}
  <button type='submit' className='btn text-white mb-12 mt-8'>Purchase 
  <FontAwesomeIcon className='ml-2' icon={faPaperPlane} />
  </button>
  </form>
  </div>
</div>
    );
};

export default Purchase;