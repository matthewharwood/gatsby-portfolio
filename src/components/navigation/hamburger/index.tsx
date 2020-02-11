import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';

const Hamburger: FunctionComponent<{ active: boolean }> = ({ active }) => {
  const [css, theme] = useStyletron();
  const container = css({
    position: 'relative',
    display: 'block',
    height: theme.sizing.scale300,
    width: theme.sizing.scale700,
  });

  const hamburgerWrapper = css({
    position: 'relative',
    display: 'flex',
    height: theme.sizing.scale800,
    width: theme.sizing.scale800,
    alignItems: 'center',
    justifyContent: 'center',
  });

  const lineTop = css({
    height: theme.sizing.scale0,
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.white,
    position: 'absolute',
    transition: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    transform: active ? `translate3d(0, 3px, 0)  rotate(45deg)` : 'none',
  });

  const lineBottom = css({
    height: theme.sizing.scale0,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.white,
    transition: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    transform: active ? `translate3d(0, -3px, 0)  rotate(-45deg)` : 'none',
  });

  return (
    <div className={hamburgerWrapper}>
      <div className={container}>
        <div className={lineTop} />
        <div className={lineBottom} />
      </div>
    </div>
  );
};

export { Hamburger };
