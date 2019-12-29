import React, { FunctionComponent } from 'react';
import { H4, Paragraph1 } from 'baseui/typography';
import { Grid } from '../@design-system/block-layout';

import { PropTypes } from './types';

export const Headline: FunctionComponent<PropTypes> = ({
  title,
  text,
  $hasBottomMargin = true,
}) => {
  const marginBottom = $hasBottomMargin ? 'full' : 'none';
  return (
    <Grid $backgroundColor="#FF00FF" $marginBottom={marginBottom}>
      <H4
        gridColumn={['span 4', 'span 4', 'span 8', 'span 4']}
        margin={0}
        padding={0}
        $style={{ textTransform: 'uppercase' }}
      >
        {title}
      </H4>
      <Paragraph1
        gridColumn={['span 4', 'span 4', 'span 8', 'span 8']}
        padding={0}
        margin={0}
        color={'inherit'}
      >
        {text}
      </Paragraph1>
    </Grid>
  );
};
