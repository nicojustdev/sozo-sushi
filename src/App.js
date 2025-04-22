import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './Components/Icons/sozo-logo.png'
import CardMainPage from './Components/CardMainPage';
import MainImageParallax from './Components/MainImageParallax';
import NavFlag from './Components/NavFlag';
import SocialButtons from './Components/SocialButtons';
import Bento from './Components/Bento';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.classList.add('no-scroll');


    const timer = setTimeout(() => setFadeOut(true), 2500);
    const hideTimer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('no-scroll');
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);


  return (
    <div className="App">
      {loading && (
        <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
          <img src={Logo} alt='Logo' className='loader-logo'/>
        </div>
      )}
      <div className={`content ${loading ? 'hidden' : 'visible'}`}>
        <header className="App-header">
          <NavFlag/>
        </header>
        <div className='main-content' id='main-content'>
          <MainImageParallax/>
          <SocialButtons/>
          <CardMainPage/>
        </div>
        <div className='info-content' id='info-content'>
          <Bento/>
        </div>
        <div className='contact-content' id='contact-content'>
          <Contact/>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
};

export default App;
