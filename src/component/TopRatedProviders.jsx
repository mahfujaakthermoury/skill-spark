import React, { useEffect, useState } from 'react';
import icon from '../assets/Rating.png'

const TopRatedProviders = () => {

    const [topRated, settopRated] = useState([]);

    useEffect(() => {
        fetch('./topRating.json')
            .then(res => res.json())
            .then(data => settopRated(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='px-5 py-15 mt-10 bg-[#fffcdc]'>
            <h3 className='font-bold text-3xl text-center pb-10'>Top Rated Providers</h3>

            <div className=" grid grid-cols-3 gap-x-4">
                {
                    topRated.map(rating =>
                        <div className=" card bg-base-100 shadow-sm ">
                           <div className='flex'>
                                 <div className='ml-2  mt-4 w-[180px]'><img className=' mt-5 h-[100px] w-[100px] rounded-full '
                                    src={rating?.image}
                                    alt="image" /></div>
                            <div className="card-body">
                                <h2 className="card-title">{rating?.name}</h2>
                                <p>Rating: {rating?.description} </p>
                                <div className='flex py-3'>
                                    <p>Price: {rating?.rating}</p> 
                                    <div className='flex'>
                                        <img src={icon} className='h-5 w-5' alt="" /> 
                                        <img src={icon} className='h-5 w-5' alt="" /> 
                                        <img src={icon} className='h-5 w-5' alt="" /> 
                                        <img src={icon} className='h-5 w-5' alt="" /> 
                                        <img src={icon} className='h-5 w-5' alt="" /> 
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TopRatedProviders;