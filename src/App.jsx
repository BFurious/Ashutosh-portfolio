import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components'
import React, { useState, useEffect } from 'react';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [clickEffects, setClickEffects] = useState([]);

  const handleClick = (event) => {
    const newEffect = {
      id: Date.now(), // Unique ID for each effect
      x: event.clientX,
      y: event.clientY,
    };
    setClickEffects((prevEffects) => [...prevEffects, newEffect]);

    // Remove the effect after animation ends
    setTimeout(() => {
      setClickEffects((prevEffects) =>
        prevEffects.filter((effect) => effect.id !== newEffect.id)
      );
    }, 500); // Match the animation duration
  };

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX - 10, y: event.clientY - 10 });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle click events

  return (
    <BrowserRouter>
      <div className="relative z-0 "
        onClick={handleClick}
      >
        <div className="cursor-none">
          <div
            className="cursor"
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            }}
          >
            <div
              className="cursor-inner"
              style={{
                transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
              }}
            ></div>
          </div>

          {/* Click effects */}
          {clickEffects.map((effect) => (
            <div
              key={effect.id}
              className="click-effect"
              style={{
                left: `${effect.x}px`,
                top: `${effect.y}px`,
              }}
            ></div>
          ))}
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
