import React from 'react';
import AboutImg from '../assets/a.png'

const AboutUs = () => {
    return (
        <div className='p-20'>
            <h3 className='font-bold text-[#076a21]  text-3xl sm:text-4xl text-center py-10 '>About Our Campaign</h3>
            <div class="about-campaign-inner flex flex-col lg:flex-row items-center pt-20">
                <div class="">
                    <img src={AboutImg} alt="About Image" className='h-[400px] w-[1600px] rounded-xl' />
                </div>
                <div class="ml-20">
                    <p class="text-base text-[#1f2937] text-justify ">
                        At our flower shop, we believe flowers have the power to express emotions that words cannot. 
                        With a love for nature and a passion for creativity, we craft beautiful floral arrangements using fresh, high-quality blooms. 
                        Whether it’s a special celebration or a simple gesture, our flowers are designed to bring joy, warmth, and meaning to every moment. <br /> <br />
                        Green Earth is a global tree plantation initiative dedicated to fighting climate change.
                        Since our start, we’ve planted over 500,000 trees worldwide. By joining our campaign, you
                        help restore forests, create habitats for wildlife, and combat global warming.
                    </p>
                    <ul class="list-disc list-inside mt-5 space-y-1">
                        <li class="text-base text-[#1f2937]">Restoration of natural habitats</li>
                        <li class="text-base text-[#1f2937]">Improvement of air quality</li>
                        <li class="text-base text-[#1f2937]">Support for local communities</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;