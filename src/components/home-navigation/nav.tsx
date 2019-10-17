import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
/**
 *
 * @param param0
 * nav {
  @include space(p, 0 0 ms(2) ms(2));
  @include size(percentage(1/1));
  display: block;
  overflow: hidden;

  @include bp(4) {
    padding-bottom: 0;
  }
}
 */

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
