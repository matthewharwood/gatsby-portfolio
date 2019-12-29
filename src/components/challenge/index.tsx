import React, { FunctionComponent } from 'react';
import { Section, Container, Grid } from '../@design-system/block-layout';
import { Block } from 'baseui/block';
import { Headline } from '../headline';

import { useStyletron } from 'baseui';
import { Paragraph1, Label2, Label4 } from 'baseui/typography';
import { mq, display, positions } from '../styles';
import { CardItemProps, ChallengeProps, SolutionCardsProp } from './type';

const CardItem: FunctionComponent<CardItemProps> = ({
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
        // @ts-ignore
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

const SolutionCards: FunctionComponent<SolutionCardsProp> = ({
  data,
  legend = [],
  $color,
  cardsDirection,
}) => {
  const [css, theme] = useStyletron();
  const color = $color || theme.colors.primary700;
  const gridAutoFlow = cardsDirection || 'row';

  const cardItems = data.map((cardItem: CardItemProps, key: number) => (
    <div key={key}>
      <CardItem
        {...cardItem}
        $labelColor={theme.colors.primary500}
        $color={color}
      />
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
      {legend.map((legendItem: any, key: number) => (
        <div
          key={key}
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
          />
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
    <Section $backgroundFullBleed={true}>
      <Container
        $paddingLeft="none"
        $paddingRight="none"
        $paddingTop="none"
        $paddingOuterLeft="none"
        $paddingOuterRight="none"
        $marginTop="none"
      >
        <Grid>
          <Block gridColumn={['span 4', 'span 4', 'span 8', 'span 4']} />
          <Block gridColumn={['span 4', 'span 4', 'span 8', 'span 8']}>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows:
                  cardsDirection == 'column' ? '1fr 1fr 1fr' : '',
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
          </Block>
        </Grid>
      </Container>
    </Section>
  );
};

export const Challenge: FunctionComponent<ChallengeProps> = ({
  challengeNum = '1',
  challengeText,
  solution,
  takeaway,
  $color,
  cardsDirection,
  solutionCards = [],
  legend,
}) => {
  // @ts-ignore
  const color = $color || 'primary700';
  return (
    <Section>
      <Container $textColor={color}>
        <Headline title={`Challenge #${challengeNum}`} text={challengeText} />
        <Headline title="solution" text={solution} $hasBottomMargin={false} />
        {!!solutionCards.length && (
          <SolutionCards
            data={solutionCards}
            legend={legend}
            cardsDirection={cardsDirection}
          />
        )}
        {takeaway && (
          <Headline title="takeaway" text={takeaway} $hasBottomMargin={false} />
        )}
      </Container>
    </Section>
  );
};
