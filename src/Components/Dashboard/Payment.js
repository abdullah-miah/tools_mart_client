import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3WGJBAhzjGFSLF57XLmbe9Z9M4sjSWKDIs6ogPrXLlioMhrSvVEBrDv2H7dRwA0wYbI5XtOIGJWcZnOWwGd2iP00SyrCwk9f');
const Payment = () => {
    const {id}=useParams();
    const url = `https://tools-mart-server.vercel.app/payment/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl mt-5 font-bold text-center btn btn-outline mb-5'>PAYMENT INFORMATION</h1>
            <div class="card w-8/12 card-side bg-base-100 shadow-xl">
  <figure><img className='w-6/12' src={order.img} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">{order.productName}</h2>
    <p>Order Quantity:{order.quantity} </p>
    <p>price: $ {order.price} </p>
    <p>Total Amount: $ {parseInt(order.quantity)*parseInt(order.price)} </p>
  </div>
</div>
        <div class=" mt-12 card w-96 bg-base-100 shadow-xl">
         <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
        </div>
        </div>
    );
};

export default Payment;