import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Banner.scss";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >


<SwiperSlide><img
          className="d-block w-100"
          src="/assets/Banner/bannerjpg.jpg"
          alt="First slide"
        /></SwiperSlide>

<SwiperSlide><img
          className="d-block w-100"
          src="/assets/Banner/bannerjpg.jpg"
          alt="First slide"
        /></SwiperSlide>

<SwiperSlide><img
          className="d-block w-100"
          src="/assets/Banner/bannerjpg.jpg"
          alt="First slide"
        /></SwiperSlide>

        {/* <SwiperSlide><img
          className="d-block w-100"
          src="/assets/Banner/banner.webp"
          alt="First slide"
        /></SwiperSlide>

        <SwiperSlide><img
          className="d-block w-100"
          src="/assets/Banner/banner1.webp"
          alt="Second slide"
        /></SwiperSlide>

        <SwiperSlide><img
          className="d-block w-100"
          src="/assets/Banner/banner2.webp"
          alt="Third slide"
        /></SwiperSlide> */}

      </Swiper>
    </>
  );
}
