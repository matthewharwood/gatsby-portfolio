import React, { FunctionComponent } from 'react';

import { Props } from './types';
import { Section, Container, Grid, GridItem } from '../@design-system/block-layout';
import { Heading3 } from '../@design-system/heading';

const CenteredHeading: FunctionComponent<Props> = ({ heading }) => {
  return (
    <Section>
      <Container>
        <Grid>
          <GridItem>
            <Heading3>{heading}</Heading3>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
};

export { CenteredHeading };
