import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [products, setProducts]= useState([])
    const {name, _id, img, description, price, min_Quantity, available_Quantity}=products;
    useEffect(()=>{
        const url =`https://limitless-everglades-10134.herokuapp.com/purchase/${id}`; 
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])


    const handleChange = event =>{
        const {price, ...rest} = products;
        const newPrice = event.target.value;
        const newProductPrice = {price: newPrice, ...rest};
        setProducts(newProductPrice);
    }
    const handleQuantityChange = event =>{
        const {min_Quantity,available_Quantity, ...rest}=products;
        const newQuantity = event.target.value;
        const newProductQuantity = { quantity: newQuantity, ...rest};
        setProducts(newProductQuantity);
    }
    const handelUpdeted = e =>{
        e.preventDefault();
        navigate('/dashboard/manageproduct')
        const updateProduct = {
            price: e.target.price.value,
            min_Quantity: e.target.min_Quantity.value, 
            available_Quantity: e.target.available_Quantity.value 
          };
          e.target.reset();
          const url =`https://limitless-everglades-10134.herokuapp.com/updatedProducts/${id}`;  
          fetch(url, {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateProduct)
        })
        toast.success('Successfuly updated product')
    }

    return (
        <div className='mt-12'>
            <h1 className='mb-5'>Update product</h1>
            <form onSubmit={handelUpdeted}>
                <div className='grid grid-cols-1 lg:grid-cols-2 g-0'>
                    <div className='ml-20'>
                       <label className='text-xl '>Product Name</label>
                       <br/>
                       <input name='name' type="text" value={name} disabled class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Minimum Quantity</label>
                       <br/>
                       <input onChange={handleQuantityChange} name='min_Quantity' type="text" value={min_Quantity} class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Available Quantity</label>
                       <br/>
                       <input onChange={handleQuantityChange} name='available_Quantity' type="text" value={available_Quantity} class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Price</label>
                       <br/>
                       <input onChange={handleChange} name='price' type="text" value={price} class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                    </div>
                    <div className='mr-20'>
                    <label className='text-xl '>Short Description</label>
                       <br/>
                       <textarea name='description' class="textarea w-6/12 my-3 textarea-info" value={description} disabled></textarea>
                       <br/>
                       <label className='text-xl '>Product picture</label>
                       <br/>
                       <input disabled name='img' className='p-2' type='file'></input>
                       <br/>
                       <input className='btn btn-success text-white mt-14 w-6/12' type='submit' value='Update Product'></input>
                       <br/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;