import React from 'react';

const Summary = () => {
    return (
        <div className='mt-14'>
            <h1 className='text-3xl text-center font-bold'>Business Summary</h1>
            <div class="stats shadow w-full mt-12">
            <div class="stat place-items-center">
                <div class="stat-title">Regular Customer</div>
                <div class="stat-value">31K</div>
                <div class="stat-desc">From January 2022</div>
            </div>
            
            <div class="stat place-items-center">
                <div class="stat-title">Total Product</div>
                <div class="stat-value text-secondary">100</div>
                <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>
            
            <div class="stat place-items-center">
                <div class="stat-title">New Registers</div>
                <div class="stat-value">1,200</div>
                <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
            
            </div>
        </div>
    );
};

export default Summary;