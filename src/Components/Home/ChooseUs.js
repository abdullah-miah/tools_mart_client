import React from 'react';
import idea from "../../image/idea.png"

const ChooseUs = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-8'>Why Choose Us?</h1>
            <div className='flex justify-center items-center'>
            <img src='https://www.aloktools.com/wp-content/uploads/2017/02/Ozar_O2-1.png'></img>
            </div>
            <p className='text-center'>Ever since, we have dedicated ourselves to making industrial Hand tools with the goal to become the best manufacturers of Hand Tools in India. Here’s some reasons why we’re unique</p>
            <p className='text-center'>we’re unique</p>
           <div className='gird grid-cols-1 lg:grid-cols-3'>
            <div>
             <img src={idea}/>
             <h1>Expertise & Innovation</h1>
             <p>Since 1978 we’ve been supplying the highest quality tools to a variety of specialist markets.</p>
            </div>

           </div>
           
            </div>
    );
};

export default ChooseUs;