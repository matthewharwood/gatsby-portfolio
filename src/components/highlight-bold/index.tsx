import React from 'react';
import { Section, Container, Grid, GridItemRight, GridItemLeft } from '../grid-system';
import { useStyletron } from 'baseui';
import { Display4, Label1, Paragraph1 } from 'baseui/typography';
import Img from 'gatsby-image';

const HighlightBold = ({
  full=false,
  $backgroundColor,
  $backgroundInner,
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
  const [css, theme] = useStyletron();
  const backgroundColor = $backgroundColor || theme.colors.primary100;
  const backgroundInner = $backgroundInner || theme.colors.primary50;
  const color = $color || theme.colors.primary700;
  const accent = $accentColor || theme.colors.accent;
  const hidden = full ? true : false;
  return (
    <Section
      $backgroundColor={backgroundColor}
      $color={color}
      $collapsePaddingBottom={!!$borderBottom}
    >
      <Container $borderBottom={$borderBottom} $color={color} $backgroundColor={backgroundInner} $paddingBottom={true}>
        <div className={css({
          padding: `${theme.sizing.scale1200} ${theme.sizing.scale800}`,
          [theme.mq.md]: {
            padding: `${theme.sizing.scale1600}`,
          },
          [theme.mq.lg]: {
            padding: 0,
          }
        })}>
          <Grid>
            <GridItemLeft leftCols={full ? 10 : leftCols} orderLeft={orderLeft}>
              <>
                <Label1 color={accent}>{eyebrow}</Label1>
                <Display4 color={'inheirt'}>{title}</Display4>
                <Paragraph1 color={'inheirt'}>{body}</Paragraph1>
              </>
            </GridItemLeft>
            <GridItemRight rightCols={full ? 2 : rightCols} orderRight={orderRight} hidden={hidden}>
              <Img
                style={{ boxShadow: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)' }}
                fluid={src}
              />
            </GridItemRight>
          </Grid>
        </div>
      </Container>
    </Section>
  );
};

export { HighlightBold };
