import React, { useState } from 'react';
import { Section, Container, Grid } from '../grid-system';
import { useStyletron } from 'baseui';
import { Display3, Label1, Label4, Paragraph1 } from 'baseui/typography';
import { ProgressSteps, Step } from 'baseui/progress-steps';

const GridItemHalf = ({ children }: any) => {
  const [css, theme] = useStyletron();
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
  $accentColor,
  $borderBottom,
  collapsePaddingBottom,
}: any) => {
  const [, theme] = useStyletron();
  const [current, setCurrent] = useState(0);
  const backgroundColor = $backgroundColor || theme.colors.primary100;
  const color = $color || theme.colors.primary700;
  const accent = $accentColor || theme.colors.accent;
  console.log(current);
  return (
    <Section
      $backgroundColor={backgroundColor}
      $color={color}
      $collapsePaddingBottom={!!$borderBottom}
    >
      <Container $borderBottom={$borderBottom} $color={color}>
        <Grid>
          <GridItemHalf>
            <Display3>Process</Display3>
          </GridItemHalf>
          <GridItemHalf>
            <ProgressSteps
              current={current}
              overrides={{ Root: { style: { backgroundColor: 'inherit' } } }}
            >
              <Step title="Getting started"></Step>
              <Step title="Identify painpoints"></Step>
              <Step title="Proposed Solution"></Step>
              <Step title="Execution - Design"></Step>
              <Step title="Execution - Development"></Step>
              <Step title="Test / Measure / Iterate"></Step>
              <Step title="Pitch"></Step>
              <Step title="Result"></Step>
              <Step title="Retrospective"></Step>
            </ProgressSteps>
          </GridItemHalf>
        </Grid>
      </Container>
    </Section>
  );
};
