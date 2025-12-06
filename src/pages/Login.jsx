import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { setUser, handleGoogleSignin } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
const [email, setEmail] = useState('');

    console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                navigate(location.state?.from || "/");
            })
            .catch((error) => {
                console.log(error);

            });
    }

    const googleSignin = () => {
        handleGoogleSignin()
            .then(result => {
                const user = result.user
                setUser(user)
                navigate(location.state?.from || "/");
            })
            .catch(err =>
                console.log(err)
            )
    }

    const handleForget = () =>{
        navigate(`/ForgetPass/${email}`)
    }

    return (
        <div className="hero bg-base-200 py-20 w-[500px] mx-auto my-20">
            <div className="">
                <h1 className="text-3xl font-bold text-center mb-10">Login now!</h1>
                <div className="card bg-base-100 w-[350px] shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset text-[15px]">
                            <label className="label">Email</label>
                            <input onChange={(e)=> setEmail(e.target.value)} name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div className='mt-2'><button onClick={handleForget} className="link link-hover">Forgot password?</button></div>
                            <div className=''><span className='text-[red]'>Don't have an account? </span><Link to={'/signup'} className="link link-hover font-bold">Sign Up</Link></div>
                            <button onClick={googleSignin} className="btn mt-5"><span className='text-xl'><FcGoogle /></span><span>Login with Google</span></button>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;