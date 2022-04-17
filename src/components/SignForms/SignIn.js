import React from 'react';
import SocialBtn from './SocialBtn';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate();
    return (
        <>
           <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card">
            <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Please Sign In</h3>
            {/* Sign In Form */}
                <form className="p-3 md:px-5 lg:px-7">
                    <input type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <input type="password" placeholder='Enter Your Password*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Sign In</button>

                </form>
                <p className="text-[18px] font-normal">
                    You've No Account? <span className="text-orange-300 cursor-pointer" onClick={()=> navigate("/signup")}> Sign Up </span>
                </p>
                <p className="text-[18px] font-normal">
                ForGot Your Password? <span className="text-orange-300 cursor-pointer" onClick={()=> navigate("/reset")}> Reset Password </span>
                </p>
                <SocialBtn/>
            </div> 
        </>
    );
};

export default SignIn;