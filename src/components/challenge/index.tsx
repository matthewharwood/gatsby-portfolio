import React from 'react';
import {
  Section,
  Container,
  Grid,
  GridItemLeft,
  GridItemRight,
} from '../grid-system';
import { Headline } from '../headline';

import { useStyletron } from 'baseui';
import { Paragraph1, Label2, Label4 } from 'baseui/typography';
import { mq, display, positions } from '../styles';

const CardItem = ({
  accentColor = 'transparent',
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
      position: positions.relative,
      '::before': {
        content: '""',
        height: theme.sizing.scale100,
        backgroundColor: accentColor,
        position: positions.absolute,
        top: 0,
        left: 0,
        width: '100%',
        marginTop: theme.sizing.scale0,
      },
    }),
  };
  return (
    <div {...c}>
      <div
        className={css({
          display: display.flex,
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
          display: text ? display.flex : display.none,
          flexDirection: 'column',
          lineHeight: theme.sizing.scale900,
        })}
      >
        <span>{text}</span>
      </Paragraph1>
    </div>
  );
};

const SolutionCards = ({ data, legend = [], $color, $cardsDirection }: any) => {
  const [css, theme] = useStyletron();
  const color = $color || theme.colors.primary700;
  const gridAutoFlow = $cardsDirection || 'row';

  const cardItems = data.map((cardItem: any) => (
    <div>
      <CardItem
        {...cardItem}
        $labelColor={theme.colors.primary500}
        $color={color}
      ></CardItem>
    </div>
  ));

  const legendItems = (
    <div
      className={css({
        display: display.flex,
        justifyContent: 'flex-end',
        marginTop: theme.sizing.scale1000,
      })}
    >
      {legend.map((legendItem: any) => (
        <div
          className={css({
            display: display.flex,
            marginRight: theme.sizing.scale1200,
          })}
        >
          <div
            className={css({
              width: theme.sizing.scale700,
              height: theme.sizing.scale700,
              backgroundColor: legendItem.color,
              marginRight: theme.sizing.scale600,
            })}
          ></div>
          <span className={css({ textTransform: 'uppercase' })}>
            {legendItem.name}
          </span>
        </div>
      ))}
    </div>
  );

  const md = mq.md;
  const lg = mq.lg;
  return (
    <>
      <div className={css({ marginBottom: theme.sizing.scale1600 })}>
        <Grid>
          <GridItemLeft leftCols={[4, 6, 4]} orderLeft={'0'} />
          <GridItemRight rightCols={[4, 6, 8]} orderRight={'1'}>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows:
                  $cardsDirection == 'column' ? '1fr 1fr 1fr' : '',
                gridGap: theme.sizing.scale700,
                marginTop: theme.sizing.scale700,
                [md]: {
                  gridTemplateColumns: '1fr 1fr',
                  gridAutoFlow: gridAutoFlow,
                },
                [lg]: {
                  gridTemplateColumns: '1fr 1fr',
                  gridAutoFlow: gridAutoFlow,
                },
              })}
            >
              {cardItems}
            </div>
            {legendItems}
          </GridItemRight>
        </Grid>
      </div>
    </>
  );
};

export const Challenge = ({
  challengeNum = '1',
  challengeText,
  solution,
  takeaway,
  $color,
  cardsDirection,
  solutionCards = [],
  legend,
}: any) => {
  const [css, theme] = useStyletron();
  const color = $color || theme.colors.primary700;
  return (
    <Section $collapsePaddingBottom={true} $color={color}>
      <Container $color={theme.colors.primary300} $borderBottom={true}>
        <Headline
          title={`Challenge #${challengeNum}`}
          text={challengeText}
        />
        <Headline
          title="solution"
          text={solution}
          $hasBottomMargin={false}
        />
        {!!solutionCards.length && <SolutionCards
          data={solutionCards}
          legend={legend}
          cardsDirection={cardsDirection}
        />}
        {takeaway && <Headline
          title="takeaway"
          text={takeaway}
          $hasBottomMargin={false}
        />}
      </Container>
    </Section>
  );
};
