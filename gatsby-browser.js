/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { createTheme, lightThemePrimitives, BaseProvider } from "baseui"
import "./src/styles/global.css"

const MorningHarwood = createTheme(
  {
    ...lightThemePrimitives,
    // add all the properties here you'd like to override from the light theme primitives
    primaryFontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  {
    positions: {
      absolute: "absolute",
      relative: "relative",
      static: "static",
      sticky: "sticky",
      fixed: "fixed",
    },
  }
)

export const wrapRootElement = ({ element }) => (
  <BaseProvider id="baseui" theme={MorningHarwood}>
    {element}
  </BaseProvider>
)
