import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube,faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ShortNavbar = () => {
    return (
        <div className='px-14 p-2'  style={{backgroundColor: "black"}}>
           <div className='flex justify-between'>
            <div className='flex  items-center'>
            <h1 className='text-white '>📞 <span>+8801303742844</span></h1>
            <h2 className='ml-3'> ✉️
                <span className='text-white hover:text-gray-300'>
                    <a href='mdabdullaha708@gmail.com'> mdabdullaha708@gmail.com</a>
                    </span></h2>
            </div>
            <div>
                <ul className='flex items-center'>
                    <li><a href='#' className='text-white'>
                    <FontAwesomeIcon className='ml-3 text-xl hover:text-sky-400' icon={faFacebook} />
                        </a></li>
                    <li><a href='#' className='text-white'>
                    <FontAwesomeIcon className='ml-3 text-xl hover:text-red-400' icon={faYoutube} />
                        </a></li>
                    <li><a href='#' className='text-white'>
                    <FontAwesomeIcon className='ml-3 text-xl hover:text-blue-400' icon={faLinkedin} />
                        </a></li>
                    <li><a href='#' className='text-white'>
                    <FontAwesomeIcon className='ml-3 text-xl hover:text-blue-400' icon={faTwitter} />
                        </a></li>
                </ul>
            </div>
           </div>
        </div>
    );
};

export default ShortNavbar;