import React from 'react';
import useScroll from '../utils/use-scroll';

import { Navigation } from './';

export default {
  title: 'navigation',
};

export const NavbarRegular = () => <Navigation />;

export const NavbarWithScroll = () => {
  // const scrolled = useScroll();
  return (
    <div style={{ background: '#CCC', minHeight: '120vh' }}>
      <Navigation />
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
