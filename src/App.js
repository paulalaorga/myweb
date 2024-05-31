import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure to include your CSS for 'night', 'wave', etc.

function App() {
  const [isNight, setIsNight] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  // Checking time to set night mode
  useEffect(() => {
    const hours = new Date().getHours();
    const night = hours >= 19 || hours <= 7;
    setIsNight(night);
  }, []);

  // Scroll event to toggle top button
  useEffect(() => {
    const handleScroll = () => {
      const introHeight = document.querySelector('.intro').offsetHeight;
      if (window.scrollY > introHeight) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulating the wave animation on load and on hover
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWaveMouseOver = () => {
    setIsWaving(true);
  };

  const handleWaveMouseOut = () => {
    setIsWaving(false);
  };

  const handleToggleNightMode = () => {
    setIsNight(!isNight);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`App ${isNight ? 'night' : ''}`}>
      <div className="intro"></div>
      <button id="toggle" onClick={handleToggleNightMode}>
        Toggle Night Mode
      </button>
      {showTopButton && (
        <button id="top-button" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
      <div
        className={`emoji wave-hand ${isWaving ? 'wave' : ''}`}
        onMouseOver={handleWaveMouseOver}
        onMouseOut={handleWaveMouseOut}
      >
        👋
      </div>
    </div>
  );
}

export default App;
