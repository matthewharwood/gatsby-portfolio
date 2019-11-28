import React, { FunctionComponent } from 'react';

import { Section, Container, Grid } from '../block-layout';
import { VideoBackground, autoplayVideoMapper } from './video-background';
import { BlockContainerProps } from '../types';

const BlockContainer: FunctionComponent<BlockContainerProps> = props => {
  const {
    alignContainer,
    anchorName,
    autoplayVideo,
    backgroundColor,
    backgroundFullBleed,
    backgroundImageLarge,
    backgroundImageMedium,
    backgroundImageSmall,
    backgroundOverlay,
    children,
    containerBackgroundColor,
    containerBackgroundTransparent,
    height,
    marginBottom,
    marginTop,
    removePaddingBottom,
    removePaddingSides,
    removePaddingTop,
    textColor,
  } = props;

  const backgroundVideo = autoplayVideo && autoplayVideoMapper(autoplayVideo);

  return (
    <Section
      $anchorName={anchorName}
      $backgroundColor={backgroundVideo ? 'transparent' : backgroundColor}
      $backgroundFullBleed={backgroundFullBleed}
      $backgroundImageLarge={backgroundImageLarge}
      $backgroundImageMedium={backgroundImageMedium}
      $backgroundImageSmall={backgroundImageSmall}
      $backgroundOverlay={backgroundOverlay}
      $height={height}
    >
      <VideoBackground {...backgroundVideo} />
      <Container
        $alignSelf={alignContainer}
        $backgroundColor={containerBackgroundColor}
        $backgroundTransparent={containerBackgroundTransparent}
        $marginBottom={marginBottom}
        $marginTop={marginTop}
        $paddingBottom={removePaddingBottom ? 'none' : 'full'}
        $paddingLeft={removePaddingSides ? 'none' : 'full'}
        $paddingRight={removePaddingSides ? 'none' : 'full'}
        $paddingTop={removePaddingTop ? 'none' : 'full'}
        $textColor={textColor}
      >
        <Grid>{children}</Grid>
      </Container>
    </Section>
  );
};

export { BlockContainer };
