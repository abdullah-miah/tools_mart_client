import React, { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import ProductsCart from './ProductsCart';
import { Typewriter } from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index';
import { useTypewriter} from 'react-simple-typewriter'

const Products = () => {
    const [products, setProducts]=useState([]);
    
    useEffect(()=>{
        const url ='http://localhost:5000/product'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    const {text} = useTypewriter({
        words: [ "WOOD TOOLS","INDUSTRIAL TOOLS","CAR TOOLS","ELECTRICK TOOLS"],
        loop: 0, 
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
        })

    return (
       <div>
        <div className='bg-black p-4'>
            <h1 className='uppercase text-white text-2xl font-bold text-center'> We are manufacturing 
            <span className='text-orange-500 ml-2'>
            {text}  
                </span>
            </h1>
        </div>
         <div className='mt-8'>
            <h1 className='text-4xl text-center uppercase text-black font-bold'> Tools Mart manufactured</h1>
            <p className='uppercase text-center text-gry-400 mb-4'>Treanding Products here</p>
            <div className='flex justify-center items-center'>
            <img src='https://www.aloktools.com/wp-content/uploads/2017/02/Ozar_O2-1.png'></img>
            </div>
           
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14 '>
                {
                    products.slice(0,6).map(product =><ProductsCart
                    key={product._id}
                    product={product}
                   
                    >

                    </ProductsCart>)
                }
            </div>
        </div>
       </div>
    );
};

export default Products;