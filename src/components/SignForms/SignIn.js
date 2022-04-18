import React, { useState } from 'react';
import SocialBtn from './SocialBtn';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignIn = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInuser, signInloading, signInError] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (user || (signInuser && !signInloading)) {
        navigate(from, { replace: true });
    }

    // sign in function
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <>
            <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card">
                <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Please Sign In</h3>
                {/* Sign In Form */}
                <form onSubmit={handleSignIn} className="p-3 md:px-5 lg:px-7">
                    <input type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' onChange={(event) => setEmail(event.target.value)} required />
                    <input type="password" placeholder='Enter Your Password*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' onChange={(event) => setPassword(event.target.value)} required />

                    {error && <p className="text-[18px] font-normal text-red-400 before:content-['X'] before:text-[20px] before:mr-2 before:text-red-500">{error.code}</p>}

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Sign In</button>

                </form>
                <p className="text-[18px] font-normal">
                    You've No Account? <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/signup")}> Sign Up </span>
                </p>
                <p className="text-[18px] font-normal">
                    ForGot Your Password? <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/reset")}> Reset Password </span>
                </p>
                <SocialBtn />
            </div>
        </>
    );
};

export default SignIn;