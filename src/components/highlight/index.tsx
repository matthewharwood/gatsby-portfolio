import React, {FunctionComponent} from 'react';
import {
  Section,
  Container,
  Grid,
  GridItemLeft,
  GridItemRight,
} from '../grid-system';
import { useStyletron } from 'baseui';
import { Display4, Label1, Paragraph1 } from 'baseui/typography';
import { SanityImgFluid } from '../sanity-img-fluid';
/* import Image from 'gatsby-image'; */

import { PropTypes } from './types'


const Highlight:FunctionComponent<PropTypes> = ({
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
  image,
}) => {
  console.log(image);
  const hasImage = Boolean(image && image.asset && image.asset._ref);
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
            {hasImage && <img src={'https://cdn.sanity.io/images/42nykw3g/production/cb360e99f80ff8a5521fa62de2c833b5d1d37258-935x523.png'} alt=""/>}
            {/*<Image*/}
            {/*  style={{ boxShadow: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)' }}*/}
            {/*  // fluid={image.asset.fluid}*/}
            {/*/>*/}
          </GridItemRight>
        </Grid>
      </Container>
    </Section>
  );
};

export { Highlight };
