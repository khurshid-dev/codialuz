import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import 'animate.css' ;
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';



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
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
