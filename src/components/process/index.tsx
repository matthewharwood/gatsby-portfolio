import React, { useState } from 'react';
import { Section, Container, Grid } from '../grid-system';
import { useStyletron } from 'baseui';
import { Display4} from 'baseui/typography';
import { ProgressSteps, Step } from 'baseui/progress-steps';

const GridItemHalf = ({ children }: any) => {
  const [css] = useStyletron();
  const c = {
    className: css({
      display: 'grid',
      gridColumn: 'span 6',
    }),
  };

  return <div {...c}>{children}</div>;
};
export const Process = ({
  $backgroundColor,
  $color,
  $borderBottom,
}: any) => {
  const [, theme] = useStyletron();
  const [current] = useState(0);
  const backgroundColor = $backgroundColor || theme.colors.primary100;
  const color = $color || theme.colors.primary700;
  return (
    <Section
      $backgroundColor={backgroundColor}
      $color={color}
      $collapsePaddingBottom={!!$borderBottom}
    >
      <Container $borderBottom={$borderBottom} $color={color}>
        <Grid>
          <GridItemHalf>
            <Display4>Process</Display4>
          </GridItemHalf>
          <GridItemHalf>
            <ProgressSteps
              current={current}
              overrides={{ Root: { style: { backgroundColor: 'inherit' } } }}
            >
              <Step key={'step-0'} title="Getting started"></Step>
              <Step key={'step-1'} title="Identify painpoints"></Step>
              <Step key={'step-2'} title="Proposed Solution"></Step>
              <Step key={'step-3'} title="Execution - Design"></Step>
              <Step key={'step-4'} title="Execution - Development"></Step>
              <Step key={'step-5'} title="Test / Measure / Iterate"></Step>
              <Step key={'step-6'} title="Pitch"></Step>
              <Step key={'step-7'} title="Result"></Step>
              <Step key={'step-8'} title="Retrospective"></Step>
            </ProgressSteps>
          </GridItemHalf>
        </Grid>
      </Container>
    </Section>
  );
};
