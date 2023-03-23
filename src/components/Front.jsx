import React from 'react'

function Front() {
  return (
    <div>
    <div className='header'>
          <div className="w-full h-[100vh] header-child"></div>
        <div className='w-full px-16 h-[100vh] pt-20 text-white absolute top-0 left-0 grid grid-cols-2 gap-5 place-items-center'>
          <div className=''>
            <h1 className='text-[56px] leading-[80px] font-bold'>Kompyuter savodxonlik kursi</h1>
            <p className='text-xl leading-9'>
            Kompyuter savodxonligi kursi dasturlashga yo'naltirilgan bo'lib, bu kursni bitirgan o’quvchi dasturlashni qiyinchiliksiz boshlay oladi.
            </p>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-NoS3W4qKbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    <div className='my-10 px-16'>
      <h1 className='font-bold text-[46px] text-[#1D537C] '>Kurs davomida <br /> quyidagilar o'tiladi:</h1>
      <div className='py-10 grid grid-cols-3 justify-items-center gap-5'>
      <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
          <div className="flex gap-5 items-center mb-5">
            <img src="./images/sav1.png" alt="" />
            <h1 className="font-semibold text-xl">Boshlang’ich</h1>
          </div>
          <ol className="text-base list-decimal px-4 text-[#002D4F] font-normal">
            <li>Kompyuter boshlang’ich tushunchalar.</li>
            <li>Internet Connection(Google Accauntlar bilan ishlash, Google Drive dasturi haqida tushuncha ).</li>
          </ol>
        </div>
        <div className="border border-transparent min-h-[150px] p-4 bg-[#FCFDFF] w-[300px]">
          <div className="flex gap-5 items-center mb-5">
            <img src="./images/sav1.png" alt="" />
            <h1 className="font-semibold "><h1 className='text-xl'>Office dasturlar</h1>
              <p className='font-normal'>(online)</p>
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
            <h1 className="font-semibold "><h1 className='text-xl'>Office dasturlar</h1>
              <p className='font-normal'>(offline)</p>
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
    </div>
    </div>
</div>
  )
}

export default Front