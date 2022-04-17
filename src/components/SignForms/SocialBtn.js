import React from 'react';
import googleIcon from './../../images/icons/google.png';
import githubIcon from './../../images/icons/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialBtn = () => {
    const [signInWithGoogle, gooleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    return (
        <>
            <div className="flex items-center">
                {/* add line */}
                <div className="w-1/2 h-[3px] bg-blue-500"></div>
                <div className="text-center text-[22px] font-normal">OR</div>
                <div className="w-1/2 h-[3px] bg-blue-500"></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className="flex py-2 px-3 items-center bg-[#FF4B26] rounded-lg text-[25px] text-white font-bold block mx-auto border-2 border-[#FF4B26] duration-300 easy-in-out hover:bg-white hover:text-[#FF4B26]">
                    <img className="w-[30px] h-[30px]" src={googleIcon} alt="google icon" /> &nbsp;
                    Sign In With Google
                </button>
                <button className="mt-2 flex py-2 px-3 items-center bg-[#000000] rounded-lg text-[25px] text-white font-bold block mx-auto border-2 border-[#000000] duration-300 easy-in-out hover:bg-white hover:text-[#000000]">
                    <img className="w-[30px] h-[30px] bg-white" src={githubIcon} alt="google icon" /> &nbsp;
                    Sign In With GitHub
                </button>
            </div>
        </>
    );
};

export default SocialBtn;