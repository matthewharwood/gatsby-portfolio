import React from 'react';
import {
  Display2,
  Label2,
  Label1,
  Paragraph4,
  Paragraph1,
} from 'baseui/typography';
import { StyledLink } from 'baseui/link';
import { useStyletron } from 'baseui';
import { Section, Container, Grid } from '../grid-system';

const TopElement = ({ $borderColor, children }: any) => {
  const [css, theme] = useStyletron();
  const c = {
    className: css({
      display: theme.display.grid,
      gridColumn: '1/-1',
      paddingBottom: theme.sizing.scale800,
      borderBottom: `${$borderColor} 1px solid`,
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
      alignContent: 'start',
    }),
  };

  return <div {...c}>{children}</div>;
};

const PostHeader = ({
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
          <>
            {d}
            <br />
          </>
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
            <Label1 color={'inheirt'}>{eyebrow.text}</Label1>
            <Display2 color={'inheirt'}>{main.text}</Display2>
            <Paragraph1 color={'inheirt'}>{sub.text}</Paragraph1>
          </TopElement>
          <Grid>
            {Object.entries(projectOverview).map(([key, { data }]) => {
              return (
                <ListItem>
                  <Label2
                    color={'inheirt'}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {key}
                  </Label2>
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

export { PostHeader };
