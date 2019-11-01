import React from "react"
import { useStyletron } from "baseui"
import { FooterLeft } from "./left"
import { FooterRight } from "./right"

import { mq, display } from "../styles"

export const Footer = () => {
  const [css, theme] = useStyletron()
  const md = mq.md
  const lg = mq.lg
  return (
    <footer
      className={css({
        display: display.flex,
        flexDirection: "column",
        alignItems: "center",
        paddingTop: theme.sizing.scale900,
        paddingBottom: theme.sizing.scale700,
        [md]: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: theme.sizing.scale800,
          paddingRight: theme.sizing.scale1000,
          paddingTop: theme.sizing.scale800,
          paddingBottom: theme.sizing.scale800,
        },
        [lg]: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: theme.sizing.scale800,
          paddingRight: theme.sizing.scale1000,
          paddingTop: theme.sizing.scale800,
          paddingBottom: theme.sizing.scale800,
        },
      })}
    >
      <FooterLeft/>
      <FooterRight/>
    </footer>
  )
}




