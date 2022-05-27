import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ManageProducts = () => {
    const [products, setProducts]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const url ='http://localhost:5000/product'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure');
        if(proceed){
       const url = `http://localhost:5000/dashboard/${id}`
       fetch(url, {
           method: 'DELETE'
       }) 
       .then(res => res.json())
       .then(data =>{
           console.log(data);
           const remaining = products.filter(product => product._id !== id);
           setProducts(remaining);
       })
    }
    }

      const update=id=>{
        navigate(`/dashboard/update/${id}`)
      } 
    return (
        <div>
            <h1 className='text-2xl text-center mb-3'>Total product:{products.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th className='text-center'>SL</th>
        <th className='text-center'>Product Name</th>
        <th className='text-center'>Avatar</th>
        <th className='text-center'>Price(P.U)</th>
        <th className='text-center'>Minimum Quantity</th>
        <th className='text-center'>Availabel Quantity</th>
        <th className='text-center'>Remove</th>
        <th className='text-center'>Update</th>
      </tr>
    </thead>
    <tbody>
      {
          products.map((product, index)=><tr>
            <th>{index +1}</th>
            <td>{product.name}</td>
            <td><div class="avatar">
            <div class="w-14 rounded-xl">
                <img src={product.img} />
            </div>
            </div></td>
            <td className='text-center'>$ {product.price}</td>
            <td className='text-center'>  {product.min_Quantity}</td>
            <td className='text-center'>  {product.available_Quantity}</td>
            <td className='flex justify-center items-center'>
                <button onClick={()=>handleDelete(product._id)}
                 class="btn btn-circle btn-error btn-outline mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button></td>
             <td>
             <button onClick={()=>update(product._id)}  class="btn btn-warning btn-outline">Update</button>
                 </td>       
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ManageProducts;