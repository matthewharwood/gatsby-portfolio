import React, { FunctionComponent } from 'react';
import { HamburgerType } from './types';
import { useStyletron } from 'baseui';
import { display, mq } from '../styles';
import { Delete, Grab } from 'baseui/icon';

const Hamburger: FunctionComponent<HamburgerType> = ({
                                                       isNavToggle,
                                                       toggleNav,
                                                     }) => {
  const [css] = useStyletron();
  const lg = mq.lg;
  return (
    <span
      onClick={() => toggleNav()}
      className={css({
        [lg]: {
          display: display.none,
        },
      })}
    >
      {isNavToggle ? <Delete size={32} /> : <Grab size={32} />}
    </span>
  );
};
export { Hamburger };
