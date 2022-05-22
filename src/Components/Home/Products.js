import React, { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart';

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        const url ='tools.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className='text-4xl text-center mb-12'> Tools Mart manufactured</h1>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14'>
                {
                    products.map(product =><ProductsCart
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