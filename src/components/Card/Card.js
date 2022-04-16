import React from 'react';
import ShortText from './ShortText';

const Card = ({ data }) => {
    const { id, name, description, price, img } = data || {}; //for error handeling
    return (
        <>
            <div className='min-w-[250px] h-full w-full w-1/3 my-2 py-2 px-3 card h-100'>
                <div className="w-[60px] h-[50px] mx-auto">
                    <img src={img} className='w-full ' />
                </div>
                <div className='text-center my-3'>
                    <h3 className='text-[25px]  font-bold'>{name}</h3>
                    <p className='tex-[16px] font-normal'>
                        {description.length > 150 ? <ShortText key={id} text={description} id={id} /> : description}
                    </p>
                    <p className='text-[20px] font-medium'>${price} <span className='text-[16px] font-light'>Monthly</span> </p>

                    <button className='bg-blue-500 text-white text-[22px] font-bold hover:text-blue-500 hover:bg-white border-2 border-blue-500 duration-500 easy-in-out py-2 px-3 rounded-md'>Check Out</button>
                </div>
            </div>
        </>
    );
};

export default Card;