import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { display, mq } from '../styles';

const NavList: FunctionComponent = ({ children }) => {
  const [css] = useStyletron();
  const lg = mq.lg;
  return (
    <ul
      className={css({
        listStyle: 'none',
        display: display.none,
        [lg]: {
          display: display.flex,
        },
      })}
    >
      {children}
    </ul>
  );
};

export { NavList };
