import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { H1, H3, H5 } from 'baseui/typography';
import { useStyletron } from 'baseui';

import { Grid, Section } from '../components/grid-system';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import LabCard from '../components/lab-card';
import { mq } from '../components/styles';

//Structure:
//---------
//LabCardsGrid
//    LabHeader
//        GridSpanFour * 3 (1 Title + 2 Blanks)
//    CardsColumn * 3 (Todo, Doing, Done)
//        LabCard * n (number of cards)

type LabDataType = {
  data: {
    allSanityLab: {
      edges: Array<{
        node: CardDataType;
      }>;
    };
  };
};

const Lab = ({ data }: LabDataType) => {
  console.log(data);
  const allCards = data.allSanityLab.edges.map(edge => edge.node);
  const todoItems = allCards.filter(card => card.status === 'todo');
  const doingItems = allCards.filter(card => card.status === 'doing');
  const doneItems = allCards.filter(card => card.status === 'done');
  const structuredData = {
    todoCards: {
      heading: 'Todo',
      cards: todoItems,
    },
    doingCards: {
      heading: 'Doing',
      cards: doingItems,
    },
    doneCards: {
      heading: 'Done',
      cards: doneItems,
    },
  };
  return <LabCardsGrid data={structuredData} />;
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
const LabHeader = () => {
  return (
    <>
      <GridSpanFour>
        <H1 marginBottom={0} color={'inherit'}>
          Labs
        </H1>
        <H5 marginTop={0}>A Laboratory of Experiments</H5>
      </GridSpanFour>
      <GridSpanFour />
      <GridSpanFour />
    </>
  );
};

const GridSpanFour: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        gridColumn: 'span 4',
        paddingTop: theme.sizing.scale800,
        alignSelf: 'stretch',
        color: theme.colors.primary700,
        [mq.lg]: { paddingLeft: theme.sizing.scale1200 },
      })}
    >
      {children}
    </div>
  );
};

type CardsColumnType = {
  data: CardsColumnDataType;
};

export type CardDataType = {
  image?: any;
  tags?: Array<string>;
  slug: { current: string };
  status: string;
  title: string;
};

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
        [mq.md]: {
          gridColumn: 'span 3',
        },
        [mq.lg]: {
          gridColumn: 'span 4',
        },
      })}
    >
      <div
        className={css({
          color: theme.colors.primary700,
          [mq.lg]: { paddingLeft: theme.sizing.scale1200 },
        })}
      >
        <H3 color={'inherit'}>{heading}</H3>
      </div>
      {cards.map(card => (
        <LabCard data={card} />
      ))}
    </div>
  );
};

export const PageQuery = graphql`
  {
    allSanityLab {
      edges {
        node {
          title
          tags
          status
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default Lab;
