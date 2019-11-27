/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { MorningHarwood } from './plugin-values';
import './src/styles/global.css';
import { BaseProvider } from 'baseui';
import { Animate } from './src/components/layout';

import { Location } from '@reach/router';

export const wrapRootElement = ({ element }) => {
  return (
    <BaseProvider id="baseui" theme={MorningHarwood}>
      <Location>{({ location }) => <Animate location={location} />}</Location>
      {element}
    </BaseProvider>
  );
};
