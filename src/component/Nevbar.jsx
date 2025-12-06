import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { motion } from "motion/react"

const Nevbar = () => {

  const { user } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-10 py-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>Our Service</a></li>
            <li><a>My Profile</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-bold text-[#ffbf00] ">SkillSpark</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[17px]">
          <li><Link to='/'>Home</Link ></li>
          <li><Link to='/AllPopularSkills'>Our Service</Link ></li>
          <li><Link to='/Profile'>My Profile</Link ></li>
        </ul>
      </div>
      {
        user && <div className="navbar-end">
          <btn onClick={handleSignOut} className="btn bg-[#ffffff] text-[#ff0000] font-bold text-[15px]">Logout</btn>
        </div>
      }
      {
        !user && <motion.div end={{ scale: 0.5 }} animate={{ scale: 0.9 }}
          className="navbar-end">
          <Link to={'/Login'} className="btn bg-[#eef4f4] font-bold text-[15px] px-6">Login</Link>
        </motion.div>
      }
    </div>
  );
};

export default Nevbar;