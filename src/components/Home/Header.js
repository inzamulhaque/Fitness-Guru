import React from 'react';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='h-bg h-[600px] w-full bg-cover bg-no-repeat pt-3 md:pt-20'>
            <div className="w-full md:w-3/4 lg:w-1/2 ml-auto px-3">
                <h1 className='text-[35px] md:text-[45px] text-white font-black'>SHAPE YOUR <span className='text-orange-500'>PERFECT</span> BODY</h1>
                <p className='text-white font-light'>6 benefits of regular physical activity</p>
                <p className='text-white mt-2 md:mt-3 text-justify text-[18px] font-medium'>
                    Exercise controls weight. Exercise combats health conditions and diseases. Exercise improves mood. Exercise boosts energy. Exercise promotes better sleep and Exercise can be fun.
                </p>
                <p className='text-white mt-2 md:mt-3 text-justify text-[18px] font-bold'>Exercise and physical activity are great ways to feel better</p>

                <button className="bg-orange-500 text-white text-[22px] border-2 border-orange-500 duration-500 easy-in-out hover:bg-transparent font-bold py-2 px-3" onClick={() => navigate("/services")}>Book Now</button>
            </div>
        </header>
    );
};

export default Header;