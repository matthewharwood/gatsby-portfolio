import React, { FunctionComponent } from 'react';

import { H1, H3, H5 } from 'baseui/typography';
import { useStyletron } from 'baseui';

import { Grid, Section } from '../components/grid-system';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import LabCard from '../components/lab-card';

const LabHeader = () => {
  return (
    <>
      <GridSpanFour>
        <H1 marginBottom={0}>Labs</H1>
        <H5 marginTop={0}>A Laboratory of Experiments</H5>
      </GridSpanFour>
      <GridSpanFour />
      <GridSpanFour />
    </>
  );
};

const GridSpanFour = ({ children }: { children?: React.ReactNode }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        gridColumn: 'span 4',
        border: `1px solid ${theme.colors.primary300}`,
        paddingTop: theme.sizing.scale800,
        paddingLeft: theme.sizing.scale1200,
        alignSelf: 'stretch',
      })}
    >
      {children}
    </div>
  );
};

type CardsColumnType = {
  data: CardsColumnDataType;
};

type CardDataType = {
  image?: string,
  tags?: Array<string>,
  title: string,
}

type CardsColumnDataType = {
  heading: string;
  cards: Array<CardDataType>;
};

const CardsColumn: FunctionComponent<CardsColumnType> = ({ data }) => {
  const { heading, cards } = data;
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        gridColumn: 'span 4',
        gridRow: '2',
        border: `1px solid ${theme.colors.primary300}`,
      })}
    >
      <div
        className={css({
          borderBottom: `1px solid ${theme.colors.primary300}`,
        })}
      >
        <H3 paddingLeft={theme.sizing.scale1200}>{heading}</H3>
      </div>
      {cards.map(card => (
        <LabCard data={card} />
      ))}
    </div>
  );
};

type LabCardsGridType = {
  data: LabCardsGridDataType;
};

type LabCardsGridDataType = {
  todoCards: CardsColumnDataType;
  doingCards: CardsColumnDataType;
  doneCards: CardsColumnDataType;
};

export const LabCardsGrid: FunctionComponent<LabCardsGridType> = ({ data }) => {
  const { todoCards, doingCards, doneCards } = data;
  const [, theme] = useStyletron();
  return (
    <>
      <Navbar />
      <Section $border={`1px solid ${theme.colors.primary300}`}>
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

const LabDev = () => {
  return (
    <LabCardsGrid
      data={{
        todoCards: {
          heading: 'Todo',
          cards: [
            {
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
            {
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
            {
              image: 'https://picsum.photos/350/700',
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
          ],
        },
        doingCards: {
          heading: 'Doing',
          cards: [
            {
              image: 'https://picsum.photos/350/700',
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
            {
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
            {
              image: 'https://picsum.photos/350/700',
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
          ],
        },
        doneCards: {
          heading: 'Done',
          cards: [
            {
              image: 'https://picsum.photos/350/700',
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
            {
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
            {
              image: 'https://picsum.photos/350/700',
              tags: ['art', 'wasm'],
              title: 'Lab Card Title',
            },
          ],
        },
      }}
    />
  );
};

export default LabDev;
