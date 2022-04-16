import React from 'react';
import Card from '../Card/Card';
import Header from './Header';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import useData from '../../hooks/useData';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Autoplay]);

const Home = () => {
    const data = useData();
    return (
        <>
            {/* add header */}
            <Header />
            {/* show all products in slider */}
            <div className="container mx-auto">
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
                    {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
                    {
                        data.map(item => <SwiperSlide key={item.id}>
                            <Card data={item} />
                        </SwiperSlide>)
                    }
                    {/* </div> */}
                </Swiper>
            </div>
        </>
    );
};

export default Home;