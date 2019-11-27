import React, { FunctionComponent, useState } from 'react';
import { Section, Container, Grid, GridItemHalf } from '../grid-system';
import { useStyletron } from 'baseui';
import { Display4 } from 'baseui/typography';
import { ProgressSteps, Step } from 'baseui/progress-steps';
import { Props, step } from './types';

export const Process: FunctionComponent<Props> = ({
  $backgroundColor,
  $color,
  $borderBottom,
  headline,
  steps,
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
            <Display4>{headline}</Display4>
          </GridItemHalf>
          <GridItemHalf>
            <ProgressSteps
              current={current}
              overrides={{ Root: { style: { backgroundColor: 'inherit' } } }}
            >
              {steps.map((step: step, index: number) => {
                return <Step key={`step-${index}`} title={step.title} />;
              })}
            </ProgressSteps>
          </GridItemHalf>
        </Grid>
      </Container>
    </Section>
  );
};
