import React from 'react';
import { Display1, Display3, Display4 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Section, Container, Grid } from '../grid-system';

const Element = ({ children }: any) => {
  const [css, theme] = useStyletron();
  console.log(theme.colors);
  const c = {
    className: css({
      display: theme.display.grid,
      gridColumn: '1/-1',
      paddingBottom: theme.sizing.scale1600,
      borderBottom: `${theme.colors.primary100} ${theme.sizing.scale0} solid`,
    }),
  };

  return <div {...c}>{children}</div>;
};

const Headline = ({ eyebrow, main, sub, $backgroundColor, $color }: any) => {
  const [, theme] = useStyletron();
  const backgroundColor = $backgroundColor || theme.colors.primary700;
  const color = $color || theme.colors.primary100;

  return (
    <Section $backgroundColor={backgroundColor} $color={color}>
      <Container>
        <Grid>
          <Element>
            <Display4 color={'inheirt'}>{eyebrow.text}</Display4>
            <Display1 color={'inheirt'}>{main.text}</Display1>
            <Display3 color={'inheirt'}>{sub.text}</Display3>
          </Element>
        </Grid>
      </Container>
    </Section>
  );
};

export { Headline };
