import React, { useState } from 'react';

export const Animate = () => {
  var keyTomato = [
    { transform: 'translate3D(-100%, 0, 0)' },
    { transform: 'translate3D(100%, 0, 0)' },
  ];
  var timings = {
    duration: 1000,
    iterations: 1,
    easing: 'ease-in-out',
  };
  var timingWhite = {
    duration: 800,
    iterations: 1,
  };

  var keyWhite = [
    { transform: 'translateX(0)', opacity: 1, offset: 0 },
    { transform: 'translateX(0)', opacity: 1, offset: 0.7 },
    { transform: 'translateX(0)', opacity: 0, offset: 1 },
  ];

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
