import React from 'react';
import {
  Display1,
  Display3,
  Display4,
  Label3,
  Paragraph4,
} from 'baseui/typography';
import { StyledLink } from 'baseui/link';
import { useStyletron } from 'baseui';
import { Section, Container, Grid } from '../grid-system';
import { spawn } from 'child_process';

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
      alignContent: 'start',
    }),
  };

  return <div {...c}>{children}</div>;
};

const Headline = ({
  eyebrow,
  main,
  sub,
  projectOverview,
  $backgroundColor,
  $color,
}: any) => {
  const [, theme] = useStyletron();
  const backgroundColor = $backgroundColor || theme.colors.primary700;
  const color = $color || theme.colors.primary100;
  const Layout = (data: any) => {
    switch (data.type) {
      case 'link':
        return data.items.map((d: any) => (
          <>
            <StyledLink href={d.href}>{d.text}</StyledLink>
            <br />
          </>
        ));
      case 'list':
        return data.items.map((d: any) => (
          <span>
            {d}
            <br />
          </span>
        ));
      default:
        return data;
    }
  };

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
            {Object.entries(projectOverview).map(([key, { data }]) => {
              return (
                <ListItem>
                  <Label3
                    color={'inheirt'}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {key}
                  </Label3>
                  <Paragraph4 color={'inheirt'}>{Layout(data)}</Paragraph4>
                </ListItem>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export { Headline };
