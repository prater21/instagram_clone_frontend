import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import IconSwiperLeft from "../../assets/images/icon/icon-swiper-left";
import IconSwiperRight from "../../assets/images/icon/icon-swiper-right";

const SwiperPost = ({ imgs, border = true }) => {
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
                className={`swiper-post-img ${border ? "" : "no-border"}`}
            >
                {imgs?.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={img} alt="post-swiper-img" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-post-nav">
                {swiperIndex === 0 ? (
                    ""
                ) : (
                    <>
                        <IconSwiperLeft onClick={handlePrev} color="#000" className="second" />
                        <IconSwiperLeft onClick={handlePrev} />
                    </>
                )}
                {swiperIndex === imgs?.length - 1 ? (
                    ""
                ) : (
                    <>
                        <IconSwiperRight onClick={handleNext} className="right second" color="#000" />
                        <IconSwiperRight onClick={handleNext} className="right" />
                    </>
                )}
            </div>
        </div>
    );
};

export default SwiperPost;
