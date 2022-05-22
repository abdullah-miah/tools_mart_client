import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='mt-48' style={{color: '#095d7e'}}>
                    <p className='text-4xl mb-8'>Everything here....</p>
                    <h1 className='text-2xl '>Tools mart manufactured many mordern tools. Many nessecary tools available here. Wood maker love this equiepment.</h1>
                    <button class="btn btn-success mt-12 text-white">Get Started</button>
                </div>

                <div>
                    <img src={'https://media.istockphoto.com/vectors/vector-toolbox-with-retro-instruments-vector-id670032594?k=20&m=670032594&s=612x612&w=0&h=GigjjA34O0mqZd1oBA8lZW5QkNL6s8-HEtTFvr-gdoo='}></img>
                </div>
        </div>
    );
};

export default Banner;