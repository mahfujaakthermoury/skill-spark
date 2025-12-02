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
        <div className='p-10 pt-20'>
            <h3 className='font-bold text-3xl text-center pb-15'>Top Rated Providers</h3>

            <div className="px-[100px] grid grid-cols-3">
                {
                    topRated.map(rating =>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img className='mt-10 h-[100px] w-[100px] rounded-full '
                                    src={rating?.image}
                                    alt="image" />
                            </figure>
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
                    )
                }
            </div>
        </div>
    );
};

export default TopRatedProviders;