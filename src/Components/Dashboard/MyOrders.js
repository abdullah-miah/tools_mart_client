import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setorders]=useState([]);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/orders?userEmail=${user.email}`)
        .then(res=> res.json())
        .then(data => setorders(data));
        }
    },[])
    return (
        <div>
            <h1>MyOrders:{orders.length}</h1>
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
            <td className='flex justify-center items-center'><button class="btn btn-circle btn-success btn-outline mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button></td>
             <td>
             <button class="btn btn-warning btn-outline">Payment</button>
                 </td>       
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyOrders;