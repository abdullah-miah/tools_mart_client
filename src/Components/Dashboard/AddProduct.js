import { async } from '@firebase/util';
import React from 'react';
import { toast } from 'react-toastify';

const addProduct = () => {

    const imageStorageKey='5e572deffd164e63f09e771929bed3ef';
    const AddproductHandle = async data=>{
        data.preventDefault()
        const image = data.target.img.files[0];
        
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
            if(result.success){
                const img = result.data.url;
                const name = data.target.name.value;
                const min_Quantity = data.target.min_Quantity.value;
                const available_Quantity = data.target.available_Quantity.value;
                const description = data.target.description.value;
                const price = data.target.price.value;
                const product = {
                    name: name,
                    img: img,
                    description:description,
                    min_Quantity:min_Quantity,
                    available_Quantity:available_Quantity,
                    price: price  
                }
                // send to your database 
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product added successfully')
                        data.target.reset()
                    }
                    else{
                        toast.error('Product not add ');
                    }
                })

            }
            
        })
    }
    
    return (
        <div className='mt-12'>
            <h1 className='mb-5'>Add product</h1>
            <form onSubmit={AddproductHandle}>
                <div className='grid grid-cols-1 lg:grid-cols-2 g-0'>
                    <div className='ml-20'>
                       <label className='text-xl '>Product Name</label>
                       <br/>
                       <input name='name' type="text" placeholder="Product name" class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Minimum Quantity</label>
                       <br/>
                       <input name='min_Quantity' type="text" placeholder="Minimum Quantity" class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Available Quantity</label>
                       <br/>
                       <input name='available_Quantity' type="text" placeholder="Available Quantity" class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                       <label className='text-xl '>Price</label>
                       <br/>
                       <input name='price' type="text" placeholder="price" class="input my-2 input-bordered input-info w-full max-w-xs" />
                       <br/>
                    </div>
                    <div className='mr-20'>
                    <label className='text-xl '>Price</label>
                       <br/>
                       <textarea name='description' class="textarea w-6/12 my-3 textarea-info" placeholder="Description"></textarea>
                       <br/>
                       <label className='text-xl '>Product picture</label>
                       <br/>
                       <input name='img' className='p-2' type='file'></input>
                       <br/>
                       <input className='btn btn-success text-white mt-14 w-6/12' type='submit' value='Add Product'></input>
                       <br/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default addProduct;