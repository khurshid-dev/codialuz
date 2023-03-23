import React, { useState } from 'react';
import 'wowjs/css/libs/animate.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

function Header() {
  const [sources, setSources] = useState([
    "./images/m1.png",
    "./images/m2.avif",
    "./images/m3.webp",
  ])
  const [curr, setCurr] = useState(0)
  const [curr1, setCurr1] = useState(1)
  const [curr2, setCurr2] = useState(2)

  const prew = ()=> {
    setCurr(curr =>  curr === 0 ? sources.length - 1 : curr - 1)
    setCurr1(curr1 =>  curr1 === 0 ? sources.length - 1 : curr1 - 1)
    setCurr2(curr2 =>  curr2 === 0 ? sources.length - 1 : curr2 - 1)
    console.log(curr, curr1);
  }
  const next = ()=> {
    setCurr(curr =>  curr === sources.length - 1 ? 0 : curr + 1)
    setCurr1(curr1 =>  curr1 === sources.length - 1 ? 0 : curr1 + 1)
    setCurr2(curr2 =>  curr2 === sources.length - 1 ? 0 : curr2 + 1)
    console.log(curr, curr1, curr2);
  }
  return (
    <div>
      <div className='bg-[#F8F8F8] pt-16 flex justify-between items-center w-full h-[120vh] relative px-16 overflow-hidden'>
        <div className='z-10 animate__fadeInLeft wow'>
            <h1 className='text-[40px] w-2/3 text-[#134062] mb-3 font-semibold '>IT—is a field that provides convenient solutions to <br /> people's problems</h1>
            <h2 className='font-medium text-[#676767] mb-3 text-[22px]'>Kelajak kasblarini biz bilan o’rganing</h2>
            <button className="Header_btn">Batafsil →</button>
        </div>
        <div className='absolute -bottom-5 -right-16'>
            <img src="./images/header-1.png" alt="" className=' animate__fadeInUp wow' />
        </div>
        <img src="./images/abs-1.png" className='header_img absolute -bottom-4 left-0 animate__fadeInLeft wow' alt='abs' />
        <img src="./images/abs-2.png" className='animate__fadeInDown wow absolute top-20 left-[40%] ' alt='abs' />
        <img src="./images/abs-3.png" className='absolute top-[30%] right-4 animate__fadeInRight wow' alt='abs' />
        <img src="./images/abs-4.png" className='absolute bottom-24 left-[30%] animate__fadeInUp wow' alt='abs'  />
        <img src="./images/abs-5.png" className='absolute bottom-0 -right-16 animate__fadeInRight wow ' alt='abs' />
    </div>
    <div className="px-16 bg-white pt-10 ">
      <div className="flex justify-between items-center my-16">
        <div className="font-bold w-1/2 text-[46px]  text-[#1D537C] leading-[84px] animate__fadeInLeft animate__animated wow ">
          <h1>Biz haqimizda ma’lumotlarni bilib oling</h1>
        </div>
        <div className="animate__fadeInRight animate__animated wow w-1/2 text-[#3D3D3D] font-medium text-xl leading-[30px">
          <p>
            Codial-Zamonaviy kasblar Akademiyasi 2021 yilning 18-yanvar kuni
            Muhammad Amin Naziraliyev tomonidan asos solingan. Hozirga qadar
            akdemiyamizni 500 ga yaqin o`quvchilar bitirgan. <br /> Shu vaqt mobaynida
            akademiyamiz Marg`ilon shahriga ham o`z filialini ochishga ulgurdi.
            Bizning oliy maqsadimiz Farg`ona yoshlariga zamonaviy kasblarni
            o`rgatishdir.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 py-10 gap-7">
        <img src={sources[curr]} alt="m1" className="w-full h-full rounded-2xl transition-transform duration-500 ease-linear" />
        <div className="grid grid-cols-2 gap-7">
            <div className="flex text-4xl h-28 items-center justify-center gap-5">
            <p className="opacity-50 cursor-pointer" onClick={prew}>←</p>
            <p onClick={next} className='cursor-pointer'>→</p></div>
            <div></div>            
            <img src={sources[curr1]} alt="" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-linear" />
            <img src={sources[curr2]} alt="" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-linear" />
        </div>
      </div>
      <div className="py-10 animate__fadeInLeft wow">
        <h1 className="text-[#1D537C] font-bold text-[46px]">Zamonaviy kasblardan <br /> birini o’rganing</h1>
      </div>
      <div className="grid grid-cols-3 gap-y-5">
      <div className="card-transparent w-[380px] px-5 py-3">
            <div className=" animate__fadeInLeft wow">
            <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c1.png" alt="" />
                <p>Python kursi</p>
            </div>
            <p className=" text-[#002D4F] py-4 text-lg leading-[34px]">Agar siz ingliz tilini bilsangiz <br /> kursni bitirmasdan ish <br /> topishingiz mumkin bo’ladi... </p>
            <a href="#" className="text-[#0A66BA] text-xl hover:underline transition-all duration-150">Batafsil →</a>
            </div>
        </div>
        <div className="card-transparent w-[380px] px-5 py-3">
           <div className="animate__fadeInUp wow">
           <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c2.png" alt="" />
                <p>Grafik dizayn</p>
            </div>
            <p className=" text-[#002D4F] py-4 text-lg leading-[34px]">Kurs davomida dizayn <br /> qoidalari va grafik <br /> dasturlarda ishlash o’rgatiladi </p>
            <a href="#" className="text-[#0A66BA] text-xl hover:underline transition-all duration-150">Batafsil →</a>
           </div>
        </div>
        <div className="card-transparent w-[380px] px-5 py-3">
            <div className="animate__fadeInRight wow">
            <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c3.png" alt="" />
                <p>Backend kursi</p>
            </div>
            <p className=" text-[#002D4F] py-4 text-lg leading-[34px]">Agar siz ingliz tilini bilsangiz <br /> kursni bitirmasdan ish <br /> topishingiz mumkin bo’ladi... </p>
            <a href="#" className="text-[#0A66BA] text-xl hover:underline transition-all duration-150">Batafsil →</a>
            </div>
        </div>
        <div className="card-transparent w-[380px] px-5 py-3">
           <div className="animate__fadeInLeft wow">
           <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c4.png" alt="" />
                <p>Android kursi</p>
            </div>
            <p className=" text-[#002D4F] py-4 text-lg leading-[34px]">Agar siz ingliz tilini bilsangiz <br /> kursni bitirmasdan ish <br /> topishingiz mumkin bo’ladi... </p>
            <a href="#" className="text-[#0A66BA] text-xl hover:underline transition-all duration-150">Batafsil →</a>
           </div>
        </div>
        <div className="card-transparent w-[380px] px-5 py-3">
          <div className="animate__fadeInUp wow">
          <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c5.png" alt="" />
                <p>Frontend kursi</p>
            </div>
            <p className=" text-[#002D4F] py-4 text-lg leading-[34px]">Bunda o'quvchilar Web <br /> sahifalar va tezkor, xavfsiz <br /> ilovalar ishlab chiqadi..</p>
            <a href="#" className="text-[#0A66BA] text-xl hover:underline transition-all duration-150">Batafsil →</a>
          </div>
        </div>
        <div className="card-transparent w-[380px] px-5 py-3">
            <div className="animate__fadeInRight wow">
            <div className="h-28 flex gap-7 justify-start font-semibold items-center text-[#262626] text-2xl py-3">
                <img src="./images/c6.png" alt="" />
                <p>Savodxonlik kursi</p>
            </div>
            <p className=" text-[#002D4F] py-4 text-lg leading-[34px]">Siz bunda Microsoft <br /> kompaniyasining Windows <br /> operatsion tizimni o’rganasiz...</p>
            <Link to='/savodxonlik' className="text-[#0A66BA] text-xl hover:underline transition-all duration-150">Batafsil →</Link>
            </div>
        </div>
      </div>
      <div className="py-10">
      <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px]">Bizning jamoamiz bilan <br /> tanishing</h1>
      <div className=" my-10 animate__fadeInRight wow">
      <Swiper
        slidesPerView={3.3}
        spaceBetween={30}
        className="mySwiper"
        grabCursor={true}
      >
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
                    Lorem ipsum dolor sit amet consectetur. Sodales sed mollis
                    diam massa sodales sem id aliquet. Convallis consectetur
                    ullamcorper morbi iaculis sit in
                  </p>
                  <p className="text-yellow-500 text-xl my-2">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </p>
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
                  <h1 className="font-semibold text-xl mb-3">
                    Sarvarbek Karimov{" "}
                  </h1>
                  <p className="text-sm leading-6 font-normal">
                    Lorem ipsum dolor sit amet consectetur. Sodales sed mollis
                    diam massa sodales sem id aliquet. Convallis consectetur
                    ullamcorper morbi iaculis sit in
                  </p>
                  <p className="text-yellow-500 text-xl my-2">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </p>
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
                    Lorem ipsum dolor sit amet consectetur. Sodales sed mollis
                    diam massa sodales sem id aliquet. Convallis consectetur
                    ullamcorper morbi iaculis sit in
                  </p>
                  <p className="text-yellow-500 text-xl my-2">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </p>
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
                    Lorem ipsum dolor sit amet consectetur. Sodales sed mollis
                    diam massa sodales sem id aliquet. Convallis consectetur
                    ullamcorper morbi iaculis sit in
                  </p>
                  <p className="text-yellow-500 text-xl my-2">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </p>
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
                  <h1 className="font-semibold text-xl mb-3">
                    Sarvarbek Karimov{" "}
                  </h1>
                  <p className="text-sm leading-6 font-normal">
                    Lorem ipsum dolor sit amet consectetur. Sodales sed mollis
                    diam massa sodales sem id aliquet. Convallis consectetur
                    ullamcorper morbi iaculis sit in
                  </p>
                  <p className="text-yellow-500 text-xl my-2">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </p>
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
                    Lorem ipsum dolor sit amet consectetur. Sodales sed mollis
                    diam massa sodales sem id aliquet. Convallis consectetur
                    ullamcorper morbi iaculis sit in
                  </p>
                  <p className="text-yellow-500 text-xl my-2">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="px-16 py-10">
        <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px]">
          Codialni tanlash uchun <br /> 9ta sabab
        </h1>

        <div className="grid justify-items-center  grid-cols-3 gap-5 py-10">
          <div className="animate__fadeInLeft wow">
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
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
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
              <div className="flex gap-5 items-center mb-5">
                <img src="./images/i2.png" alt="" />
                <h1 className="font-semibold text-xl">Grantlar</h1>
              </div>
              <p className="text-base text-[#002D4F] font-normal">
                50% chegirma yutish uchun imkoniyat
              </p>
            </div>
          </div>
          <div className="animate__fadeInRight wow">
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
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
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
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
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
              <div className="flex gap-5 items-center mb-5">
                <img src="./images/i6.png" alt="" />
                <h1 className="font-semibold text-xl">Ta’lim</h1>
              </div>
              <p className="text-base text-[#002D4F] font-normal">
                Darslar Farg’ona, Marg’ilon va Andijon filiallarida olib
                boriladi
              </p>
            </div>
          </div>
          <div className="animate__fadeInRight wow">
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
              <div className="flex gap-5 items-center mb-5">
                <img src="./images/i6.png" alt="" />
                <h1 className="font-semibold text-xl">Yordamchilar</h1>
              </div>
              <p className="text-base text-[#002D4F] font-normal">
                Akademik yordamchi ustozlar mavjudligi
              </p>
            </div>
          </div>
          <div className="animate__fadeInLeft wow">
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
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
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
              <div className="flex gap-5 items-center mb-5">
                <img src="./images/i8.png" alt="" />
                <h1 className="font-semibold text-xl">Co-working</h1>
              </div>
              <p className="text-base text-[#002D4F] font-normal">
                Call center va co-working xizmatlari mavjudligi
              </p>
            </div>
          </div>
          <div className="animate__fadeInRight wow">
            <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
              <div className="flex gap-5 items-center mb-5">
                <img src="./images/i9.png" alt="" />
                <h1 className="font-semibold text-xl">Chegirmalar</h1>
              </div>
              <p className="text-base text-[#002D4F] font-normal">
                Bizda turli xil chegirmalar mavjudligi
              </p>
            </div>
          </div>
          {/* <i class="fa-brands fa-telegram fa-fade fa-2xl"></i> */}
        </div>
        <div className="my-10">
          <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px]">
            Codial o’quv markazi <br /> asoschisi haqida
          </h1>
          <div className="flex py-10 gap-10 items-center animate__fadeInLeft wow">
            <img src="./images/boss.png" alt="" />
            <div>
              <h1 className="font-medium text-xl text-[#3D3D3D] mb-10 animate__fadeInLeft wow leading-8">
                Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
                massa sodales sem id aliquet Sodales sed mollis diam massa
                sodales sem id aliquet
              </h1>
              <div className="flex items-center gap-5 my-5 animate__fadeInLeft wow">
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
              <div
                className="flex items-center gap-5 my-5 animate__fadeInLeft wow "
                data-wow-delay="0.2s"
              >
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
              <div
                className="flex items-center gap-5 my-5 animate__fadeInLeft wow"
                data-wow-delay="0.3s"
              >
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
              <div
                className="flex items-center gap-5 my-5 animate__fadeInLeft wow "
                data-wow-delay="0.4s"
              >
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
              <div
                className="flex items-center gap-5 my-5 animate__fadeInLeft wow"
                data-wow-delay="0.5s"
              >
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
            </div>
          </div>
          <h1 className="animate__fadeInLeft my-10 wow text-[#1D537C] font-bold text-[46px] animate__fadeInLeft wow">
            Savollaringiz bo’lsa <br /> raqamingizni qoldiring
          </h1>
        </div>
      </div>
      <div id='footer' className="footer bg-[#1D537C] pt-10 pb-10 px-16">
        <div className="flex items-center justify-center gap-20 ">
          <div className="bg-white rounded-2xl w-4/12 flex flex-col items-start px-7 py-10 gap-5 wow animate__fadeInLeft">
            <h1>Savollar uchun</h1>
            <input
              type="text"
              placeholder="Ismingiz"
              className="py-2 px-3 rounded-lg w-full bg-[#F3F3F3]"
            />
            <input
              type="tel"
              placeholder="+998"
              className="py-2 px-3 rounded-lg w-full bg-[#F3F3F3]"
            />
            <div className="flex items-end w-full justify-end">
              <button className="Input_btn py-3 rounded-lg px-10 bg-[#FF9D00]">
                Yuborish
              </button>
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
              width={"560"}
              height={"400"}
              frameborder="1"
              allowfullscreen="true"
              className="relative"
            ></iframe>
          </div>
        </div>
        <div className="flex items-center mt-10 justify-between">
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
          <div className="phone_num flex gap-3 text-white items-center text-base">
            <i className="fa-solid fa-phone text-white"></i>
            <p>+9989 (99) 123 45 67</p>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Header