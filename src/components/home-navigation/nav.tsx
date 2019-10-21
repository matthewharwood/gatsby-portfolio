import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { mq, display, positions } from '../styles';
const Nav: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const c = css({
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    display: display.block,
    overflow: 'hidden',
    position: positions.absolute,
    marginBottom: theme.sizing.scale1200,
    bottom: 0,
    right: 0,
    [lg]: {
      marginBottom: theme.sizing.scale2400,
    },
  });
  return <nav className={c}>{children}</nav>;
};

export { Nav };
