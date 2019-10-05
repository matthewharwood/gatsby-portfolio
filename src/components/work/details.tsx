import React from 'react';

import { useStyletron } from 'baseui';

export const FloatingDetails = props => {
  const [css, theme] = useStyletron();
  const { colors, sizing, positions } = theme;
  const lg = theme.mq.lg;
  const md = theme.mq.md;

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
