import React, { useState } from 'react';

import { Hamburger } from './';
import { HeadingLarge } from 'baseui/typography';
import { useInterval } from '../../utils/use-interval';

export default {
  title: 'navigation',
};

export const HamburgerRegular = () => {
  const [active, update] = useState(false);
  useInterval(() => {
    update(!active);
  }, 3000);
  return (
    <div style={{ backgroundColor: '#000', height: '100vh' }}>
      <HeadingLarge color={'white'}>CLOSED</HeadingLarge>
      <Hamburger active={false} />
      <HeadingLarge color={'white'}>OPEN</HeadingLarge>
      <Hamburger active={true} />

      <HeadingLarge color={'white'}>Toggling</HeadingLarge>
      <Hamburger active={active} />
    </div>
  );
};
