import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faUser} from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'

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
    <div class="card w-96 bg-base-100">
        <figure><img className='w-60 hover:opacity-75' src={img} alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title text-black text-2xl">{name}</h2>
            <p>{description.slice(0,80)}</p>
            <p>Minimum Order: {min_Quantity}</p>
            <p>Available Quantity: {available_Quantity}</p>
            <p>Price:<span className='text-amber-500'> ${price}</span> (per unit)</p>
            <div class="card-actions justify-end">
            {admin? <a disabled href='#' className='btn  w-full '> 
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
           <span className='ml-2'>Admin</span></a>
             :
            <button id='cardBtn' onClick={()=>handelPurchase(product._id)} class="btn bg-black text-white w-full mt-8">
                <FontAwesomeIcon className='mr-2' icon={faCartPlus} />
                Buy Now</button>}
            </div>
        </div>
        </div> 


        
        </div>
    );
};

export default ProductsCart;