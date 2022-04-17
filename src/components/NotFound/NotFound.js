import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="h-100vh flex justify-center items-center">
            <div className=" p-20 card rounded-lg">
                <h3 className="text-blue-500 text-[25px] font-bold text-center">Opps! 404! Page Not Found</h3>

                <button onClick={() => navigate("/")} className="py-2 px-3 bg-blue-500 text-white text-[22px] font-bold block mx-auto rounded-lg border-2 border-blue-500 duration-500 ease-in-out hover:text-blue-500 hover:bg-transparent">Back To Home</button>
            </div>
        </div>
    );
};

export default NotFound;