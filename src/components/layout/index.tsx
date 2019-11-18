import React, { useState } from 'react';

export const Animate = () => {
  const keyTomato = [
    { transform: 'translate3D(-100%, 0, 0)' },
    { transform: 'translate3D(100%, 0, 0)' },
  ];
  const timings = {
    duration: 1000,
    iterations: 1,
    easing: 'ease-in-out',
  };

  setTimeout(() => {
    // document.getElementById('animate-white').animate(keyWhite, timingWhite);
    document.getElementById('animate-tomato').animate(keyTomato, timings);
  }, 0);

  return (
    <>
      <div
        id="animate-white"
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          background: 'white',
          zIndex: 10000,
          top: 0,
          backgroundBlendMode: 'multiply',
          transform: 'translateX(-100%)',
        }}
      />
      <div
        id="animate-tomato"
        style={{
          position: 'fixed',
          width: '200vw',
          height: '100vh',
          background: '#555',
          zIndex: 10000,
          backgroundBlendMode: 'multiply',
          top: 0,
          transform: `translateX(-100%)`,
        }}
      />
    </>
  );
};
