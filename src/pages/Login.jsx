import React from 'react';
import { Link } from 'react-router';
const Login = () => {
    return (
        <div className="hero bg-base-200 py-20 w-[500px] mx-auto my-20">
            <div className="">
                <h1 className="text-3xl font-bold text-center mb-10">Login now!</h1>
                <div className="card bg-base-100 w-[350px] shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div><span className='text-[red]'>Don't have an account? </span><Link to={'/signup'} className="link link-hover font-bold">Sign Up</Link></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;