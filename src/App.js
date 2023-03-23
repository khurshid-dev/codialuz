import React, { useEffect, useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import 'animate.css' ;
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Savodxonlik from './components/Savodxonlik';
import Front from './components/Front';
import Back from './components/Back';
import Android from './components/Android';
import Python from './components/Python';
import Grafik from './components/Grafik';



function App() {
  function NotFound(){
    return <div className='text-5xl text-center py-[120px]'>
      <h1 className=''>404</h1>
      <h1 className='text-gray-700 my-20'>Not Found</h1>
    </div>
  }
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
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/savodxonlik' element={<Savodxonlik />}/>
          <Route path='/frontend' element={<Front/>}/>
          <Route path='/backend' element={<Back/>}/>
          <Route path='/android' element={<Android/>}/>
          <Route path='/python' element={<Python/>}/>
          <Route path='/grafikdizayn' element={<Grafik/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
