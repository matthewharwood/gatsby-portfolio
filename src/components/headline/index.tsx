import React from 'react';
import {
  Display1,
  Display3,
  Display4,
  Label3,
  Paragraph4,
} from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Section, Container, Grid } from '../grid-system';

const TopElement = ({ $borderColor, children }: any) => {
  const [css, theme] = useStyletron();
  console.log(theme.colors);
  const c = {
    className: css({
      display: theme.display.grid,
      gridColumn: '1/-1',
      paddingBottom: theme.sizing.scale1600,
      borderBottom: `${$borderColor} ${theme.sizing.scale0} solid`,
    }),
  };

  return <div {...c}>{children}</div>;
};

const List = ({ $borderColor, children }: any) => {
  const [css, theme] = useStyletron();

  const c = {
    className: css({
      backgroundColor: 'purple',
      display: theme.display.grid,
      gridColumn: '1/-1',
    }),
  };

  return <div {...c}>{children}</div>;
};
const ListItem = ({ $borderColor, children }: any) => {
  const [css, theme] = useStyletron();

  const c = {
    className: css({
      display: theme.display.grid,
      gridColumn: 'span 3',
      marginBottom: theme.sizing.scale800,
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
          <TopElement $borderColor={color}>
            <Display4 color={'inheirt'}>{eyebrow.text}</Display4>
            <Display1 color={'inheirt'}>{main.text}</Display1>
            <Display3 color={'inheirt'}>{sub.text}</Display3>
          </TopElement>
          <Grid>
            <ListItem>
              <Label3 color={'inheirt'}>Client</Label3>
              <Paragraph4 color={'inheirt'}>Nike Jordan</Paragraph4>
            </ListItem>
            <ListItem>
              <Label3 color={'inheirt'}>Agency</Label3>
              <Paragraph4 color={'inheirt'}>AKQA</Paragraph4>
            </ListItem>
            <ListItem>
              <Label3 color={'inheirt'}>When</Label3>
              <Paragraph4 color={'inheirt'}>
                Feb 2014 - Mar 2014 (8 weeks)
              </Paragraph4>
            </ListItem>
            <ListItem>
              <Label3 color={'inheirt'}>My Role</Label3>
              <Paragraph4 color={'inheirt'}>Developer/Designer</Paragraph4>
            </ListItem>
            <ListItem>
              <Label3 color={'inheirt'}>Collaborators</Label3>
              <Paragraph4 color={'inheirt'}>
                Jimmy Soat (Creative Director) <br />
                Stanley Yeung (Visual Designer)
                <br />
                Jeffrey Qua (Developer)
              </Paragraph4>
            </ListItem>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export { Headline };
