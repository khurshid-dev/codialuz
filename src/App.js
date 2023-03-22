import React, { useEffect } from 'react';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import 'animate.css' ;
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Savodxonlik from './components/Savodxonlik';



function App() {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);
  return (
    <div>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/savodxonlik' element={<Savodxonlik />}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
