import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Profile = () => {

    const {user, setUser} = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenForm = () => {
        setIsOpen(!isOpen)
    }


    const handleUpdate = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value

         updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    setUser({...user, displayName: name, photoURL: photoUrl})
                    
                }).catch((error) => {
                    console.log(error)
                });
    }

    return (
        <div className='sm:flex justify-center items-center bg-[#fffcdc] w-full py-10 '>
           <div className='flex flex-col justify-center items-center space-y-2'>
            <h1 className='font-bold text-4xl py-10 '>My Profile</h1>
             <div className="avatar mb-10">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL || "fallback-image-url"} alt="User" />
                </div>
            </div>
            <p className='font-bold text-xl text-center '>{user?.displayName}</p>
            <p>{user?.email}</p>
            <button onClick={handleOpenForm} className="btn my-10 bg-[#ffbf00]  font-bold">Update Here</button>
           </div>
            {
                isOpen && (
                    <form onSubmit={handleUpdate} className="w-80 fieldset text-[15px] space-y-1 ml-15 sm:ml-30">
                        <label className="label">Name</label>
                        <input defaultValue={user?.displayName} name='name' type="text" className="input" placeholder="Update Your Name" />
                        <label className="label">Photo URL</label>
                        <input defaultValue={user?.photoURL} name='photoUrl' type="text" className="input" placeholder="Update your Photo URL" />
                        <button className="btn mt-5">Update Profile</button>
                    </form>
                )
            }
        </div>
    );
};

export default Profile;