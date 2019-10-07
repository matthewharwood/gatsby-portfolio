import React from 'react';
import { Section, Container, Grid } from '../grid-system';

import { useStyletron } from 'baseui';
import { Paragraph1, Label2, Label4 } from 'baseui/typography';

const GridItemLeft = ({ leftCols, orderLeft, children }: any) => {
  const [css, theme] = useStyletron();
  const c = {
    className: css({
      order: orderLeft,
      display: 'grid',
      gridColumn: `span ${leftCols}`,
    }),
  };

  return <div {...c}>{children}</div>;
};

const GridItemRight = ({ rightCols, orderRight, children }: any) => {
  const [css, theme] = useStyletron();
  const c = {
    className: css({
      order: orderRight,
      display: 'grid',
      gridColumn: `span ${rightCols}`,
    }),
  };

  return <div {...c}>{children}</div>;
};

const CardItem = ({
  $accentColor = 'transparent',
  $color,
  $labelColor,
  heading,
  subheading,
  text,
}: any) => {
  const [css, theme] = useStyletron();
  const c = {
    className: css({
      backgroundColor: theme.colors.primary50,
      color: $color,
      padding: theme.sizing.scale700,
      borderRadius: theme.sizing.scale100,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1);',
      gridColumn: '1 span 1',
      position: theme.positions.relative,
      '::before': {
        content: '""',
        height: theme.sizing.scale100,
        backgroundColor: $accentColor,
        position: theme.positions.absolute,
        top: '0',
        left: '0',
        width: '100%',
        marginTop: theme.sizing.scale0,
      },
    }),
  };
  return (
    <div {...c}>
      <div
        className={css({
          display: theme.display.flex,
          alignItems: 'center',
        })}
      >
        <div
          className={css({
            padding: theme.sizing.scale400,
            borderRadius: theme.sizing.scale4800,
            backgroundColor: theme.colors.mono100,
          })}
        >
          <img
            className={css({
              objectFit: 'contain',
              padding: theme.sizing.scale0,
            })}
            src="https://via.placeholder.com/40"
            alt="icon"
          />
        </div>
        <div
          className={css({
            marginLeft: theme.sizing.scale700,
            textTransform: 'uppercase',
          })}
        >
          <Label2 color={$labelColor}>{heading}</Label2>
          <Label4 color={$labelColor}>{subheading}</Label4>
        </div>
      </div>
      <Paragraph1
        color={'inherit'}
        className={css({
          display: text ? theme.display.flex : theme.display.none,
          flexDirection: 'column',
          lineHeight: theme.sizing.scale900,
        })}
      >
        <span>{text}</span>
      </Paragraph1>
    </div>
  );
};

const MarginWrapper = ({
  children,
  $marginTop = '0',
  $marginBottom = '0',
  $marginLeft = '0',
  $marginRight = '0',
}: any) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        marginLeft: $marginLeft,
        marginRight: $marginRight,
        marginTop: $marginTop,
        marginBottom: $marginBottom,
      })}
    >
      {children}
    </div>
  );
};

const SolutionCards = ({ data, legend = [], $color, $cardsDirection }: any) => {
  const [css, theme] = useStyletron();
  const color = $color || theme.colors.primary700;
  const gridAutoFlow = $cardsDirection || 'row';

  const cardItems = data.map(cardItem => (
    <div>
      <CardItem
        {...cardItem}
        $labelColor={theme.colors.primary450}
        $color={color}
      ></CardItem>
    </div>
  ));

  const legendItems = (
    <div
      className={css({
        display: theme.display.flex,
        justifyContent: 'flex-end',
        marginTop: theme.sizing.scale1000,
      })}
    >
      {legend.map(legendItem => (
        <div className={css({ display:theme.display.flex, marginRight: theme.sizing.scale1200 })}>
          <div
            className={css({
              width: theme.sizing.scale700,
              height: theme.sizing.scale700,
              backgroundColor: legendItem.color,
              marginRight: theme.sizing.scale600,
            })}
          ></div>
          <span className={css({ textTransform: 'uppercase' })}>{legendItem.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: ( $cardsDirection == 'column' ) ? '1fr 1fr 1fr' : '',
          gridGap: theme.sizing.scale700,
          gridAutoFlow: gridAutoFlow,
          marginTop: theme.sizing.scale700,
        })}
      >
        {cardItems}
      </div>
      {legendItems}
    </>
  );
};

export const Challenge = ({
  challengeNum = '1',
  challengeText,
  solution,
  takeaway,
  $color,
  $cardsDirection,
  solutionCards=[],
  legend,
}: any) => {
  const [css, theme] = useStyletron();
  const color = $color || theme.colors.primary700;
  return (
    <Section $collapsePaddingBottom={true} $color={color}>
      <Container $color={theme.colors.primary300} $borderBottom={true}>
        <MarginWrapper $marginBottom={theme.sizing.scale1600}>
          <Grid>
            <GridItemLeft leftCols={'4'} orderLeft={'0'}>
              <h1>CHALLENGE #{challengeNum}</h1>
            </GridItemLeft>
            <GridItemRight rightCols={'8'} orderRight={'1'}>
              <Paragraph1 color={'inherit'}>{challengeText}</Paragraph1>
            </GridItemRight>
          </Grid>
        </MarginWrapper>
        <MarginWrapper $marginBottom={theme.sizing.scale1600}>
          <Grid>
            <GridItemLeft leftCols={'4'} orderLeft={'0'}>
              <h1>SOLUTION</h1>
            </GridItemLeft>
            <GridItemRight rightCols={'8'} orderRight={'1'}>
              <Paragraph1 color={'inherit'}>{solution}</Paragraph1>
              <SolutionCards
                data={solutionCards}
                legend={legend}
                $cardsDirection={$cardsDirection}
              ></SolutionCards>
            </GridItemRight>
          </Grid>
        </MarginWrapper>
        <Grid>
          <GridItemLeft leftCols={'4'} orderLeft={'0'}>
            <h1>TAKEAWAY</h1>
          </GridItemLeft>
          <GridItemRight rightCols={'8'} orderRight={'1'}>
            <Paragraph1 color={'inherit'}>{takeaway}</Paragraph1>
          </GridItemRight>
        </Grid>
      </Container>
    </Section>
  );
};
