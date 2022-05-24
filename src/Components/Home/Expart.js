import React from 'react';
import expart from '../../image/expart.jpg'

const Expart = () => {
    return (
        <section style={{
            background: `url(${expart})`}}  
        
            className='flex justify-center items-center mt-14'>
            <div >
            <h1 className='text-4xl mb-8 text-white mt-3'>CREATE WITH CONFIDENCE</h1>
            <div className='ml-20'>
            <button class="btn btn-info mb-4 text-white  w-60">EXPERT ADVICE</button>
            <br/>
            <button class="btn btn-info mb-4 text-white w-60">TOOLS INNOVATIONS</button>
            <br/>
            <button class="btn btn-info text-white mb-4">100% SATISFACTION GUARANTEE</button>
            </div>
        </div>
        </section>
    );
};

export default Expart;