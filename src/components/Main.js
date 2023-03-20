import React from "react";

function Main() {
  return (
    <div className="px-16 bg-white pt-10">
      <div className="flex justify-between items-center my-16">
        <div className="font-bold w-1/2 text-[56px]  text-[#1D537C] leading-[84px]">
          <h1>Biz haqimizda ma’lumotlarni bilib oling</h1>
        </div>
        <div className="w-1/2 text-[#3D3D3D] font-medium text-xl leading-[30px]">
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
        <img src="./images/m1.png" alt="m1" className="w-full" />
        <div className="grid grid-cols-2 gap-7">
            <div className="flex text-4xl h-28 items-center justify-center gap-5">
            <p className="opacity-50">←</p>
            <p>→</p></div>
            <div></div>            
            <img src="./images/m2.png" alt="" className="w-full" />
            <img src="./images/m2.png" alt=""  className="w-full" />
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-[#1D537C] font-bold text-[46px]">Zamonaviy kasblardan <br /> birini o’rganing</h1>
      </div>
    </div>
  );
}

export default Main;
