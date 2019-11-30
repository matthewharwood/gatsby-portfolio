import React, { FunctionComponent } from 'react';
import { H4, Paragraph1, } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { GridItemLeft, GridItemRight, Grid } from '../grid-system';

import { PropTypes } from './types'

export const Headline:FunctionComponent<PropTypes> = ({ title, text, $hasBottomMargin = true }) => {
  const [css, theme] = useStyletron();
  const marginBottom = $hasBottomMargin ? theme.sizing.scale1600 : 0;
  return (
    <div className={css({ marginBottom })}>
      <Grid>
        <GridItemLeft leftCols={[4,6,4]} orderLeft={'0'}>
          <H4
            margin="0"
            alignSelf="start"
            $style={{ textTransform: 'uppercase' }}
          >
            {title}
          </H4>
        </GridItemLeft>
        <GridItemRight rightCols={[4,6,8]} orderRight={'1'}>
          <Paragraph1 margin="0" color={'inherit'}>
            {text}
          </Paragraph1>
        </GridItemRight>
      </Grid>
    </div>
  );
};


