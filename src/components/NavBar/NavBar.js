import React from 'react';
import logo from "../../images/icons/dumbbell.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <div className='container mx-auto py-2 flex items-center justify-between'>
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className='w-[30px] h-[30px]' />
                        <Link to="/" className="text-[30px] text-blue-500 font-bold pl-2">Fitness Guru</Link>
                    </div>
                    <ul className='lg:flex text-[22px]'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"} to="/">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;