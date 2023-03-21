import React from "react";
import "wowjs/css/libs/animate.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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
        <h1 className="text-[#1D537C] font-bold text-[46px]">
          Codialni tanlash uchun <br /> 9ta sabab
        </h1>
        <div className="grid justify-items-center  grid-cols-3 gap-5 py-10">
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i1.png" alt="" />
              <h1 className="font-semibold text-xl">Ustozlar</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              Doimiy rivojlanishda bo’lgan professional ustozlar
            </p>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i2.png" alt="" />
              <h1 className="font-semibold text-xl">Grantlar</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              50% chegirma yutish uchun imkoniyat
            </p>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i3.png" alt="" />
              <h1 className="font-semibold text-xl">O’quv reja</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              Yangi texnologiyalar va o’quv rejalar orqali dars olib boriladi
            </p>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i4.png" alt="" />
              <h1 className="font-semibold text-xl">Loyihalar</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              Bitirayotganda 10tadan 30ta gacha loyiha bilan bitiradi
            </p>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i6.png" alt="" />
              <h1 className="font-semibold text-xl">Ta’lim</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              Darslar Farg’ona, Marg’ilon va Andijon filiallarida olib boriladi
            </p>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i6.png" alt="" />
              <h1 className="font-semibold text-xl">Yordamchilar</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              Akademik yordamchi ustozlar mavjudligi
            </p>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i7.png" alt="" />
              <h1 className="font-semibold text-xl">Dars videolar</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              Darslar videoga olinib, online darslik sifatida yuboriladi
            </p>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i8.png" alt="" />
              <h1 className="font-semibold text-xl">Co-working</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              Call center va co-working xizmatlari mavjudligi
            </p>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/i9.png" alt="" />
              <h1 className="font-semibold text-xl">Chegirmalar</h1>
            </div>
            <p className="text-base text-[#002D4F] font-normal">
              Bizda turli xil chegirmalar mavjudligi
            </p>
          </div>
          {/* <i class="fa-brands fa-telegram fa-fade fa-2xl"></i> */}
        </div>
        <div className="my-10">
          <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px]">
            Codial o’quv markazi <br /> asoschisi haqida
          </h1>
          <div className="flex py-10 gap-10 items-center">
            <img src="./images/boss.png" alt="" />
            <div>
              <h1 className="font-medium text-xl text-[#3D3D3D] mb-10">
                Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
                massa sodales sem id aliquet Sodales sed mollis diam massa
                sodales sem id aliquet
              </h1>
              <div className="flex items-center gap-5 my-5">
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
              <div className="flex items-center gap-5 my-5">
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
              <div className="flex items-center gap-5 my-5">
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
              <div className="flex items-center gap-5 my-5">
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
              <div className="flex items-center gap-5 my-5">
                <i className="fa-solid fa-check text-lg text-yellow-400 bg-[#1D537C] rounded-full px-2 py-1"></i>
                <h1 className="font-medium text-xl text-[#3D3D3D]">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>
            </div>
          </div>
          <h1 className="animate__fadeInLeft my-10 wow text-[#1D537C] font-bold text-[46px]">
          Savollaringiz bo’lsa <br /> raqamingizni qoldiring
        </h1>
        </div>
      </div>
        <div className="footer py-10 px-16 grid grid-cols-2 bg-[#1D537C]">
          <div className="bg-white w-7/12">
            <h1>Savollar uchun</h1>
            <input type="text" placeholder="Ismingiz"/>
            <input type="tel" placeholder="+998" />
          </div>
          <div className="relative overflow-hidden rounded-md"><a href="https://yandex.uz/maps/10336/phergana/search/codial/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-xs absolute top-0">codial  Farg‘onada</a><a href="https://yandex.uz/maps/10336/phergana/?utm_medium=mapframe&utm_source=maps"className="text-[#eee] text-xs absolute top-[14px]">Yandex Xarita</a><iframe src="https://yandex.uz/map-widget/v1/?l=stv%2Csta&ll=71.782436%2C40.383160&mode=search&sll=71.784935%2C40.386878&sspn=0.018089%2C0.008352&text=codial&tilt=0.8726646259971648&z=16" width={"560"} height={"400"} frameborder="1" allowfullscreen="true" className="relative"></iframe></div>
        </div>
    </div>
  );
}

export default Footer;
