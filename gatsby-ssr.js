import React from 'react';
import { MorningHarwood } from './plugin-values';
import './src/styles/global.css';

import { Animate } from './src/components/layout';
import { BaseProvider } from 'baseui';

export const wrapRootElement = ({ element }) => (
  <BaseProvider id="baseui" theme={MorningHarwood}>
    <Animate />
    {element}
  </BaseProvider>
);
