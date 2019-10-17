import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';

const Nav: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  const c = css({
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: theme.sizing.scale1400,
    paddingLeft: theme.sizing.scale1400,
    display: 'block',
    overflow: 'hidden',
  });
  return <nav className={c}>{children}</nav>;
};

export { Nav };
