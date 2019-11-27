import React, { FunctionComponent } from 'react';

import { H3 } from 'baseui/typography';
import { useStyletron } from 'baseui';

const CenteredHeading: FunctionComponent<{ heading: string }> = ({
  heading,
}) => {
  const [css,theme] = useStyletron();
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

export default CenteredHeading;
