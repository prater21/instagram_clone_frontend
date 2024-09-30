import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { IconSwiperLeftArrow, IconSwiperRightArrow } from "../../constants/icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

const SwiperPost = ({ post }) => {
    const [swiperIndex, setSwiperIndex] = useState(0);
    const [swiper, setSwiper] = useState();

    const handlePrev = () => {
        swiper?.slidePrev();
    };
    const handleNext = () => {
        swiper?.slideNext();
    };
    return (
        <div className="swiper-post">
            <Swiper
                onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
                onSwiper={(e) => {
                    setSwiper(e);
                }}
                pagination={true}
                modules={[Pagination, Navigation]}
                className="swiper-post-img"
            >
                {post.imgs.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={img} alt="post-swiper-img" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-post-nav">
                {swiperIndex === 0 ? "" : <IconSwiperLeftArrow onClick={handlePrev} />}
                {swiperIndex === post.imgs.length - 1 ? "" : <IconSwiperRightArrow onClick={handleNext} className="right" />}
            </div>
        </div>
    );
};

export default SwiperPost;
