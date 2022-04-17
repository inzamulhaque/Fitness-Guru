import React, { useState } from 'react';
import logo from "../../images/icons/dumbbell.png";
import menu from "../../images/icons/menu.png";
import close from "../../images/icons/close.png";
import { NavLink, Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    // handle sign out
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <nav>
                <div className='container mx-auto py-2 flex items-center justify-between px-2'>
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className='w-[30px] h-[30px]' />
                        <Link to="/" className="text-[30px] text-blue-500 font-bold pl-2">Fitness Guru</Link>
                    </div>
                    <div>
                        {
                            menuOpen ? <img onClick={() => setMenuOpen(!menuOpen)} src={close} alt="menu icon" className='w-[30px] h-[30px] lg:hidden' /> :
                                <img onClick={() => setMenuOpen(!menuOpen)} src={menu} alt="menu icon" className='w-[30px] h-[30px] lg:hidden' />
                        }
                        <ul className={`text-white text-[18px] lg:flex items-center lg:top-0 lg:relative font-semibold absolute duration-300 ease-in-out ${menuOpen ? "top-15 bg-black left-0 w-full text-left px-5 py-7" : "top-[-300px]"}`}>
                            <li className='py-2 px-3'>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/">Home</NavLink>
                            </li>
                            <li className='py-2 px-3'>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/services">Services</NavLink>
                            </li>
                            <li className='py-2 px-3'>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/checkout">Check Out</NavLink>
                            </li>
                            <li className='py-2 px-3'>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/about">About Me</NavLink>
                            </li>
                            <li className='py-2 px-3'>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/blogs">Blogs</NavLink>
                            </li>
                            <li className='py-2 px-3'>
                                {!user ? <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-white lg:text-black"} to="/signin">SignIn</NavLink> : <p className='text-red-400 cursor-pointer' onClick={handleSignOut}>SignOut</p>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;