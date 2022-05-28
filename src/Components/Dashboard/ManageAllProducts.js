import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageAllProducts = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setorders]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            fetch(`https://limitless-everglades-10134.herokuapp.com/ordersAll`,{
              method: 'GET',
              headers: {
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
          })
              .then(res => {
                  if (res.status === 401 || res.status === 403) {
                      signOut(auth);
                      localStorage.removeItem('accessToken');
                      navigate('/');
                  }
                  return res.json()
              })
        .then(data => {
          setorders(data)
        });
        }
    },[user])
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure');
        if(proceed){
       const url = `https://limitless-everglades-10134.herokuapp.com/dashboard/${id}`
       fetch(url, {
           method: 'DELETE'
       }) 
       .then(res => res.json())
       .then(data =>{
           console.log(data);
           const remaining = orders.filter(order => order._id !== id);
           setorders(remaining);
       })
    }
    }
    return (
        <div>
          <h1 className='text-2xl mt-5 font-bold text-center btn btn-outline mb-5'>Manage All Orders</h1>
            <h1 className='text-2xl mb-5'>MyOrders:{orders.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th className='text-center'>SL</th>
        <th className='text-center'>Product Name</th>
        <th className='text-center'>Avatar</th>
        <th className='text-center'>Price(P.U)</th>
        <th className='text-center'>Quantity</th>
        <th className='text-center'>Total Amount</th>
        <th className='text-center'>Order Cancel</th>
        <th className='text-center'>Status</th>
      </tr>
    </thead>
    <tbody>
      {
          orders.map((order, index)=><tr>
            <th>{index +1}</th>
            <td>{order.productName}</td>
            <td><div class="avatar">
            <div class="w-14 rounded-xl">
                <img src={order.img} />
            </div>
            </div></td>
            <td className='text-center'>$ {order.price}</td>
            <td className='text-center'>  {order.quantity}</td>
            <td className='text-center'> $ {parseInt(order.quantity)*parseInt(order.price)}</td>
            <td className='flex justify-center items-center'>
               {
                   order.paid? 'Shipped': <button onClick={()=>handleDelete(order._id)}
                   class="btn btn-circle btn-error btn-outline mt-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
               }
               </td>
             <td>
             {(order.price && !order.paid) && <p className='text-xl text-red-500'>Pending</p>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                 </td>       
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default ManageAllProducts;