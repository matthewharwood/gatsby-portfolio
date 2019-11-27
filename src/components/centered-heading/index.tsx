import React, { FunctionComponent } from 'react';

import { H3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Props } from './types';

const CenteredHeading: FunctionComponent<Props> = ({ heading }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        textAlign: 'center',
        paddingTop: theme.sizing.scale1200,
        paddingBottom: theme.sizing.scale1200,
      })}
    >
      <H3>{heading}</H3>
    </div>
  );
};

export { CenteredHeading };
