import React, { FunctionComponent } from 'react';
import { colors } from '../styles';
import { WindowT } from './types';
import { useStyletron } from 'baseui';

const Window: FunctionComponent<WindowT> = ({ windowHeight }) => {
  const [css] = useStyletron();
  const c = css({
    height: `${windowHeight}px`,
    background: colors.transparent,
  });
  return <div className={c} />;
};

export { Window };
