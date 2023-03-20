import React from 'react'

function Header() {
  return (
    <div className='bg-[#F8F8F8] pt-16 flex justify-between items-center w-full h-[120vh] relative px-16 overflow-hidden'>
        <div>
            <h1 className='text-[40px] w-2/3 text-[#134062] mb-3 font-semibold '>IT—is a field that provides convenient solutions to <br /> people's problems</h1>
            <h2 className='font-medium text-[#676767] mb-3 text-[22px]'>Kelajak kasblarini biz bilan o’rganing</h2>
            <button className="btn">Batafsil →</button>
        </div>
        <div className='absolute -bottom-5 -right-16'>
            <img src="./images/header-1.png" alt="" />
        </div>
        <img src="./images/abs-1.png" className='absolute -bottom-2 left-0' alt='abs' />
        <img src="./images/abs-2.png" className='absolute top-20 left-[50%] -translate-x-[50%]' alt='abs' />
        <img src="./images/abs-3.png" className='absolute top-[40%] -translate-y-[50%]  right-4' alt='abs' />
        <img src="./images/abs-4.png" className='absolute bottom-20 left-[35%] -translate-x-[50%]' alt='abs' />
        <img src="./images/abs-5.png" className='absolute bottom-0 -right-16' alt='abs' />
    </div>
  )
}

export default Header