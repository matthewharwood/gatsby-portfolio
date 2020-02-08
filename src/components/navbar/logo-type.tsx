import { useStyletron } from 'baseui';
import { Display } from '../utils/display';
import React from 'react';

const LogoType = () => {
  const [css, theme] = useStyletron();
  const { notMobile } = Display(theme);
  return (
    <h1
      className={css({
        color: 'inherit',
        marginLeft: theme.sizing.scale600,
        marginRight: '0',
        marginBottom: '0',
        marginTop: '0',
        position: 'relative',
        top: '0',
        ...notMobile,
        ...theme.typography.font450,
        fontWeight: 900,
      })}
    >
      Morning Harwood
    </h1>
  );
};

export { LogoType };
