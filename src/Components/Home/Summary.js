import React from 'react';

const Summary = () => {
    return (
        <div className='mt-14'>
            <h1 className='text-3xl text-center mt-20 text-info font-bold'>BUSINESS SUMMARY</h1>
            <p className='text-center text-orange-400 mb-20'>MILIONS OF CLIENT LOVE</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
             <div>
                  <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmuJ3z1tbl5Mau5UERPfudH8msRNwDJ90DfjtdH0T3rW9cIfcGkUxBGFzrr4AYmqkVUE&usqp=CAU" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-3xl">Regular client</h2>
                      <div class="stat-value  text-primary">25.6K</div>
                      
                    </div>
                  </div>
             </div>
             <div>
             <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLClx7GaQzcCdzX1WWNtujGwt-LG5HSm5EjIPywe-1uuP7c-hKWnRu4fHX9OJIwrBQL80&usqp=CAU" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-3xl">Country</h2>
                      <div class="stat-value  text-secondary">80</div>
                      
                    </div>
                  </div>
             </div>
             <div>
             <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTemcLmDCwMw_swhvEzxjDF2HsFVDT_KvYranKz7Ys9rMDqioVZ1YVJoxwzksfevtw_1c&usqp=CAU" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-3xl">Total sell</h2>
                      <div class="stat-value  text-success">770k <span className='text-primary text-xs'>Unit</span></div>
                      
                    </div>
                  </div>
             </div>
            </div>
        </div>
    );
};

export default Summary;