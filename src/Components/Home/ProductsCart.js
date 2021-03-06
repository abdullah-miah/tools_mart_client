import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const ProductsCart = ({product, }) => {
    const {name, img, description, price, min_Quantity,available_Quantity}= product;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [admin] =useAdmin(user)
    const handelPurchase = (id)=>{
        navigate(`/purchase/${id}`)
      }
     
    return (
        <div>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img className='w-60' src={img} alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>{description.slice(0,80)}</p>
            <p>Minimum Order: {min_Quantity}</p>
            <p>Available Quantity: {available_Quantity}</p>
            <p>Price:<span className='text-amber-500'> ${price}</span> (per unit)</p>
            <div class="card-actions justify-end">
            {admin? <input disabled className='btn btn-success w-full' type='submit' value='Admin'></input> :<button onClick={()=>handelPurchase(product._id)} class="btn btn-success text-white w-full mt-8">Buy Now</button>}
            </div>
        </div>
        </div> 
        </div>
    );
};

export default ProductsCart;