import React from 'react';

import { useStyletron } from 'baseui';

export const MenuGridInnerShadow = () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        position: 'fixed',
        width: '100%',
        bottom: '1px',
        zIndex: '1',
        boxShadow: '0px 0px 8px 10px rgba(255,255,255,0.4)',
      })}
    />
  );
};

export const BoxShadow = () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        position: theme.positions.absolute,
        top: theme.sizing.scale0,
        bottom: theme.sizing.scale0,
        left: theme.sizing.scale0,
        right: theme.sizing.scale0,
        boxShadow: theme.lighting.shadow500,
      })}
    />
  );
};
