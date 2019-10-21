import React from 'react';
import { Link } from 'gatsby';

import { useStyletron } from 'baseui';
import { Label1, Display2, Paragraph1 } from 'baseui/typography';
import ArrowRight from 'baseui/icon/arrow-right';

import { Section, Container, Grid } from '../grid-system';
import { mq, display } from '../styles';

const NextGroupElement = ({ children, $backgroundColor }: any) => {
  const [css, theme] = useStyletron();
  const md = mq.md;
  const lg = mq.lg;
  const backgroundColor = $backgroundColor || theme.colors.primary700;

  const c = {
    className: css({
      display: display.flex,
      alignItems: 'center',
      justifyContent: 'space-between',
      gridColumn: '1/-1',
      backgroundColor: backgroundColor,
      padding: theme.sizing.scale600,
      [md]: {
        alignItems: 'start',
        padding: theme.sizing.scale900,
      },
      [lg]: {
        gridColumn: '6/-1',
        borderLeft: '1px solid white',
        paddingLeft: theme.sizing.scale2400,
        paddingTop: theme.sizing.scale1600,
        paddingBottom: theme.sizing.scale1600,
      },
    }),
  };

  return <div {...c}>{children}</div>;
};

const NextProjectText = ({ children }: any) => {
  const [css] = useStyletron();
  return <div className={css({ flexGrow: 1 })}>{children}</div>;
};

const PrevGroupElement = ({ children, $backgroundColor }: any) => {
  return <div> {children}</div>;
};

export const PostPagination = ({
  prevLink,
  nextLink,
  $backgroundColor,
  $color,
}: any) => {
  const [css, theme] = useStyletron();

  let width = 0;
  if (typeof window !== `undefined`) {
    width = window.innerWidth;
  }
  const backgroundColor =
    $backgroundColor || width >= theme.breakpoints.medium
      ? theme.colors.primary700
      : theme.colors.primary50;
  const color = $color || theme.colors.primary100;

  const md = mq.md;
  const lg = mq.lg;

  return (
    <Section $backgroundColor={backgroundColor} $color={color}>
      <Container>
        <Grid>
          <PrevGroupElement>
            <Link
              to={prevLink.link}
              className={css({
                color: theme.colors.mono100,
                textDecoration: 'none',
              })}
            >
              <Display2 color="inherit">{prevLink.title}</Display2>
              <Paragraph1 color="inherit">{prevLink.description}</Paragraph1>
            </Link>
          </PrevGroupElement>
          <NextGroupElement>
            <NextProjectText>
              <Label1
                color={'inherit'}
                className={css({
                  textTransform: 'uppercase',
                  letterSpacing: theme.sizing.scale0,
                  [md]: { marginBottom: theme.sizing.scale600 },
                })}
              >
                Next Project
              </Label1>
              <Link
                to={nextLink.link}
                className={css({
                  color: theme.colors.mono100,
                  textDecoration: 'none',
                })}
              >
                <Display2
                  color={'inherit'}
                  className={css({
                    [md]: {
                      marginTop: theme.sizing.scale600,
                      marginBottom: theme.sizing.scale600,
                    },
                    [lg]: {
                      marginTop: theme.sizing.scale900,
                      marginBottom: theme.sizing.scale600,
                    },
                  })}
                >
                  {nextLink.title}
                </Display2>
                <Paragraph1
                  color={'inherit'}
                  className={css({
                    display: display.none,
                    [md]: { display: display.block },
                    [lg]: { display: display.block },
                  })}
                >
                  {nextLink.description}
                </Paragraph1>
              </Link>
            </NextProjectText>
            <ArrowRight
              size={70}
              className={css({
                flexShrink: 0,
                display: display.block,
                [md]: { display: display.none },
                [lg]: { display: display.none },
              })}
            />
          </NextGroupElement>
        </Grid>
      </Container>
    </Section>
  );
};
