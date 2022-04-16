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
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div className="grid-rows-1 grid-flow-row md:grid-rows-2 lg:grid-rows-3 container mx-auto">
                    {
                        data.map(item => <SwiperSlide key={item.id}>
                            <Card data={item} />
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </>
    );
};

export default Home;