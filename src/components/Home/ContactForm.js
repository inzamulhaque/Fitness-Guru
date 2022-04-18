import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {

    // handle Contact function
    const handleContact = event => {
        event.preventDefault();
        const fname = event.target.fname.value;
        const lname = event.target.lname.value;

        toast.success(`${fname} ${lname} thanks for message`, {
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
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto mt-3">
            <div className="card p-3">
                <h3 className="text-[25px] m-2 text-center text-blue-500 font-bold">Contact Us</h3>
                <form onSubmit={handleContact}>
                    <div className="md:flex gap-2 justify-center items-center">
                        <input type="text" placeholder='Enter Your First Name*' className='w-full md:w-1/2 border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' name="fname" required />
                        <input type="text" placeholder='Enter Your Last Name*' className='w-full md:w-1/2 border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' name="lname" required />
                    </div>

                    <div className="md:flex gap-2 justify-center items-center">
                        <input type="email" placeholder='Enter Your Email*' className='w-full md:w-1/2 border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                        <input type="number" placeholder='Enter Your Phone Number' className='w-full md:w-1/2 border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' />
                    </div>
                    <textarea className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[20px]' placeholder='Message*' required></textarea>

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto mb-2'>Send</button>
                </form>
                <ToastContainer />
            </div>
        </div >
    );
};

export default ContactForm;