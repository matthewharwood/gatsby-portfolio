import React, { useState } from 'react';

import { Navigation } from './';
import { useStyletron } from 'baseui';
import { useMediaQuery } from '../utils/use-media-query';

export default {
  title: 'navigation',
};

export const Master = () => {
  const [active, updateActive] = useState(false);
  const toggle = () => updateActive(!active);
  const [, theme] = useStyletron();
  const isLarge = useMediaQuery(theme.mediaQuery.large);
  return (
    <div style={{ background: '#CCC', minHeight: '120vh' }}>
      <Navigation
        toggle={toggle}
        active={active}
        isLarge={isLarge}
        close={() => updateActive(false)}
      />
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
