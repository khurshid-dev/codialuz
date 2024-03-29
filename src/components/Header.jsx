import React, { useState } from "react";
import "wowjs/css/libs/animate.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function Header() {
  const [slidesPerView, setSlidesPerView] = React.useState(3.2);
  const [spaceBetween, setSpaceBetween] = React.useState(30);

  React.useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSlidesPerView(3.2);
        setSpaceBetween(30);
      } else if (screenWidth >= 768) {
        setSlidesPerView(2.2);
        setSpaceBetween(20);
      } else {
        setSlidesPerView(1.2);
        setSpaceBetween(10);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [sources, setSources] = useState(["./images/m1.png", "./images/m22.jpg", "./images/m3.webp"]);
  const [curr, setCurr] = useState(0);
  const [curr1, setCurr1] = useState(1);
  const [curr2, setCurr2] = useState(2);

  const prew = () => {
    setCurr((curr) => (curr === 0 ? sources.length - 1 : curr - 1));
    setCurr1((curr1) => (curr1 === 0 ? sources.length - 1 : curr1 - 1));
    setCurr2((curr2) => (curr2 === 0 ? sources.length - 1 : curr2 - 1));
    console.log(curr, curr1, curr2);
  };
  const next = () => {
    setCurr((curr) => (curr === sources.length - 1 ? 0 : curr + 1));
    setCurr1((curr1) => (curr1 === sources.length - 1 ? 0 : curr1 + 1));
    setCurr2((curr2) => (curr2 === sources.length - 1 ? 0 : curr2 + 1));
    console.log(curr, curr1, curr2);
  };
  return (
    <div>
      <div className="bg-[#F8F8F8] pt-16 flex justify-between items-center w-full h-[120vh] max-[430px]:h-[80vh] relative px-16 overflow-hidden">
        <div className="z-10 animate__fadeInLeft wow max-lg:pb-10 max-sm:pb-16">
          <h1 className="text-[40px] w-2/3 max-sm:w-full text-[#134062] mb-3 max-lg:text-[37px] max-md:text-[30px] font-semibold max-sm:text-[25px] max-[430px]:text-[20px]">
            IT—is a field that provides convenient solutions to <br className="max-sm:hidden" /> people's problems
          </h1>
          <h2 className="font-medium text-[#676767] mb-3 max-lg:text-[20px] text-[22px] max-sm:text-[17px] max-[430px]:text-[14px] ">
            Kelajak kasblarini biz bilan o’rganing
          </h2>
          <button className="Header_btn">Batafsil →</button>
        </div>
        <div className="absolute -bottom-5 -right-16">
          <img src="./images/header-1.png" alt="" className=" animate__fadeInUp wow max-lg:hidden" />
        </div>
        <img
          src="./images/abs-1.png"
          className="header_img absolute -bottom-4 left-0 animate__fadeInLeft wow max-lg:-bottom-16 max-sm:-bottom-4 max-[430px]:-bottom-10"
          alt="abs"
        />
        <img
          src="./images/abs-2.png"
          className=" animate__fadeInDown wow absolute top-20 left-[40%] max-lg:top-8 max-[430px]:left-[10%] max-[430px]:top-1"
          alt="abs"
        />
        <img
          src="./images/abs-3.png"
          className="absolute top-[30%] right-4 max-sm:right-0 animate__fadeInRight wow max-lg:right-8"
          alt="abs"
        />
        <img
          src="./images/abs-4.png"
          className=" absolute bottom-24 left-[30%] animate__fadeInUp wow max-lg:bottom-16 max-lg:left-[36%] max-[430px]:left-[50%]"
          alt="abs"
        />
        <img
          src="./images/abs-5.png"
          className="max-[430px]:hidden absolute bottom-0 -right-16 animate__fadeInRight wow "
          alt="abs"
        />
      </div>
      <div className="px-16 bg-white pt-10 max-lg:px-12 ">
        <div className="flex justify-between items-center my-16 max-md:flex-wrap ">
          <div className="font-bold w-2/3 text-[46px] text-[#1D537C] leading-[84px] animate__fadeInLeft animate__animated wow max-lg:text-[38px] max-md:text-[30px] max-md:leading-[50px] max-sm:w-full">
            <h1>Biz haqimizda ma’lumotlarni bilib oling</h1>
          </div>
          <div className="animate__fadeInRight animate__animated wow w-2/3 text-[#3D3D3D] font-medium text-xl max-lg:text-base leading-[30px] max-md:text-sm max-md:mt-10 max-[430px]:w-full ">
            <p>
              Codial-Zamonaviy kasblar Akademiyasi 2021 yilning 18-yanvar kuni Muhammad Amin Naziraliyev tomonidan asos
              solingan. Hozirga qadar akdemiyamizni 500 ga yaqin o`quvchilar bitirgan. Shu vaqt mobaynida akademiyamiz
              Marg`ilon shahriga ham o`z filialini ochishga ulgurdi. Bizning oliy maqsadimiz Farg`ona yoshlariga
              zamonaviy kasblarni o`rgatishdir.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 py-10 gap-7">
          <img
            src={sources[curr]}
            alt="m1"
            className="w-full h-full rounded-2xl transition-transform animate__animated animate__backInRight duration-500 ease-linear"
          />
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-7">
            <div className="flex text-4xl h-28 items-center justify-center gap-5 ">
              <p className=" hover:opacity-50 cursor-pointer" onClick={prew}>
                ←
              </p>
              <p onClick={next} className="cursor-pointer hover:opacity-50">
                →
              </p>
            </div>
            <div className="sm:block hidden"></div>
            <img
              src={sources[curr1]}
              alt=""
              className="animate__animated animate__bounce w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out "
            />
            <img
              src={sources[curr2]}
              alt=""
              className="animate__animated animate__bounce w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-linear"
            />
          </div>
        </div>
        <div className="py-10 animate__fadeInLeft wow">
          <h1 className="text-[#1D537C] font-bold text-[46px] max-lg:text-[38px] max-md:text-[30px] max-[430px]:text-[23px]">
            Zamonaviy kasblardan <br /> birini o’rganing
          </h1>
        </div>
        <div className="flex justify-around flex-wrap gap-y-5">
          <div className="card-transparent w-[380px] max-lg:w-[350px] max-md:w-[300px] px-5 py-3">
            <div className=" animate__fadeInLeft wow">
              <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c1.png" alt="" />
                <p>Python kursi</p>
              </div>
              <p className=" text-[#002D4F] py-4 text-lg leading-[34px] max-md:text-base">
                Agar siz ingliz tilini bilsangiz <br /> kursni bitirmasdan ish <br /> topishingiz mumkin bo’ladi...{" "}
              </p>
              <Link
                to={"/python"}
                className="text-[#0A66BA] text-xl hover:border-b border-indigo-600 mb-4 transition-all duration-150"
              >
                Batafsil →
              </Link>
            </div>
          </div>
          <div className="card-transparent w-[380px] max-lg:w-[350px] max-md:w-[300px] px-5 py-3">
            <div className="animate__fadeInUp wow">
              <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c2.png" alt="" />
                <p>Grafik dizayn</p>
              </div>
              <p className=" text-[#002D4F] py-4 text-lg leading-[34px] max-md:text-base">
                Kurs davomida dizayn <br /> qoidalari va grafik <br /> dasturlarda ishlash o’rgatiladi{" "}
              </p>
              <Link
                to={"/grafikdizayn"}
                className="text-[#0A66BA] text-xl hover:border-b border-indigo-600 mb-4 transition-all duration-150"
              >
                Batafsil →
              </Link>
            </div>
          </div>
          <div className="card-transparent w-[380px] max-lg:w-[350px] max-md:w-[300px] px-5 py-3">
            <div className="animate__fadeInRight wow">
              <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c3.png" alt="" />
                <p>Backend kursi</p>
              </div>
              <p className=" text-[#002D4F] py-4 text-lg leading-[34px] max-md:text-base">
                Agar siz ingliz tilini bilsangiz <br /> kursni bitirmasdan ish <br /> topishingiz mumkin bo’ladi...{" "}
              </p>
              <Link
                to={"/backend"}
                className="text-[#0A66BA] text-xl hover:border-b border-indigo-600 mb-4 transition-all duration-150"
              >
                Batafsil →
              </Link>
            </div>
          </div>
          <div className="card-transparent w-[380px] max-lg:w-[350px] max-md:w-[300px] px-5 py-3">
            <div className="animate__fadeInLeft wow">
              <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c4.png" alt="" />
                <p>Android kursi</p>
              </div>
              <p className=" text-[#002D4F] py-4 text-lg leading-[34px] max-md:text-base">
                Agar siz ingliz tilini bilsangiz <br /> kursni bitirmasdan ish <br /> topishingiz mumkin bo’ladi...{" "}
              </p>
              <Link
                to={"/android"}
                className="text-[#0A66BA] text-xl hover:border-b border-indigo-600 mb-4 transition-all duration-150"
              >
                Batafsil →
              </Link>
            </div>
          </div>
          <div className="card-transparent w-[380px] max-lg:w-[350px] max-md:w-[300px] px-5 py-3">
            <div className="animate__fadeInUp wow">
              <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c5.png" alt="" />
                <p>Frontend kursi</p>
              </div>
              <p className=" text-[#002D4F] py-4 text-lg leading-[34px] max-md:text-base">
                Bunda o'quvchilar Web <br /> sahifalar va tezkor, xavfsiz <br /> ilovalar ishlab chiqadi..
              </p>
              <Link
                to={"/frontend"}
                className="text-[#0A66BA] text-xl hover:border-b border-indigo-600 mb-4 transition-all duration-150"
              >
                Batafsil →
              </Link>
            </div>
          </div>
          <div className="card-transparent w-[380px] max-lg:w-[350px] max-md:w-[300px] px-5 py-3">
            <div className="animate__fadeInRight wow">
              <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c6.png" alt="" />
                <p>Savodxonlik kursi</p>
              </div>
              <p className=" text-[#002D4F] py-4 text-lg leading-[34px] max-md:text-base">
                Siz bunda Microsoft <br /> kompaniyasining Windows <br /> operatsion tizimni o’rganasiz...
              </p>
              <Link
                to="/savodxonlik"
                className="text-[#0A66BA] text-xl hover:border-b border-indigo-600 mb-4 transition-all duration-150"
              >
                Batafsil →
              </Link>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px] max-lg:text-[40px] max-[430px]:text-[23px]">
            Bizning jamoamiz bilan <br /> tanishing
          </h1>
          <div className=" my-10 animate__fadeInRight wow select-none">
            <Swiper slidesPerView={slidesPerView} spaceBetween={spaceBetween} className="mySwiper" grabCursor={true}>
              <SwiperSlide>
                <div className="cart relative">
                  <img src="./images/d2.png" alt="abs-el" className="absolute top-4 left-4" />
                  <img src="./images/d1.png" alt="d1picture" />
                  <h1 className="font-medium text-xl my-3">Falonchiyev Falonchi</h1>
                  <p className="text-[#717171] text-lg">Grafik dizaynerlik bo’yicha 3 yil tajribaga ega mutaxassis</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cart relative">
                  <img src="./images/d2.png" alt="abs-el" className="absolute top-4 left-4" />
                  <img src="./images/d1.png" alt="d1picture" />
                  <h1 className="font-medium text-xl my-3">Falonchiyev Falonchi</h1>
                  <p className="text-[#717171] text-lg">Grafik dizaynerlik bo’yicha 3 yil tajribaga ega mutaxassis</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cart relative">
                  <img src="./images/d2.png" alt="abs-el" className="absolute top-4 left-4" />
                  <img src="./images/d1.png" alt="d1picture" />
                  <h1 className="font-medium text-xl my-3">Falonchiyev Falonchi</h1>
                  <p className="text-[#717171] text-lg">Grafik dizaynerlik bo’yicha 3 yil tajribaga ega mutaxassis</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cart relative">
                  <img src="./images/d2.png" alt="abs-el" className="absolute top-4 left-4" />
                  <img src="./images/d1.png" alt="d1picture" />
                  <h1 className="font-medium text-xl my-3">Falonchiyev Falonchi</h1>
                  <p className="text-[#717171] text-lg">Grafik dizaynerlik bo’yicha 3 yil tajribaga ega mutaxassis</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cart relative">
                  <img src="./images/d2.png" alt="abs-el" className="absolute top-4 left-4" />
                  <img src="./images/d1.png" alt="d1picture" />
                  <h1 className="font-medium text-xl my-3">Falonchiyev Falonchi</h1>
                  <p className="text-[#717171] text-lg">Grafik dizaynerlik bo’yicha 3 yil tajribaga ega mutaxassis</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cart relative">
                  <img src="./images/d2.png" alt="abs-el" className="absolute top-4 left-4" />
                  <img src="./images/d1.png" alt="d1picture" />
                  <h1 className="font-medium text-xl my-3">Falonchiyev Falonchi</h1>
                  <p className="text-[#717171] text-lg">Grafik dizaynerlik bo’yicha 3 yil tajribaga ega mutaxassis</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div>
        <div className="py-5 px-16 bg-[#F8FAFF]">
          <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px] max-lg:text-[38px] max-md:text-[30px] max-[430px]:text-[23px]">
            O’quvchilarimizning <br /> samimiy fikrlari
          </h1>
          <div className=" my-16 animate__fadeInRight wow">
            <Swiper slidesPerView={slidesPerView} spaceBetween={spaceBetween} className="mySwiper" grabCursor={true}>
              <SwiperSlide>
                <div className="relative min-h-[375px] w-[350px] flex items-end max-[430px]:w-[250px]">
                  <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6 ">
                    <img src="./images/u1.png" alt="" className="absolute top-0 left-[50%] -translate-x-[50%]" />
                    <h1 className="font-semibold text-xl mb-3 max-[430px]:text-base">Muhammadfotih </h1>
                    <p className="text-sm leading-6 font-normal max-[430px]:text-[10px]">
                      Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam massa sodales sem id aliquet.
                      Convallis consectetur ullamcorper morbi iaculis sit in
                    </p>
                    <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative min-h-[375px] w-[350px] flex items-end max-[430px]:w-[250px]">
                  <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6 ">
                    <img src="./images/u2.png" alt="" className="absolute top-0 left-[50%] -translate-x-[50%]" />
                    <h1 className="font-semibold text-xl mb-3 max-[430px]:text-base">Sarvarbek Karimov </h1>
                    <p className="text-sm leading-6 font-normal max-[430px]:text-[10px]">
                      Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam massa sodales sem id aliquet.
                      Convallis consectetur ullamcorper morbi iaculis sit in
                    </p>
                    <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative min-h-[375px] w-[350px] flex items-end max-[430px]:w-[250px]">
                  <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6 ">
                    <img src="./images/u3.png" alt="" className="absolute top-0 left-[50%] -translate-x-[50%]" />
                    <h1 className="font-semibold text-xl mb-3 max-[430px]:text-base">Ben Richard </h1>
                    <p className="text-sm leading-6 font-normal max-[430px]:text-[10px]">
                      Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam massa sodales sem id aliquet.
                      Convallis consectetur ullamcorper morbi iaculis sit in
                    </p>
                    <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative min-h-[375px] w-[350px] flex items-end max-[430px]:w-[250px]">
                  <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6 ">
                    <img src="./images/u1.png" alt="" className="absolute top-0 left-[50%] -translate-x-[50%]" />
                    <h1 className="font-semibold text-xl mb-3 max-[430px]:text-base">Muhammadfotih </h1>
                    <p className="text-sm leading-6 font-normal max-[430px]:text-[10px]">
                      Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam massa sodales sem id aliquet.
                      Convallis consectetur ullamcorper morbi iaculis sit in
                    </p>
                    <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative min-h-[375px] w-[350px] flex items-end max-[430px]:w-[250px]">
                  <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6 ">
                    <img src="./images/u2.png" alt="" className="absolute top-0 left-[50%] -translate-x-[50%]" />
                    <h1 className="font-semibold text-xl mb-3 max-[430px]:text-base">Sarvarbek Karimov </h1>
                    <p className="text-sm leading-6 font-normal max-[430px]:text-[10px]">
                      Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam massa sodales sem id aliquet.
                      Convallis consectetur ullamcorper morbi iaculis sit in
                    </p>
                    <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative min-h-[375px] w-[350px] flex items-end max-[430px]:w-[250px]">
                  <div className="text-center pt-20 rounded-2xl bg-white px-10 pb-6 ">
                    <img src="./images/u3.png" alt="" className="absolute top-0 left-[50%] -translate-x-[50%]" />
                    <h1 className="font-semibold text-xl mb-3 max-[430px]:text-base">Ben Richard </h1>
                    <p className="text-sm leading-6 font-normal max-[430px]:text-[10px]">
                      Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam massa sodales sem id aliquet.
                      Convallis consectetur ullamcorper morbi iaculis sit in
                    </p>
                    <p className="text-yellow-500 text-xl my-2">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="px-16 py-10 max-lg:px-12">
          <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px] max-lg:text-[40px] max-md:text-[30px] max-[430px]:text-[23px]">
            Codialni tanlash uchun <br /> 9ta sabab
          </h1>
          <div className="flex justify-around flex-wrap gap-4 py-10">
            <div className="animate__fadeInLeft wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i1.png" alt="" />
                  <h1 className="font-semibold text-xl">Ustozlar</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">
                  Doimiy rivojlanishda bo’lgan professional ustozlar
                </p>
              </div>
            </div>
            <div className="animate__fadeInUp wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i2.png" alt="" />
                  <h1 className="font-semibold text-xl">Grantlar</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">50% chegirma yutish uchun imkoniyat</p>
              </div>
            </div>
            <div className="animate__fadeInRight wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i3.png" alt="" />
                  <h1 className="font-semibold text-xl">O’quv reja</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">
                  Yangi texnologiyalar va o’quv rejalar orqali dars olib boriladi
                </p>
              </div>
            </div>
            <div className="animate__fadeInLeft wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i4.png" alt="" />
                  <h1 className="font-semibold text-xl">Loyihalar</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">
                  Bitirayotganda 10tadan 30ta gacha loyiha bilan bitiradi
                </p>
              </div>
            </div>
            <div className="animate__fadeInUp wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i6.png" alt="" />
                  <h1 className="font-semibold text-xl">Ta’lim</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">
                  Darslar Farg’ona, Marg’ilon va Andijon filiallarida olib boriladi
                </p>
              </div>
            </div>
            <div className="animate__fadeInRight wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i6.png" alt="" />
                  <h1 className="font-semibold text-xl">Yordamchilar</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">Akademik yordamchi ustozlar mavjudligi</p>
              </div>
            </div>
            <div className="animate__fadeInLeft wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i7.png" alt="" />
                  <h1 className="font-semibold text-xl">Dars videolar</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">
                  Darslar videoga olinib, online darslik sifatida yuboriladi
                </p>
              </div>
            </div>
            <div className="animate__fadeInUp wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i8.png" alt="" />
                  <h1 className="font-semibold text-xl">Co-working</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">Call center va co-working xizmatlari mavjudligi</p>
              </div>
            </div>
            <div className="animate__fadeInRight wow">
              <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px] h-[200px] max-lg:w-[260px]">
                <div className="flex gap-5 items-center mb-5">
                  <img src="./images/i9.png" alt="" />
                  <h1 className="font-semibold text-xl">Chegirmalar</h1>
                </div>
                <p className="text-base text-[#002D4F] font-normal">Bizda turli xil chegirmalar mavjudligi</p>
              </div>
            </div>
            {/* <i class="fa-brands fa-telegram fa-fade fa-2xl"></i> */}
          </div>
          <div className="my-10">
            <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px] max-lg:text-[40px] max-md:text-[30px] max-[430px]:text-[23px]">
              Codial o’quv markazi <br /> asoschisi haqida
            </h1>
            <div className="flex max-lg:flex-wrap max-lg:justify-center py-10 gap-10 items-center animate__fadeInLeft wow">
              <img src="./images/boss.png" alt="" className="max-lg:w-[600px] max-md:w-[500px]" />
              <div className="max-lg:w-[750px]">
                <h1 className="font-medium text-xl text-[#3D3D3D] mb-10 animate__fadeInLeft wow leading-8 max-lg:text-[22px] max-[430px]:text-lg">
                  Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam massa sodales sem id aliquet Sodales
                  sed mollis diam massa sodales se id aliquet
                </h1>
                <div className="flex items-center justify-center gap-5 my-5 animate__fadeInLeft wow max-lg:text-lg">
                  <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1 max-lg:text-base max-[430px]:text-sm"></i>
                  <h1 className="max-lg:text-lg font-medium text-xl text-[#3D3D3D] max-[430px]:text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </h1>
                </div>
                <div
                  className="flex items-center justify-center gap-5 my-5 animate__fadeInLeft wow  max-lg:text-lg"
                  data-wow-delay="0.2s"
                >
                  <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1 max-lg:text-base max-[430px]:text-sm"></i>
                  <h1 className="max-lg:text-lg font-medium text-xl text-[#3D3D3D] max-[430px]:text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </h1>
                </div>
                <div
                  className="flex items-center justify-center gap-5 my-5 animate__fadeInLeft wow max-lg:text-lg"
                  data-wow-delay="0.3s"
                >
                  <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1 max-lg:text-base max-[430px]:text-sm"></i>
                  <h1 className="max-lg:text-lg font-medium text-xl text-[#3D3D3D] max-[430px]:text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </h1>
                </div>
                <div
                  className="flex items-center justify-center gap-5 my-5 animate__fadeInLeft wow max-lg:text-lg"
                  data-wow-delay="0.4s"
                >
                  <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1 max-lg:text-base max-[430px]:text-sm"></i>
                  <h1 className="max-lg:text-lg font-medium text-xl text-[#3D3D3D] max-[430px]:text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </h1>
                </div>
                <div
                  className="flex items-center justify-center gap-5 my-5 animate__fadeInLeft wow max-lg:text-lg"
                  data-wow-delay="0.5s"
                >
                  <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1 max-lg:text-base max-[430px]:text-sm"></i>
                  <h1 className="max-lg:text-lg font-medium text-xl text-[#3D3D3D] max-[430px]:text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="animate__fadeInLeft my-10 wow text-[#1D537C] font-bold text-[46px] animate__fadeInLeft wow max-lg:text-[40px] max-md:text-[30px] max-[430px]:text-[23px]">
              Savollaringiz bo’lsa <br /> raqamingizni qoldiring
            </h1>
          </div>
        </div>
        <div id="footer" className="footer bg-[#1D537C] pt-10 pb-10 px-5 lg:px-16">
          <div className="flex items-center justify-center gap-20 max-lg:gap-10 max-md:flex-wrap ">
            <div className="bg-white rounded-2xl w-4/12 max-lg:w-1/2 max-md:w-[440px] flex flex-col items-start px-7 py-10 gap-5 wow animate__fadeInLeft">
              <h1>Savollar uchun</h1>
              <input type="text" placeholder="Ismingiz" className="py-2 px-3 rounded-lg w-full bg-[#F3F3F3]" />
              <input type="tel" placeholder="+998" className="py-2 px-3 rounded-lg w-full bg-[#F3F3F3]" />
              <div className="flex items-end w-full justify-end">
                <button className="Input_btn py-3 rounded-lg px-10 bg-[#FF9D00]">Yuborish</button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md wow animate__fadeInRight">
              <a
                href="https://yandex.uz/maps/10336/phergana/search/codial/?utm_medium=mapframe&utm_source=maps"
                className="text-[#eee] text-xs absolute top-0"
              >
                codial Farg‘onada
              </a>
              <a
                href="https://yandex.uz/maps/10336/phergana/?utm_medium=mapframe&utm_source=maps"
                className="text-[#eee] text-xs absolute top-[14px]"
              >
                Yandex Xarita
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/?l=stv%2Csta&ll=71.782436%2C40.383160&mode=search&sll=71.784935%2C40.386878&sspn=0.018089%2C0.008352&text=codial&tilt=0.8726646259971648&z=16"
                height={"400"}
                frameborder="1"
                allowfullscreen="true"
                className="relative w-[560px] max-lg:w-[400px] max-md:w-[440px]"
              ></iframe>
            </div>
          </div>
          <div className="flex sm:items-end items-center mt-10 justify-between">
            <div>
              <img src="./images/footerLogo.png" alt="" className="cursor-pointer" />
            </div>
            <div className="icons_footer text-xl text-white flex gap-7">
              <a href="https://telegram.org/">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://instagram.com/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="phone_num flex gap-3 text-white items-center text-base max-lg:hidden">
              <i className="fa-solid fa-phone text-white"></i>
              <p>+9989 (99) 123 45 67</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
