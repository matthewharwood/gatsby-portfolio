// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { styled, LightThemeMove } from 'baseui';
import { Paragraph1 } from 'baseui/typography';

import { Container, Section, Grid, GridItem } from './block-layout';

const storyModule = storiesOf('System/Block Layout', module);
const { colors } = LightThemeMove;

const imageLarge = {
  title: 'This is a test caption',
  src:
    'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1544128494/assets/67/1acd72-4945-4d85-8d57-f9ff945f58af/original/Global-Rider-Bike-crossing-street.png',
  rtlMirror: true,
};
const imageMedium = {
  title: 'This is a test mobile caption',
  src:
    'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill/v1558484117/assets/8a/fa8125-145d-4b00-b916-0ee7041f826e/original/Freight_2x.jpg',
  rtlMirror: true,
};
const imageSmall = {
  title: 'This is a test mobile caption',
  src:
    'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_north/v1558484293/assets/4e/f3c1d1-0eb6-4d01-9d18-38ab2e43b997/original/Fly_2x.jpg',
  rtlMirror: true,
};

const StyledP1 = styled(Paragraph1, {
  marginBottom: 0,
  marginTop: 0,
});

storyModule.add('with Basic Layout', () => (
  <Section $anchorName="block-layout-basic">
    <Container>
      <Grid>
        <GridItem
          // @ts-ignore
          $$alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Full Bleed', () => (
  <Section $backgroundColor={colors.warning200} $backgroundFullBleed={true}>
    <Container>
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Alignment Options', () => (
  <Section $backgroundColor={colors.warning200}>
    <Container $backgroundColor={colors.warning100} height="600px">
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 2', 'span 4']}
        >
          <StyledP1>
            This should span 4 columns on desktop, 2 columns on tablet, and 100%
            on mobile - Aligned to the top
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="center"
          $gridColumn={['1/-1', '1/-1', 'span 2', 'span 4']}
        >
          <StyledP1>
            This should span 4 columns on desktop, 2 columns on tablet, and 100%
            on mobile - Aligned to the center
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="end"
          $gridColumn={['1/-1', '1/-1', 'span 2', 'span 4']}
        >
          <StyledP1>
            This should span 4 columns on desktop, 2 columns on tablet, and 100%
            on mobile - Aligned to the bottom
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with One Item Centered Horizontally and Vertically', () => (
  <Section $backgroundColor={colors.warning200}>
    <Container $backgroundColor={colors.warning100} height="500px">
      <Grid>
        <GridItem
          $alignSelf="center"
          $gridColumn={['1/-1', '1/-1', '3 / span 4', '4 / span 6']}
        >
          <StyledP1>
            This should span 6 columns centered on desktop, 4 columns centered
            on tablet, and 100% on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('without Container Padding - Bottom', () => (
  <Section $backgroundColor={colors.warning200}>
    <Container $paddingBottom="none">
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('without Container Padding - Top', () => (
  <Section $backgroundColor={colors.warning200}>
    <Container $paddingTop="none">
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('without Container Padding - Sides', () => (
  <Section $backgroundColor={colors.warning200}>
    <Container $paddingLeft="none" $paddingRight="none">
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Container Half Padding - All', () => (
  <Section $backgroundColor={colors.warning200}>
    <Container
      $paddingBottom="half"
      $paddingLeft="half"
      $paddingRight="half"
      $paddingTop="half"
    >
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Background Image', () => (
  <Section
    $backgroundImageSmall={imageSmall}
    $backgroundImageMedium={imageMedium}
    $backgroundImageLarge={imageLarge}
  >
    <Container>
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Background Image & Half Margins', () => (
  <Section
    $backgroundImageSmall={imageSmall}
    $backgroundImageMedium={imageMedium}
    $backgroundImageLarge={imageLarge}
  >
    <Container $marginTop="half" $marginBottom="half">
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Background Image & No Margins', () => (
  <Section
    $backgroundImageSmall={imageSmall}
    $backgroundImageMedium={imageMedium}
    $backgroundImageLarge={imageLarge}
  >
    <Container $marginTop="none" $marginBottom="none">
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Background Image, Full Bleed, & Color Overlay', () => (
  <Section
    $backgroundImageSmall={imageSmall}
    $backgroundImageMedium={imageMedium}
    $backgroundImageLarge={imageLarge}
    $backgroundOverlay={colors.warning300}
    $backgroundFullBleed={true}
  >
    <Container>
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Background Image & Section Height', () => (
  <Section
    $backgroundImageSmall={imageSmall}
    $backgroundImageMedium={imageMedium}
    $backgroundImageLarge={imageLarge}
    $height="600px"
  >
    <Container>
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));

storyModule.add('with Background Image - Desktop Only', () => (
  <Section $backgroundImageLarge={imageLarge}>
    <Container>
      <Grid>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
        >
          <StyledP1>
            This should span 5 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
        <GridItem
          $alignSelf="start"
          $gridColumn={['1/-1', '1/-1', 'span 4', 'span 7']}
        >
          <StyledP1>
            This should span 7 columns on desktop, 4 columns on tablet, and 100%
            on mobile
          </StyledP1>
        </GridItem>
      </Grid>
    </Container>
  </Section>
));
