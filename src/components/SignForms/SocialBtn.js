import React from 'react';
import googleIcon from './../../images/icons/google.png';

const SocialBtn = () => {
    return (
        <>
           <div className="flex items-center">
           {/* add line */}
                    <div className="w-1/2 h-[3px] bg-blue-500"></div>
                    <div className="text-center text-[22px] font-normal">OR</div>
                    <div className="w-1/2 h-[3px] bg-blue-500"></div>
                </div>
                <div>
                    <button className="flex py-2 px-3 items-center bg-[#FF4B26] rounded-lg text-[25px] text-white font-bold block mx-auto border-2 border-[#FF4B26] duration-300 easy-in-out hover:bg-white hover:text-[#FF4B26]">
                        <img className="w-[30px] h-[30px]" src={googleIcon} alt="google icon"/> &nbsp;
                        Sign In With Google
                    </button>
                </div> 
        </>
    );
};

export default SocialBtn;