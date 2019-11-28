import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { Navbar } from '../navbar';
import { Grid, Section } from '../grid-system';
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
      <Section>
        <Grid $gridGap={theme.sizing.scale300} $alignItems="start">
          <LabHeader />
          <CardsColumn data={todoCards} />
          <CardsColumn data={doingCards} />
          <CardsColumn data={doneCards} />
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

export { LabCardsGrid };
