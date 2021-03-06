import React, { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import ProductsCart from './ProductsCart';

const Products = () => {
    const [products, setProducts]=useState([]);
    
    useEffect(()=>{
        const url ='https://limitless-everglades-10134.herokuapp.com/product'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className='text-4xl text-center text-success uppercase font-bold'> Tools Mart manufactured</h1>
            <p className='uppercase text-center text-red-400 mb-12'>Treanding Products here</p>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14'>
                {
                    products.slice(0,6).map(product =><ProductsCart
                    key={product._id}
                    product={product}
                   
                    >

                    </ProductsCart>)
                }
            </div>
        </div>
    );
};

export default Products;