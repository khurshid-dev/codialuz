
import { Link } from "react-router-dom";
import React, { useState } from 'react'


function Navbar() {
  const [activeEl, setActiveEl]= useState(false);

  const showMenu = ()=>{
    setActiveEl(true);
  }
  const removeMenu = ()=>{
    setActiveEl(false);
  }
  
  return (
    <div className="fixed navbar z-20 py-5 flex justify-between px-16 w-full items-center ">
      <Link to={'/'}>
      <div className="animate__fadeInDown animate__animated ">
        <img src="./images/logo.svg" alt="Logo" className="cursor-pointer"/>
      </div>
      </Link>
      <div className="hidden max-md:block ">
      <i onClick={showMenu} className="menu_btn fa-solid fa-bars text-2xl cursor-pointer"></i>
      </div>
      { activeEl &&(
        <div className='menu active'>
        <div className="exit_btn">
        <i onClick={removeMenu} className="fa-solid fa-xmark"></i>
        </div>
        <div className="menu_links">
        <li>
          <a href="#">Kurslar</a>
        </li>
        <li>
          <a href="#">Jamoa</a>
        </li>
        <li>
          <a href="#">Natijalarimiz</a>
        </li>
        <li>
          <a href="#">Yangiliklar</a>
        </li>
        <li>
          <Link to={'/header/#footer'}>A’loqa</Link>
        </li>
        <li>
          <a href="#"><i className="fa-solid fa-phone"></i> +9989 (99) 123 45 67</a>
        </li>
        </div>
      </div>
      )}
      <div className="links flex justify-center gap-7 list-none font-normal text-base text animate__fadeInRight animate__animated max-md:hidden max-lg:gap-3" >
        <li>
          <a href="#">Kurslar</a>
        </li>
        <li>
          <a href="#">Jamoa</a>
        </li>
        <li>
          <a href="#">Natijalarimiz</a>
        </li>
        <li>
          <a href="#">Yangiliklar</a>
        </li>
        <li>
          <Link to={'/header/#footer'}>A’loqa</Link>
        </li>
        <li>
          <a href="#" className="max-lg:hidden"><i className="fa-solid fa-phone"></i> +9989 (99) 123 45 67</a>
        </li>
      </div>
    </div>
  );
}


export default Navbar;
