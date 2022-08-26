import React from 'react';
import idea from "../../image/idea.png"
import quality from "../../image/quality.png"
import support from "../../image/support.png"
import blackBanner from "../../image/banner-back.jpg"
import tinypic from "../../image/tinypic.png"


const ChooseUs = () => {
    return (
        <div
        style={{
            background: `url(${blackBanner})`
          }}
        className='p-12'>
            <h1 className='text-center text-2xl font-bold text-white'>Why Choose Us?</h1>
            <div className='flex justify-center items-center mt-4'>
            <img src={tinypic}></img>
            </div>
            <p className='text-center text-white'>Ever since, we have dedicated ourselves to making industrial Hand tools with the goal to become the best manufacturers of Hand Tools in India. Here’s some reasons why we’re unique</p>
            <p className='text-center text-white'>we’re unique</p>
           <div className='grid grid-cols-1 lg:grid-cols-3 p-12  gap-6'>
            <div  style={{ 
                background: "rgba(0, 0, 0, 0.5)",
                 padding: "15px",
                 borderRadius: "5px"}}>
             <div className='flex justify-center items-center'>
             <img src={idea}/>
             </div>
             <h1 className='text-center font-bold text-xl mb-2 text-white'>Expertise & Innovation</h1>
             <p className='text-center text-white'>Since 1978 we’ve been supplying the highest quality tools to a variety of specialist markets.</p>
            </div>
            <div style={{ 
                background: "rgba(0, 0, 0, 0.5)",
                 padding: "15px",
                 borderRadius: "5px"
                 }}>
             <div className='flex justify-center items-center'>
             <img src={quality}/>
             </div>
             <h1 className='text-center font-bold text-xl mb-2 text-white'>Quality</h1>
             <p className='text-center text-white'>We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.</p>
            </div>
            <div style={{ 
                background: "rgba(0, 0, 0, 0.5)",
                 padding: "15px",
                 borderRadius: "5px"
                 }}>
             <div className='flex justify-center items-center'>
             <img src={support}/>
             </div>
             <h1 className='text-center font-bold text-xl mb-2 text-white'>Service & Support</h1>
             <p className='text-center text-white'>We have invested heavily to ensure that our products, processes and customer service are second to none.</p>
            </div>

           </div>
           
            </div>
    );
};

export default ChooseUs;