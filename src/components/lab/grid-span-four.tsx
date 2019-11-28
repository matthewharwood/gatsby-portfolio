import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { mq } from '../styles';

const GridSpanFour: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        gridColumn: 'span 4',
        paddingTop: theme.sizing.scale800,
        alignSelf: 'stretch',
        color: theme.colors.primary700,
        [mq.lg]: { paddingLeft: theme.sizing.scale1200 },
      })}
    >
      {children}
    </div>
  );
};

export { GridSpanFour}
