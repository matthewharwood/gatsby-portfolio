import React, { FunctionComponent } from 'react';

import { Props } from './types';
import { Section, Container, Grid } from '../@design-system/block-layout';
import { Block } from 'baseui/block';
import { Heading3 } from '../@design-system/heading';

const CenteredHeading: FunctionComponent<Props> = ({ heading }) => {
  return (
    <Section>
      <Container>
        <Grid>
          <Block
            gridColumn={['1/-1']}
            overrides={{
              Block: {
                style: { textAlign: 'center' },
              },
            }}
          >
            <Heading3>{heading}</Heading3>
          </Block>
        </Grid>
      </Container>
    </Section>
  );
};

export { CenteredHeading };
