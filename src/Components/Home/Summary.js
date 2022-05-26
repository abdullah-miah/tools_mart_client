import React from 'react';

const Summary = () => {
    return (
        <div className='mt-14'>
            <h1 className='text-3xl text-center font-bold'>Business Summary</h1>
            <div class="stats w-full stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat">
    <div class="stat-title">Downloads</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Users</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Registers</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default Summary;