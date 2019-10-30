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
import { display } from '../styles';
const TopElement = ({ $borderColor, children }: any) => {
  const [css, theme] = useStyletron();
  const c = {
    className: css({
      display: display.grid,
      gridColumn: '1/-1',
      paddingBottom: theme.sizing.scale800,
      borderBottom: `${$borderColor} 1px solid`,
    }),
  };

  return <div {...c}>{children}</div>;
};

const ListItem = ({children }: any) => {
  const [css] = useStyletron();

  const c = {
    className: css({
      display: display.grid,
      gridColumn: 'span 3',
      alignContent: 'start',
    }),
  };

  return <div {...c}>{children}</div>;
};

const PostHeader = ({
  eyebrow,
  mainText,
  subText,
  projectOverview,
  $backgroundColor,
  $color,
}: any) => {
  const [, theme] = useStyletron();
  const backgroundColor = $backgroundColor || theme.colors.primary700;
  const color = $color || theme.colors.primary100;
  const Layout = (data: any) => {
    if(!data) {
      return data;
    }
    switch (data.type) {
      case 'link':
        return data.items.map((d: any, key: any) => (
          <span key={key}>
            <StyledLink href={d.href}>{d.text}</StyledLink>
            <br />
          </span>
        ));
      case 'list':
        return data.items.map((d: any, key: any) => (
          <span key={key} >
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
            <Label1 color={'inheirt'}>{eyebrow && eyebrow.text}</Label1>
            <Display2 color={'inheirt'}>{mainText && mainText.text}</Display2>
            <Paragraph1 color={'inheirt'}>{subText && subText.text}</Paragraph1>
          </TopElement>
          <Grid>
            {projectOverview && Object.entries(projectOverview).filter(([key]) => (key !== '_type')).map(([key, { data }]: any, k: any) => {
              return (
                <ListItem key={k}>
                  <Label2
                    color={'inherit'}
                    // @ts-ignore
                    style={{ textTransform: 'capitalize' }}
                  >
                    {key}
                  </Label2>
                  <Paragraph4 color={'inherit'}>{Layout(data)}</Paragraph4>
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
