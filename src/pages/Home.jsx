import React from 'react';
import Slider from '../component/Slider';
import PopularSkills from '../component/PopularSkills';
import TopRatedProviders from '../component/TopRatedProviders';
import HowItWorks from '../component/HowItWorks';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularSkills></PopularSkills>
            <TopRatedProviders></TopRatedProviders>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;