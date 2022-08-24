import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Contact = () => {
    const [CounterOn, setCounterOn]=useState(false);
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className='bg-base-200'>
        <div className='p-12 mt-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div>
                <h1 className='text-center text-black text-2xl font-extrabold italic mb-8'>About Tools Mart</h1>
                <p className='text-black text-xl'> Tools Mart Brand is 40 years old and an ISO 
                    9001:2015 certified company Headquartered in Gurugram,
                     Haryana, INDIA.  Ozar Tools, the global tool brand from 
                     the house of ALOK INTERNATIONAL PVT. LTD., 
                     is a world-renowned high-quality Tools manufacturing 
                     company. We are a leading supplier of ever-increasing
                      “range” of high-quality tools used in a variety of markets
                     and applications throughout the world.</p>
                     <br/>
                     <p className='text-xl text-black mb-8'>It’s something of a cliché, but we genuinely 
                        are big enough to cope and small enough to care.
                         Many of our team have backgrounds in manufacturing & 
                         construction, 
                        so we know only too well the importance of a reliable supplier.</p>
            <div className='flex justify-end items-center'>
            <button  className='btn btn-outline btn-warning'>Read More</button>
            </div>
              </div>
              <div style={{backgroundColor: "rgb(241, 89, 42)",
               width:"400px",
               margin: "0 auto",
               borderRadius:"5px"
               }}>
              <div className='p-4'>
                <h1 className='text-center text-2xl text-white font-bold italic'>Request A Callback</h1>
               <form>
               <input required type="text" placeholder="Full Name *" className="input mt-8 input-bordered w-full " />
               <input required type="email" placeholder="Email *" className="input mt-4 input-bordered w-full " />
               <input required type="text" placeholder="Phone Number *" className="input mt-4 input-bordered w-full " />
               <input required type="text" placeholder="Country" className="input mt-4 input-bordered w-full " />
               <textarea required cols='50' class="textarea textarea-bordered mt-4" placeholder="write something...."></textarea>
               <div className='flex justify-center items-center'>
               <input type='submit' className='btn mt-4 italic' value='REQUEST A CALLBACK'></input>
               </div>
               </form>
              </div>
              </div>
            </div>
            
        </div>
        <div className='bg-black p-3 mt-8'>
                <h1 className='text-center  text-white text-2xl '>What makes us Different from other tool manufacturers?</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 p-12'>
             <div className='text-center '>
              <h2 className='mb-4 text-4xl font-bold text-orange-600'>
                {CounterOn && <CountUp start={20} end={80}></CountUp>} +
              </h2>
              <h1 className='text-black text-2xl font-bold'>World Wide</h1>
             </div>
             <div className='text-center '>
              <h2 className='mb-4 text-4xl font-bold text-orange-600'>
                
              {CounterOn && <CountUp start={450} end={500}></CountUp>} +
                
              </h2>
              <h1 className='text-black text-2xl font-bold'>Customers Globally</h1>
             </div>
             <div className='text-center '>
              <h2 className='mb-4 text-4xl font-bold text-orange-600'>
                
              {CounterOn && <CountUp start={70} end={99}></CountUp>} %
                
                </h2>
              <h1 className='text-black text-2xl font-bold'>OnTime Delivery</h1>
             </div>
             <div className='text-center '>
              <h2 className='mb-4 text-4xl font-bold text-orange-600'>
              {CounterOn && <CountUp start={50} end={112}></CountUp>}
                k</h2>
              <h1 className='text-black text-2xl font-bold'>Total Sells</h1>
             </div>
             
            </div>
        </div>
        </ScrollTrigger>
    );
};

export default Contact;