import React from 'react';
import {
  Section,
  Container,
  Grid,
  GridItemLeft,
  GridItemRight,
} from '../grid-system';
import { useStyletron } from 'baseui';
import { Display4, Label1, Paragraph1 } from 'baseui/typography';
import Img from 'gatsby-image';


const Highlight = ({
  $backgroundColor,
  $color,
  $accentColor,
  $borderBottom = false,
  eyebrow = 'eyebrow',
  title = 'title',
  body = 'body',
  leftCols = 4,
  rightCols = 8,
  orderLeft = 0,
  orderRight = 1,
   src = 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
}: any) => {
  const [, theme] = useStyletron();
  const backgroundColor = $backgroundColor || theme.colors.primary100;
  const color = $color || theme.colors.primary700;
  const accent = $accentColor || theme.colors.accent;
  return (
    <Section
      $backgroundColor={backgroundColor}
      $color={color}
      $collapsePaddingBottom={!!$borderBottom}
    >
      <Container $borderBottom={$borderBottom} $color={color}>
        <Grid>
          <GridItemLeft leftCols={leftCols} orderLeft={orderLeft}>
            <>
              <Label1 color={accent}>{eyebrow}</Label1>
              <Display4 color={'inherit'}>{title}</Display4>
              <Paragraph1 color={'inherit'}>{body}</Paragraph1>
            </>
          </GridItemLeft>
          <GridItemRight rightCols={rightCols} orderRight={orderRight}>
            {/*<Img*/}
            {/*  style={{ boxShadow: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)' }}*/}
            {/*  fluid={src}*/}
            {/*/>*/}
          </GridItemRight>
        </Grid>
      </Container>
    </Section>
  );
};

export { Highlight };
