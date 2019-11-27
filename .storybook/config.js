import React from 'react';
import { addDecorator, configure,addParameters } from "@storybook/react"
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {BaseProvider} from 'baseui';
import { MorningHarwood } from '../plugin-values';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from "@storybook/addon-actions"
configure(require.context("../src", true, /\.stories\.tsx$/), module)
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__PATH_PREFIX__ = ""
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
});

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'black', value: '#000000' },
  ],
});



const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();
const DecorateStyletron = (storyFn) => (
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <BaseProvider theme={MorningHarwood}>
        {storyFn()}
      </BaseProvider>
  </StyletronProvider>
)

addDecorator(DecorateStyletron)