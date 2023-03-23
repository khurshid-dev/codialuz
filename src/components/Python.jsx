import React from "react";

function Python() {
  return (
    <div>
      <div className="header lg:h-[100vh] sm:h-[700px] min-[476px]:h-[800px] h-[850px]">
        <div className="w-full lg:h-[100vh] sm:h-[700px] min-[476px]:h-[800px] h-[850px] header-child"></div>
        <div className="w-full lg:px-16 h-full px-10 pt-20 text-white  top-0 left-0 absolute grid lg:grid-cols-2 grid-cols-1 gap-5 lg:place-items-center">
          <div className="min-w-[1096px]:text-center text-start">
            <h1 className="sm:text-[56px] text-4xl leading-[80px] font-bold">
            Python kursi
            </h1>
            <p className="text-xl leading-9">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aspernatur corporis, aliquid ut rerum, debitis asperiores molestias voluptatem odio facilis eos est fugit fuga maxime illum fugiat eligendi laboriosam quis.
            </p>
          </div>
          <iframe
            className="rounded-lg lg:w-[560px] w-auto sm:w-[560px] mx-auto lg:mx-10"
            height="315"
            src="https://www.youtube.com/embed/-NoS3W4qKbA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="my-10 md:px-16 px-5">
        <h1 className="font-bold text-[46px] text-[#1D537C] ">
          Kurs davomida <br /> quyidagilar o'tiladi:
        </h1>
        <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-5">
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/sav1.png" alt="" />
              <h1 className="font-semibold text-xl">Boshlang’ich</h1>
            </div>
            <ol className="text-base list-decimal px-4 text-[#002D4F] font-normal">
              <li>Kompyuter boshlang’ich tushunchalar.</li>
              <li>
                Internet Connection(Google Accauntlar bilan ishlash, Google
                Drive dasturi haqida tushuncha ).
              </li>
            </ol>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/sav1.png" alt="" />
              <h1 className="font-semibold ">
                <h1 className="text-xl">Office dasturlar</h1>
                <p className="font-normal">(online)</p>
              </h1>
            </div>
            <ol className="text-base list-decimal px-4 text-[#002D4F] font-normal">
              <li>Google Docs</li>
              <li>Google Sheets</li>
              <li>Google Slides</li>
              <li>Google Form</li>
              <li>Notion dasturi</li>
              <li>Canva dasturi</li>
            </ol>
          </div>
          <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
            <div className="flex gap-5 items-center mb-5">
              <img src="./images/sav3.png" alt="" />
              <h1 className="font-semibold ">
                <h1 className="text-xl">Office dasturlar</h1>
                <p className="font-normal">(offline)</p>
              </h1>
            </div>
            <ol className="text-base list-decimal px-4 text-[#002D4F] font-normal">
              <li>Microsoft Word</li> <br />
              <li>Microsoft Excel</li> <br />
              <li>Microsoft Power Point</li>
            </ol>
          </div>
        </div>
        <div className="my-10">
          <h1 className="animate__fadeInLeft wow text-[#1D537C] font-bold text-[46px] max-lg:text-[40px] max-md:text-[30px] max-[430px]:text-[23px]">
            Codial o’quv markazi <br /> asoschisi haqida
          </h1>
          <div className="flex max-lg:flex-wrap max-lg:justify-center py-10 gap-10 items-center animate__fadeInLeft wow">
            <img
              src="./images/boss.png"
              alt=""
              className="max-lg:w-[600px] max-md:w-[500px]"
            />
            <div className="max-lg:w-[750px]">
              <h1 className="font-medium text-xl text-[#3D3D3D] mb-10 animate__fadeInLeft wow leading-8 max-lg:text-[22px] max-[430px]:text-lg">
                Lorem ipsum dolor sit amet consectetur. Sodales sed mollis diam
                massa sodales sem id aliquet Sodales sed mollis diam massa
                sodales se id aliquet
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
        </div>
      </div>
    </div>
  );
}

export default Python;
