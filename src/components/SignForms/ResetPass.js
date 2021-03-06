import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const ResetPass = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    // handleResetPassword function
    const handleResetPassword = async event => {
        event.preventDefault();
        await sendPasswordResetEmail(email);
        toast.success('Please Check Your Email!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <>
            <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card">
                <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Reset Your Password</h3>
                {/* Sign In Form */}
                <form onSubmit={handleResetPassword} className="p-3 md:px-5 lg:px-7">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Reset Password</button>

                </form>

                {error && <p className="text-[18px] font-normal text-red-400 before:content-['X'] before:text-[20px] before:mr-2 before:text-red-500">{error.code}</p>}

                <p className="text-[18px] font-normal"> <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/signin")}>Go To Sign In </span>
                </p>
                <ToastContainer />
            </div>
        </>
    );
};

export default ResetPass;