import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { Navbar } from '../navbar';
import { Container, Grid, Section } from '../@design-system/block-layout';
import { Footer } from '../footer';
import { LabHeader } from './lab-header';
import { CardsColumn } from './cards-columns';
import { LabCardsGridType } from './types';

const LabCardsGrid: FunctionComponent<LabCardsGridType> = ({ data }) => {
  const { todoCards, doingCards, doneCards } = data;
  const [, theme] = useStyletron();
  return (
    <>
      <Navbar />
      <Section $backgroundFullBleed={true}>
        <Container $paddingLeft="none" $paddingRight="none">
          <Grid>
            <LabHeader />
            <CardsColumn data={todoCards} />
            <CardsColumn data={doingCards} />
            <CardsColumn data={doneCards} />
          </Grid>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export { LabCardsGrid };
