import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import SocialBtn from './SocialBtn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { signOut } from 'firebase/auth';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [myError, setMyError] = useState("");

    const handleEmailChange = event => {
        setEmail(event.target.value);
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value)) {
            setMyError("Please Enter Valid Email")
        } else {
            setMyError("");
        }
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
        if (!/^.{6,}$/.test(event.target.value)) {
            setMyError("password must be 6 character or more");
        } else {
            setMyError("");
        }
    }

    if (user && (!error && !loading)) {
        // for auto sign in
        navigate("/signin");
        // stop auto sign in
        signOut(auth);
    }

    const handleConfirmPasswordChange = event => {
        const cPassword = event.target.value;
        if (cPassword === password) {
            setCPassword(cPassword);
            setMyError("");
        } else {
            setMyError("password and confirm password are not match");
        }
    }

    // create new user

    const handleSignUp = event => {
        event.preventDefault();
        if (password === cPassword) {
            createUserWithEmailAndPassword(email, password);
        } else {
            setMyError("password and confirm password are not match");
        }
    }

    return (
        <>
            <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card">
                <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Please Sign Up</h3>
                {/* Sign In Form */}
                <form onSubmit={handleSignUp} className="p-3 md:px-5 lg:px-7">
                    <input onChange={handleEmailChange} type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <input onChange={handlePasswordChange} type="password" placeholder='Enter Your Password*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <input onChange={handleConfirmPasswordChange} type="password" placeholder='Enter Your Confirm Password*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />

                    {(myError || error) && <p className="text-[18px] font-normal text-red-400 before:content-['X'] before:text-[20px] before:mr-2 before:text-red-500">{myError || error.code}</p>}

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Sign Up</button>

                </form>
                <p className="text-[18px] font-normal">
                    You've An Account? <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/signin")}> Sign In </span>
                </p>
                <SocialBtn />
            </div>
        </>
    );
};

export default SignUp;