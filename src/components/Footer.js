import React from "react";
import 'wowjs/css/libs/animate.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Footer() {
  return (
    <div>
      <div className="py-5 px-16 bg-[#F8FAFF]">
        <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px]">
          O’quvchilarimizning <br /> samimiy fikrlari
        </h1>
        <div className=" my-16 animate__fadeInRight wow">
      <Swiper
        slidesPerView={3.4}
        spaceBetween={30}
        className="mySwiper"
        grabCursor={true}
      >
        <SwiperSlide>
        <div className="relative min-h-[375px] w-[350px] flex items-end">
        <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6">
            <img
              src="./images/u1.png"
              alt=""
              className="absolute top-0 left-[50%] -translate-x-[50%]"
            />
            <h1 className="font-semibold text-xl mb-3">Muhammadfotih </h1>
            <p className="text-sm leading-6 font-normal">
              Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
              massa sodales sem id aliquet. Convallis consectetur ullamcorper
              morbi iaculis sit in
            </p>
            <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative min-h-[375px] w-[350px] flex items-end">
        <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6">
            <img
              src="./images/u2.png"
              alt=""
              className="absolute top-0 left-[50%] -translate-x-[50%]"
            />
            <h1 className="font-semibold text-xl mb-3">Sarvarbek Karimov </h1>
            <p className="text-sm leading-6 font-normal">
              Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
              massa sodales sem id aliquet. Convallis consectetur ullamcorper
              morbi iaculis sit in
            </p>
            <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative min-h-[375px] w-[350px] flex items-end">
        <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6">
            <img
              src="./images/u3.png"
              alt=""
              className="absolute top-0 left-[50%] -translate-x-[50%]"
            />
            <h1 className="font-semibold text-xl mb-3">Ben Richard </h1>
            <p className="text-sm leading-6 font-normal">
              Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
              massa sodales sem id aliquet. Convallis consectetur ullamcorper
              morbi iaculis sit in
            </p>
            <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="relative min-h-[375px] w-[350px] flex items-end">
       <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6">
            <img
              src="./images/u1.png"
              alt=""
              className="absolute top-0 left-[50%] -translate-x-[50%]"
            />
            <h1 className="font-semibold text-xl mb-3">Muhammadfotih </h1>
            <p className="text-sm leading-6 font-normal">
              Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
              massa sodales sem id aliquet. Convallis consectetur ullamcorper
              morbi iaculis sit in
            </p>
            <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative min-h-[375px] w-[350px] flex items-end">
        <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6">
            <img
              src="./images/u2.png"
              alt=""
              className="absolute top-0 left-[50%] -translate-x-[50%]"
            />
            <h1 className="font-semibold text-xl mb-3">Sarvarbek Karimov </h1>
            <p className="text-sm leading-6 font-normal">
              Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
              massa sodales sem id aliquet. Convallis consectetur ullamcorper
              morbi iaculis sit in
            </p>
            <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="relative min-h-[375px] w-[350px] flex items-end">
       <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6">
            <img
              src="./images/u1.png"
              alt=""
              className="absolute top-0 left-[50%] -translate-x-[50%]"
            />
            <h1 className="font-semibold text-xl mb-3">Muhammadfotih </h1>
            <p className="text-sm leading-6 font-normal">
              Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
              massa sodales sem id aliquet. Convallis consectetur ullamcorper
              morbi iaculis sit in
            </p>
            <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          </div>
       </div>
        </SwiperSlide>
      </Swiper>
      </div>
       
      </div>
    </div>
  );
}

export default Footer;
