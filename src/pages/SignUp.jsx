import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {

    const {signupWithEmailPass} = useContext(AuthContext);

    const handleSubmit = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signupWithEmailPass(email, password)
        .then(userCredential=>{
            const user = userCredential.user
            console.log(user);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="hero bg-base-200 py-20 w-[500px] mx-auto my-20 rounded-2xl">
            <div className="">
                <h1 className="text-3xl font-bold text-center mb-10">Sign Up</h1>
                <div className="card bg-base-100 w-[350px] shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                             <label className="label">Name</label>
                            <input name='name' type="text" className=   "input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                             <label className="label">Photo URL</label>
                            <input name='photoUrl' type="text" className="input" placeholder="Photo URL" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><span>Already have an account? </span><Link to={'/login'} className="link link-hover text-[#00ccff]">Login</Link></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default SignUp;