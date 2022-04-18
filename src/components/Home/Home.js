import React, { useEffect, useRef } from 'react';
import Card from '../Card/Card';
import Header from './Header';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import useData from '../../hooks/useData';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Quotes from './Quotes';
import ContactForm from './ContactForm';
SwiperCore.use([Autoplay]);

const Home = () => {
    const data = useData();
    return (
        <>
            {/* add header */}
            <Header />
            {/* show all products in testimonials slider */}
            <div className="container mx-auto">
                <h3 className='text-center font-bold text-[30px] my-2 text-blue-500'>Our Services</h3>
                <Swiper
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        data.map(item => <SwiperSlide key={item.id}>
                            <Card data={item} />
                        </SwiperSlide>)
                    }
                </Swiper>
                {/* add contact form */}
                <ContactForm />
                {/* add quotes */}
                <Quotes />
            </div>
        </>
    );
};

export default Home;