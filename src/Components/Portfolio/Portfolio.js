import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 flex justify-center items-center'>
            <div className='ml-60'>
           <img className='h-6/12' src='https://media.istockphoto.com/photos/male-business-professional-picture-id184108228?k=20&m=184108228&s=612x612&w=0&h=p1x7p0rgAi1b1GXBfj3MnQ3wqDpUpUoAXv0fk7lN2Xs='></img>
            </div>
            <div className='mt-5'>
            <h1 class="text-5xl font-bold">Name: Abdullah Miah</h1>
                <h1 className='text-xl mt-6'>Education: <span>BBA (Department of Accounting)</span></h1>
                <h1 className='text-xl '>Email: mdabdullha708@gmail.com</h1>
                <h1 className='text-xl '>Education: <span>BBA (Department of Accounting)</span></h1>
                <h1 className='text-xl '>Skills:</h1>
                <div className=' text-xl mt-2 ml-12'>
                    <p>1.HTML5</p>
                    <p>2.CSS3</p>
                    <p>3.BOOTSTRAP</p>
                    <p>4.TAILWIND</p>
                    <p>5. JAVASCRIPT</p>
                    <p>6.REACT</p>
                    <p>7.NODE</p>
                    <p>8.EXPRESS</p>
                    <p>9.MONGODB</p>
                </div>
                <h1>Live Website:</h1>
                <div>
                    <Link className='text-primary' to='https://shiny-stroopwafel-390d77.netlify.app/'>https://shiny-stroopwafel-390d77.netlify.app/</Link>
                    <br/>
                    <Link className='text-primary' to='https://funny-rabanadas-6b8791.netlify.app/'>https://funny-rabanadas-6b8791.netlify.app/</Link>
                    <br/>
                    <Link className='text-primary' to='https://startling-pasca-295539.netlify.app/'>https://startling-pasca-295539.netlify.app/</Link>
                    
                    <br/>
                    <button className='btn btn-success mt-5 text-white'>Lets Talk!</button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;