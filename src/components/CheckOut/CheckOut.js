import React from 'react';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {
    const data = useData();
    const { id } = useParams();
    const oneData = data.find(item => item.id == id);
    const { name, description, price, img } = oneData || {}; //for error handeling
    if (!id) {
        return <p className='text-center text-[22px]'>please select one item</p>;
    }

    // handle Book Now function
    const handleBookNow = event => {
        event.preventDefault();
        const name = event.target.name.value;
        toast.success(`${name}! thanks for booking`, {
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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="px-3">
                <img src={img} alt="Product Image" className='w-[50px] h-[50px] mx-auto' />
                <h3 className="text-center text-[24px]"> Name: {name} </h3>
                <p className="text-center text-[20px]">${price} <span className='text-[16px] font-light'>Monthly</span></p>
                <p className="tex-[18px] text-justify font-normal">
                    {description}
                </p>
                <button className="py-2 px-3 bg-blue-500 text-white text-[22px] font-bold">Pay Now</button>
            </div>

            <div className="px-3 card">
                <form onSubmit={handleBookNow} className="p-3 md:px-5 lg:px-7">
                    <input type="text" name="name" placeholder='Enter Your Name*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <input type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <input type="number" placeholder='Enter Your Phone Number' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' />
                    <input type="text" placeholder='Enter Your Address*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Book Now</button>

                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CheckOut;