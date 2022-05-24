import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id}=useParams();
    const [products, setProducts] =useState({});
    const {name, _id, img, description, price, min_Quantity, available_Quantity}=products;
    useEffect(()=>{
        const url =`http://localhost:5000/purchase/${id}`; 
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
               },[])
    return (
        <div class="card px-14 w-10/12 mx-auto mt-14 lg:card-side bg-base-100 shadow-xl">
  <figure><img src={img} alt="Album"/></figure>
  <div className='lg:ml-12'>
  <h2 class="card-title text-success">Product Id: {_id}</h2>
    <p className='text-xl text-bold'>Name:  {name}</p>
    <p>{description}</p>
    <p>Minimum Quantity: {min_Quantity}</p>
    <p>Available Quantity: {available_Quantity}</p>
    <p>Price: <span className='text-amber-500 text-xl'> ${price}</span> (Per Unit)</p>
    <input type="text" placeholder={min_Quantity} class="input mt-6 input-bordered w-full max-w-xs" />
    <br/>
    <button class="btn btn-success mt-6 text-white">Confirm Order</button>
  </div>
</div>
    );
};

export default Purchase;