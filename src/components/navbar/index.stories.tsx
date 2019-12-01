import React from 'react';
import useScroll from '../utils/use-scroll';

import { Navbar } from './';

export default {
  title: 'navbar',
};

export const NavbarRegular = () => <Navbar />;

export const NavbarWithScroll = () => {
  const scrolled = useScroll();
  return (
    <div style={{ background: '#CCC', minHeight: '120vh' }}>
      <Navbar show={scrolled} />
      <div
        style={{
          textAlign: 'center',
          paddingTop: '10rem',
          color: 'white',
          fontSize: '3rem',
        }}
      >
        Scroll
      </div>
    </div>
  );
};
