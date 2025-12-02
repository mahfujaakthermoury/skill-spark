import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import i1 from '../assets/img1.png'
import i2 from '../assets/img2.png'
import i3 from '../assets/img3.png'
import i4 from '../assets/img4.png'



const Slider = () => {
    return (
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={i1} alt="" className='w-full h-[550px] object-cover' /></SwiperSlide>
                <SwiperSlide><img src={i2} alt="" className='w-full h-[550px] object-cover' /></SwiperSlide>
                <SwiperSlide><img src={i3} alt="" className='w-full h-[550px] object-cover' /></SwiperSlide>
                <SwiperSlide><img src={i4} alt="" className='w-full h-[550px] object-cover' /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;