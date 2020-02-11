import React, { useState } from 'react';

import { Navigation } from './';

export default {
  title: 'navigation',
};

export const Master = () => {
  const [active, updateActive] = useState(false);
  const toggle = () => updateActive(!active);
  return (
    <div style={{ background: '#CCC', minHeight: '120vh' }}>
      <Navigation toggle={toggle} active={active} />
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
