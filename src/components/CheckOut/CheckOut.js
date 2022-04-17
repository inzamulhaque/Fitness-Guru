import React from 'react';
import {useParams} from 'react-router';
import useData from '../../hooks/useData';


const CheckOut = () => {
    const data = useData();
    const {id} = useParams();
    const oneData = data.find(item => item.id == id);
    const {  name, description, price, img } = oneData ||{}; //for error handeling
    if(!id){
        return <p className='text-center text-[22px]'>please select one item</p>;
    }
    return (
        <div className="container mx-auto">
            <div className="px-3 justify-center items-center">
                <div className='w-full h-full md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-1/2 mx-auto'>
                    <img src={img} alt="Product Image" className='w-[50px] h-[50px] mx-auto' />
                    <h3 className="text-center text-[24px]"> Name: {name} </h3>
                    <p className="text-center text-[20px]">${price} <span className='text-[16px] font-light'>Monthly</span></p>
                    <p className="tex-[18px] text-justify font-normal">
                    {description}
                    </p>
                    <button className="py-2 px-3 bg-blue-500 text-white text-[22px] font-bold">Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;