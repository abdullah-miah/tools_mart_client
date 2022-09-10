import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import {faSackDollar, 
        faCartShopping, 
        faSpinner, 
        faTruck,
         faTrash,
          faCreditCard,
          faCartPlus
        }from "@fortawesome/free-solid-svg-icons"

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setorders]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            fetch(`https://limitless-everglades-10134.herokuapp.com/orders?userEmail=${user.email}`,{
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
          <h1 className='text-2xl mt-5 font-bold text-center btn btn-outline mb-5'>MY ORDER</h1>
           {/* order summery  */}
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8'>
              <div className='bg-sky-400 text-white rounded-md flex p-4 items-center'>
              <FontAwesomeIcon className='text-3xl ml-2' icon={faCartPlus}></FontAwesomeIcon> 
              <h1 className='p-4 text-xl '>Active orders: {orders.length}</h1>
              </div>
              <div className='bg-orange-400 text-white rounded-md flex p-4 items-center'>
              <FontAwesomeIcon className='text-3xl ml-2' icon={faSpinner}></FontAwesomeIcon> 
               <h1 className='p-4 text-xl'>Pending orders: {orders.length}
               </h1>
              </div>
            </div>
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
        <th className='text-center'>Order status</th>
        <th className='text-center'>Payment Status</th>
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
                   order.paid? <td> <FontAwesomeIcon className='text-2xl text-green-400' icon={faTruck} /></td>: <button onClick={()=>handleDelete(order._id)}
                   class=" mt-4">
                      <FontAwesomeIcon className='text-3xl text-red-400' icon={faTrash}/>
                      </button>
               }
               </td>
             <td>
             {(order.price && !order.paid) && <Link className='text-2xl text-sky-400' to={`/dashboard/payment/${order._id}`}><FontAwesomeIcon icon={faCreditCard}/> Payment</Link>}
                                    {(order.price && order.paid) && <div>
                                        <p><span className='text-success text-2xl'>
                                          <FontAwesomeIcon className='mr-2' icon={faSackDollar}></FontAwesomeIcon>
                                          Paid</span></p>
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

export default MyOrders;