import React from 'react';
import 'wowjs/css/libs/animate.css';

function Header() {
  return (
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
  )
}

export default Header