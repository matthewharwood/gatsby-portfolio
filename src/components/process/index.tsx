import React, { FunctionComponent, useState } from 'react';
import {
  Section,
  Container,
  Grid,
  GridItem,
} from '../@design-system/block-layout';
import { Display4 } from 'baseui/typography';
import { ProgressSteps, Step } from 'baseui/progress-steps';
import { Props } from './types';

export const Process: FunctionComponent<Props> = ({ headline, steps }: any) => {
  const [current] = useState(0);
  return (
    <Section>
      <Container>
        <Grid>
          <GridItem $gridColumn={['span 6']} $alignSelf={'start'}>
            <Display4>{headline}</Display4>
          </GridItem>
          <GridItem $gridColumn={['span 6']}>
            <ProgressSteps
              current={current}
              overrides={{ Root: { style: { backgroundColor: 'inherit' } } }}
            >
              {steps.map((step: any, index: number) => {
                return <Step key={`step-${index}`} title={step.title} />;
              })}
            </ProgressSteps>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
};
