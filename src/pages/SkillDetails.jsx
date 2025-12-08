import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { motion } from "motion/react"
import toast, { Toaster } from 'react-hot-toast';


const SkillDetails = () => {

    const { name } = useParams();
    const { email } = useParams();


    const [skills, setSkills] = useState([]);
    const { myId } = useParams();

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.log(err))
    }, [])

    const findResult = skills.find(skill => skill.skillId == myId);
    console.log(findResult);

    const notify = () => toast.success('Booking successful.');
    const formRef = useRef(null);


    const handleBooking = () => {
        notify();

        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <div className='my-20'>
            <div className="flex justify-center ">
                <div className=" card w-full max-w-[800px] bg-base-100 shadow-sm">
                    <figure>
                        <img className='w-full h-[500px] lg:object-cover'
                            src={findResult?.image}
                            alt="image" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center py-5 '>
                            <h2 className="card-title">{findResult?.skillName}</h2>
                            <p className='font-bold ml-5 sm:ml-100 text-[#de3d0c]'>Slots Available: {findResult?.slotsAvailable} </p>
                        </div>
                        <p className='my-5 w-auto sm:text-justify'>{findResult?.description}</p>
                        <div className="flex justify-between items-center">
                            <div className=' py-5 space-y-3'>
                                <p className=''>Price: {findResult?.price}$ </p>
                                <p>Rating: {findResult?.rating} </p>
                                <p>Category: {findResult?.category}</p>
                            </div>
                            <div className=' font-bold py-5'>
                                <p>Trainer: {findResult?.providerName} </p>
                                <p> {findResult?.providerEmail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center my-20">
                <div className=" mx-auto card w-[800px] bg-base-100 shadow-sm py-8">
                    <h3 className='font-bold text-4xl text-center py-7 '>Book Your Session   </h3>
                    <div className="card-body">
                        <form ref={formRef} className="fieldset mx-auto text-[15px]">
                            <label className="label">Name</label>
                            <input defaultValue={name} name='name' type="text" className="input" placeholder="Type Your Name" required />
                            <label className="label">Email</label>
                            <input defaultValue={email} name='email' type="text" className="input" placeholder="Type your Email" required />
                            <button onClick={handleBooking} type='button' className="btn btn-neutral mt-4 w-[320px]">Book Session </button> <Toaster />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetails;