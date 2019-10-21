import React from 'react';

import { useStyletron } from 'baseui';
import { mq, positions } from '../styles';

export const FloatingDetails = (props: any) => {
  const [css, theme] = useStyletron();
  const { colors, sizing } = theme;
  const lg = mq.lg;
  const md = mq.md;

  return (
    <div
      className={css({
        display: 'none',
        [lg]: {
          display: 'block',
          minHeight: sizing.scale4800,
          color: colors.white,
          padding: sizing.scale1600,
          position: positions.absolute,
          bottom: sizing.scale1600,
          left: '-1px',
          right: sizing.scale1600,
          background: colors.primary700,
        },
      })}
    >
      {props.children}
    </div>
  );
};
