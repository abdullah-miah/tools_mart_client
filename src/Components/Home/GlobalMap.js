import React from 'react';
import tinyred from "../../image/tinyred.png"
import globalmap from "../../image/world-map.jpg"

const GlobalMap = () => {
    return (
        <div className='p-12'>
            <h1 className='text-center text-3xl text-black font-bold mb-4'>Our Global Customer Base</h1>
            <div className='flex justify-center items-center'>
            <img src={tinyred}></img>
            </div>
            <div className='p-4'>
                <img src={globalmap}/>
            </div>
        </div>
    );
};

export default GlobalMap;