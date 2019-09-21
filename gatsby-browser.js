/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { createTheme, lightThemePrimitives, BaseProvider } from 'baseui';

const MorningHarwood = createTheme(
  {
    ...lightThemePrimitives,
    // add all the properties here you'd like to override from the light theme primitives
    primaryFontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
);

export const wrapRootElement = ({ element }) => (
  <BaseProvider theme={MorningHarwood}>{element}</BaseProvider>
)