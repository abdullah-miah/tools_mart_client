import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingProducts = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-24 text-black'>UPCOMING INOVATION TOOLS MART </h1>
            <p className='text-center text-gry-400 text-xl mb-4 uppercase'>Tools mart Creation</p>
            <div className='flex justify-center items-center mb-8'>
            <img src='https://www.aloktools.com/wp-content/uploads/2017/02/Ozar_O2-1.png'></img>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
            <div>
                            <div class="card w-96 bg-base-100 ">
                <figure><img className='hover:opacity-75' src="https://dccf75d8gej24.cloudfront.net/images/products/04/040611830/D6CBC172-73AA-4991-A887-28B16736207B-large.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-red-400">Clarke CHT830 No.4 Jack Plane</h2>
                    <p className='text-black'>This jack plane from Clarke has been constructed with a cast iron body and high carbon steel heat treated blade for improved durability.</p>
                    <Link to='/'>More Details...</Link>
                </div>
                </div>
            </div>
            <div>
                <div class="card w-96 bg-base-100">
                <figure><img className='hover:opacity-75' src="https://dccf75d8gej24.cloudfront.net/images/products/06/060610721/3841A161-30BA-4569-9F95-06B9CC46CBB6-large.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-red-400">DeWalt DW721KN Radial Arm Saw (230V)</h2>
                    <p className='text-black'>DeWalts free standing DW721 radial arm saw is one of the most accurate, versatile and easy to use woodworking machines around..</p>
                    <Link to='/'>More Details...</Link>
                </div>
                </div>
            </div>
            <div>
                            <div class="card w-96 bg-base-100">
                <figure><img className='hover:opacity-75' src="https://dccf75d8gej24.cloudfront.net/images/products/04/040213267/126C7E5F-1BBB-4297-B068-93CDD1CBBFE7-large.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-red-400">Stanley FatMax 5m/16ft Blade Armor Tape</h2>
                    <p className='text-black'>The STANLEY FATMAX 5m/16' Blade Armor Tape has been designed with Class II accuracy ensuring readings shown .</p>
                    <Link to='/'>More Details...</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default UpcomingProducts;