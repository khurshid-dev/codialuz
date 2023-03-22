import React, { Component } from "react";



export class Navbar extends Component {
  render() {
    return (
      <div className="fixed bg-white z-20 py-5 flex justify-between px-16 w-full items-center ">
        {/* navbar */}

        <div className="animate__fadeInDown animate__animated ">
          <img src="./images/logo.svg" alt="Logo" className="cursor-pointer"/>
        </div>
        <div className="links flex justify-center gap-7 list-none font-normal text-base text animate__fadeInRight animate__animated " >
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
            <a href="#">A’loqa</a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-phone"></i> +9989 (99) 123 45 67</a>
          </li>
        </div>
      </div>
    );
  }
}

export default Navbar;
